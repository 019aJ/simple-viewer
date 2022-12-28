import ReactThreeTestRenderer from "@react-three/test-renderer"
import { CircleMaterial } from "./CircleMaterial"

test("Render circles, check props", async () => {
  const points = new Float32Array([0, 0, 0])
  const geometry = (
    <bufferGeometry attach="geometry">
      <bufferAttribute
        attach="attributes-position"
        array={points}
        count={points.length}
        itemSize={1}
      />
    </bufferGeometry>
  )
  const renderer = await ReactThreeTestRenderer.create(
    <points>
      {geometry}
      <CircleMaterial color={"red"} />
    </points>
  )
  const mesh = renderer.scene.children[0].allChildren
  expect(mesh.length).toBe(2)
  expect(mesh[1].props.type).toBe("CirclePointMaterial")
  expect(mesh[1].props.clipping).toBe(true)
})
