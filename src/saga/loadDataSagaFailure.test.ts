import modelsLoadSaga from "./loadDataSaga"
import { expectSaga } from "redux-saga-test-plan"
import * as loadAttributesSlice from "../redux/loadAttributesSlice"
import * as loadModelSlice from "../redux/loadModelSlice"
import attributesLoadSaga from "./loadAttributeDataSaga"

jest.mock("../api/ModelApi", () => {
  const originalModule = jest.requireActual("../api/ModelApi")

  return {
    __esModule: true,
    ...originalModule,
    getModelTree: () => {
      return {
        ok: false,
        json: () => {
          return []
        },
      }
    },
    getModelAttributes: () => {
      return {
        ok: false,
        json: () => {
          return []
        },
      }
    },
  }
})

it("onLoadStart->onLoadSuccess failure called", () => {
  return expectSaga(modelsLoadSaga)
    .put({
      type: loadModelSlice.fetchFailure.type,
    })
    .withReducer(loadModelSlice.default)
    .dispatch({
      type: loadModelSlice.fetchData.type,
      payload: {},
    })
    .silentRun(150)
})

it("onLoadAttrStart->onLoadAttrSuccess failure called", () => {
  return expectSaga(attributesLoadSaga)
    .put({
      type: loadAttributesSlice.fetchAttributeDataFailed.type,
    })
    .withReducer(loadAttributesSlice.default)
    .dispatch({
      type: loadAttributesSlice.fetchAttributeData.type,
      payload: { modelId: 1 },
    })
    .silentRun(50)
})
