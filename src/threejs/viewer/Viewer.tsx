import {
  Html, OrbitControls,
  OrthographicCamera
} from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Fragment } from "react"
import * as THREE from "three"

import invert from "invert-color"
import { useSelector } from "react-redux"
import { Model } from "../../dto/Model"
import { CheckboxSliceState } from "../../redux/checkboxSlice"
import { AppStateType, checkboxState } from "../../redux/store"
import { ModelMesh } from "../mesh/ModelMesh"
import { getCoordinates } from "../Perspective"
import { Sections } from "../section/Sections"

type ViewerProps = {
  materialStyle: string
  cameraPos: string
  titleVisible?: boolean
}
const DEFAULT_COLOR = "black"
const getMeshes = (
  models: Model[],
  checks: number[],
  materialStyle: string,
  titleVisible: boolean
) => {
  if (models.length) {
    return models
      .filter((x, index) => checks[index])
      .filter((x) => x.triangulation)
      .map((x) => (
        <Fragment key={"view" + x.id}>
          <ModelMesh
            color={x.color ? x.color : DEFAULT_COLOR}
            vertices={x.triangulation}
            style={materialStyle}
          />
          {titleVisible ? (
            <Html center position={x.center}>
              <div style={{ color: x.color ? invert(x.color) : "white" }}>
                {x.name}
              </div>
            </Html>
          ) : (
            <></>
          )}
        </Fragment>
      ))
  }
  return []
}


export const Viewer = ({
  materialStyle,
  cameraPos,
  titleVisible,
}: ViewerProps) => {
  const checksState = useSelector<AppStateType, CheckboxSliceState>(
    checkboxState
  )
  const meshes = getMeshes(
    checksState.tree,
    checksState.value,
    materialStyle,
    titleVisible ? true : false
  )
 /* const plane = new THREE.Plane()
  plane.constant = 1
  plane.normal = new THREE.Vector3(0, 1, 0)
  meshes.push(<Sections models={checksState.tree} plane={plane}></Sections>)*/

  return (
    <Canvas
      style={{
        height: "880px",
        width: "100%",
        background: "white",
      }}
    >
      <OrthographicCamera
        makeDefault
        left={-1}
        right={1}
        top={1}
        bottom={-1}
        near={0.1}
        far={10000}
        zoom={6}
        position={getCoordinates(cameraPos)}
      />
      <group position={[0, 0, 0]}>{meshes}</group>
      <hemisphereLight />
      <OrbitControls />
      <gridHelper args={[150, 15, "black", "black"]} />
      <axesHelper args={[75]} />
    </Canvas>
  )
}
