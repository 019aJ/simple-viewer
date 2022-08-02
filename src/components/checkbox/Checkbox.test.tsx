import "@testing-library/jest-dom"
import { render, screen, act } from "@testing-library/react"
import { Checkbox } from "./Checkbox"
describe("Checkbox render tests", () => {
  it("render Checkbox test", async () => {
    let value = -5
    await act(() => {
      render(
        <Checkbox
          initialState={1}
          onClick={(v) => {
            value = v
          }}
        />
      )
    })
    const checkbox: HTMLInputElement = screen.getByTestId("checkbox")
    expect(checkbox).toBeInTheDocument()

    expect(checkbox.indeterminate).toBeFalsy()
    expect(checkbox.checked).toBeTruthy()

    act(() => {
      checkbox.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })
    expect(value).toBe(0)
    expect(checkbox.indeterminate).toBeFalsy()
    expect(checkbox.checked).toBeFalsy()

    act(() => {
      checkbox.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })
    expect(checkbox.indeterminate).toBeFalsy()
    expect(checkbox.checked).toBeTruthy()

    expect(value).toBe(1)
  })

  it("render Checkbox unchecked initialstate test", async () => {
    let value = -5
    await act(() => {
      render(
        <Checkbox
          initialState={0}
          onClick={(v) => {
            value = v
          }}
        />
      )
    })
    const checkbox: HTMLInputElement = screen.getByTestId("checkbox")
    expect(checkbox).toBeInTheDocument()
    expect(checkbox.indeterminate).toBeFalsy()
    expect(checkbox.checked).toBeFalsy()
    act(() => {
      checkbox.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })
    expect(checkbox.indeterminate).toBeFalsy()
    expect(checkbox.checked).toBeTruthy()
    expect(value).toBe(1)
  })
  it("halfcheck Checkbox test", async () => {
    let value = -5
    await act(() => {
      render(
        <Checkbox
          initialState={2}
          onClick={(v) => {
            value = v
          }}
        />
      )
    })
    const checkbox: HTMLInputElement = screen.getByTestId("checkbox")
    expect(checkbox).toBeInTheDocument()
    expect(checkbox.indeterminate).toBeTruthy()
    act(() => {
      checkbox.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })
    expect(value).toBe(1)
    expect(checkbox.indeterminate).toBeFalsy()
  })
})
