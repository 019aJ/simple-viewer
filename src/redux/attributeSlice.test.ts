import attributeSlice, { hide, show } from "./attributeSlice"

describe("attributeSlice states tests", () => {
  it("initial state test", () => {
    expect(attributeSlice(undefined, { type: "" })).toEqual({
      isVisible: true,
    })
  })
  it("show state test", () => {
    expect(attributeSlice(undefined, show())).toEqual({
      isVisible: true,
    })
  })
  it("hide state test", () => {
    expect(attributeSlice(undefined, hide())).toEqual({
      isVisible: false,
    })
  })
})
