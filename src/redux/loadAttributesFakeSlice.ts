import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ModelAttribute } from "../dto/ModelAttribute"

export type ModelAttributesFakeSliceState = {
  value?: ModelAttribute[]
  modelId?: number
  isLoading: boolean
  isSuccess: boolean
}
export type ActionType = PayloadAction<{
  attributes?: ModelAttribute[]
  modelId: number
}>

export const onLoadStart = (
  state: ModelAttributesFakeSliceState,
  action: ActionType
) => {
  state.isLoading = true
  state.modelId = action.payload.modelId
}
export const onLoadSuccess = (
  state: ModelAttributesFakeSliceState,
  action: ActionType
) => {
  state.value = action.payload.attributes
  state.isLoading = false
  state.isSuccess = true
}

export const onLoadFailure = (state: ModelAttributesFakeSliceState) => {
  state.isLoading = false
  state.isSuccess = false
}
export const attributeFakeLoadSlice = createSlice({
  name: "modelAttributeFakeLoad",
  initialState: {
    value: [],
    isLoading: true,
    isSuccess: true,
  } as ModelAttributesFakeSliceState,
  reducers: {
    fetchAttributeFakeData: onLoadStart,
    fetchAttributeFakeDataFinished: onLoadSuccess,
    fetchAttributeFakeDataFailed: onLoadFailure,
  },
})
export const {
  fetchAttributeFakeData,
  fetchAttributeFakeDataFinished,
  fetchAttributeFakeDataFailed,
} = attributeFakeLoadSlice.actions

export default attributeFakeLoadSlice.reducer
