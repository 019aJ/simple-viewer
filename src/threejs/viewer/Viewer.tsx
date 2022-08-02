import * as THREE from "three"
import { OrbitControls, OrthographicCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import configureStore, {
  AppStateType,
  visualBlockDataState,
} from "../../redux/store"
import { Provider, useSelector } from "react-redux"
import { getCoordinates } from "../Perspective"
import { ViewerGroup } from "../viewergroup/ViewerGroup"
import { VisualBlockState } from "../../redux/visualBlockSlice"
import { useMemo } from "react"
const store = configureStore

type ViewerProps = {}
export const Viewer = ({}: ViewerProps) => {
  const viewState = useSelector<AppStateType, VisualBlockState>(
    visualBlockDataState
  )
  const sectionPlane = useMemo(() => {
    if (
      !viewState.plane ||
      !viewState.plane.normal ||
      !viewState.plane.vectorLength ||
      !viewState.plane.sectionsVisible
    ) {
      return null
    }
    const plane = new THREE.Plane()
    plane.constant = viewState.plane.vectorLength

    plane.normal = new THREE.Vector3(...viewState.plane.normal)

    return plane
  }, [viewState.plane])
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
        position={getCoordinates(viewState.camPosition)}
      />
      <Provider store={store}>
        <ViewerGroup
          materialStyle={viewState.meshStyle}
          sectionPlane={sectionPlane}
          titleVisible={viewState.titleVisible}
        />
      </Provider>
      <hemisphereLight />
      <OrbitControls />
      <gridHelper args={[150, 15, "black", "black"]} />
      <axesHelper args={[75]} />
    </Canvas>
  )
}
