import { useRef, useLayoutEffect, useState, useMemo } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, OrthographicCamera } from "@react-three/drei"

import { ModelMesh } from "../mesh/ModelMesh"
import { useSelector } from "react-redux"
import { AppStateType, checkboxState, viewerDateState } from "../../redux/store"
import { CheckboxSliceState } from "../../redux/checkboxSlice"
import { Model } from "../../dto/Model"

type ViewerProps = {
  materialStyle: string
}
const DEFAULT_COLOR = "black"
const getMeshes = (
  models: Model[],
  checks: number[],
  materialStyle: string
) => {
  if (models.length) {
    return models
      .filter((x, index) => checks[index])
      .filter((x) => x.triangulation)
      .map((x) => (
        <ModelMesh
          key={"view" + x.id}
          color={x.color ? x.color : DEFAULT_COLOR}
          vertices={x.triangulation}
          style={materialStyle}
        />
      ))
  }
  return []
}

export const Viewer = ({ materialStyle }: ViewerProps) => {
  const checksState = useSelector<AppStateType, CheckboxSliceState>(
    checkboxState
  )

  const meshes = getMeshes(checksState.tree, checksState.value, materialStyle)

  return (
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
      <group position={[0, 0, 0]}>{meshes}</group>
      <hemisphereLight />
      <OrbitControls />
      <gridHelper args={[100, 100]} />
    </Canvas>
  )
}
