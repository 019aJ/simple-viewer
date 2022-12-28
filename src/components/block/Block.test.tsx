import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { Block } from "./Block"
describe("Block render tests", () => {
  it("render Block test", () => {
    render(
      <Block title="title" widgets={[<div key="1">button</div>]}>
        <div>text</div>
      </Block>
    )

    expect(screen.getByText("title")).toBeInTheDocument()
    expect(screen.getByText("text")).toBeInTheDocument()
    expect(screen.getByText("button")).toBeInTheDocument()
  })
})
