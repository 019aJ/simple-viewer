import { Provider } from "react-redux"
import { modelList } from "../../modelstubs/ModelStub"
import { init } from "../../redux/checkboxSlice"
import appStore from "../../redux/store"
import { ViewerBlock } from "./ViewerBlock"
export default {
  title: "ViewerBlock",
  component: ViewerBlock,
}

export const ViewerWithStubModels = () => {
  const models = modelList
  const checks: number[] = new Array(models.length)
  checks.fill(1, 0, models.length)
  appStore.dispatch(init({ tree: models, checks }))
  return (
    <Provider store={appStore}>
      <ViewerBlock />
    </Provider>
  )
}
