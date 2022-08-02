import { createSlice, PayloadAction } from "@reduxjs/toolkit"
export type AttributeSliceState = { isVisible: boolean }
export type ActionType = PayloadAction<{
  isOpen: boolean
}>
export const onShow = (state: AttributeSliceState) => {
  state.isVisible = true
}
export const onHide = (state: AttributeSliceState) => {
  state.isVisible = false
}

export const attributeSlice = createSlice({
  name: "attributeVisibilityState",
  initialState: {
    isVisible: true,
  } as AttributeSliceState,
  reducers: {
    show: onShow,
    hide: onHide,
  },
})
export const { show, hide } = attributeSlice.actions

export default attributeSlice.reducer
