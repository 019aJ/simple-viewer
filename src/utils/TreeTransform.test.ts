import "@testing-library/jest-dom"
import { Model } from "../dto/Model"
import { buildTree } from "./TreeTransform"
const tree: Model[] = [
  { id: 1, name: "Лист", path: "Корень/Дочерний" },
  { id: 2, name: "Лист2", path: "Корень/Дочерний2" },
  { id: 3, name: "Лист3", path: "Корень2/Дочерний" },
  { id: 4, name: "Лист4", path: "Корень/Дочерний2" },
]
const treeResult: Model[] = [
  { id: 1000, name: "Корень", path: "" },
  { id: 1001, name: "Дочерний", path: "Корень" },
  { id: 1, name: "Лист", path: "Корень/Дочерний" },
  { id: 1003, name: "Дочерний2", path: "Корень" },
  { id: 2, name: "Лист2", path: "Корень/Дочерний2" },
  { id: 4, name: "Лист4", path: "Корень/Дочерний2" },
  { id: 1006, name: "Корень2", path: "" },
  { id: 1007, name: "Дочерний", path: "Корень2" },
  { id: 3, name: "Лист3", path: "Корень2/Дочерний" },
]

describe("buildTree tests", () => {
  it("simple tree", () => {
    const result = buildTree(tree)
    expect(result).toStrictEqual(treeResult)
  })

  it("one node tree", () => {
    const result = buildTree([{ id: 1, name: "Корень", path: "" }])
    expect(result).toStrictEqual([{ id: 1, name: "Корень", path: "" }])
  })
})

describe("incorrect trees tests", () => {
  it("wrong one node tree", () => {
    const result = buildTree([{ id: 1, name: "Корень", path: "/" }])
    expect(result).toStrictEqual([{ id: 1, name: "Корень", path: "" }])
  })
  it("wrong two node tree", () => {
    const result = buildTree([{ id: 1, name: "Лист", path: "/Корень" }])
    expect(result).toStrictEqual([
      { id: 1000, name: "Корень", path: "" },
      { id: 1, name: "Лист", path: "Корень" },
    ])
  })

  it("spaces in path two node tree", () => {
    const result = buildTree([{ id: 1, name: "Лист", path: " /Корень " }])
    expect(result).toStrictEqual([
      { id: 1000, name: "Корень", path: "" },
      { id: 1, name: "Лист", path: "Корень" },
    ])
  })
})
