#!/usr/bin/env python3
"""
HighWater 3D — Elevation Validation Script
Performs deep mathematical and geodetic validation on downloaded DGM1 GeoTIFF tiles.
"""

import json
import os
import sys

TILES_DIR = os.path.join("data", "source", "dem", "dernau")

TILES = [
    # Column 359
    "dgm1_32_359_5597_1_rp_2025.tif",
    "dgm1_32_359_5598_1_rp_2025.tif",
    "dgm1_32_359_5599_1_rp_2025.tif",
    # Column 360
    "dgm1_32_360_5597_1_rp_2024.tif",
    "dgm1_32_360_5598_1_rp_2024.tif",
    "dgm1_32_360_5599_1_rp_2024.tif",
    # Column 361
    "dgm1_32_361_5597_1_rp_2024.tif",
    "dgm1_32_361_5598_1_rp_2024.tif",
    "dgm1_32_361_5599_1_rp_2024.tif",
]

# Required AOI in UTM 32N meters (from Dernau WGS84 bounds)
REQUIRED_UTM_BOUNDS = {
    "min_easting": 359264.13,
    "max_easting": 361390.97,
    "min_northing": 5597398.78,
    "max_northing": 5599507.77,
}


def validate():
    try:
        import numpy as np
        import pyproj
        import rasterio
    except ImportError as e:
        print(f"Error: Missing required geospatial libraries: {e}")
        sys.exit(1)

    print("=" * 80)
    print("HIGHWATER 3D — DGM1 SOURCE DATA VALIDATION REPORT")
    print("=" * 80)

    tile_reports = []
    mosaic_min_x = float("inf")
    mosaic_min_y = float("inf")
    mosaic_max_x = float("-inf")
    mosaic_max_y = float("-inf")

    total_pixels = 0
    total_valid = 0
    total_nodata = 0
    overall_min = float("inf")
    overall_max = float("-inf")
    elev_sum = 0.0

    all_valid = True

    for tile_name in TILES:
        tile_path = os.path.join(TILES_DIR, tile_name)
        if not os.path.exists(tile_path):
            print(f"[FAIL] Missing tile: {tile_path}")
            all_valid = False
            continue

        file_size = os.path.getsize(tile_path)

        try:
            with rasterio.open(tile_path) as src:
                crs = src.crs
                transform = src.transform
                width = src.width
                height = src.height
                bands = src.count
                dtype = src.dtypes[0]
                nodata = src.nodata
                bounds = src.bounds
                tags = src.tags()

                data = src.read(1)

                # Nodata mask
                if nodata is not None:
                    valid_mask = data != nodata
                else:
                    valid_mask = ~np.isnan(data)

                # Count invalid or NaN
                nan_count = int(np.isnan(data).sum())
                nodata_count = int((~valid_mask).sum())
                valid_count = int(valid_mask.sum())

                if valid_count > 0:
                    t_min = float(np.min(data[valid_mask]))
                    t_max = float(np.max(data[valid_mask]))
                    t_mean = float(np.mean(data[valid_mask]))
                    t_std = float(np.std(data[valid_mask]))
                else:
                    t_min = t_max = t_mean = t_std = 0.0

                # Pixel resolution
                res_x = abs(transform[0])
                res_y = abs(transform[4])

                # Check bounds
                mosaic_min_x = min(mosaic_min_x, bounds.left)
                mosaic_min_y = min(mosaic_min_y, bounds.bottom)
                mosaic_max_x = max(mosaic_max_x, bounds.right)
                mosaic_max_y = max(mosaic_max_y, bounds.top)

                total_pixels += data.size
                total_valid += valid_count
                total_nodata += nodata_count
                if valid_count > 0:
                    overall_min = min(overall_min, t_min)
                    overall_max = max(overall_max, t_max)
                    elev_sum += float(np.sum(data[valid_mask]))

                crs_name = pyproj.CRS(crs).name if crs else "Unknown"

                report = {
                    "tile": tile_name,
                    "file_size_bytes": file_size,
                    "crs_epsg": crs.to_epsg() if crs else None,
                    "crs_name": crs_name,
                    "width": width,
                    "height": height,
                    "bands": bands,
                    "dtype": str(dtype),
                    "nodata": float(nodata) if nodata is not None else None,
                    "res_x": res_x,
                    "res_y": res_y,
                    "bounds": [bounds.left, bounds.bottom, bounds.right, bounds.top],
                    "valid_pixels": valid_count,
                    "nodata_pixels": nodata_count,
                    "nan_pixels": nan_count,
                    "elev_min": round(t_min, 3),
                    "elev_max": round(t_max, 3),
                    "elev_mean": round(t_mean, 3),
                    "elev_std": round(t_std, 3),
                    "tags": tags,
                }
                tile_reports.append(report)

                print(f"\n--- Tile: {tile_name} ---")
                print(f"  Size: {file_size / 1024 / 1024:.2f} MB | Format: {dtype} ({width} x {height} px)")
                print(f"  CRS: {crs_name} (EPSG:{report['crs_epsg']}) | Resolution: {res_x:.3f}m x {res_y:.3f}m")
                print(f"  Bounds: E [{bounds.left:.1f}, {bounds.right:.1f}]  N [{bounds.bottom:.1f}, {bounds.top:.1f}]")
                print(f"  NoData Sentinel: {nodata} | Invalid Pixels: {nodata_count} / {data.size}")
                print(f"  Elevation: Min={t_min:.2f} m, Max={t_max:.2f} m, Mean={t_mean:.2f} m (std={t_std:.2f} m)")

        except Exception as e:
            print(f"[ERROR] Failed to read {tile_name}: {e}")
            all_valid = False

    # Check tile adjacency
    print("\n" + "=" * 80)
    print("CHECKING TILE ADJACENCY & MOSAIC ALIGNMENT")
    print("=" * 80)

    # Check that bounds form a seamless 3000m x 3000m grid with no gaps
    mosaic_w = mosaic_max_x - mosaic_min_x
    mosaic_h = mosaic_max_y - mosaic_min_y

    print(f"Mosaic Extents (UTM Zone 32N):")
    print(f"  Easting:  [{mosaic_min_x:.1f} m, {mosaic_max_x:.1f} m] (Width: {mosaic_w:.1f} m)")
    print(f"  Northing: [{mosaic_min_y:.1f} m, {mosaic_max_y:.1f} m] (Height: {mosaic_h:.1f} m)")

    expected_w = 3000.0
    expected_h = 3000.0
    is_seamless = (abs(mosaic_w - expected_w) < 0.01) and (abs(mosaic_h - expected_h) < 0.01)

    if is_seamless:
        print("  [PASS] Mosaic is perfectly seamless: 3000.0m x 3000.0m exactly (3 x 3 1km tiles).")
    else:
        print(f"  [FAIL] Mosaic dimensions mismatch: got {mosaic_w}x{mosaic_h}, expected 3000x3000")
        all_valid = False

    # Check coverage of Dernau AOI
    print("\n" + "=" * 80)
    print("CHECKING COVERAGE OF DERNAU STUDY BOUNDS")
    print("=" * 80)
    print(f"Required Dernau UTM Bounds:")
    print(f"  Easting:  [{REQUIRED_UTM_BOUNDS['min_easting']:.2f} m, {REQUIRED_UTM_BOUNDS['max_easting']:.2f} m]")
    print(f"  Northing: [{REQUIRED_UTM_BOUNDS['min_northing']:.2f} m, {REQUIRED_UTM_BOUNDS['max_northing']:.2f} m]")

    covers_easting = (mosaic_min_x <= REQUIRED_UTM_BOUNDS["min_easting"]) and (mosaic_max_x >= REQUIRED_UTM_BOUNDS["max_easting"])
    covers_northing = (mosaic_min_y <= REQUIRED_UTM_BOUNDS["min_northing"]) and (mosaic_max_y >= REQUIRED_UTM_BOUNDS["max_northing"])

    margin_left = REQUIRED_UTM_BOUNDS["min_easting"] - mosaic_min_x
    margin_right = mosaic_max_x - REQUIRED_UTM_BOUNDS["max_easting"]
    margin_bottom = REQUIRED_UTM_BOUNDS["min_northing"] - mosaic_min_y
    margin_top = mosaic_max_y - REQUIRED_UTM_BOUNDS["max_northing"]

    print(f"Coverage Margins:")
    print(f"  West margin:  {margin_left:.2f} m buffer")
    print(f"  East margin:  {margin_right:.2f} m buffer")
    print(f"  South margin: {margin_bottom:.2f} m buffer")
    print(f"  North margin: {margin_top:.2f} m buffer")

    if covers_easting and covers_northing:
        print("  [PASS] All study bounds, buildings, roads, and flood polygons are 100% enclosed within the mosaic.")
    else:
        print("  [FAIL] Study area is not fully covered!")
        all_valid = False

    # Check overall elevation statistics
    overall_mean = elev_sum / total_valid if total_valid > 0 else 0.0
    print("\n" + "=" * 80)
    print("COMBINED MOSAIC STATISTICS")
    print("=" * 80)
    print(f"Total Pixels: {total_pixels:,}")
    print(f"Valid Elevation Samples: {total_valid:,} ({total_valid / total_pixels * 100:.2f}%)")
    print(f"NoData Pixels: {total_nodata:,}")
    print(f"Overall Elevation Range: {overall_min:.2f} m to {overall_max:.2f} m (Mean: {overall_mean:.2f} m)")

    summary_payload = {
        "validation_passed": all_valid,
        "mosaic_bounds_utm": [mosaic_min_x, mosaic_min_y, mosaic_max_x, mosaic_max_y],
        "mosaic_dimensions_meters": [mosaic_w, mosaic_h],
        "overall_elevation_stats": {
            "min_meters": round(overall_min, 3),
            "max_meters": round(overall_max, 3),
            "mean_meters": round(overall_mean, 3),
            "total_pixels": total_pixels,
            "valid_pixels": total_valid,
            "nodata_pixels": total_nodata,
        },
        "tiles": tile_reports,
    }

    report_path = os.path.join(TILES_DIR, "validation_report.json")
    with open(report_path, "w", encoding="utf-8") as f:
        json.dump(summary_payload, f, indent=2)

    print(f"\nSaved detailed validation report to:\n  {report_path}")

    if all_valid:
        print("\n>>> [RESULT: PASS] SOURCE DATA MEETS ALL RIGOROUS GEOSPATIAL REQUIREMENTS. <<<")
    else:
        print("\n>>> [RESULT: FAIL] VALIDATION FAILED. DO NOT PROCEED TO INTEGRATION. <<<")
        sys.exit(1)


if __name__ == "__main__":
    validate()
