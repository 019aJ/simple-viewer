import modelsLoadSaga from "./loadDataSaga"
import { expectSaga } from "redux-saga-test-plan"
import * as loadAttributesSlice from "../redux/loadAttributesSlice"
import * as loadModelSlice from "../redux/loadModelSlice"
import attributesLoadSaga from "./loadAttributeDataSaga"
import { setCenters } from "../utils/FillCenterHelper"
import { stubModelList } from "../modelstubs/ModelStub"
import { buildTree } from "../utils/TreeTransform"
import util from "util"
jest.mock("../api/ModelApi")
it("onLoadStart->onLoadSuccess called", () => {
  const models = stubModelList
  setCenters(models)
  const tree = buildTree(models)
  util.inspect.defaultOptions.depth = null
  return expectSaga(modelsLoadSaga)
    .put({
      type: loadModelSlice.fetchFinished.type,
      payload: { models: tree },
    })
    .withReducer(loadModelSlice.default)
    .dispatch({
      type: loadModelSlice.fetchData.type,
      payload: {},
    })
    .silentRun(150)
})

it("onLoadAttrStart->onLoadAttrSuccess no modelId called", () => {
  return expectSaga(attributesLoadSaga)
    .put({
      type: loadAttributesSlice.fetchAttributeDataFinished.type,
      payload: { attributes: undefined },
    })
    .withReducer(loadAttributesSlice.default)
    .dispatch({
      type: loadAttributesSlice.fetchAttributeData.type,
      payload: {},
    })
    .silentRun(50)
})
it("onLoadAttrStart->onLoadAttrSuccesscalled", () => {
  return expectSaga(attributesLoadSaga)
    .put({
      type: loadAttributesSlice.fetchAttributeDataFinished.type,
      payload: {
        attributes: [
          {
            id: 1,
            name: "Цвет",
            value: "red",
            identifier: "color",
          },
        ],
      },
    })
    .withReducer(loadAttributesSlice.default)
    .dispatch({
      type: loadAttributesSlice.fetchAttributeData.type,
      payload: { modelId: 1 },
    })
    .silentRun(50)
})
