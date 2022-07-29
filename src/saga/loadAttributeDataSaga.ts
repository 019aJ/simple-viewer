import { put, takeEvery } from "redux-saga/effects"
import { getModelAttributes } from "../api/ModelApi"
import { ModelAttribute } from "../dto/ModelAttribute"

import {
  ActionType,
  fetchAttributeData,
  fetchAttributeDataFailed,
  fetchAttributeDataFinished,
} from "../redux/loadAttributesSlice"

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

function* fetchModelAttributes({ payload }: ActionType) {
  try {
    const attributes: ModelAttribute[] = payload.modelId
      ? yield fetchAsyncParam<number, ModelAttribute[]>(
          getModelAttributes,
          payload.modelId
        )
      : undefined

    yield put({
      type: fetchAttributeDataFinished.type,
      payload: { attributes: attributes },
    })
  } catch (e) {
    yield put({ type: fetchAttributeDataFailed.type })
  }
}
export default function* attributesLoadSaga() {
  yield takeEvery(fetchAttributeData, fetchModelAttributes)
}
