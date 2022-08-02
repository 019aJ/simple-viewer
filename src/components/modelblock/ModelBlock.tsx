import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { hide, show } from "../../redux/attributeSlice"
import { ModelLoadSliceState } from "../../redux/loadModelSlice"
import { AppStateType, modelDataState } from "../../redux/store"
import { collapse, expand } from "../../redux/treeSlice"
import { Block } from "../block/Block"
import { AttributeList } from "../list/AttributeList"
import { ModelTree } from "../tree/ModelTree"
import styles from "./ModelBlock.module.css"

type ModelBlockProps = {}

export const ModelBlock = ({}: ModelBlockProps) => {
  const dispatch = useDispatch()

  const [isAttributesVisible, setAttributesVisible] = useState(true)
  useEffect(() => {
    dispatch(isAttributesVisible ? show() : hide())
  }, [isAttributesVisible])
  const formState = useSelector<AppStateType, ModelLoadSliceState>(
    modelDataState
  )
  const onClickShowButton = () => {
    setAttributesVisible((prev) => !prev)
  }
  const onClickExpandButton = () => {
    dispatch(expand())
  }
  const onClickCollapseButton = () => {
    dispatch(collapse())
  }
  const btnStyle = `${styles.blockButton}`
  const buttons = [
    <div
      key={"show"}
      data-testid="show"
      className={
        isAttributesVisible
          ? `${btnStyle} ${styles.hide}`
          : `${btnStyle} ${styles.show}`
      }
      onClick={onClickShowButton}
      title={
        isAttributesVisible
          ? "Скрыть блок атрибутов"
          : "Показать блок атрибутов"
      }
    ></div>,
    <div
      key={"expandTree"}
      data-testid="expandTree"
      className={`${btnStyle} ${styles.expand}`}
      onClick={onClickExpandButton}
      title="Развернуть"
    ></div>,
    <div
      key={"collapseTree"}
      data-testid="collapseTree"
      className={`${btnStyle} ${styles.collapse}`}
      onClick={onClickCollapseButton}
      title="Свернуть"
    ></div>,
  ]
  return (
    <div className={styles.block} data-testid="modelBlock">
      <Block
        key={"modelTreeBlock"}
        title="Список моделей"
        widgets={buttons}
        style={{ width: "400px" }}
      >
        <div
          key={"modelTreeCont"}
          className={
            isAttributesVisible ? styles.treePanelShort : styles.treePanelLong
          }
        >
          {formState && !formState.isLoading && formState.isSuccess ? (
            <ModelTree key="modelTree" models={formState.value} />
          ) : (
            <div>Загрузка данных...</div>
          )}
        </div>
      </Block>

      {isAttributesVisible ? (
        <Block key={"modelAttrBlock"} title="Параметры модели">
          <div className={styles.attributePanel}>
            <AttributeList />
          </div>
        </Block>
      ) : (
        <></>
      )}
    </div>
  )
}
