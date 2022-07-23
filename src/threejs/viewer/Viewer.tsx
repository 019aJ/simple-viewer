import { useRef, useLayoutEffect, useState, useMemo } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, OrthographicCamera } from "@react-three/drei"

import styles from "./Viewer.module.css"
import { ModelMesh } from "../mesh/ModelMesh"
import { useSelector } from "react-redux"
import { AppStateType, checkboxState } from "../../redux/store"
import { CheckboxSliceState } from "../../redux/checkboxSlice"
import { Model } from "../../dto/Model"

type ViewerProps = {}
const DEFAULT_COLOR = "black"
const getMeshes = (models: Model[], checks: number[]) => {
  if (models.length) {
    return models
      .filter((x, index) => checks[index])
      .filter((x) => x.triangulation)
      .map((x) => (
        <ModelMesh
          color={x.color ? x.color : DEFAULT_COLOR}
          vertices={x.triangulation}
        />
      ))
  }
  return []
}

export const Viewer = ({}: ViewerProps) => {
  const checksState = useSelector<AppStateType, CheckboxSliceState>(
    checkboxState
  )
  const meshes = getMeshes(checksState.tree, checksState.value)

  return (
    <Canvas style={{ height: "850px", background: "white" }}>
      <OrthographicCamera
        makeDefault
        left={-80}
        right={80}
        top={80}
        bottom={-80}
        near={0.1}
        far={10000}
        zoom={10}
        position={[0, 0, 200]}
      />
      <group position={[0, 0, 0]}>{meshes}</group>
      <hemisphereLight />
      <OrbitControls />
    </Canvas>
  )
}
