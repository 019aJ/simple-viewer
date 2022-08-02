import ReactThreeTestRenderer from "@react-three/test-renderer"
import "@testing-library/jest-dom"
import invert from "invert-color"
import { Provider } from "react-redux"
import { Store } from "redux"
import * as THREE from "three"
import { Model } from "../../dto/Model"
import { setupStore } from "../../redux/store"
import { ViewStyle } from "../ViewStyles"
import { ViewerGroup } from "./ViewerGroup"
let store: Store
const tree: Model[] = [
  {
    id: 1,
    name: "geom1",
    path: "",
    triangulation: [0, 0, 0, 0, 0, 1, 0, 1, 1],
    center: [0, 0.5, 0.5],
    color: "#FF0000",
  },
  {
    id: 2,
    name: "geom2",
    path: "",
    triangulation: [0, 0, 0, 0, 0, 1, 0, 1, 1],
    center: [0, 0.5, 0.5],
  },
  {
    id: 3,
    name: "2",
    path: "",
  },
]
test("Viewer render test", async () => {
  const checks: number[] = new Array(tree.length)
  checks.fill(1, 0, tree.length)
  store = setupStore({
    modelData: { value: tree, isLoading: false, isSuccess: true },
    checks: { value: checks, tree },
  })
  const plane = new THREE.Plane()
  plane.constant = -0.5
  plane.normal = new THREE.Vector3(0, 0, 1)
  const renderer = await ReactThreeTestRenderer.create(
    <Provider store={store}>
      <ViewerGroup materialStyle={ViewStyle.WIREFRAME} sectionPlane={plane} />
    </Provider>
  )
  const allChildren = renderer.scene.allChildren
  expect(allChildren.length).toBe(1)
  const group = allChildren[0]
  expect(group.props.position).toStrictEqual([0, 0, 0])
  expect(group.allChildren.length).toBe(3)
  //Треугольник
  const mesh = group.allChildren[0]
  const material = mesh.allChildren[1]
  expect(material.props.color).toBe("#FF0000")
  expect(material.props.side).toBe(THREE.DoubleSide)
  expect(material.props.wireframe).toBe(true)
  expect(material.props.transparent).toBe(false)
  //Второй треугольник
  const mesh2 = group.allChildren[1]
  const material2 = mesh2.allChildren[1]
  expect(material2.props.color).toBe("black")
  //Сечение
  const section = group.allChildren[2]
  const line = section.allChildren[0]
  expect(line.props.object.type).toBe("Line2")
})

test("Title on, one geom off render test", async () => {
  const checks: number[] = new Array(tree.length)
  checks.fill(1, 0, tree.length)
  checks[1] = 0
  store = setupStore({
    modelData: { value: tree, isLoading: false, isSuccess: true },
    checks: { value: checks, tree },
  })

  const renderer = await ReactThreeTestRenderer.create(
    <Provider store={store}>
      <ViewerGroup materialStyle={ViewStyle.WIREFRAME} titleVisible />
    </Provider>
  )
  const allChildren = renderer.scene.allChildren
  expect(allChildren.length).toBe(1)
  const group = allChildren[0]
  expect(group.allChildren.length).toBe(2)

  const html = group.allChildren[1]
  expect(html.props.position).toStrictEqual([0, 0.5, 0.5])
})

test("Viewer empty test", async () => {
  store = setupStore({
    modelData: { value: [], isLoading: false, isSuccess: true },
    checks: { value: [], tree: [] },
  })

  const renderer = await ReactThreeTestRenderer.create(
    <Provider store={store}>
      <ViewerGroup materialStyle={ViewStyle.WIREFRAME} />
    </Provider>
  )
  const allChildren = renderer.scene.allChildren
  expect(allChildren.length).toBe(1)
  const group = allChildren[0]
  expect(group.allChildren.length).toBe(0)
})
