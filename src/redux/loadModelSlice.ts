import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Model } from "../dto/Model"
export type ModelLoadSliceState = {
  value: Model[]
  isLoading: boolean
  isSuccess: boolean
}
export type ActionType = PayloadAction<{
  models: Model[]
}>

export const onLoadStart = (state: ModelLoadSliceState) => {
  state.isLoading = true
}

export const onLoadSuccess = (
  state: ModelLoadSliceState,
  action: ActionType
) => {
  state.value = action.payload.models
  state.isLoading = false
  state.isSuccess = true
}

export const onLoadFailure = (
  state: ModelLoadSliceState,
  action: ActionType
) => {
  state.isLoading = false
  state.isSuccess = false
}

export const modelLoadSlice = createSlice({
  name: "modelLoad",
  initialState: {
    value: [],
    isLoading: true,
    isSuccess: true,
  } as ModelLoadSliceState,
  reducers: {
    fetchData: onLoadStart,
    fetchFinished: onLoadSuccess,
    fetchFailure: onLoadFailure,
  },
})
export const { fetchData, fetchFinished, fetchFailure } = modelLoadSlice.actions

export default modelLoadSlice.reducer
