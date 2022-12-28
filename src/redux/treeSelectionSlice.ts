import { createSlice, PayloadAction } from "@reduxjs/toolkit"
export type TreeSelectionSliceState = { value?: number }
export type ActionType = PayloadAction<{
  modelId?: number
}>

export const onSelect = (
  state: TreeSelectionSliceState,
  action: ActionType
) => {
  state.value = action.payload.modelId
}
export const onClear = (state: TreeSelectionSliceState) => {
  state.value = undefined
}

export const treeSelectionSlice = createSlice({
  name: "treeSelection",
  initialState: {} as TreeSelectionSliceState,
  reducers: {
    select: onSelect,
    clear: onClear,
  },
})
export const { select, clear } = treeSelectionSlice.actions

export default treeSelectionSlice.reducer
