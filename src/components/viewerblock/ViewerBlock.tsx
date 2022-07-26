import { useState } from "react"
import { Perspective, perspectives } from "../../threejs/Perspective"
import { Viewer } from "../../threejs/viewer/Viewer"
import { ViewStyle, viewStyles } from "../../threejs/ViewStyles"

import { Block } from "../block/Block"
import styles from "./ViewerBlock.module.css"

type ViewerBlockProps = {}

export const ViewerBlock = ({}: ViewerBlockProps) => {
  const [materialStyle, setMaterialStyle] = useState(
    ViewStyle.DOUBLE.toString()
  )
  const [cameraPerspective, setCameraPerspective] = useState(
    Perspective.TOP.toString()
  )
  const [titleVisible, setTitleVisible] = useState(false)

  const onSelectStyle = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMaterialStyle(e.target.value)
  }
  const onSelectPerspective = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCameraPerspective(e.target.value)
  }
  const onClickShowButton = () => {
    setTitleVisible((prev) => !prev)
  }
  const onClickSectionButton = () => {
  }
  const widgets = [
    <div key={"select"}>
      <label>Тип отображения:</label>
      <select
        id="styles"
        onChange={onSelectStyle}
        defaultValue={ViewStyle.DOUBLE}
      >
        {viewStyles.map((style) => (
          <option key={style.id} value={style.id}>
            {style.name}
          </option>
        ))}
      </select>
    </div>,
    <div key={"selectCam"}>
      <label>Положение камеры:</label>
      <select
        id="cam"
        onChange={onSelectPerspective}
        defaultValue={Perspective.TOP}
      >
        {perspectives.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </select>
    </div>,
    <div
      key={"showTitle"}
      data-testid="showTitle"
      className={`${styles.titleButton} ${styles.showTitle}`}
      onClick={onClickShowButton}
      title="Показать/скрыть имена моделей"
    ></div>,
    <div
      key={"section"}
      data-testid="section"
      className={`${styles.titleButton} ${styles.showTitle}`}
      onClick={onClickSectionButton}
      title="Сечение"
    ></div>,
  ]
  return (
    <div className={`${styles.viewerBlock}`}>
      <Block key={"viewerBlock"} title="Визуализация" widgets={widgets}>
        <Viewer
          materialStyle={materialStyle}
          cameraPos={cameraPerspective}
          titleVisible={titleVisible}
        />
      </Block>
    </div>
  )
}
