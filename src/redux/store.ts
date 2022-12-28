import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit"
import rootSaga from "../saga/rootSaga"
import createSagaMiddleware from "redux-saga"
import LoadModelSliceReducer, { ModelLoadSliceState } from "./loadModelSlice"
import CheckboxSliceReducer, { CheckboxSliceState } from "./checkboxSlice"
import TreeSelectionSliceReducer, {
  TreeSelectionSliceState,
} from "./treeSelectionSlice"
import TreeReducer, { TreeSliceState } from "./treeSlice"
import AttributeReducer, { AttributeSliceState } from "./attributeSlice"
import AttributeFakeLoadSliceReducer, {
  ModelAttributesSliceState,
} from "./loadAttributesSlice"
import VisualBlockStateSliceReducer, {
  VisualBlockState,
} from "./visualBlockSlice"

export type AppStateType = {
  treeSelection: TreeSelectionSliceState
  modelData: ModelLoadSliceState
  checks: CheckboxSliceState
  treeNodes: TreeSliceState
  attributeVisibility: AttributeSliceState
  attributeFakeData: ModelAttributesSliceState
  visualBlockData: VisualBlockState
}

const sagaMiddleware = createSagaMiddleware()
export const rootReducer = combineReducers({
  treeSelection: TreeSelectionSliceReducer,
  modelData: LoadModelSliceReducer,
  checks: CheckboxSliceReducer,
  treeNodes: TreeReducer,
  attributeVisibility: AttributeReducer,
  attributeFakeData: AttributeFakeLoadSliceReducer,
  visualBlockData: VisualBlockStateSliceReducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  })
}

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)
export type RootState = ReturnType<typeof rootReducer>
export const treeSelectionState = (state: AppStateType) => state.treeSelection
export const modelDataState = (state: AppStateType) => state.modelData
export const checkboxState = (state: AppStateType) => state.checks
export const treeNodesState = (state: AppStateType) => state.treeNodes
export const attributeState = (state: AppStateType) => state.attributeVisibility
export const attributeFakeDataState = (state: AppStateType) =>
  state.attributeFakeData
export const visualBlockDataState = (state: AppStateType) =>
  state.visualBlockData
