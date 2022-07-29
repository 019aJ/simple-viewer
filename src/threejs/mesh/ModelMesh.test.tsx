import ReactThreeTestRenderer from "@react-three/test-renderer"
import { ModelMesh } from "./ModelMesh"
import * as THREE from "three"
import { ViewStyle } from "../ViewStyles"

test("mesh double side material", async () => {
  const points = [0, 0, 0, 0, 1, 0, 0, 1, 1]

  const renderer = await ReactThreeTestRenderer.create(
    <ModelMesh color="red" vertices={points}></ModelMesh>
  )
  const allChildren = renderer.scene.allChildren
  expect(allChildren.length).toBe(1)
  const mesh = allChildren[0]
  const material = mesh.allChildren[1]
  expect(material.props.color).toBe("red")
  expect(material.props.side).toBe(THREE.DoubleSide)
  expect(material.props.wireframe).toBe(false)
  expect(material.props.transparent).toBe(false)
})

test("mesh single side material", async () => {
  const points = [0, 0, 0, 0, 1, 0, 0, 1, 1]

  const renderer = await ReactThreeTestRenderer.create(
    <ModelMesh
      color="red"
      vertices={points}
      style={ViewStyle.SINGLE}
    ></ModelMesh>
  )
  const allChildren = renderer.scene.allChildren
  expect(allChildren.length).toBe(1)
  const mesh = allChildren[0]
  const material = mesh.allChildren[1]
  expect(material.props.color).toBe("red")
  expect(material.props.side).toBe(THREE.FrontSide)
  expect(material.props.wireframe).toBe(false)
  expect(material.props.transparent).toBe(false)
})

test("mesh wireframe material", async () => {
  const points = [0, 0, 0, 0, 1, 0, 0, 1, 1]

  const renderer = await ReactThreeTestRenderer.create(
    <ModelMesh
      color="red"
      vertices={points}
      style={ViewStyle.WIREFRAME}
    ></ModelMesh>
  )
  const allChildren = renderer.scene.allChildren
  expect(allChildren.length).toBe(1)
  const mesh = allChildren[0]
  const material = mesh.allChildren[1]
  expect(material.props.color).toBe("red")
  expect(material.props.side).toBe(THREE.DoubleSide)
  expect(material.props.wireframe).toBe(true)
  expect(material.props.transparent).toBe(false)
})

test("mesh transparent material", async () => {
  const points = [0, 0, 0, 0, 1, 0, 0, 1, 1]

  const renderer = await ReactThreeTestRenderer.create(
    <ModelMesh
      color="red"
      vertices={points}
      style={ViewStyle.OPACITY}
    ></ModelMesh>
  )
  const allChildren = renderer.scene.allChildren
  expect(allChildren.length).toBe(1)
  const mesh = allChildren[0]
  const material = mesh.allChildren[1]
  expect(material.props.color).toBe("red")
  expect(material.props.side).toBe(THREE.DoubleSide)
  expect(material.props.wireframe).toBe(false)
  expect(material.props.transparent).toBe(true)
})

test("mesh circle material", async () => {
  const points = [0, 0, 0, 0, 1, 0, 0, 1, 1]

  const renderer = await ReactThreeTestRenderer.create(
    <ModelMesh
      color="red"
      vertices={points}
      style={ViewStyle.CIRCLE}
    ></ModelMesh>
  )
  const allChildren = renderer.scene.allChildren
  expect(allChildren.length).toBe(1)
  const mesh = allChildren[0]
  const material = mesh.allChildren[1]
  expect(material.props.type).toBe("CirclePointMaterial")
})

test("mesh point material", async () => {
  const points = [0, 0, 0, 0, 1, 0, 0, 1, 1]

  const renderer = await ReactThreeTestRenderer.create(
    <ModelMesh
      color="red"
      vertices={points}
      style={ViewStyle.POINT}
    ></ModelMesh>
  )
  const allChildren = renderer.scene.allChildren
  expect(allChildren.length).toBe(1)
  const mesh = allChildren[0]
  const material = mesh.allChildren[1]
  expect(material.props.color).toBe("red")
  expect(material.props.size).toBe(5)
})
