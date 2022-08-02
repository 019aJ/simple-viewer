export const randomColor = () => {
  const letters = "0123456789ABCDEF"
  let color = "#"
  for (let i = 0; i < 2; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  color += "00"
  for (let i = 0; i < 2; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
export const get1Cube = () => {
  const x = 0
  const y = 0
  const z = 0
  const heightX = 1
  const heightY = 1
  const heightZ = 1

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
    pointX[p1 - 1],
    pointY[p1 - 1],
    pointZ[p1 - 1],
    pointX[p2 - 1],
    pointY[p2 - 1],
    pointZ[p2 - 1],
    pointX[p3 - 1],
    pointY[p3 - 1],
    pointZ[p3 - 1],
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

export const getRandomCube = () => {
  const x: number = generateNum(-50, 50)
  const y: number = generateNum(-50, 50)
  const z: number = generateNum(-50, 50)
  const heightX: number = generateNum(5, 20)
  const heightY: number = generateNum(5, 20)
  const heightZ: number = generateNum(5, 20)

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

export const get3dTriangle = () => {
  const x: number = generateNum(-30, 30)
  const y: number = generateNum(-30, 30)
  const z: number = generateNum(-30, 30)
  const height: number = generateNum(5, 20)
  const l: number = generateNum(5, 15)

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
    x + l,
    x - l * Math.sin(toRadians(30)),
    x - l * Math.sin(toRadians(30)),
    x,
  ]
  const pointY = [
    y,
    y + l * Math.sin(toRadians(60)),
    y - l * Math.sin(toRadians(60)),
    y,
  ]
  const pointZ = [z, z, z, z + height]

  const triangle = (p1: number, p2: number, p3: number) => [
    ...rotate(pointX[p1 - 1], pointY[p1 - 1], pointZ[p1 - 1]),
    ...rotate(pointX[p2 - 1], pointY[p2 - 1], pointZ[p2 - 1]),
    ...rotate(pointX[p3 - 1], pointY[p3 - 1], pointZ[p3 - 1]),
  ]
  const triangle3D = []
  triangle3D.push(...triangle(1, 2, 3))
  triangle3D.push(...triangle(1, 3, 4))
  triangle3D.push(...triangle(1, 2, 4))
  triangle3D.push(...triangle(2, 3, 4))

  return triangle3D
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

  p.y = (y - camY) * Math.cos(thetaX) - (z - camZ) * Math.sin(thetaX)
  p.z = (y - camY) * Math.sin(thetaX) + (z - camZ) * Math.cos(thetaX)

  x = p.x
  z = p.z

  p.x = (x - camX) * Math.cos(thetaY) + (z - camZ) * Math.sin(thetaY)
  p.z = -(x - camX) * Math.sin(thetaY) + (z - camZ) * Math.cos(thetaY)

  y = p.y
  x = p.x

  p.x = (x - camX) * Math.cos(thetaZ) - (y - camY) * Math.sin(thetaZ)
  p.y = (y - camY) * Math.cos(thetaZ) + (x - camX) * Math.sin(thetaZ)
  return p
}

const generateNum = (min: number, max: number) =>
  Math.random() * (max - min) + min
const toRadians = (degrees: number) => degrees * (Math.PI / 180)
