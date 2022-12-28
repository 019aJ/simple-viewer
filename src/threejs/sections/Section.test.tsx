import ReactThreeTestRenderer from "@react-three/test-renderer"
import { Section } from "./Section"

test("section render test", async () => {
  const coords: number[][] = [[0, 0, 0, 1, 1, 1]]

  const renderer = await ReactThreeTestRenderer.create(
    <Section section={coords} />
  )
  const allChildren = renderer.scene.allChildren
  expect(allChildren.length).toBe(1)
  const section = allChildren[0]
  const line = section.allChildren[0]
  const props = line.props
  expect(line.props.object.type).toBe("LineGeometry")
})
