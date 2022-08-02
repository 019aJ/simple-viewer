import "@testing-library/jest-dom"
import { render, screen, act } from "@testing-library/react"
import { ModelTree } from "./ModelTree"
import { Store } from "redux"
import { setupStore } from "../../redux/store"
import { Provider } from "react-redux"

import { modelList } from "../../modelstubs/ModelStub"
import { buildTree } from "../../utils/TreeTransform"
import { Model } from "../../dto/Model"

let store: Store
const tree = buildTree(modelList)
describe("ModelTree render tests", () => {
  it("render ModelTree test", async () => {
    store = setupStore({
      modelData: { value: tree, isLoading: false, isSuccess: true },
    })
    await act(async () => {
      render(
        <Provider store={store}>
          <ModelTree models={tree} />
        </Provider>
      )
    })
    expect(screen.getAllByTestId("checkbox").length).toBeGreaterThan(0)
    expect(screen.getAllByTestId("treeLeaf").length).toBeGreaterThan(0)
  })

  it("render short tree test", async () => {
    const shortTree: Model[] = [
      { id: 1, name: "1", path: "" },
      { id: 2, name: "2", path: "1" },
      { id: 3, name: "3", path: "1/2" },
      { id: 4, name: "4", path: "" },
      { id: 5, name: "5", path: "4" },
      { id: 6, name: "6", path: "" },
      { id: 7, name: "7", path: "6" },
    ]
    store = setupStore({
      modelData: { value: shortTree, isLoading: false, isSuccess: true },
    })
    await act(async () => {
      render(
        <Provider store={store}>
          <ModelTree models={shortTree} />
        </Provider>
      )
    })

    expect(screen.getAllByTestId("checkbox").length).toBe(7)
    expect(screen.getAllByTestId("treeLeaf").length).toBe(3)

    expect(screen.getByTestId("row1")).toBeInTheDocument()
    expect(screen.getByTestId("row2")).toBeInTheDocument()
    expect(screen.getByTestId("row4")).toBeInTheDocument()
    expect(screen.getByTestId("row6")).toBeInTheDocument()
    expect(screen.getByTestId("treeParentCont4").childNodes.length).toBe(1)
  })
})

describe("ModelTree render tests", () => {
  it("init checks test", async () => {
    store = setupStore()
    const checksTreeBefore: number[] = store.getState().checks.tree
    expect(checksTreeBefore.length).toBe(0)

    await act(async () => {
      render(
        <Provider store={store}>
          <ModelTree models={tree} />
        </Provider>
      )
    })
    const checksTreeAfter: number[] = store.getState().checks.tree
    expect(checksTreeAfter.length).not.toBe(0)
  })
})

describe("click tests", () => {
  it("checkbox test", async () => {
    const checks: number[] = new Array(tree.length)
    checks.fill(1, 0, tree.length)
    store = setupStore({
      modelData: { value: tree, isLoading: false, isSuccess: true },
      checks: { tree, value: checks },
    })
    await act(async () => {
      render(
        <Provider store={store}>
          <ModelTree models={tree} />
        </Provider>
      )
    })
    const checksBefore: number[] = store.getState().checks.value
    await act(async () => {
      const leafRow = screen.getAllByTestId("treeLeaf")[0]
      leafRow.children[0].dispatchEvent(
        new MouseEvent("click", { bubbles: true })
      )
    })

    const checksAfter: number[] = store.getState().checks.value
    expect(checksAfter).not.toStrictEqual(checksBefore)
    //Нажать на родительский
    await act(async () => {
      const rootRow = screen.getByTestId("row1000")
      rootRow.parentElement?.children[1].dispatchEvent(
        new MouseEvent("click", { bubbles: true })
      )
    })
    const checksAfterParent: number[] = store.getState().checks.value
    expect(checksAfter).not.toStrictEqual(checksAfterParent)
  })
  it("detail click test", async () => {
    const checks: number[] = new Array(tree.length)
    checks.fill(1, 0, tree.length)
    store = setupStore({
      modelData: { value: tree, isLoading: false, isSuccess: true },
      checks: { tree, value: checks },
    })
    await act(async () => {
      render(
        <Provider store={store}>
          <ModelTree models={tree} />
        </Provider>
      )
    })
    await act(async () => {
      screen
        .getAllByTestId("treeLeafLabel")[0]
        .dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })
    const selection: number = store.getState().treeSelection.value
    expect(selection).not.toBeUndefined()
  })
})
