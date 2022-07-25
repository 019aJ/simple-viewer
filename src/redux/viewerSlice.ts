import { createSlice, PayloadAction } from "@reduxjs/toolkit"
export type ViewerSliceState = { viewStyle: string }
export type ActionType = PayloadAction<{
  viewStyle: string
}>
const onChangeViewStyle = (state: ViewerSliceState, action: ActionType) => {
  state.viewStyle = action.payload.viewStyle
}
export const viewerStateSlice = createSlice({
  name: "viewerState",
  initialState: {
    viewStyle: "double",
  } as ViewerSliceState,
  reducers: {
    changeViewStyle: onChangeViewStyle,
  },
})
export const { changeViewStyle } = viewerStateSlice.actions

export default viewerStateSlice.reducer
