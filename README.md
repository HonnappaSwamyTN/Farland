# HighWater 3D — Engineering Geographic Viewer & Flood Impact Platform (Dernau)

A high-performance 3D geographic viewer and conceptual flood-inundation platform built with **Vite**, **Vanilla JavaScript**, and **Three.js (WebGL)**, focused on the study area of **Dernau, Ahr Valley, Germany**.

The platform couples verified bare-earth LiDAR elevation data with building, road, facility, and historical catastrophe layers to provide interactive stage-elevation simulation and impact triage.

---

## 1. Project Architecture

```
Farland/
├── package.json               # Manifest, dependencies, and test/build scripts
├── vite.config.js             # Vite build & dev server config
├── index.html                 # Semantic HTML5 shell, telemetry HUD, layer toggles, feature inspector
├── README.md                  # Project documentation & runbook
├── test_projection.mjs        # Coordinate projection validation suite
├── test_overlays.mjs          # Geometric integrity & NaN validation suite
├── test_dem_terrain.mjs       # DEM metadata, elevation samples, and landmark validation suite
├── test_flood_water.mjs       # Milestone 5: Flood water mesh, BFS connectivity & metric mapping
├── test_milestone6.mjs        # Milestone 6: Longitudinal profile & impact bracket classification
├── test_milestone7.mjs        # Milestone 7: Reliability, boundary conditions & non-duplication
├── test_milestone8.mjs        # Milestone 8: Consistency audit, determinism & demo matrix freeze
├── docs/
│   ├── elevation_pipeline.md  # Elevation pipeline & DEM provenance specifications
│   └── data_sources.md        # Comprehensive data sources, licensing, and attribution register
├── data/
│   └── source/
│       └── dem/
│           └── dernau/        # 9 raw official DGM1 GeoTIFF tiles & .tfw world files (16.4 MB)
│               ├── manifest.json
│               └── validation_report.json
├── tools/
│   └── elevation/
│       ├── download_tiles.py  # Download script for the 9 verified DGM1 tiles from LVermGeo RLP
│       ├── validate_dem.py    # Deep geodetic validation script for source GeoTIFF rasters
│       └── convert_dem.py     # In-memory mosaicking, cropping & JSON grid export pipeline
├── public/
│   └── data/
│       └── dernau/            # SpaceNet 8 Dernau GeoJSON datasets & optimized DEM grids
│           ├── dem_height_grid.json     # Active 256x256 real DGM1 elevation grid (507 KB)
│           ├── dem_height_grid_128.json # Benchmark 128x128 grid (128 KB)
│           ├── buildings_exposed.geojson # 759 structures (203 flooded, 556 normal)
│           ├── roads_status.geojson      # 117 road segments (45 cutoff, 72 open)
│           ├── facilities.geojson        # 6 tactical emergency facilities
│           └── flood_extent.geojson      # 196 reference flood polygons (July 2021)
└── src/
    ├── main.js                # App orchestrator & lifecycle bootstrap
    ├── styles/
    │   └── main.css           # Precision dark GIS/telemetry styling & inspector cards
    ├── core/
    │   ├── Viewer.js          # Three.js scene, camera, lights, WebGL renderer, disposal
    │   └── Controls.js        # Geographic OrbitControls with limits, damping, view presets
    ├── geo/
    │   └── Projection.js      # Transverse Mercator forward/inverse for UTM Zone 32N (EPSG:32632)
    ├── terrain/
    │   ├── DemTerrain.js      # Real DGM1 Three.js mesh with bilinear sampling & hypsometric colors
    │   ├── PlaceholderTerrain.js # Synthetic procedural fallback (preserved for resilience)
    │   └── TerrainManager.js  # Terrain mesh lifecycle, wireframe toggles, elevation sampling
    ├── overlays/
    │   ├── BuildingLayer.js   # 3D extruded prisms for 759 buildings with depth-bracket dynamic shading
    │   ├── RoadLayer.js       # Elevation-draped line geometry for 117 roads with passability styling
    │   ├── FacilityLayer.js   # 3D beacon pins for 6 tactical emergency facilities & access halos
    │   ├── FloodExtentLayer.js# Draped historical flood extent (July 2021 SpaceNet 8 reference context)
    │   └── OverlayManager.js  # Layer coordinator, visibility toggles, and hover raycasting
    ├── water/
    │   └── FloodWaterManager.js # Dynamic water mesh, BFS flood-fill, planar/slope profiles, impact triage
    └── ui/
        ├── UIController.js    # Button handlers, simulation controls, preset views, feature inspector
        └── Telemetry.js       # Real-time FPS, coordinate readouts, compass, WebGL diagnostics
```

---

## 2. Elevation & Dataset Provenance

### 2.1 Verified Real DGM1 Elevation Data
- **Official Provider:** Landesamt für Vermessung und Geobasisinformation Rheinland-Pfalz (LVermGeo RLP), Germany.
- **Product:** DGM1 (*Digitales Geländemodell 1m Raster*). Bare-earth digital elevation model derived from airborne LiDAR (*Laserbefliegung*). Anthropogenic surface structures and vegetation cover are filtered out.
- **Source Tiles:** 9 individual $1\,\text{km} \times 1\,\text{km}$ tiles covering Easting $[359000, 362000]\,\text{m}$ and Northing $[5597000, 5600000]\,\text{m}$ in UTM Zone 32N:
  - Column 359 (Survey Year 2025): `dgm1_32_359_5597_1_rp_2025.tif`, `dgm1_32_359_5598_1_rp_2025.tif`, `dgm1_32_359_5599_1_rp_2025.tif`
  - Column 360 (Survey Year 2024): `dgm1_32_360_5597_1_rp_2024.tif`, `dgm1_32_360_5598_1_rp_2024.tif`, `dgm1_32_360_5599_1_rp_2024.tif`
  - Column 361 (Survey Year 2024): `dgm1_32_361_5597_1_rp_2024.tif`, `dgm1_32_361_5598_1_rp_2024.tif`, `dgm1_32_361_5599_1_rp_2024.tif`
- **Horizontal Coordinate Reference System:** `EPSG:25832` (ETRS89 / UTM Zone 32N), mapped into local Three.js coordinates centered on Dernau (`360327.76 m, 5598453.17 m`).
- **Vertical Datum & Reference:** `DHHN2016` (*Deutsches Haupthöhennetz 2016* / Normalhöhen, quasigeoid GCG2016). Physical elevations in meters above sea level without artificial vertical exaggeration.
- **Resolution & Grid:** 256 × 256 regular height grid ($9.41\,\text{m}$ vertex spacing, 65,536 elevation samples, 100% valid, 0 NoData).
- **Elevation Range:** $120.15\,\text{m}$ (Ahr riverbed at downstream exit) to $373.26\,\text{m}$ (northern mountain crest).
- **Attribution & Licensing:** Released under Open Data **Datenlizenz Deutschland – Namensnennung – Version 2.0 (`dl-de/by-2-0`)**:
  ```
  ©GeoBasis-DE / LVermGeoRP (2024/2025), dl-de/by-2-0, www.lvermgeo.rlp.de [Daten bearbeitet]
  ```

### 2.2 Geographic Overlays (SpaceNet 8 / OpenStreetMap)
All geographic layers are calibrated to SpaceNet 8 Dernau annotations:
- **Buildings (`buildings_exposed.geojson`):** 759 features (203 historically flooded in July 2021, 556 unaffected). Extruded to 6.0m 3D prisms sitting on the bare-earth DGM1 surface.
- **Roads (`roads_status.geojson`):** 117 segments (45 historically flooded/cutoff, 72 open). Draped $+0.55\,\text{m}$ above real terrain contours.
- **Emergency Facilities (`facilities.geojson`):** 6 tactical facilities (1 hospital, 4 shelters, 1 logistics depot). Placed at surface $+1.5\,\text{m}$ with glowing halos.
- **Historical Flood Extent (`flood_extent.geojson`):** 196 reference polygons from the catastrophic July 2021 event in the Ahr valley, draped onto the valley floor ($121.17\,\text{m}$ to $156.85\,\text{m}$).

### 2.3 Distinction Between Historical Extent and Simulated Inundation
- **Historical July 2021 Layer:** Static, observed post-event delineation derived from satellite and aerial remote sensing following the July 14–15, 2021 disaster. Serves as ground-truth reference context.
- **Interactive Simulation Layers:** Dynamic, algorithmic evaluations driven by user-selected water stage and profile mode. They do not overwrite historical ground truth and can be compared directly against the historical flood boundary.

---

## 3. Quickstart: Install, Run, Test, and Build

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm (v9.0.0 or higher)

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Starts the local development server at `http://localhost:5173`.

### Automated Test Suite
```bash
npm test
```
Executes all 7 validation test suites:
1. `test_projection.mjs`: Coordinate projection constants, boundary mapping, and local origin.
2. `test_overlays.mjs`: Integrity and zero NaNs across all 4 GeoJSON datasets.
3. `test_dem_terrain.mjs`: DEM metadata, physical elevation range, and landmark sampling.
4. `test_flood_water.mjs`: Water mesh generation, BFS riverbed connectivity, and safe coordinate mapping.
5. `test_milestone6.mjs`: Longitudinal thalweg profile, slope-aware water surface, and depth bracket classification.
6. `test_milestone7.mjs`: Boundary conditions ($120\,\text{m}\text{--}155\,\text{m}$), finite geometry, visibility independence, and reset determinism.
7. `test_milestone8.mjs`: Bit-for-bit determinism, monotonicity, feature partitioning without double-counting, and frozen demo metric validation.

### Production Build
```bash
npm run build
```
Compiles and bundles the application into `dist/` with zero build errors.

### Reproducible DEM Ingestion Pipeline
To regenerate the elevation grid from the raw DGM1 GeoTIFF tiles:
```bash
python tools/elevation/convert_dem.py --input data/source/dem/dernau --output public/data/dernau/dem_height_grid.json --res 256
```

---

## 4. Numerical Consistency Audit & Findings

### 4.1 Why Reported Counts Differ Between Reports & Modes
1. **Planar vs Slope-Aware Profile:**
   - In **Planar Mode**, the water surface is a horizontal plane across the entire $2.4\,\text{km} \times 2.4\,\text{km}$ bounding box. At a downstream stage of $132.0\,\text{m}$, the water surface is $132.0\,\text{m}$ everywhere, inundating only low-elevation downstream terrain ($240$ buildings).
   - In **Slope-Aware Mode**, the river surface follows the natural longitudinal thalweg gradient, dropping $19.59\,\text{m}$ from upstream ($139.74\,\text{m}$) to downstream ($120.15\,\text{m}$). At a downstream stage of $132.0\,\text{m}$, the upstream water surface rises to $\approx 151.6\,\text{m}$, covering both upstream and downstream valley floors ($522$ buildings).
2. **Feature Count vs Geometry Part Count:**
   - `buildings_exposed.geojson` contains exactly **759 GeoJSON Feature records**.
   - However, feature `bld_174` is a **MultiPolygon** consisting of two separate polygon parts. In Three.js, this generates **760 extruded prism meshes**.
   - The analytics engine operates on individual geographic features ($759$), avoiding inflation of impact counts.
3. **Harmonized HUD Consistency:**
   - In Milestone 8, the HUD telemetry counters were unified so that the top-level count strictly equals the sum of its category brackets:
     - $\text{Total Buildings} = \text{Shallow} + \text{Moderate} + \text{Deep}$
     - $\text{Total Roads} = \text{Waterlogged} + \text{Submerged}$
     - $\text{Total Shelters} = \text{Isolated} + \text{Inundated}$
4. **Visual Rendering vs Analytical Independence:**
   - Hiding the water surface mesh (`waterVisible = false`) alters only WebGL rendering. The analytical impact triage runs against the underlying elevation model and produces identical metrics.

---

## 5. Frozen Demonstration Matrix (Demo Freeze)

All values are verified with BFS riverbed flood-fill enabled (`connectedFlood = true`):

### Planar Mode Matrix
| Stage (m MSL) | Inundated Cells | Coverage (%) | Affected Buildings (Shallow / Mod / Deep) | Affected Roads (Waterlogged / Submerged) | Compromised Shelters (Isolated / Inundated) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **124.0 m** (Baseline) | 920 | 1.4% | **18 / 759** (17 / 1 / 0) | **2 / 117** (0 / 2) | **0 / 6** (0 / 0) |
| **130.0 m** (Moderate) | 8,086 | 12.3% | **182 / 759** (20 / 26 / 136) | **43 / 117** (1 / 42) | **0 / 6** (0 / 0) |
| **132.0 m** (Severe) | 10,255 | 15.6% | **240 / 759** (16 / 22 / 202) | **56 / 117** (0 / 56) | **0 / 6** (0 / 0) |
| **138.0 m** (Catastrophic) | 14,233 | 21.7% | **363 / 759** (16 / 36 / 311) | **79 / 117** (0 / 79) | **2 / 6** (1 / 1) |

### Slope-Aware Mode Matrix
| Stage (m MSL) | Inundated Cells | Coverage (%) | Affected Buildings (Shallow / Mod / Deep) | Affected Roads (Waterlogged / Submerged) | Compromised Shelters (Isolated / Inundated) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **124.0 m** (Baseline) | 2,919 | 4.5% | **3 / 759** (1 / 1 / 1) | **3 / 117** (1 / 2) | **0 / 6** (0 / 0) |
| **130.0 m** (Moderate) | 16,244 | 24.8% | **449 / 759** (35 / 67 / 343) | **88 / 117** (0 / 88) | **0 / 6** (0 / 0) |
| **132.0 m** (Severe) | 17,590 | 26.8% | **522 / 759** (13 / 34 / 475) | **92 / 117** (0 / 92) | **0 / 6** (0 / 0) |
| **138.0 m** (Catastrophic) | 20,345 | 31.0% | **697 / 759** (2 / 19 / 676) | **104 / 117** (0 / 104) | **3 / 6** (1 / 2) |

---

## 6. Three-Minute Live Demonstration Script

### Act 1 — Geographic Grounding & Data Provenance (0:00 – 0:45)
1. **Initial State:** Application loads at `124.0 m MSL`, Planar mode. Camera is tilted toward the Dernau valley floor.
2. **Point out Data Provenance:**
   - DGM1 1m airborne LiDAR terrain from LVermGeo Rheinland-Pfalz.
   - Elevation range from $120.15\,\text{m}$ (downstream exit) to $373.26\,\text{m}$ (northern peaks).
   - SpaceNet 8 building footprints (759 structures) sitting directly on bare-earth terrain.
3. **Inspect Ground Truth:** Toggle the *July 2021 Flood Extent* layer (`F` key) to show observed satellite inundation boundaries.

### Act 2 — Interactive Water Stage & Planar Progression (0:45 – 1:30)
1. **Advance Stage to 130.0 m:** Move the slider to `130.0 m`.
   - Inundation expands along the river corridor (8,086 cells, 12.3% coverage).
   - 182 buildings affected (20 shallow, 26 moderate, 136 deep).
   - 43 roads impacted (1 waterlogged, 42 submerged).
2. **Advance Stage to 132.0 m:** Move slider to `132.0 m`.
   - 240 buildings inundated (202 deep). 56 roads submerged.
   - Click a highlighted building to open the Feature Inspector card: observe ground elevation, local flood depth, and classification.

### Act 3 — Slope-Aware Profile Comparison (1:30 – 2:15)
1. **Switch Profile Mode:** Click *Slope-Aware Profile* toggle (`P` key).
2. **Observe Hydraulic Realism:**
   - Explain the $19.59\,\text{m}$ natural thalweg drop between upstream ($139.74\,\text{m}$) and downstream ($120.15\,\text{m}$).
   - Notice that at `132.0 m` downstream stage, the upstream river reaches $\approx 151.6\,\text{m}$.
   - Affected buildings increase from 240 (planar) to **522** (slope-aware), capturing upstream settlements that were previously dry under planar slicing.
   - Roads impacted increase from 56 to **92**.

### Act 4 — Extreme Scenario & Safe Reset (2:15 – 3:00)
1. **Advance to Catastrophic Stage (138.0 m):**
   - 697 buildings impacted (676 deep).
   - 3 tactical emergency facilities compromised (1 isolated, 2 inundated).
   - Click compromised facility pin to show access corridor severance.
2. **Reset:** Click the *Reset* button (`R` key).
   - Water returns immediately to baseline `124.0 m MSL`.
   - Animation halts, camera presets remain functional, and HUD telemetry resets cleanly.

---

## 7. Known Technical Limitations & Honest Disclaimers

> [!WARNING]
> **NOT A CALIBRATED HYDRAULIC / HYDRODYNAMIC FORECAST**
> HighWater 3D implements a geometric and slope-aware stage-elevation model for conceptual demonstration, rapid spatial triage, and visual exploration. It does NOT solve the Saint-Venant shallow water equations, 2D hydrodynamic Navier-Stokes equations, momentum conservation, or roughness coefficients (e.g., Manning's $n$). It is not an official flood warning system.

> [!IMPORTANT]
> **BARE-EARTH GROUND CONTACT VS. INTERIOR INUNDATION**
> Water depth is calculated at the building footprint centroid against the DGM1 bare-earth surface. This establishes ground-contact water depth only. It does not account for architectural thresholds, door heights, basement window locations, sandbag barriers, or interior building waterproofing.

> [!NOTE]
> **ROAD NETWORK TOPOLOGY & EVACUATION ROUTING**
> The SpaceNet 8 road layer in Dernau consists of 117 polyline segments split across **58 disconnected components**. Due to these topological breaks in the source dataset, automated Dijkstra/A* regional evacuation routing cannot be reliably performed. Road triage is restricted to segment-level waterlogging/submersion and 250m facility access corridors.