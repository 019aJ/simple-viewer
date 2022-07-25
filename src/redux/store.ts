import { configureStore } from "@reduxjs/toolkit"
import rootSaga from "../saga/rootSaga"
import createSagaMiddleware from "redux-saga"
import LoadModelSliceReducer, { ModelLoadSliceState } from "./loadModelSlice"
import CheckboxSliceReducer, { CheckboxSliceState } from "./checkboxSlice"
import ModelSliceReducer, { ModelSliceState } from "./modelSlice"
import TreeReducer, { TreeSliceState } from "./treeSlice"
import AttributeReducer, { AttributeSliceState } from "./attributeSlice"

import AttributeFakeLoadSliceReducer, {
  ModelAttributesSliceState,
} from "./loadAttributesSlice"
import ViewerStateSliceReducer, { ViewerSliceState } from "./viewerSlice"

export type AppStateType = {
  modelSelection: ModelSliceState
  modelData: ModelLoadSliceState
  checks: CheckboxSliceState
  treeNodes: TreeSliceState
  attributeVisibility: AttributeSliceState
  attributeFakeData: ModelAttributesSliceState
  viewerState: ViewerSliceState
}

const sagaMiddleware = createSagaMiddleware()

export default configureStore({
  reducer: {
    modelSelection: ModelSliceReducer,
    modelData: LoadModelSliceReducer,
    checks: CheckboxSliceReducer,
    treeNodes: TreeReducer,
    attributeVisibility: AttributeReducer,
    attributeFakeData: AttributeFakeLoadSliceReducer,
    viewerStateDate: ViewerStateSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export const modelSelectionState = (state: AppStateType) => state.modelSelection
export const modelDataState = (state: AppStateType) => state.modelData
export const checkboxState = (state: AppStateType) => state.checks
export const treeNodesState = (state: AppStateType) => state.treeNodes
export const attributeState = (state: AppStateType) => state.attributeVisibility
export const attributeFakeDataState = (state: AppStateType) =>
  state.attributeFakeData
export const viewerDateState = (state: AppStateType) => state.viewerState