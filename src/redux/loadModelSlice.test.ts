import loadModelSlice, {
  fetchData,
  fetchFailure,
  fetchFinished,
} from "./loadModelSlice"

describe("modelLoadSlice states tests", () => {
  it("initial state test", () => {
    expect(loadModelSlice(undefined, { type: "" })).toEqual({
      value: [],
      isLoading: true,
      isSuccess: true,
    })
  })
  it("fetchData state test", () => {
    expect(
      loadModelSlice(
        {
          value: [],
          isLoading: false,
          isSuccess: true,
        },
        fetchData()
      )
    ).toStrictEqual({
      value: [],
      isLoading: true,
      isSuccess: true,
    })
  })

  it("fetchFailure state test", () => {
    expect(loadModelSlice(undefined, fetchFailure())).toStrictEqual({
      value: [],
      isLoading: false,
      isSuccess: false,
    })
  })

  it("fetchFinished state test", () => {
    expect(
      loadModelSlice(
        { value: [], isLoading: true, isSuccess: true },
        fetchFinished({
          models: [{ id: 1, name: "1", path: "1" }],
        })
      )
    ).toStrictEqual({
      isLoading: false,
      isSuccess: true,
      value: [{ id: 1, name: "1", path: "1" }],
    })
  })
})
