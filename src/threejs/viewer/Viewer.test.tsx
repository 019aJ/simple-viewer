import ReactThreeTestRenderer from "@react-three/test-renderer"
import { Viewer } from "./Viewer"
import { Store } from "redux"
import "@testing-library/jest-dom"
import { Perspective } from "../Perspective"
import { ViewStyle } from "../ViewStyles"
import { Provider } from "react-redux"
import { buildTree } from "../../utils/TreeTransform"
import { modelList } from "../../modelstubs/ModelStub"
import { setupStore } from "../../redux/store"
import { act, render } from "@testing-library/react"
let store: Store
const tree = buildTree(modelList)
test("Viewer render test", async () => {
  store = setupStore({
    modelData: { value: tree, isLoading: false, isSuccess: true },
  })
  await act(async () => {
    render(
      <Provider store={store}>
        <Viewer
          cameraPos={Perspective.TOP}
          materialStyle={ViewStyle.WIREFRAME}
        />
      </Provider>
    )
  })
  /*const renderer = await ReactThreeTestRenderer.create(
    <Provider store={store}>
      <Viewer cameraPos={Perspective.TOP} materialStyle={ViewStyle.WIREFRAME} />
    </Provider>
  )
  const allChildren = renderer.scene.allChildren
  expect(allChildren.length).toBe(1)*/
  /* const section = allChildren[0]
  const line = section.allChildren[0]
  expect(line.props.object.type).toBe("Line2")*/
})
