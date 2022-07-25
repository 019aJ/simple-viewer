import { createSlice, PayloadAction } from "@reduxjs/toolkit"
export type ModelSliceState = { value?: number }
export type ActionType = PayloadAction<{
  modelId?: number
}>

const stateToString = (state: ModelSliceState) => {
  return JSON.stringify(state)
}

export const onSelect = (state: ModelSliceState, action: ActionType) => {
  state.value = action.payload.modelId
}
export const onClear = (state: ModelSliceState) => {
  state.value = undefined
}

export const onUpdateFinished = (state: ModelSliceState) => {
  localStorage.setItem("selection", stateToString(state))
}

export const modelSlice = createSlice({
  name: "modelSelection",
  initialState: {} as ModelSliceState,
  reducers: {
    select: onSelect,
    clear: onClear,
    updateFinished: onUpdateFinished,
  },
})
export const { select, clear, updateFinished } = modelSlice.actions

export default modelSlice.reducer
