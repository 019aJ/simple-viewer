import ReactThreeTestRenderer from "@react-three/test-renderer"
import { Sections } from "./Sections"
import * as THREE from "three"

test("sections render test", async () => {
  const plane = new THREE.Plane()
  plane.constant = -0.5
  plane.normal = new THREE.Vector3(0, 0, 1)
  const renderer = await ReactThreeTestRenderer.create(
    <Sections
      models={[
        {
          id: 1,
          name: "",
          path: "",
          triangulation: [0, 0, 0, 0, 0, 1, 0, 1, 1],
        },
        { id: 2, name: "", path: "" },
      ]}
      plane={plane}
    />
  )
  const allChildren = renderer.scene.allChildren
  expect(allChildren.length).toBe(1)
  const section = allChildren[0]
  const line = section.allChildren[0]
  expect(line.props.object.type).toBe("Line2")
})
