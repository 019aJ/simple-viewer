import { useEffect, useMemo, useState } from "react"
import { useDispatch } from "react-redux"
import * as THREE from "three"
import {
  changeCamPosition,
  changeMeshStyle,
  changePlane,
  changeTitleVisibility,
} from "../../redux/visualBlockSlice"
import { Perspective, perspectives } from "../../threejs/Perspective"
import { Viewer } from "../../threejs/viewer/Viewer"
import { ViewStyle, viewStyles } from "../../threejs/ViewStyles"

import { Block } from "../block/Block"
import styles from "./ViewerBlock.module.css"

export const ViewerBlock = () => {
  const dispatch = useDispatch()

  const [normal, setNormal] = useState("x")
  const [vectorLength, setVectorLength] = useState(1)
  const [sectionsVisible, setSectionsVisible] = useState(false)

  useEffect(() => {
    // Stryker disable next-line ArrayDeclaration
    let normalVector: number[] = []
    switch (normal) {
      case "x":
        normalVector = [1, 0, 0]
        break
      case "y":
        normalVector = [0, 1, 0]
        break
      case "z":
        normalVector = [0, 0, 1]
    }
    dispatch(
      changePlane({
        plane: {
          normal: normalVector,
          sectionsVisible,
          vectorLength,
        },
      })
    )
  }, [normal, vectorLength, sectionsVisible])

  const onSelectStyle = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeMeshStyle({ meshStyle: e.target.value }))
  }
  const onSelectPerspective = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeCamPosition({ camPosition: e.target.value }))
  }
  const onClickShowButton = () => {
    dispatch(changeTitleVisibility())
  }
  const onVectorLengthChange = (x: React.ChangeEvent<HTMLInputElement>) => {
    setVectorLength(parseFloat(x.target.value))
  }
  const onSelectVector = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNormal(e.target.value)
  }
  const onClickSectionButton = () => {
    setSectionsVisible((prev) => !prev)
  }
  const widgets = [
    <div key="label">Параметры сечения: </div>,
    <select
      key="vector"
      data-testid="vector"
      title="Вектор нормали"
      onChange={onSelectVector}
      defaultValue="x"
    >
      <option data-testid="x" key="x" value="x">
        X
      </option>
      <option data-testid="y" key="y" value="y">
        Y
      </option>
      <option data-testid="z" key="z" value="z">
        Z
      </option>
    </select>,
    <input
      key="length"
      data-testid="length"
      type="number"
      title="Длина вектора"
      placeholder="Длина вектора"
      defaultValue={1}
      className={styles.numbox}
      onChange={onVectorLengthChange}
    />,
    <div
      key="section"
      data-testid="section"
      className={`${styles.titleButton} ${styles.showSection}`}
      onClick={onClickSectionButton}
      title="Показать сечения"
    ></div>,
    <div key="select">
      <label>Тип отображения:</label>
      <select
        data-testid="styles"
        onChange={onSelectStyle}
        defaultValue={ViewStyle.DOUBLE}
      >
        {viewStyles.map((style) => (
          <option data-testid={style.id} key={style.id} value={style.id}>
            {style.name}
          </option>
        ))}
      </select>
    </div>,
    <div key="selectCam">
      <label>Положение камеры:</label>
      <select
        data-testid="cam"
        onChange={onSelectPerspective}
        defaultValue={Perspective.TOP}
      >
        {perspectives.map((p) => (
          <option data-testid={p.id} key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </select>
    </div>,
    <div
      key="showTitle"
      data-testid="showTitle"
      className={`${styles.titleButton} ${styles.showTitle}`}
      onClick={onClickShowButton}
      title="Показать/скрыть имена моделей"
    ></div>,
  ]
  return (
    <div className={styles.viewerBlock} data-testid="viewerBlock">
      <Block key="viewerBlock" title="Визуализация" widgets={widgets}>
        <Viewer />
      </Block>
    </div>
  )
}
