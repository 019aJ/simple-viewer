import { all, fork } from "redux-saga/effects"
import modelsLoadSaga from "./loadDataSaga"
import modelSaga from "./modelSaga"
export default function* rootSaga() {
  yield all([fork(modelSaga), fork(modelsLoadSaga)])
}
