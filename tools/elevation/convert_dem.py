#!/usr/bin/env python3
"""
HighWater 3D — Elevation Ingestion & Mosaicking Pipeline
Converts official Rhineland-Palatinate DGM1 bare-earth LiDAR tiles into
Three.js-compatible height grids for the Dernau, Germany study area.

Official Source: LVermGeo RLP (GeoBasis-DE / GeoShop RLP)
License: dl-de/by-2-0 (Open Data)
Attribution: ©GeoBasis-DE / LVermGeoRP, dl-de/by-2-0, www.lvermgeo.rlp.de [Daten bearbeitet]
"""

import argparse
import glob
import json
import os
import sys

# Study center and dimensions matching src/geo/Projection.js
STUDY_CENTER_GEO = [7.0296335, 50.5213475]
STUDY_CENTER_UTM = [360327.76, 5598453.17]  # Easting, Northing in EPSG:25832 / EPSG:32632
STUDY_EXTENTS_METERS = 2400.0  # 2.4 km East-West x 2.4 km North-South
REQUIRED_BBOX_WGS84 = [7.015036, 50.511616, 7.044231, 50.531079]
TARGET_CRS = "EPSG:32632"


def convert_dem(input_path, output_path, grid_resolution=256):
    try:
        import numpy as np
        import pyproj
        import rasterio
        from rasterio.merge import merge
        from rasterio.warp import Resampling, reproject
    except ImportError as e:
        print(f"Error: Missing required geospatial libraries: {e}")
        print("Please run in the geospatial python environment.")
        sys.exit(1)

    # 1. Collect input tile paths
    if os.path.isdir(input_path):
        tile_files = sorted(glob.glob(os.path.join(input_path, "*.tif")))
        if not tile_files:
            print(f"Error: No .tif files found in directory: {input_path}")
            sys.exit(1)
    elif os.path.isfile(input_path):
        tile_files = [input_path]
    else:
        # Glob pattern?
        tile_files = sorted(glob.glob(input_path))
        if not tile_files:
            print(f"Error: No matching files found for: {input_path}")
            sys.exit(1)

    print(f"[DEM Ingest] Processing {len(tile_files)} tile(s):")
    for f in tile_files:
        print(f"  - {os.path.basename(f)}")

    # 2. Open rasters and perform mosaic if multiple tiles
    opened_datasets = []
    try:
        for f in tile_files:
            src = rasterio.open(f)
            opened_datasets.append(src)

        if len(opened_datasets) > 1:
            print(f"[DEM Ingest] Mosaicking {len(opened_datasets)} tiles in-memory...")
            mosaic_data, mosaic_transform = merge(opened_datasets)
            mosaic_crs = opened_datasets[0].crs
            mosaic_nodata = opened_datasets[0].nodata
            print(f"  Mosaic shape: {mosaic_data.shape[1]} x {mosaic_data.shape[2]} px")
            print(f"  Mosaic CRS: {mosaic_crs}")
        else:
            src = opened_datasets[0]
            mosaic_data = src.read()
            mosaic_transform = src.transform
            mosaic_crs = src.crs
            mosaic_nodata = src.nodata

    finally:
        for ds in opened_datasets:
            ds.close()

    # 3. Calculate target crop bounds centered on Dernau
    half = STUDY_EXTENTS_METERS / 2.0
    dst_min_x = STUDY_CENTER_UTM[0] - half  # 359127.76
    dst_max_x = STUDY_CENTER_UTM[0] + half  # 361527.76
    dst_min_y = STUDY_CENTER_UTM[1] - half  # 5597253.17
    dst_max_y = STUDY_CENTER_UTM[1] + half  # 5599653.17

    print(f"\n[DEM Ingest] Target Study Extents (UTM Zone 32N):")
    print(f"  Easting:  [{dst_min_x:.2f} m, {dst_max_x:.2f} m] (Width: {STUDY_EXTENTS_METERS:.1f} m)")
    print(f"  Northing: [{dst_min_y:.2f} m, {dst_max_y:.2f} m] (Height: {STUDY_EXTENTS_METERS:.1f} m)")
    print(f"  Grid Resolution: {grid_resolution} x {grid_resolution} vertices")
    pixel_step = STUDY_EXTENTS_METERS / (grid_resolution - 1)
    print(f"  Grid Vertex Spacing: {pixel_step:.2f} meters")

    # Define target transform from bounds:
    # Top-left is (dst_min_x, dst_max_y), step_x = +dx, step_y = -dy
    dst_transform = rasterio.transform.from_bounds(
        dst_min_x, dst_min_y, dst_max_x, dst_max_y, grid_resolution, grid_resolution
    )

    dst_grid = np.empty((grid_resolution, grid_resolution), dtype=np.float32)

    # 4. Reproject / Resample into target grid
    reproject(
        source=mosaic_data[0],
        destination=dst_grid,
        src_transform=mosaic_transform,
        src_crs=mosaic_crs,
        dst_transform=dst_transform,
        dst_crs=TARGET_CRS,
        resampling=Resampling.bilinear,
        src_nodata=mosaic_nodata,
        dst_nodata=-9999.0,
    )

    # 5. Validate output grid samples
    valid_mask = (dst_grid != -9999.0) & (~np.isnan(dst_grid))
    valid_count = int(np.sum(valid_mask))
    total_samples = dst_grid.size

    if valid_count != total_samples:
        print(f"  Warning: {total_samples - valid_count} invalid/nodata samples detected.")
        if valid_count == 0:
            print("Error: No valid elevation samples in target study area.")
            sys.exit(1)
        # Interpolate invalid samples with mean
        mean_val = float(np.mean(dst_grid[valid_mask]))
        dst_grid[~valid_mask] = mean_val
    else:
        print(f"  [PASS] 100% of grid samples are valid ({valid_count:,} / {total_samples:,}).")

    min_elev = float(np.min(dst_grid))
    max_elev = float(np.max(dst_grid))
    mean_elev = float(np.mean(dst_grid))
    std_elev = float(np.std(dst_grid))

    print(f"\n[DEM Ingest] Resampled Terrain Elevation Statistics:")
    print(f"  Min Elevation:  {min_elev:.2f} m")
    print(f"  Max Elevation:  {max_elev:.2f} m")
    print(f"  Mean Elevation: {mean_elev:.2f} m")
    print(f"  Std Dev:        {std_elev:.2f} m")
    print(f"  Relief Range:   {max_elev - min_elev:.2f} m")

    # 6. Format JSON payload
    payload = {
        "metadata": {
            "isSynthetic": False,
            "provenance": "Official Rhineland-Palatinate DGM1 Bare-Earth LiDAR Terrain Model",
            "provider": "Landesamt für Vermessung und Geobasisinformation Rheinland-Pfalz (LVermGeo RLP)",
            "product": "DGM1 (Digitales Geländemodell 1m Raster)",
            "surveyYears": "2024 / 2025",
            "license": "dl-de/by-2-0",
            "attribution": "©GeoBasis-DE / LVermGeoRP (2024/2025), dl-de/by-2-0, www.lvermgeo.rlp.de [Daten bearbeitet]",
            "sourceCRS": "EPSG:25832 (ETRS89 / UTM Zone 32N) + DHHN2016 height",
            "targetCRS": TARGET_CRS,
            "verticalDatum": "DHHN2016 (Deutsches Haupthöhennetz 2016 / Normalhöhen)",
            "verticalUnits": "meters",
            "studyArea": "Dernau, Ahr Valley (Germany)",
            "studyBoundsWGS84": REQUIRED_BBOX_WGS84,
            "studyCenterGeo": STUDY_CENTER_GEO,
            "utmOrigin": STUDY_CENTER_UTM,
            "utmExtents": {
                "minEasting": round(dst_min_x, 2),
                "maxEasting": round(dst_max_x, 2),
                "minNorthing": round(dst_min_y, 2),
                "maxNorthing": round(dst_max_y, 2),
                "widthMeters": STUDY_EXTENTS_METERS,
                "lengthMeters": STUDY_EXTENTS_METERS,
            },
            "gridDimensions": [grid_resolution, grid_resolution],
            "vertexSpacingMeters": round(pixel_step, 3),
            "elevationStats": {
                "minMeters": round(min_elev, 2),
                "maxMeters": round(max_elev, 2),
                "meanMeters": round(mean_elev, 2),
                "stdMeters": round(std_elev, 2),
                "reliefMeters": round(max_elev - min_elev, 2),
            },
            "totalSamples": total_samples,
            "sourceTileCount": len(tile_files),
        },
        "elevations": [[round(float(val), 2) for val in row] for row in dst_grid],
    }

    # 7. Write output JSON
    os.makedirs(os.path.dirname(os.path.abspath(output_path)), exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as fp:
        json.dump(payload, fp)

    file_size_kb = os.path.getsize(output_path) / 1024
    print(f"\n[SUCCESS] Exported real DEM height grid to:\n  {output_path} ({file_size_kb:.1f} KB)")
    return payload


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Convert DGM1 GeoTIFF tiles to HighWater 3D Height Grid")
    parser.add_argument(
        "--input",
        "-i",
        default=os.path.join("data", "source", "dem", "dernau"),
        help="Path to input directory of DGM1 tiles or single GeoTIFF",
    )
    parser.add_argument(
        "--output",
        "-o",
        default=os.path.join("public", "data", "dernau", "dem_height_grid.json"),
        help="Path to output JSON grid",
    )
    parser.add_argument(
        "--res",
        "-r",
        type=int,
        default=256,
        help="Grid resolution (e.g. 128 or 256, default 256)",
    )
    args = parser.parse_args()

    convert_dem(args.input, args.output, args.res)
