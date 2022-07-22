import { all, put, takeEvery } from "redux-saga/effects"
import { getModelAttributes, getModelTree } from "../api/ModelApi"
import { Model } from "../dto/Model"
import { ModelAttribute } from "../dto/ModelAttribute"
import { fetchData, fetchFailure, fetchFinished } from "../redux/loadModelSlice"
import {
  fetchAttributeData,
  fetchAttributeFailure,
  fetchAttributeFinished,
} from "../redux/loadAttributesSlice"

import { buildTree } from "../utils/TreeTransform"
import { PayloadAction } from "@reduxjs/toolkit"
import { fetchAttributeFakeData, fetchAttributeFakeDataFailed, fetchAttributeFakeDataFinished } from "../redux/loadAttributesFakeSlice"

async function fetchAsync<T>(
  func: () => Promise<{ ok: boolean; json: () => T }>
) {
  const response = await func()
  if (response.ok) {
    return response.json()
  }
  throw new Error("Unexpected error")
}

async function fetchAsyncParam<T, R>(
  func: (param: T) => Promise<{ ok: boolean; json: () => R }>,
  param: T
) {
  const response = await func(param)
  if (response.ok) {
    return response.json()
  }
  throw new Error("Unexpected error")
}

function* fetchModels() {
  try {
    const models: Model[] = yield fetchAsync<Model[]>(getModelTree)

    yield put({
      type: fetchFinished.type,
      payload: { models: buildTree(models) },
    })
  } catch (e) {
    yield put({ type: fetchFailure, error: e.message })
  }
}

function* fetchModelAttributes({ payload }) {
  try {
    const attributes: ModelAttribute[] = yield fetchAsyncParam<
      number,
      ModelAttribute[]
    >(getModelAttributes, payload.modelId)

    yield put({
      type: fetchAttributeFakeDataFinished.type,
      payload: { attributes: attributes },
    })
  } catch (e) {
    yield put({ type: fetchAttributeFakeDataFailed, error: e.message })
  }
}

export function* modelsLoadSaga() {
  yield all([
    takeEvery(fetchData, fetchModels),
    takeEvery(fetchAttributeFakeData, fetchModelAttributes),
  ])
}

export default modelsLoadSaga
