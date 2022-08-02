import { createSlice, PayloadAction } from "@reduxjs/toolkit"
export type TreeSliceState = { isOpen: boolean }
export type ActionType = PayloadAction<{
  isOpen: boolean
}>
export const onExpand = (state: TreeSliceState) => {
  state.isOpen = true
}
export const onCollapse = (state: TreeSliceState) => {
  state.isOpen = false
}

export const treeSlice = createSlice({
  name: "treeNodeState",
  initialState: {
    isOpen: true,
  } as TreeSliceState,
  reducers: {
    expand: onExpand,
    collapse: onCollapse,
  },
})
export const { expand, collapse } = treeSlice.actions

export default treeSlice.reducer
