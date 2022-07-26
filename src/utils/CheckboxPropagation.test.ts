import "@testing-library/jest-dom"
import { Model } from "../dto/Model"
import { propagate } from "./CheckboxPropagation"
const tree: Model[] = [
  { id: 111, name: "Корень", path: "" },
  { id: 11, name: "Дочерний", path: "Корень" },
  { id: 1, name: "Лист", path: "Корень/Дочерний" },
  { id: 222, name: "Корень2", path: "" },
  { id: 2, name: "Лист2", path: "Корень2" },
]
const checks: number[] = new Array(tree.length)
describe("propagation uncheck tests", () => {
  beforeEach(() => {
    checks.fill(1, 0, tree.length)
  })
  it("up uncheck", () => {
    const index = 2
    const state = 0
    const result = propagate(tree, checks, index, state)
    expect(result).toStrictEqual([0, 0, 0, 1, 1])
  })
  it("down uncheck", () => {
    const index = 0
    const state = 0
    const result = propagate(tree, checks, index, state)
    expect(result).toStrictEqual([0, 0, 0, 1, 1])
  })

  it("middle uncheck", () => {
    const index = 1
    const state = 0
    const result = propagate(tree, checks, index, state)
    expect(result).toStrictEqual([0, 0, 0, 1, 1])
  })
})

describe("propagation check tests", () => {
  beforeEach(() => {
    checks.fill(0, 0, tree.length)
  })
  it("up check", () => {
    const index = 2
    const state = 1
    const result = propagate(tree, checks, index, state)
    expect(result).toStrictEqual([1, 1, 1, 0, 0])
  })
  it("down check", () => {
    const index = 0
    const state = 1
    const result = propagate(tree, checks, index, state)
    expect(result).toStrictEqual([1, 1, 1, 0, 0])
  })

  it("middle check", () => {
    const index = 1
    const state = 1
    const result = propagate(tree, checks, index, state)
    expect(result).toStrictEqual([1, 1, 1, 0, 0])
  })
})
const tree2: Model[] = [
  { id: 111, name: "Корень", path: "" },
  { id: 11, name: "Дочерний", path: "Корень" },
  { id: 1, name: "Лист", path: "Корень/Дочерний" },
  { id: 222, name: "Дочерний2", path: "Корень" },
  { id: 2, name: "Лист2", path: "Корень/Дочерний2" },
]
describe("propagation halfcheck tests", () => {
  it("up check -> halfcheck", () => {
    const checks: number[] = new Array(tree.length)
    checks.fill(1, 0, tree2.length)
    const index = 1
    const state = 0
    const result = propagate(tree2, checks, index, state)

    expect(result).toStrictEqual([2, 0, 0, 1, 1])
  })
  it("up halfcheck -> check", () => {
    const checks: number[] = [2, 1, 1, 0, 0]
    const index = 4
    const state = 1
    const result = propagate(tree2, checks, index, state)
    console.log(result)

    expect(result).toStrictEqual([1, 1, 1, 1, 1])
  })

  it("up halfcheck -> uncheck", () => {
    const checks: number[] = [2, 1, 1, 0, 0]
    const index = 2
    const state = 0
    const result = propagate(tree2, checks, index, state)

    expect(result).toStrictEqual([0, 0, 0, 0, 0])
  })

  it("up uncheck -> halfcheck", () => {
    const checks: number[] = new Array(tree.length)
    checks.fill(0, 0, tree2.length)
    const index = 2
    const state = 1
    const result = propagate(tree2, checks, index, state)

    expect(result).toStrictEqual([2, 1, 1, 0, 0])
  })
})

describe("wrong input tests", () => {
  beforeEach(() => {
    checks.fill(0, 0, tree.length)
  })
  it("2 as state", () => {
    const index = 1
    const state = 2
    const result = propagate(tree, checks, index, state)

    expect(result).toStrictEqual(checks)
  })
  it("wrong index", () => {
    const index = 5
    const state = 1
    const result = propagate(tree, checks, index, state)

    expect(result).toStrictEqual(checks)
  })

  it("negative index", () => {
    const index = -1
    const state = 1
    const result = propagate(tree, checks, index, state)

    expect(result).toStrictEqual(checks)
  })

  it("undefined index", () => {
    const index = undefined
    const state = 0
    const result = propagate(tree, checks, index, state)

    expect(result).toStrictEqual([0, 0, 0, 0, 0])
  })
})
