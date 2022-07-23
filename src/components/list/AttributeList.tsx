import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  fetchAttributeFakeData,
  ModelAttributesFakeSliceState,
} from "../../redux/loadAttributesFakeSlice"

import { ModelSliceState } from "../../redux/modelSlice"
import {
  AppStateType,
  modelSelectionState,
  attributeFakeDataState,
} from "../../redux/store"

export const AttributeList = ({}) => {
  const dispatch = useDispatch()
  const selectionState = useSelector<AppStateType, ModelSliceState>(
    modelSelectionState
  )
  const modelAttributeState = useSelector<
    AppStateType,
    ModelAttributesFakeSliceState
  >(attributeFakeDataState)

  useEffect(() => {
    console.log(modelAttributeState?.isLoading)
  }, [modelAttributeState])

  useEffect(() => {
    if (selectionState && selectionState.value) {
      dispatch(fetchAttributeFakeData({ modelId: selectionState.value }))
    }
  }, [selectionState])
  return modelAttributeState &&
    modelAttributeState.isSuccess &&
    !modelAttributeState.isLoading ? (
    <div>
      {modelAttributeState.value?.map((x) => (
        <div>{x.name} {x.value}</div>
      ))}
    </div>
  ) : (
    <div>Атрибуты модели</div>
  )
}
