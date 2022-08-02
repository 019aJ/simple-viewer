import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Model } from "../dto/Model"
import { propagate } from "../utils/CheckboxPropagation"
export type CheckboxSliceState = { value: number[]; tree: Model[] }
export type ActionType = PayloadAction<{
  checks?: number[]
  tree?: Model[]
  cellIndex?: number
  cellState?: number
}>

export const onInit = (state: CheckboxSliceState, action: ActionType) => {
  state.value = action.payload.checks ? action.payload.checks : []
  state.tree = action.payload.tree ? action.payload.tree : []
}
export const onUpdateCell = (state: CheckboxSliceState, action: ActionType) => {
  state.value = propagate(
    state.tree,
    state.value,
    action.payload.cellIndex,
    action.payload.cellState
  )
}
export const onClear = (state: CheckboxSliceState) => {
  state.value = []
  state.tree = []
}

export const checkboxSlice = createSlice({
  name: "checkboxPropagation",
  initialState: {
    value: [],
    tree: [],
  } as CheckboxSliceState,
  reducers: {
    init: onInit,
    update: onUpdateCell,
    clear: onClear,
  },
})
export const { init, update, clear } = checkboxSlice.actions

export default checkboxSlice.reducer
