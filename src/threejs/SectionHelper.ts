import * as THREE from "three"
const tolerance = 1e-6

export const createSection = (geometries: number[][], plane: THREE.Plane) => {
  return geometries
    .map((geometry) => planeIntersection(geometry, plane))
    .filter((intersection) => intersection)
}

type PointWithFace = {
  x: number
  y: number
  z: number
  faceIndex: number
  checked?: boolean
}

const planeIntersection = (geometry: number[], plane: THREE.Plane) => {
  const lineCountersGroup: number[][] = []
  const a = new THREE.Vector3(),
    b = new THREE.Vector3(),
    c = new THREE.Vector3()
  const verticesOfIntersection: PointWithFace[] = []
  const pos = geometry
  let idx = 0

  const setPointOfIntersection = (function () {
    let line = new THREE.Line3()
    let v = new THREE.Vector3()
    return function setPointOfIntersection(
      p1: number,
      p2: number,
      plane: THREE.Plane,
      faceIdx: number
    ) {
      line.start = p1
      line.end = p2
      const p = plane.intersectLine(line, v)
      if (p) {
        verticesOfIntersection.push({
          x: p.x,
          y: p.y,
          z: p.z,
          faceIndex: faceIdx,
        })
      }
    }
  })()

  for (let i = 0; i < pos.length; i += 9) {
    a.set(pos[i], pos[i + 1], pos[i + 2])
    b.set(pos[i + 3], pos[i + 4], pos[i + 5])
    c.set(pos[i + 6], pos[i + 7], pos[i + 8])

    setPointOfIntersection(a, b, plane, idx)
    setPointOfIntersection(b, c, plane, idx)
    setPointOfIntersection(c, a, plane, idx)
    idx++
  }
  if (verticesOfIntersection.length > 0) {
    const contours: THREE.Vector3[][] = []

    try {
      getContours(verticesOfIntersection, contours, 0)
    } catch (e) {
      console.error("PlaneIntersection - ошибка в сопоставлении точек")
      console.error(e)
    }
    for (let i = 0; i < contours.length; i++) {
      const cntr = contours[i]
      const cntrGeom: number[] = []
      for (let j = 0; j < cntr.length; j++) {
        const v = cntr[j]
        cntrGeom.push(v.x, v.y, v.z)
      }
      if (cntr.length) {
        const v = cntr[0]
        cntrGeom.push(v.x, v.y, v.z)
      }
      lineCountersGroup.push(cntrGeom)
    }
  }

  function getContours(
    points: PointWithFace[],
    contours: THREE.Vector3[][],
    allCheck: number
  ): number {
    const contour: THREE.Vector3[] = []
    let firstPoint, secondPoint
    for (let i = 0; i < points.length; i++) {
      if (points[i].checked) continue
      firstPoint = points[i]
      firstPoint.checked = true
      secondPoint = points[getPairIndex(firstPoint, i, points)]
      secondPoint.checked = true
      contour.push(firstPoint)
      contour.push(secondPoint)
      allCheck += 2
      break
    }
    if (secondPoint) {
      allCheck += collectContour(secondPoint, points, contour)
    }
    contours.push(contour)
    if (allCheck != points.length) {
      return getContours(points, contours, allCheck)
    }
    return allCheck
  }

  function collectContour(
    currentPoint: PointWithFace,
    points: PointWithFace[],
    contour: THREE.Vector3[]
  ): number {
    const p1Index = getNearestPointIndex(currentPoint, points)
    if (p1Index == -1) {
      return 0
    }
    const p1 = points[p1Index]
    p1.checked = true
    const p2Index = getPairIndex(p1, p1Index, points)
    const p2 = points[p2Index]
    p2.checked = true
    if (p2 != contour[0]) {
      contour.push(p2)
      return 2 + collectContour(p2, points, contour)
    } else {
      contour.push(contour[0])
      return 2
    }
  }

  function getNearestPointIndex(point: PointWithFace, points: PointWithFace[]) {
    for (let i = 0; i < points.length; i++) {
      const p = points[i]
      if (!p.checked && equalsVec(p, point, tolerance)) {
        return i
      }
    }
    return -1
  }

  function getPairIndex(
    point: PointWithFace,
    pointIndex: number,
    points: PointWithFace[]
  ) {
    for (let i = 0; i < points.length; i++) {
      const p = points[i]
      if (i != pointIndex && !p.checked && p.faceIndex == point.faceIndex) {
        return i
      }
    }
    return -1
  }

  function equalsVec(v1: THREE.Vector3, v2: THREE.Vector3, tolerance: number) {
    return (
      Math.abs(v1.x - v2.x) < tolerance &&
      Math.abs(v1.y - v2.y) < tolerance &&
      Math.abs(v1.z - v2.z) < tolerance
    )
  }
  return lineCountersGroup
}
