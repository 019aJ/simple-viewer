import "@testing-library/jest-dom"
import { Model } from "../dto/Model"
import {
  isLeaf,
  getCurrentPath,
  getAllParentIndexes,
  getAllChildrenIndexes,
  getChildrenIndexes,
} from "./TreePathHelper"
const tree: Model[] = [
  { id: 111, name: "Корень", path: "" },
  { id: 11, name: "Дочерний", path: "Корень" },
  { id: 1, name: "Лист", path: "Корень/Дочерний" },
  { id: 222, name: "Дочерний2", path: "Корень" },
  { id: 2, name: "Лист2", path: "Корень/Дочерний2" },
]
describe("isLeaf tests", () => {
  it("is leaf", () => {
    const result = isLeaf(tree, 2, tree[2].path)
    expect(result).toBeTruthy()
  })

  it("last is leaf", () => {
    const result = isLeaf(tree, 4, tree[4].path)
    expect(result).toBeTruthy()
  })
  it("not Leaf", () => {
    const result = isLeaf(tree, 0, tree[0].path)
    expect(result).toBeFalsy()
  })

  it("out of bounds", () => {
    expect(isLeaf(tree, -1, "")).toBeFalsy()
    expect(isLeaf(tree, 5, "")).toBeFalsy()
  })

  it("root == Leaf", () => {
    const result = isLeaf(
      [{ id: 111, name: "Корень", path: "" }],
      0,
      tree[0].path
    )
    expect(result).toBeTruthy()
  })
})

describe("getCurrentPath tests", () => {
  it("rootPath", () => {
    const result = getCurrentPath(tree[0])
    expect(result).toBe("Корень")
  })

  it("leaf path", () => {
    const result = getCurrentPath(tree[2])
    expect(result).toBe("Корень/Дочерний/Лист")
  })
})

describe("getAllParentIndexes tests", () => {
  it("from leaf", () => {
    const result = getAllParentIndexes(tree[2], 2, tree)
    expect(result).toStrictEqual([1, 0])
  })

  it("from middle", () => {
    const result = getAllParentIndexes(tree[3], 3, tree)
    expect(result).toStrictEqual([0])
  })

  it("from root", () => {
    const result = getAllParentIndexes(tree[0], 0, tree)
    expect(result).toStrictEqual([])
  })
})

describe("getChildrenIndexes tests", () => {
  it("from leaf", () => {
    const result = getChildrenIndexes(2, tree)
    expect(result).toStrictEqual([])
  })

  it("from middle", () => {
    const result = getChildrenIndexes(1, tree)
    expect(result).toStrictEqual([2])
  })

  it("from root", () => {
    const result = getChildrenIndexes(0, tree)
    expect(result).toStrictEqual([1, 3])
  })
})

describe("getAllChildrenIndexes tests", () => {
  it("from leaf", () => {
    const result = getAllChildrenIndexes(2, tree)
    expect(result).toStrictEqual([])
  })

  it("from middle", () => {
    const result = getAllChildrenIndexes(1, tree)
    expect(result).toStrictEqual([2])
  })

  it("from root", () => {
    const result = getAllChildrenIndexes(0, tree)
    expect(result).toStrictEqual([1, 2, 3, 4])
  })
})
