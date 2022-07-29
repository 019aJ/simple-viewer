import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ModelAttribute } from "../dto/ModelAttribute"

export type ModelAttributesSliceState = {
  value?: ModelAttribute[]
  modelId?: number
  isLoading: boolean
  isSuccess: boolean
}
export type ActionType = PayloadAction<{
  attributes?: ModelAttribute[]
  modelId?: number
}>

export const onLoadStart = (
  state: ModelAttributesSliceState,
  action: ActionType
) => {
  state.isLoading = true
  state.modelId = action.payload.modelId
}
export const onLoadSuccess = (
  state: ModelAttributesSliceState,
  action: ActionType
) => {
  state.value = action.payload.attributes
  state.isLoading = false
  state.isSuccess = true
}

export const onLoadFailure = (state: ModelAttributesSliceState) => {
  state.isLoading = false
  state.isSuccess = false
}
export const attributeLoadSlice = createSlice({
  name: "modelAttributeFakeLoad",
  initialState: {
    value: [],
    isLoading: true,
    isSuccess: true,
  } as ModelAttributesSliceState,
  reducers: {
    fetchAttributeData: onLoadStart,
    fetchAttributeDataFinished: onLoadSuccess,
    fetchAttributeDataFailed: onLoadFailure,
  },
})
export const {
  fetchAttributeData,
  fetchAttributeDataFinished,
  fetchAttributeDataFailed,
} = attributeLoadSlice.actions

export default attributeLoadSlice.reducer
