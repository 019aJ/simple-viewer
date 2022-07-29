import * as THREE from "three"
import { Html } from "@react-three/drei"
import { Fragment } from "react"
import invert from "invert-color"
import { useSelector } from "react-redux"
import { Model } from "../../dto/Model"
import { CheckboxSliceState } from "../../redux/checkboxSlice"
import { AppStateType, checkboxState } from "../../redux/store"
import { ModelMesh } from "../mesh/ModelMesh"
import { Sections } from "../sections/Sections"

type ViewerGroupProps = {
  materialStyle: string
  titleVisible?: boolean
  sectionPlane?: THREE.Plane
}
const DEFAULT_COLOR = "black"
const getMeshes = (
  models: Model[],
  checks: number[],
  materialStyle: string,
  titleVisible: boolean
) => {
  return models
    .filter((x, index) => checks[index])
    .filter((x) => x.triangulation)
    .map((x) => (
      // Stryker disable next-line StringLiteral
      <Fragment key={"view" + x.id}>
        <ModelMesh
          color={x.color ? x.color : DEFAULT_COLOR}
          vertices={x.triangulation}
          style={materialStyle}
        />
        {titleVisible ? (
          <Html center position={x.center}>
            <div style={{ color: x.color ? invert(x.color) : "#FFFFFF" }}>
              {x.name}
            </div>
          </Html>
        ) : (
          <></>
        )}
      </Fragment>
    ))
}

export const ViewerGroup = ({
  materialStyle,
  titleVisible,
  sectionPlane,
}: ViewerGroupProps) => {
  const checksState = useSelector<AppStateType, CheckboxSliceState>(
    checkboxState
  )
  const viewObjects = getMeshes(
    checksState.tree,
    checksState.value,
    materialStyle,
    titleVisible ? true : false
  )
  if (sectionPlane) {
    viewObjects.push(
      <Sections
        key={"sections"}
        models={checksState.tree}
        plane={sectionPlane}
      ></Sections>
    )
  }
  return <group position={[0, 0, 0]}>{viewObjects}</group>
}
