import "@testing-library/jest-dom"
import { act, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { Store } from "redux"
import { modelList } from "../../modelstubs/ModelStub"
import { setupStore } from "../../redux/store"
import { buildTree } from "../../utils/TreeTransform"
import { ModelBlock } from "./ModelBlock"

let store: Store
const tree = buildTree(modelList)

describe("ModelBlock render tests", () => {
  it("render empty ModelBlock test", async () => {
    store = setupStore()
    await act(async () => {
      render(
        <Provider store={store}>
          <ModelBlock />
        </Provider>
      )
    })

    expect(screen.getByText("Атрибуты модели")).toBeInTheDocument()
    expect(screen.getByText("Загрузка данных...")).toBeInTheDocument()
  })
  it("render ModelBlock with loaded tree test", async () => {
    store = setupStore({
      modelData: { value: tree, isLoading: false, isSuccess: true },
    })

    await act(async () => {
      render(
        <Provider store={store}>
          <ModelBlock />
        </Provider>
      )
    })
    expect(screen.getByTestId("modelTree")).toBeInTheDocument()
    expect(screen.getByTestId("Список моделей").style.width).toBe("400px")
  })
})

describe("Buttons click tests", () => {
  it("show attr click", async () => {
    store = setupStore({
      modelData: { value: tree, isLoading: false, isSuccess: true },
      attributeVisibility: { isVisible: true },
    })
    await act(async () => {
      render(
        <Provider store={store}>
          <ModelBlock />
        </Provider>
      )
    })
    expect(screen.getByText("Параметры модели")).toBeInTheDocument()

    const show = screen.getByTestId("show")
    expect(show.title).toEqual("Скрыть блок атрибутов")
    expect(show).toHaveClass("blockButton")
    expect(show).toHaveClass("hide")

    act(() => {
      show.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })
    expect(screen.queryByText("Параметры модели")).toBeNull()
    expect(show.title).toEqual("Показать блок атрибутов")
    expect(show).toHaveClass("blockButton")
    expect(show).toHaveClass("show")
    const currentState = store.getState()
    expect(currentState.attributeVisibility.isVisible).toBe(false)
    act(() => {
      show.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })
    expect(store.getState().attributeVisibility.isVisible).toBe(true)
  })
  it("collapse/expand all click", async () => {
    store = setupStore({
      modelData: { value: tree, isLoading: false, isSuccess: true },
    })

    await act(async () => {
      render(
        <Provider store={store}>
          <ModelBlock />
        </Provider>
      )
    })
    const expand = screen.getByTestId("expandTree")
    const collapse = screen.getByTestId("collapseTree")
    expect(expand).toHaveClass("expand")
    expect(expand).toHaveClass("blockButton")
    expect(collapse).toHaveClass("collapse")
    expect(collapse).toHaveClass("blockButton")
    expect(screen.getByTestId("treeParentCont1000")).toBeInTheDocument()
    expect(screen.getByTestId("treeParentCont1000")).toHaveClass("active")
    act(() => {
      collapse.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })
    expect(screen.getByTestId("treeParentCont1000")).toBeInTheDocument()
    expect(screen.getByTestId("treeParentCont1000")).toHaveClass("nested")
    act(() => {
      expand.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })
    expect(screen.getByTestId("treeParentCont1000")).toHaveClass("active")
  })
})
