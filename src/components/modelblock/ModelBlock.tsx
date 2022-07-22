import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { hide, show } from "../../redux/attributeSlice"
import { ModelLoadSliceState } from "../../redux/loadModelSlice"
import { AppStateType, modelDataState } from "../../redux/store"
import { collapse, expand } from "../../redux/treeSlice"
import { ButtonPanel } from "../buttonpanel/ButtonPanel"
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
  const btnStyle = `${styles.playPropButton}`

  return (
    <div className={`${styles.block}`}>
      <ButtonPanel>
        <div
          data-testid="show"
          className={
            isAttributesVisible
              ? `${btnStyle} ${styles.hide}`
              : `${btnStyle} ${styles.show}`
          }
          onClick={onClickShowButton}
        ></div>
        <div
          data-testid="expandTree"
          className={`${btnStyle} ${styles.expand}`}
          onClick={onClickExpandButton}
        ></div>
        <div
          data-testid="collapseTree"
          className={`${btnStyle} ${styles.collapse}`}
          onClick={onClickCollapseButton}
        ></div>
      </ButtonPanel>
      <div
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
      {isAttributesVisible ? (
        <div className={styles.attributePanel}>
          <div className={styles.titlePanel}>Параметры модели</div>
          <div>
            <AttributeList />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
