import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { ButtonPanel } from "./ButtonPanel"
describe("ButtonPanel render tests", () => {
  it("render ButtonPanel test", () => {
    render(
      <ButtonPanel title="title">
        <div>test</div>
      </ButtonPanel>
    )

    expect(screen.getByText("title")).toBeInTheDocument()
    expect(screen.getByText("test")).toBeInTheDocument()
  })

  it("render no title test", () => {
    render(
      <ButtonPanel>
        <div>test</div>
      </ButtonPanel>
    )
    expect(screen.getByTestId("btnPanel").children.length).toBe(1)
  })
})
