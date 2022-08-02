import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { TreeLeaf } from "../treeleaf/TreeLeaf"
import { TreeParent } from "./TreeParent"

describe("TreeParent render tests", () => {
  it("render open TreeParent test", () => {
    render(
      <TreeParent
        id="1"
        name="1"
        isChecked={1}
        onCheckboxClick={() => {}}
        isOpen={true}
      >
        <TreeLeaf
          id="2"
          name="2"
          isChecked={1}
          onCheckboxClick={() => {}}
          onRowClick={() => {}}
        />
      </TreeParent>
    )
    expect(screen.getByTestId("treeLeaf")).toBeInTheDocument()
    expect(screen.getByTestId("treeParent1")).toBeInTheDocument()
    expect(screen.getByTestId("treeParentCont1")).toHaveClass("active")
  })
  it("render closed TreeParent test", () => {
    render(
      <TreeParent
        id="1"
        name="1"
        isChecked={1}
        onCheckboxClick={() => {}}
        isOpen={false}
      >
        <TreeLeaf
          id="2"
          name="2"
          isChecked={1}
          onCheckboxClick={() => {}}
          onRowClick={() => {}}
        />
      </TreeParent>
    )
    expect(screen.getByTestId("treeParentCont1")).toHaveClass("nested")
  })
  it("open/close test", async () => {
    render(
      <TreeParent
        id="1"
        name="1"
        isChecked={1}
        onCheckboxClick={() => {}}
        isOpen={false}
      >
        <TreeLeaf
          id="2"
          name="2"
          isChecked={1}
          onCheckboxClick={() => {}}
          onRowClick={() => {}}
        />
      </TreeParent>
    )
    expect(screen.getByTestId("treeParentCont1")).toHaveClass("nested")
    await act(() => {
      screen
        .getByTestId("row1")
        .dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })
    expect(screen.getByTestId("treeParentCont1")).toHaveClass("active")
  })
  it("checkbox test", async () => {
    let cbValue = -1

    render(
      <TreeParent
        id="1"
        name="1"
        isChecked={1}
        onCheckboxClick={(e) => {
          cbValue = e
        }}
        isOpen={false}
      >
        <TreeLeaf
          id="2"
          name="2"
          isChecked={1}
          onCheckboxClick={() => {}}
          onRowClick={() => {}}
        />
      </TreeParent>
    )
    expect(screen.getByTestId("treeParentCont1")).toHaveClass("nested")
    await act(() => {
      screen
        .getAllByTestId("checkbox")[0]
        .dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })
    expect(cbValue).toEqual(0)
  })
})
