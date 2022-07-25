export const randomColor = () => {
  const letters = "0123456789ABCDEF"
  let color = "#"
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
export const getRandomCube = () => {
  const x: number = generateNum(-50, 50)
  const y: number = generateNum(-50, 50)
  const z: number = generateNum(-50, 50)
  const heightX: number = generateNum(5, 30)
  const heightY: number = generateNum(5, 30)
  const heightZ: number = generateNum(5, 30)

  const rotateX: number = generateNum(0, 180)
  const rotateY: number = generateNum(0, 180)
  const rotateZ: number = generateNum(0, 180)
  const rotate = (x: number, y: number, z: number) => {
    const ax = toRadians(rotateX)
    const ay = toRadians(rotateY)
    const az = toRadians(rotateZ)
    const rotated = rotateVector({ x, y, z }, ax, ay, az)
    return [rotated.x, rotated.y, rotated.z]
  }
  const pointX = [
    x,
    x + heightX,
    x + heightX,
    x,
    x,
    x + heightX,
    x + heightX,
    x,
  ]
  const pointY = [
    y,
    y,
    y + heightY,
    y + heightY,
    y,
    y,
    y + heightY,
    y + heightY,
  ]
  const pointZ = [
    z,
    z,
    z,
    z,
    z + heightZ,
    z + heightZ,
    z + heightZ,
    z + heightZ,
  ]

  const triangle = (p1: number, p2: number, p3: number) => [
    ...rotate(pointX[p1 - 1], pointY[p1 - 1], pointZ[p1 - 1]),
    ...rotate(pointX[p2 - 1], pointY[p2 - 1], pointZ[p2 - 1]),
    ...rotate(pointX[p3 - 1], pointY[p3 - 1], pointZ[p3 - 1]),
  ]
  const cube = []
  cube.push(...triangle(1, 2, 3))
  cube.push(...triangle(1, 3, 4))
  cube.push(...triangle(1, 2, 6))
  cube.push(...triangle(1, 6, 5))
  cube.push(...triangle(1, 5, 8))
  cube.push(...triangle(1, 8, 4))
  cube.push(...triangle(7, 8, 4))
  cube.push(...triangle(7, 4, 3))
  cube.push(...triangle(7, 5, 8))
  cube.push(...triangle(7, 6, 5))
  cube.push(...triangle(7, 3, 2))
  cube.push(...triangle(7, 2, 6))
  return cube
}

const rotateVector = (
  p: { x: number; y: number; z: number },
  thetaX: number,
  thetaY: number,
  thetaZ: number
) => {
  let { x, y, z } = p

  const camX = 0
  const camY = 0
  const camZ = 0

  // 3D -> 2D transformation matrix calculation with rotation
  // and camera coordinate parameters

  // Rotation um x-Achse
  // p[i][x] = px;
  p.y = (y - camY) * Math.cos(thetaX) - (z - camZ) * Math.sin(thetaX)
  p.z = (y - camY) * Math.sin(thetaX) + (z - camZ) * Math.cos(thetaX)

  x = p.x
  z = p.z
  // Rotation um y-Achse
  p.x = (x - camX) * Math.cos(thetaY) + (z - camZ) * Math.sin(thetaY)
  // p[i][y]= py;
  p.z = -(x - camX) * Math.sin(thetaY) + (z - camZ) * Math.cos(thetaY)

  y = p.y
  x = p.x
  // Rotation um z-Achse
  p.x = (x - camX) * Math.cos(thetaZ) - (y - camY) * Math.sin(thetaZ)
  p.y = (y - camY) * Math.cos(thetaZ) + (x - camX) * Math.sin(thetaZ)
  return p
}

const generateNum = (min: number, max: number) =>
  Math.random() * (max - min) + min
const toRadians = (degrees: number) => degrees * (Math.PI / 180)
