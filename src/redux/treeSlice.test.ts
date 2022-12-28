import treeSlice, { expand, collapse } from "./treeSlice"
describe("treeSlice states tests", () => {
  it("initial state test", () => {
    expect(treeSlice(undefined, { type: "" })).toEqual({ isOpen: true })
  })
  it("expand state test", () => {
    expect(treeSlice({ isOpen: false }, expand())).toEqual({ isOpen: true })
  })
  it("collapse state test", () => {
    expect(treeSlice({ isOpen: true }, collapse())).toEqual({
      isOpen: false,
    })
  })
})
