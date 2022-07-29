import { Model } from "../dto/Model"
import { setCenters } from "./FillCenterHelper"

describe("getCenter tests", () => {
  it("sqr center", () => {
    const models: Model[] = [
      {
        id: 1,
        name: "1",
        path: "",
        triangulation: [0, 0, 0, 2, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 2, 0],
      },
      {
        id: 2,
        name: "2",
        path: "",
        triangulation: [0, 0, 0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 2],
      },
    ]
    setCenters(models)
    expect(models[0].center).toStrictEqual([1, 1, 0])
    expect(models[1].center).toStrictEqual([1, 0, 1])
  })
  it("empty tr check", () => {
    const models: Model[] = [
      {
        id: 1,
        name: "1",
        path: "",
        triangulation: [],
      },
      {
        id: 2,
        name: "2",
        path: "",
      },
    ]
    setCenters(models)
    expect(models[0].center).toBeUndefined()
    expect(models[1].center).toBeUndefined()
  })
})
