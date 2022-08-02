import loadAttributesSlice, {
  fetchAttributeData,
  fetchAttributeDataFailed,
  fetchAttributeDataFinished,
} from "./loadAttributesSlice"
describe("loadAttributesSlice states tests", () => {
  it("initial state test", () => {
    expect(loadAttributesSlice(undefined, { type: "" })).toEqual({
      value: [],
      isLoading: true,
      isSuccess: true,
    })
  })
  it("fetchAttributeData state test", () => {
    expect(
      loadAttributesSlice(
        undefined,
        fetchAttributeData({
          modelId: 1,
        })
      )
    ).toStrictEqual({
      value: [],
      modelId: 1,
      isLoading: true,
      isSuccess: true,
    })
  })

  it("fetchAttributeDataFailed state test", () => {
    expect(
      loadAttributesSlice(undefined, fetchAttributeDataFailed())
    ).toStrictEqual({
      value: [],
      isLoading: false,
      isSuccess: false,
    })
  })

  it("fetchAttributeDataFinished state test", () => {
    expect(
      loadAttributesSlice(
        { modelId: 1, isLoading: true, isSuccess: true },
        fetchAttributeDataFinished({
          attributes: [{ id: 1, identifier: "1", name: "1", value: "1" }],
        })
      )
    ).toStrictEqual({
      isLoading: false,
      isSuccess: true,
      modelId: 1,
      value: [{ id: 1, identifier: "1", name: "1", value: "1" }],
    })
  })
})
