import "@testing-library/jest-dom"
import { createSection } from "./SectionHelper"
import * as THREE from "three"
import { get1Cube } from "../modelstubs/FigureGenerator"

it("sections calc test", async () => {
  const plane = new THREE.Plane()
  plane.constant = -0.5
  plane.normal = new THREE.Vector3(0, 0, 1)
  const line: number[][][] = createSection(
    [[0, 0, 0, 0, 0, 1, 0, 1, 1], [1, 0, 1, 0, 0, 1, 1, 0, 0], get1Cube()],
    plane
  )
  expect(line[0][0]).toStrictEqual([0, 0, 0.5, 0, 0.5, 0.5, 0, 0, 0.5])
  expect(line[1][0]).toStrictEqual([0.5, 0, 0.5, 1, 0, 0.5, 0.5, 0, 0.5])
  expect(line[2][0]).toStrictEqual([
    1, 0, 0.5, 0.5, 0, 0.5, 0, 0, 0.5, 0, 0.5, 0.5, 0, 1, 0.5, 0.5, 1, 0.5, 1,
    1, 0.5, 1, 0.5, 0.5, 1, 0, 0.5, 1, 0, 0.5,
  ])
})

it("no sections calc test", async () => {
  const plane = new THREE.Plane()
  plane.constant = 0.5
  plane.normal = new THREE.Vector3(0, 0, 1)
  const lines: number[][][] = createSection(
    [[0, 0, 0, 0, 0, 1, 0, 1, 1]],
    plane
  )

  expect(lines).toStrictEqual([[]])
})
