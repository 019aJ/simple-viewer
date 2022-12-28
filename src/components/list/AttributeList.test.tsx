import "@testing-library/jest-dom"
import { render, screen, act } from "@testing-library/react"
import { AttributeList } from "./AttributeList"
import { Store } from "redux"
import { setupStore } from "../../redux/store"
import { Provider } from "react-redux"
import { select } from "../../redux/treeSelectionSlice"
import { fetchData } from "../../redux/loadModelSlice"
import { modelList } from "../../modelstubs/ModelStub"
jest.mock("../../api/ModelApi")

let store: Store

describe("AttributeList render tests", () => {
  it("render empty AttributeList test", async () => {
    store = setupStore()

    await act(async () => {
      render(
        <Provider store={store}>
          <AttributeList />
        </Provider>
      )
    })

    expect(screen.getByText("Атрибуты модели")).toBeInTheDocument()
  })
})
