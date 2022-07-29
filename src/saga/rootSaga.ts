import { all, fork } from "redux-saga/effects"
import attributesLoadSaga from "./loadAttributeDataSaga"
import modelsLoadSaga from "./loadDataSaga"
export default function* rootSaga() {
  yield all([fork(modelsLoadSaga), fork(attributesLoadSaga)])
}
