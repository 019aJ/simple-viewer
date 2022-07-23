import { Canvas } from "@react-three/fiber"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchData } from "../../redux/loadModelSlice"
import { ModelBlock } from "../modelblock/ModelBlock"
import { Viewer } from "../../threejs/viewer/Viewer"
import styles from "./App.module.css"

type AppProps = {}

export const App = ({}: AppProps) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchData())
  }, [])
  return (
    <div className={styles.app}>
      <ModelBlock />
      <div className={styles.viewBlock}>
          <Viewer />
      </div>
    </div>
  )
}
