import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchData } from "../../redux/loadModelSlice"
import { ModelBlock } from "../modelblock/ModelBlock"

type AppProps = {}

export const App = ({}: AppProps) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchData())
  }, [])
  return (
    <>
      <ModelBlock />
    </>
  )
}
