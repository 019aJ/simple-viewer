import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeViewStyle } from "../../redux/viewerSlice"
import { Viewer } from "../../threejs/viewer/Viewer"

import { Block } from "../block/Block"
import styles from "./ViewerBlock.module.css"

type ViewerBlockProps = {}

export const ViewerBlock = ({}: ViewerBlockProps) => {
  const [materialStyle, setMaterialStyle] = useState("double")
  const onSelectStyle = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMaterialStyle(e.target.value)
  }

  const buttons = [
    <div key={"select"}>
      <label>Тип отображения:</label>
      <select id="styles" onChange={onSelectStyle} defaultValue="double">
        <option value="wireframe">Контур</option>
        <option value="double">Двусторонняя заливка</option>
        <option value="single">Односторонняя заливка</option>
        <option value="point">Квадратики</option>
        <option value="circle">Точки</option>
      </select>
    </div>,
  ]
  return (
    <div className={`${styles.viewerBlock}`}>
      <Block key={"viewerBlock"} title="Визуализация" buttons={buttons}>
        <Viewer materialStyle={materialStyle} />
      </Block>
    </div>
  )
}
