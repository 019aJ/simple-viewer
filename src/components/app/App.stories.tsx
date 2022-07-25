import { Provider } from "react-redux"
import { Model } from "../../dto/Model"
import { fetchFinished } from "../../redux/loadModelSlice"
import appStore from "../../redux/store"
import { App } from "./App"

export default {
  title: "App",
  component: App,
}

export const SomeNodesTree = () => {
  return (
    <Provider store={appStore}>
      <App />
    </Provider>
  )
}
