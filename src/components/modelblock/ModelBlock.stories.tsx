import { Provider } from "react-redux"
import { Model } from "../../dto/Model"
import { fetchFinished } from "../../redux/loadModelSlice"
import appStore from "../../redux/store"
import { ModelTree } from "../tree/ModelTree"
import { ModelBlock } from "./ModelBlock"

export default {
  title: "ModelBlock",
  component: ModelBlock,
}

export const SomeNodesTree = () => {
  const models: Model[] = [
    { id: 111, name: "Корень", path: "" },
    { id: 11, name: "Дочерний", path: "Корень" },
    { id: 1, name: "Лист", path: "Корень/Дочерний" },
    { id: 222, name: "Корень2", path: "" },
    { id: 2, name: "Лист2", path: "Корень2" },
  ]
  appStore.dispatch(fetchFinished({ models }))
  return (
    <Provider store={appStore}>
      <ModelBlock />
    </Provider>
  )
}
