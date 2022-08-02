import { put, takeEvery } from "redux-saga/effects"
import { getModelTree } from "../api/ModelApi"
import { Model } from "../dto/Model"
import { fetchData, fetchFailure, fetchFinished } from "../redux/loadModelSlice"

import { setCenters } from "../utils/FillCenterHelper"
import { buildTree } from "../utils/TreeTransform"

async function fetchAsync<T>(
  func: () => Promise<{ ok: boolean; json: () => T }>
) {
  const response = await func()
  if (response.ok) {
    return response.json()
  }
  throw new Error("Unexpected error")
}

function* fetchModels() {
  try {
    const models: Model[] = yield fetchAsync<Model[]>(getModelTree)
    setCenters(models)
    yield put({
      type: fetchFinished.type,
      payload: { models: buildTree(models) },
    })
  } catch (e) {
    yield put({ type: fetchFailure.type })
  }
}
export default function* modelsLoadSaga() {
  yield takeEvery(fetchData, fetchModels)
}
