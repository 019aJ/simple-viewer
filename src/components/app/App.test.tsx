jest.mock("../../api/ModelApi")
import "@testing-library/jest-dom"
import { act, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { Store } from "redux"
import appStore from "../../redux/store"
import { App } from "./App"
let store: Store
jest.mock("../../api/ModelApi")

describe("App render tests", () => {
  beforeEach(() => {
    store = appStore
  })
  it("render APP test", async () => {
    await act(() => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      )
    })

    expect(screen.getByTestId("modelBlock")).toBeInTheDocument()
    expect(screen.getByTestId("viewerBlock")).toBeInTheDocument()
    expect(screen.getByTestId("modelTree")).toBeInTheDocument()
  })
})
