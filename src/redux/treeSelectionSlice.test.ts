import treeSelectionSlice, { clear, select } from "./treeSelectionSlice"
describe("treeSelectionSlice states tests", () => {
  it("initial state test", () => {
    expect(treeSelectionSlice(undefined, { type: "" })).toEqual({})
  })
  it("clear state test", () => {
    expect(treeSelectionSlice({ value: 1 }, clear())).toEqual({})
  })
  it("select state test", () => {
    expect(treeSelectionSlice({ value: 1 }, select({ modelId: 2 }))).toEqual({
      value: 2,
    })
  })
})
