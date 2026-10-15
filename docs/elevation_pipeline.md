# HighWater 3D — Elevation Pipeline & Provenance Specification

## 1. Study Bounds & Coordinate Reference System

- **Study Location:** Dernau, Ahr Valley (Rhineland-Palatinate, Germany)
- **Geographic Bounding Box (WGS84 / EPSG:4326):**
  - Minimum Longitude: `7.015036° E`
  - Minimum Latitude: `50.511616° N`
  - Maximum Longitude: `7.044231° E`
  - Maximum Latitude: `50.531079° N`
- **Target Projected CRS:** `EPSG:32632` (UTM Zone 32N)
  - Unit: Meters ($1.0\,\text{unit} = 1.0\,\text{meter}$)
  - Study Area Origin (UTM 32N): `X = 360,327.76 m`, `Y = 5,598,453.17 m`
  - Grid Dimension: $2,400\,\text{m} \times 2,400\,\text{m}$

---

## 2. Status of Real Elevation Data (Milestone 2 Inspection)

During Phase A of Milestone 2, a comprehensive search of the local file system and reference repositories was performed:
1. The reference repository at `D:\3rd sem\Farlands\highwater` contains SpaceNet 8 vector annotations (`buildings_exposed.geojson`, `roads_status.geojson`, `flood_extent.geojson`) but **no DEM elevation raster covering Dernau**.
2. A single fixture file `modules/rescue_routing/fixture_demo/dem.tif` (40 KB) was inspected. Its geodetic bounds are `BoundingBox(left=-1.002, bottom=41.0, right=-0.988, top=41.01)` in Spain, with an elevation range of $105\,\text{m} - 110\,\text{m}$.
3. **Strict Compliance Decision:** In accordance with prompt rules, external downloads without explicit approval were prohibited and silently substituting the unrelated Spanish DEM was strictly avoided.
4. **Current Status:** Real terrain integration is halted pending provision of an authorized Dernau DEM raster (such as Copernicus DEM 30m, EU-DEM, or DGM1 Rheinland-Pfalz). The application maintains its clearly labelled **Synthetic Procedural Placeholder Fallback** (`PlaceholderTerrain.js`).

---

## 3. Reproducible Ingestion Pipeline

When an authorized GeoTIFF DEM raster is provided, it can be ingested into the application using the CLI tool:

```bash
python tools/elevation/convert_dem.py --input <path_to_dem.tif> --output public/data/dernau/dem_height_grid.json --res 128
```

### Pipeline Steps:
1. **Validation:** Checks that the raster completely encloses `[7.015036, 50.511616, 7.044231, 50.531079]`.
2. **Reprojection:** Bilinearly reprojects elevation samples from the source CRS into `EPSG:32632` (UTM Zone 32N).
3. **Vertical Datum Preservation:** Preserves source elevation values in meters above sea level without distortion or artificial vertical exaggeration.
4. **NoData Handling:** Interpolates boundary nodata cells using valid neighborhood averages.
5. **Output Schema:** Emits a compact JSON height grid along with complete provenance metadata (source file, source CRS, target CRS, resolution, min/max/mean elevation).
