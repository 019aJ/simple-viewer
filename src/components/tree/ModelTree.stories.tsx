import { Provider } from "react-redux"
import { Model } from "../../dto/Model"
import { fetchFinished } from "../../redux/loadModelSlice"
import appStore from "../../redux/store"
import { ModelTree } from "./ModelTree"

export default {
  title: "ModelTree",
  component: ModelTree,
}
export const OneNodeTree = () => {
  const models: Model[] = [{ id: 1, name: "Корень", path: "" }]
  return (
    <Provider store={appStore}>
      <ModelTree models={models} />
    </Provider>
  )
}

export const TwoNodeTree = () => {
  const models: Model[] = [
    { id: 1, name: "Корень", path: "" },
    { id: 2, name: "Корень2", path: "" },
  ]
  return (
    <Provider store={appStore}>
      <ModelTree models={models} />
    </Provider>
  )
}

export const SomeNodesTree = () => {
  const models: Model[] = [
    { id: 1, name: "Корень", path: "" },
    { id: 11, name: "Дочерний", path: "Корень" },
    { id: 111, name: "Лист", path: "Корень/Дочерний" },
    { id: 2, name: "Корень2", path: "" },
  ]
  appStore.dispatch(fetchFinished({ models }))
  return (
    <Provider store={appStore}>
      <ModelTree models={models} />
    </Provider>
  )
}
