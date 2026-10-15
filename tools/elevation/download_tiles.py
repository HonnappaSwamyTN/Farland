#!/usr/bin/env python3
"""
HighWater 3D — Official DGM1 Tile Downloader
Downloads the 9 verified Rhineland-Palatinate DGM1 bare-earth LiDAR tiles for Dernau, Germany.

Official Source: https://geobasis-rlp.de/data/dgm1/current/tif/
License: dl-de/by-2-0 (Open Data)
Attribution: ©GeoBasis-DE / LVermGeoRP, dl-de/by-2-0, www.lvermgeo.rlp.de [Daten bearbeitet]
"""

import hashlib
import json
import os
import sys
import time
import urllib.request

BASE_URL = "https://geobasis-rlp.de/data/dgm1/current/tif/"

# The 9 verified tiles covering Dernau AOI
TILES = [
    # Column 359 (Western perimeter, Survey Year 2025)
    "dgm1_32_359_5597_1_rp_2025.tif",
    "dgm1_32_359_5598_1_rp_2025.tif",
    "dgm1_32_359_5599_1_rp_2025.tif",
    # Column 360 (Center / Core Dernau, Survey Year 2024)
    "dgm1_32_360_5597_1_rp_2024.tif",
    "dgm1_32_360_5598_1_rp_2024.tif",
    "dgm1_32_360_5599_1_rp_2024.tif",
    # Column 361 (Eastern perimeter, Survey Year 2024)
    "dgm1_32_361_5597_1_rp_2024.tif",
    "dgm1_32_361_5598_1_rp_2024.tif",
    "dgm1_32_361_5599_1_rp_2024.tif",
]

DEFAULT_OUTPUT_DIR = os.path.join("data", "source", "dem", "dernau")


def download_file(url, dest_path, retries=3):
    temp_path = dest_path + ".part"
    for attempt in range(1, retries + 1):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "HighWater3D-DEM-Ingest/1.0"})
            with urllib.request.urlopen(req, timeout=30) as resp:
                expected_size = resp.headers.get("Content-Length")
                expected_size = int(expected_size) if expected_size else None
                etag = resp.headers.get("ETag", "").strip('"')

                with open(temp_path, "wb") as f_out:
                    downloaded = 0
                    while True:
                        chunk = resp.read(65536)
                        if not chunk:
                            break
                        f_out.write(chunk)
                        downloaded += len(chunk)

                if expected_size and downloaded != expected_size:
                    raise IOError(f"Incomplete download: got {downloaded} bytes, expected {expected_size}")

                if os.path.exists(dest_path):
                    os.remove(dest_path)
                os.rename(temp_path, dest_path)

                # Compute sha256
                sha256 = hashlib.sha256()
                with open(dest_path, "rb") as f_in:
                    while True:
                        buf = f_in.read(65536)
                        if not buf:
                            break
                        sha256.update(buf)

                return {
                    "file": os.path.basename(dest_path),
                    "size_bytes": downloaded,
                    "etag": etag,
                    "sha256": sha256.hexdigest(),
                    "status": "success",
                }
        except Exception as e:
            if os.path.exists(temp_path):
                try:
                    os.remove(temp_path)
                except OSError:
                    pass
            print(f"  Attempt {attempt} failed for {os.path.basename(dest_path)}: {e}")
            if attempt < retries:
                time.sleep(2)
            else:
                return {
                    "file": os.path.basename(dest_path),
                    "error": str(e),
                    "status": "failed",
                }


def main():
    dest_dir = os.path.abspath(DEFAULT_OUTPUT_DIR)
    os.makedirs(dest_dir, exist_ok=True)
    print(f"[DEM Download] Downloading 9 DGM1 GeoTIFF tiles & tfw files to:\n  {dest_dir}\n")

    manifest = {
        "source": BASE_URL,
        "license": "dl-de/by-2-0",
        "attribution": "©GeoBasis-DE / LVermGeoRP, dl-de/by-2-0, www.lvermgeo.rlp.de [Daten bearbeitet]",
        "download_timestamp": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "tiles": [],
        "tfw_files": [],
    }

    all_ok = True

    # 1. Download GeoTIFFs
    for tile_name in TILES:
        url = BASE_URL + tile_name
        dest_path = os.path.join(dest_dir, tile_name)
        print(f"Downloading tile: {tile_name} ...", end=" ", flush=True)
        res = download_file(url, dest_path)
        if res["status"] == "success":
            print(f"OK ({res['size_bytes'] / 1024 / 1024:.2f} MB, sha256: {res['sha256'][:12]}...)")
            manifest["tiles"].append(res)
        else:
            print(f"FAILED: {res.get('error')}")
            manifest["tiles"].append(res)
            all_ok = False

    # 2. Download accompanying world files (.tfw)
    for tile_name in TILES:
        tfw_name = tile_name[:-4] + ".tfw"
        url = BASE_URL + tfw_name
        dest_path = os.path.join(dest_dir, tfw_name)
        print(f"Downloading tfw: {tfw_name} ...", end=" ", flush=True)
        res = download_file(url, dest_path)
        if res["status"] == "success":
            print(f"OK ({res['size_bytes']} bytes)")
            manifest["tfw_files"].append(res)
        else:
            print(f"FAILED: {res.get('error')}")
            manifest["tfw_files"].append(res)
            all_ok = False

    manifest_path = os.path.join(dest_dir, "manifest.json")
    with open(manifest_path, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2)

    print(f"\nSaved download manifest to: {manifest_path}")

    if not all_ok:
        print("[ERROR] One or more files failed to download.")
        sys.exit(1)
    else:
        total_size = sum(t["size_bytes"] for t in manifest["tiles"])
        print(f"[SUCCESS] All 9 tiles and 9 tfw files successfully downloaded ({total_size / 1024 / 1024:.2f} MB total).")


if __name__ == "__main__":
    main()
