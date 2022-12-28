import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchData } from "../../redux/loadModelSlice"
import { ModelBlock } from "../modelblock/ModelBlock"
import { ViewerBlock } from "../viewerblock/ViewerBlock"
import styles from "./App.module.css"

type AppProps = {}

export const App = ({}: AppProps) => {
  const dispatch = useDispatch()
  useEffect(
    () => {
      dispatch(fetchData())
    },
    // Stryker disable next-line ArrayDeclaration
    []
  )
  return (
    <div className={styles.app}>
      <ModelBlock />
      <ViewerBlock />
    </div>
  )
}
