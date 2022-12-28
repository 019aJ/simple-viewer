import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Perspective } from "../threejs/Perspective"
import { ViewStyle } from "../threejs/ViewStyles"

export type PlaneDataType = {
  vectorLength: number
  normal: number[]
  sectionsVisible: boolean
}

export type VisualBlockState = {
  meshStyle: string
  camPosition: string
  titleVisible: boolean
  plane?: PlaneDataType
}
export type ActionType = PayloadAction<{
  meshStyle?: string
  camPosition?: string
  plane?: PlaneDataType
}>

const onChangeMeshStyle = (state: VisualBlockState, action: ActionType) => {
  if (action.payload.meshStyle) {
    state.meshStyle = action.payload.meshStyle
  }
}

const onChangeCamPosition = (state: VisualBlockState, action: ActionType) => {
  if (action.payload.camPosition) {
    state.camPosition = action.payload.camPosition
  }
}

const onChangeTitleVisibility = (state: VisualBlockState) => {
  state.titleVisible = !state.titleVisible
}

const onChangePlane = (state: VisualBlockState, action: ActionType) => {
  state.plane = action.payload.plane
}

export const visualBlockSlice = createSlice({
  name: "visualBlockSlice",
  initialState: {
    meshStyle: ViewStyle.DOUBLE.toString(),
    camPosition: Perspective.TOP.toString(),
    titleVisible: false,
  } as VisualBlockState,
  reducers: {
    changeMeshStyle: onChangeMeshStyle,
    changeCamPosition: onChangeCamPosition,
    changeTitleVisibility: onChangeTitleVisibility,
    changePlane: onChangePlane,
  },
})

export const {
  changeMeshStyle,
  changeCamPosition,
  changeTitleVisibility,
  changePlane,
} = visualBlockSlice.actions
export default visualBlockSlice.reducer
