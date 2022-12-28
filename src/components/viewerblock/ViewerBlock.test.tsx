import { userEvent } from "@storybook/testing-library"
import "@testing-library/jest-dom"
import { act, fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { Store } from "redux"
import { setupStore } from "../../redux/store"
import { ViewStyle } from "../../threejs/ViewStyles"
import { ViewerBlock } from "./ViewerBlock"
import appStore from "../../redux/store"
import { Perspective } from "../../threejs/Perspective"

let store: Store
jest.mock("../../api/ModelApi")

describe("ViewerBlock render tests", () => {
  beforeEach(() => {
    store = appStore
  })
  it("render empty ViewerBlock test", async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <ViewerBlock />
        </Provider>
      )
    })

    expect(screen.getByText("Визуализация")).toBeInTheDocument()
    expect(screen.getByTestId("section")).toHaveClass("titleButton")
    expect(screen.getByTestId("section")).toHaveClass("showSection")

    expect(screen.getByText("Положение камеры:")).toBeInTheDocument()
    expect(screen.getByText("Тип отображения:")).toBeInTheDocument()
    expect(screen.getByTestId("length")).toBeInTheDocument()
    expect(screen.getByTestId("vector")).toBeInTheDocument()
    expect(screen.getByTestId("showTitle")).toHaveClass("titleButton")
    expect(screen.getByTestId("showTitle")).toHaveClass("showTitle")
  })
})

describe("ViewerBlock click tests", () => {
  beforeEach(() => {
    store = appStore
  })

  it("mesh style selection test", async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <ViewerBlock />
        </Provider>
      )
    })
    await act(async () => {
      const styles = screen.getByTestId("styles")
      userEvent.selectOptions(styles, screen.getByTestId(ViewStyle.WIREFRAME))
    })

    expect(store.getState().visualBlockData.meshStyle).toStrictEqual(
      ViewStyle.WIREFRAME.toString()
    )
  })
  it("show section click test", async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <ViewerBlock />
        </Provider>
      )
    })
    await act(async () => {
      screen
        .getByTestId("section")
        .dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })
    expect(store.getState().visualBlockData.plane.sectionsVisible).toBeTruthy()
    await act(async () => {
      fireEvent.change(screen.getByTestId("length"), {
        target: { value: "2" },
      })
    })
    expect(store.getState().visualBlockData.plane.vectorLength).toBe(2)
    await act(async () => {
      userEvent.selectOptions(
        screen.getByTestId("vector"),
        screen.getByTestId("z")
      )
    })
    expect(store.getState().visualBlockData.plane.normal).toStrictEqual([
      0, 0, 1,
    ])
    await act(async () => {
      userEvent.selectOptions(
        screen.getByTestId("vector"),
        screen.getByTestId("x")
      )
    })
    expect(store.getState().visualBlockData.plane.normal).toStrictEqual([
      1, 0, 0,
    ])
    await act(async () => {
      userEvent.selectOptions(
        screen.getByTestId("vector"),
        screen.getByTestId("y")
      )
    })
    expect(store.getState().visualBlockData.plane.normal).toStrictEqual([
      0, 1, 0,
    ])
  })

  it("show names click test", async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <ViewerBlock />
        </Provider>
      )
    })
    await act(async () => {
      screen
        .getByTestId("showTitle")
        .dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })
    expect(store.getState().visualBlockData.titleVisible).toBeTruthy()
  })

  it("cam position click test", async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <ViewerBlock />
        </Provider>
      )
    })
    await act(async () => {
      userEvent.selectOptions(
        screen.getByTestId("cam"),
        screen.getByTestId(Perspective.SOUTH)
      )
    })
    expect(store.getState().visualBlockData.camPosition).toBe(
      Perspective.SOUTH.toString()
    )
  })
})
