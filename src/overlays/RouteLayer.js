import * as THREE from 'three';
import { ROUTE_TYPE, ROUTE_STATUS } from '../geo/RoutingService.js';

/**
 * HighWater 3D — Route Visualization Layer (Phase 2)
 * 
 * Renders 3D evacuation routes (Purple: #a855f7) and hospital medical routes (Blue: #3b82f6)
 * draped visibly above the DGM1 bare-earth terrain surface.
 * 
 * Features:
 * 1. Restrained tactical glow / halo readable against complex valley topography.
 * 2. Visual draping at +0.85m above terrain (visibly above road mesh +0.55m to prevent z-fighting)
 *    without modifying underlying physical elevation math.
 * 3. Origin and Destination tactical pulse markers.
 * 4. Distinct blocked-route warning styling (Crimson #ef4444) when routes are severed by floods.
 * 5. Support for secondary alternative routes without visual clutter.
 */
export class RouteLayer {
  /**
   * @param {THREE.Scene} scene
   * @param {import('../terrain/TerrainManager.js').TerrainManager} terrainManager
   */
  constructor(scene, terrainManager) {
    this.scene = scene;
    this.terrainManager = terrainManager;

    this.group = new THREE.Group();
    this.group.name = 'Route_Visualization_Layer';
    this.scene.add(this.group);

    this.disposables = [];
    this.activeRoute = null;
    this.activeAlternative = null;
    this.visible = true;

    // Visual offset above ground terrain (meters)
    this.visualOffsetMeters = 0.85;
  }

  /**
   * Display primary route (and optional alternative route).
   * @param {Object} routeResult - Comprehensive result from RoutingService.findRoute
   * @param {Object} [alternativeResult] - Optional alternative route result
   */
  displayRoute(routeResult, alternativeResult = null) {
    this.clearRoute();
    if (!routeResult) return;

    this.activeRoute = routeResult;
    this.activeAlternative = alternativeResult;

    // 1. Render alternative route first (if present) as subtle background path
    if (alternativeResult && alternativeResult.isReachable && alternativeResult.pathCoordinates?.length > 1) {
      this._renderPath(alternativeResult, true);
    }

    // 2. Render primary route
    if (routeResult.pathCoordinates && routeResult.pathCoordinates.length > 1) {
      this._renderPath(routeResult, false);
    }

    // 3. Render Origin & Destination tactical beacon markers
    this._renderEndpoints(routeResult);
  }

  /**
   * Internal path renderer with tactical glow halo.
   * @private
   */
  _renderPath(route, isAlternative = false) {
    const coords = route.pathCoordinates;
    if (!coords || coords.length < 2) return;

    // Determine colors
    let coreColor = 0xa855f7;  // Shelter Purple
    let glowColor = 0xc084fc;
    if (route.routeType === ROUTE_TYPE.HOSPITAL) {
      coreColor = 0x3b82f6;  // Hospital Blue
      glowColor = 0x60a5fa;
    }

    // Blocked route override
    if (!route.isReachable || route.status === ROUTE_STATUS.BLOCKED) {
      coreColor = 0xef4444; // Blocked Crimson
      glowColor = 0xf87171;
    }

    const points = [];
    for (const pt of coords) {
      const gElev = this.terrainManager?.getElevationAt(pt.x, pt.z) ?? 130.0;
      const y = gElev + this.visualOffsetMeters + (isAlternative ? -0.15 : 0);
      points.push(new THREE.Vector3(pt.x, y, pt.z));
    }

    const geom = new THREE.BufferGeometry().setFromPoints(points);

    // 1. Core Line
    const coreMat = new THREE.LineBasicMaterial({
      color: coreColor,
      linewidth: isAlternative ? 2 : 4,
      transparent: isAlternative,
      opacity: isAlternative ? 0.6 : 1.0,
      depthTest: true,
    });
    const coreLine = new THREE.Line(geom, coreMat);
    coreLine.renderOrder = isAlternative ? 20 : 30;
    this.group.add(coreLine);

    // 2. Halo / Restrained Tactical Glow Line (draped slightly above core line)
    const haloPoints = points.map(p => new THREE.Vector3(p.x, p.y + 0.1, p.z));
    const haloGeom = new THREE.BufferGeometry().setFromPoints(haloPoints);
    const haloMat = new THREE.LineBasicMaterial({
      color: glowColor,
      linewidth: isAlternative ? 4 : 8,
      transparent: true,
      opacity: isAlternative ? 0.25 : 0.55,
      blending: THREE.AdditiveBlending,
      depthTest: true,
    });
    const haloLine = new THREE.Line(haloGeom, haloMat);
    haloLine.renderOrder = isAlternative ? 19 : 29;
    this.group.add(haloLine);

    this.disposables.push(geom, coreMat, haloGeom, haloMat);
  }

  /**
   * Render origin and destination terminal markers.
   * @private
   */
  _renderEndpoints(route) {
    if (!route.origin || !route.destination) return;

    // Origin Marker: Tactical Emerald Green Pulse Ring
    const oElev = this.terrainManager?.getElevationAt(route.origin.x, route.origin.z) ?? 130.0;
    const originGeom = new THREE.RingGeometry(1.5, 4.0, 24);
    originGeom.rotateX(-Math.PI / 2);
    const originMat = new THREE.MeshBasicMaterial({
      color: 0x10b981, // Emerald Green
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide,
    });
    const originMesh = new THREE.Mesh(originGeom, originMat);
    originMesh.position.set(route.origin.x, oElev + 0.45, route.origin.z);
    this.group.add(originMesh);

    // Destination Marker: Destination Color Pulse Ring
    let destColor = route.routeType === ROUTE_TYPE.HOSPITAL ? 0x3b82f6 : 0xa855f7;
    if (!route.isReachable) destColor = 0xef4444;

    const dElev = this.terrainManager?.getElevationAt(route.destination.x, route.destination.z) ?? 130.0;
    const destGeom = new THREE.RingGeometry(2.0, 5.5, 24);
    destGeom.rotateX(-Math.PI / 2);
    const destMat = new THREE.MeshBasicMaterial({
      color: destColor,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide,
    });
    const destMesh = new THREE.Mesh(destGeom, destMat);
    destMesh.position.set(route.destination.x, dElev + 0.45, route.destination.z);
    this.group.add(destMesh);

    this.disposables.push(originGeom, originMat, destGeom, destMat);
  }

  /**
   * Clear all active route visuals.
   */
  clearRoute() {
    this.disposables.forEach((res) => {
      if (res && typeof res.dispose === 'function') res.dispose();
    });
    this.disposables = [];

    while (this.group.children.length > 0) {
      this.group.remove(this.group.children[0]);
    }

    this.activeRoute = null;
    this.activeAlternative = null;
  }

  /**
   * Set route layer visibility.
   * @param {boolean} visible
   */
  setVisible(visible) {
    this.visible = Boolean(visible);
    this.group.visible = this.visible;
    return this.visible;
  }

  /**
   * Clean up all memory resources.
   */
  dispose() {
    this.clearRoute();
    if (this.group.parent) {
      this.group.parent.remove(this.group);
    }
  }
}
