# HighWater 3D — Data Sources, Licensing, and Attribution Register

**Study Area:** Dernau, Rhineland-Palatinate, Germany  
**Geographic Bounds (WGS84):** `[7.015036° E, 50.511616° N]` to `[7.044231° E, 50.531079° N]`  
**UTM Zone 32N Bounds:** Easting $359,264.13\,\text{m}$ to $361,390.97\,\text{m}$ | Northing $5,597,398.78\,\text{m}$ to $5,599,507.77\,\text{m}$  

---

## 1. Digital Elevation Model (DEM)

### 1.1 Provider & Dataset Overview
- **Product:** DGM1 (*Digitales Geländemodell 1m Gitterweite*)
- **Authoritative Provider:** Landesamt für Vermessung und Geobasisinformation Rheinland-Pfalz (LVermGeo RLP), Ferdinand-Sauerbruch-Straße 15, 56073 Koblenz, Germany.
- **Provider Portals:** 
  - Official Open Data Catalog: [GeoShop RLP — DGM1](https://geoshop.rlp.de/opendata-dgm1.html)
  - Direct Live Data Distribution: [GeoBasis-DE RLP](https://geobasis-rlp.de/data/dgm1/current/tif/)
  - GDI-DE Metadata Record: [UUID: ab69aa3d-e786-41f8-95dc-7b34abb06c41](https://registry.gdi-de.org/id/de.rp.vermkv/ab69aa3d-e786-41f8-95dc-7b34abb06c41)
- **Model Classification:** Bare-earth Digital Terrain Model (DTM / *Geländemodell*). Produced via airborne laser scanning (LiDAR), systematically filtered to remove vegetation canopy, trees, buildings, bridges, and anthropogenic infrastructure.

### 1.2 Geodetic & Technical Specifications
- **Horizontal Coordinate Reference System:** `EPSG:25832` (ETRS89 / UTM Zone 32N). Formally equivalent to WGS84 / UTM 32N (`EPSG:32632`) within sub-centimeter agreement across Germany.
- **Vertical Datum & Reference:** `DHHN2016` (*Deutsches Haupthöhennetz 2016*). Heights are physical normal heights (*Normalhöhen*) in meters above sea level referenced to the German Combined Geoid (GCG2016 / quasigeoid).
- **Native Resolution:** $1.0\,\text{m} \times 1.0\,\text{m}$ grid.
- **Vertical Accuracy:** $\sigma_z \approx \pm 0.15\,\text{m}$ to $\pm 0.30\,\text{m}$ in open terrain.
- **Tile Partitioning:** Standardized $1\,\text{km} \times 1\,\text{km}$ UTM grid tiles ($1000 \times 1000$ Float32 pixels per tile).

### 1.3 Survey & Acquisition Dates
The downloaded tile filenames carry survey-year metadata suffixes (`2024` for central and eastern columns 360 and 361, and `2025` for western column 359). 
> **Important Note:** In accordance with official provider documentation, the survey-year suffix represents the published reference release cycle and processing vintage for that tile. Individual LiDAR flight swaths may have been flown during the preceding seasonal flight windows.

### 1.4 Licensing & Attribution
- **License:** Open Data under **Datenlizenz Deutschland – Namensnennung – Version 2.0 (`dl-de/by-2-0`)**.
- **Permitted Uses:** Free of charge for commercial, non-commercial, research, and derivative applications without restriction.
- **Statutory Attribution Statement:**
  ```text
  ©GeoBasis-DE / LVermGeoRP (2024/2025), dl-de/by-2-0, www.lvermgeo.rlp.de [Daten bearbeitet]
  ```

---

## 2. Geographic Vector Overlays

### 2.1 Buildings Footprints (`buildings_exposed.geojson`)
- **Source:** SpaceNet 8 Germany (Dernau AOI) flood dataset / OpenStreetMap contributors.
- **Count:** 759 structures.
- **Attributes:** Extruded 3D geometry with SpaceNet 8 post-disaster flood impact classification (203 structures labelled flood-exposed during July 2021, 556 unaffected).
- **Physical Elevation:** Sits directly on bare-earth DGM1 terrain (flooded buildings average $130.60\,\text{m}$ elevation; unaffected buildings average $141.06\,\text{m}$).

### 2.2 Transportation Network (`roads_status.geojson`)
- **Source:** SpaceNet 8 Road Network Dataset / OpenStreetMap contributors.
- **Count:** 117 road segments (640 line vertices).
- **Attributes:** Accessibility status during the July 2021 disaster (45 flood-cutoff/impassable segments, 72 open segments).
- **Draping:** Aligned $+0.55\,\text{m}$ above DGM1 bare-earth topography.

### 2.3 Critical Facilities (`facilities.geojson`)
- **Source:** Municipal emergency management points of interest (Dernau).
- **Count:** 6 tactical facilities (1 hospital, 4 emergency shelters, 1 logistics depot).

### 2.4 Historical Flood Extent (`flood_extent.geojson`)
- **Source:** Copernicus Emergency Management Service (EMS) / SpaceNet 8 ground-truth annotations of the July 2021 Ahr valley inundation.
- **Count:** 196 reference polygons.
- **Hydrological Verification:** Draped onto real DGM1 bare-earth topography, elevations sample strictly along the Ahr valley channel and floodplain ($121.17\,\text{m}$ downstream to $156.85\,\text{m}$ upstream, mean $130.33\,\text{m}$).
- **Disclaimer:** The historical flood polygon represents surveyed past catastrophic inundation from July 2021, and is explicitly distinct from any live or uncalibrated simulation.
