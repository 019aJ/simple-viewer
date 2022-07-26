import { OrbitControls, OrthographicCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { ModelMesh } from "./ModelMesh"
import { getRandomCube } from "../../modelstubs/FigureGenerator"
import { ViewStyle } from "../ViewStyles"

export default {
  title: "ModelMesh",
  component: ModelMesh,
}

const getViewer = (mesh: JSX.Element) => (
  <Canvas
    style={{
      height: "881px",
      width: "1000px",
      background: "white",
    }}
  >
    <OrthographicCamera
      makeDefault
      left={-80}
      right={80}
      top={80}
      bottom={-80}
      near={0.1}
      far={10000}
      zoom={6}
      position={[-40, 55, 200]}
    />
    <group position={[0, 0, 0]}>{mesh}</group>
    <hemisphereLight />
    <OrbitControls />
    <gridHelper args={[100, 100]} />
  </Canvas>
)

export const DoubleSideMesh = () => {
  return getViewer(
    <ModelMesh
      color="red"
      vertices={getRandomCube()}
      style={ViewStyle.DOUBLE}
    ></ModelMesh>
  )
}

export const SingleSideMesh = () => {
  return getViewer(
    <ModelMesh
      color="red"
      vertices={getRandomCube()}
      style= { ViewStyle.SINGLE }
    ></ModelMesh>
  )
}

export const WireFrameSideMesh = () => {
  return getViewer(
    <ModelMesh
      color="red"
      vertices={getRandomCube()}
      style={ViewStyle.WIREFRAME}
    ></ModelMesh>
  )
}

export const SquareMesh = () => {
  return getViewer(
    <ModelMesh
      color="red"
      vertices={getRandomCube()}
      style={ViewStyle.POINT}
    ></ModelMesh>
  )
}
export const CircleMesh = () => {
  return getViewer(
    <ModelMesh
      color="red"
      vertices={getRandomCube()}
      style={ViewStyle.CIRCLE}
    ></ModelMesh>
  )
}
