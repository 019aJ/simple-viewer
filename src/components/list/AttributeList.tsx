import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  fetchAttributeData,
  ModelAttributesSliceState,
} from "../../redux/loadAttributesSlice"

import { ModelSliceState } from "../../redux/modelSlice"
import {
  AppStateType,
  modelSelectionState,
  attributeFakeDataState,
} from "../../redux/store"

import styles from "./AttributeList.module.css"

export const AttributeList = ({}) => {
  const dispatch = useDispatch()
  const selectionState = useSelector<AppStateType, ModelSliceState>(
    modelSelectionState
  )
  const modelAttributeState = useSelector<
    AppStateType,
    ModelAttributesSliceState
  >(attributeFakeDataState)

  useEffect(() => {
    dispatch(fetchAttributeData({ modelId: selectionState.value }))
  }, [selectionState])
  return modelAttributeState &&
    modelAttributeState.isSuccess &&
    !modelAttributeState.isLoading &&
    modelAttributeState.value ? (
    <table>
      <thead>
        <tr>
          <th>Параметр</th>
          <th>Значение</th>
        </tr>
      </thead>
      <tbody>
        {modelAttributeState.value.map((x) => (
          <tr key={x.id} className={styles.td}>
            <td className={styles.td}>{x.name}</td>
            <td>{x.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <div>Атрибуты модели</div>
  )
}
