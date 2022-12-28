import checkboxSlice, { init, update, clear } from "./checkboxSlice"
describe("checkboxSlice states tests", () => {
  it("initial state test", () => {
    expect(checkboxSlice(undefined, { type: "" })).toEqual({
      value: [],
      tree: [],
    })
  })
  it("init state test", () => {
    expect(
      checkboxSlice(
        undefined,
        init({ checks: [1], tree: [{ id: 1, name: "1", path: "1" }] })
      )
    ).toStrictEqual({
      value: [1],
      tree: [{ id: 1, name: "1", path: "1" }],
    })
  })
  it("init empty state test", () => {
    expect(checkboxSlice(undefined, init({}))).toStrictEqual({
      value: [],
      tree: [],
    })
  })

  it("update state test", () => {
    expect(
      checkboxSlice(
        { value: [1], tree: [{ id: 1, name: "1", path: "1" }] },
        update({ cellIndex: 0, cellState: 0 })
      )
    ).toStrictEqual({
      value: [0],
      tree: [{ id: 1, name: "1", path: "1" }],
    })
  })

  it("clear state test", () => {
    expect(
      checkboxSlice(
        { value: [1], tree: [{ id: 1, name: "1", path: "1" }] },
        clear()
      )
    ).toEqual({
      value: [],
      tree: [],
    })
  })
})
