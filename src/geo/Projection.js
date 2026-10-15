/**
 * HighWater 3D — Geographic Projection Utilities
 * 
 * Implements rigorous Transverse Mercator projection for UTM Zone 32N (EPSG:32632)
 * based on the WGS84 ellipsoid.
 * 
 * Study Center: Dernau, Germany (approx. 7.029634°E, 50.521348°N)
 * UTM Zone 32N Center Origin: (360,327.76 m Easting, 5,598,453.17 m Northing)
 * 
 * Local Three.js Coordinate Conventions:
 *   +X: East (meters)
 *   +Y: Elevation (meters above datum)
 *   -Z: North (meters)
 *   +Z: South (meters)
 */

// WGS84 Ellipsoidal Constants
const WGS84_A = 6378137.0; // semi-major axis (meters)
const WGS84_F = 1 / 298.257223563; // flattening
const WGS84_E2 = 2 * WGS84_F - WGS84_F * WGS84_F; // first eccentricity squared
const WGS84_E_PRIME2 = WGS84_E2 / (1 - WGS84_E2); // second eccentricity squared
const UTM_K0 = 0.9996; // central scale factor

// UTM Zone 32 Central Meridian (9° East)
const UTM_LON0_RAD = (9.0 * Math.PI) / 180.0;

// Local Study Area Reference Origin (UTM 32N metric coordinates)
export const STUDY_CENTER_GEO = {
  lon: 7.0296335,
  lat: 50.5213475,
};

export const STUDY_CENTER_UTM = {
  x: 360327.76,
  y: 5598453.17,
};

export const STUDY_BOUNDS_GEO = {
  minLon: 7.015036,
  minLat: 50.511616,
  maxLon: 7.044231,
  maxLat: 50.531079,
};

/**
 * Project WGS84 Geodetic coordinates (lon, lat in degrees) to UTM Zone 32N (EPSG:32632 in meters).
 * @param {number} lon - Longitude in degrees
 * @param {number} lat - Latitude in degrees
 * @returns {{ x: number, y: number }} UTM 32N Easting and Northing in meters
 */
export function wgs84ToUtm32(lon, lat) {
  const latRad = (lat * Math.PI) / 180.0;
  const lonRad = (lon * Math.PI) / 180.0;
  const dLon = lonRad - UTM_LON0_RAD;

  const sinLat = Math.sin(latRad);
  const cosLat = Math.cos(latRad);
  const tanLat = Math.tan(latRad);

  const N = WGS84_A / Math.sqrt(1.0 - WGS84_E2 * sinLat * sinLat);
  const T = tanLat * tanLat;
  const C = WGS84_E_PRIME2 * cosLat * cosLat;
  const A = cosLat * dLon;

  // Meridional distance calculation
  const M =
    WGS84_A *
    ((1.0 - WGS84_E2 / 4.0 - (3.0 * WGS84_E2 * WGS84_E2) / 64.0 - (5.0 * Math.pow(WGS84_E2, 3)) / 256.0) * latRad -
      ((3.0 * WGS84_E2) / 8.0 + (3.0 * WGS84_E2 * WGS84_E2) / 32.0 + (45.0 * Math.pow(WGS84_E2, 3)) / 1024.0) *
        Math.sin(2.0 * latRad) +
      ((15.0 * WGS84_E2 * WGS84_E2) / 256.0 + (45.0 * Math.pow(WGS84_E2, 3)) / 1024.0) * Math.sin(4.0 * latRad) -
      ((35.0 * Math.pow(WGS84_E2, 3)) / 3072.0) * Math.sin(6.0 * latRad));

  const utmX =
    500000.0 +
    UTM_K0 *
      N *
      (A +
        ((1.0 - T + C) * Math.pow(A, 3)) / 6.0 +
        ((5.0 - 18.0 * T + T * T + 72.0 * C - 58.0 * WGS84_E_PRIME2) * Math.pow(A, 5)) / 120.0);

  const utmY =
    UTM_K0 *
    (M +
      N *
        tanLat *
        ((A * A) / 2.0 +
          ((5.0 - T + 9.0 * C + 4.0 * C * C) * Math.pow(A, 4)) / 24.0 +
          ((61.0 - 58.0 * T + T * T + 600.0 * C - 330.0 * WGS84_E_PRIME2) * Math.pow(A, 6)) / 720.0));

  return { x: utmX, y: utmY };
}

/**
 * Transform WGS84 coordinates to local Three.js metric coordinates.
 * Local origin is centered at Dernau AOI center.
 * @param {number} lon
 * @param {number} lat
 * @returns {{ x: number, z: number }}
 */
export function geoToLocal(lon, lat) {
  const utm = wgs84ToUtm32(lon, lat);
  return {
    x: utm.x - STUDY_CENTER_UTM.x, // +X = East
    z: -(utm.y - STUDY_CENTER_UTM.y), // -Z = North (+Z = South)
  };
}

/**
 * Convert local Three.js coordinates back to WGS84 (lon, lat in degrees)
 * using inverse meridian & scale approximation for HUD and telemetry.
 * @param {number} localX
 * @param {number} localZ
 * @returns {{ lon: number, lat: number }}
 */
export function localToGeo(localX, localZ) {
  const utmX = localX + STUDY_CENTER_UTM.x;
  const utmY = -localZ + STUDY_CENTER_UTM.y;

  // Approximate inverse for HUD display
  const latMetersPerDeg = 111132.92;
  const lonMetersPerDeg = 111412.84 * Math.cos((STUDY_CENTER_GEO.lat * Math.PI) / 180.0);

  const dLat = (utmY - STUDY_CENTER_UTM.y) / latMetersPerDeg;
  const dLon = (utmX - STUDY_CENTER_UTM.x) / lonMetersPerDeg;

  return {
    lon: STUDY_CENTER_GEO.lon + dLon,
    lat: STUDY_CENTER_GEO.lat + dLat,
  };
}
