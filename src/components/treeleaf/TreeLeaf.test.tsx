import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { TreeLeaf } from "./TreeLeaf"

describe("ModelBlock render tests", () => {
  it("render empty ModelBlock test", () => {
    render(
      <TreeLeaf
        id="1"
        name="1"
        isChecked={1}
        onCheckboxClick={() => {}}
        onRowClick={() => {}}
      />
    )
    expect(screen.getByTestId("treeLeaf")).toBeInTheDocument()
  })
})
