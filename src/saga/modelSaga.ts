import { put, takeEvery, all, fork } from "redux-saga/effects"
import { clear, select, updateFinished } from "../redux/modelSlice"
export function* saveFlowSaga() {
  yield put({ type: updateFinished.type })
}

function* watchOnFlow(type: string) {
  yield takeEvery(type, saveFlowSaga)
}

export default function* modelSaga() {
  yield all([fork(watchOnFlow, select.type), fork(watchOnFlow, clear.type)])
}
