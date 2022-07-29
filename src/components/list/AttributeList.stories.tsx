import { Provider } from "react-redux"
import { Model } from "../../dto/Model"
import { fetchFinished } from "../../redux/loadModelSlice"
import { select } from "../../redux/treeSelectionSlice"
import appStore from "../../redux/store"
import { AttributeList } from "./AttributeList"

export default {
  title: "AttributeList",
  component: AttributeList,
}

export const AttributeValues = () => {
  const models: Model[] = [{ id: 1, name: "Лист", path: "Корень/Дочерний" }]
  appStore.dispatch(fetchFinished({ models }))
  appStore.dispatch(select({ modelId: 1 }))

  return (
    <Provider store={appStore}>
      <AttributeList />
    </Provider>
  )
}

export const EmptyAttributeValues = () => {
  const models: Model[] = [{ id: 1, name: "Лист", path: "Корень/Дочерний" }]
  appStore.dispatch(fetchFinished({ models }))
  appStore.dispatch(select({ modelId: undefined }))

  return (
    <Provider store={appStore}>
      <AttributeList />
    </Provider>
  )
}
