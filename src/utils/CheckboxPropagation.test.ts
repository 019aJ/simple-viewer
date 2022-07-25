import "@testing-library/jest-dom"
import { Model } from "../dto/Model"
import { propagate } from "./CheckboxPropagation"
describe("propagation tests", () => {
  it("up uncheck", () => {
    const tree: Model[] = [
      { id: 111, name: "Корень", path: "" },
      { id: 11, name: "Дочерний", path: "Корень" },
      { id: 1, name: "Лист", path: "Корень/Дочерний" },
      { id: 222, name: "Корень2", path: "" },
      { id: 2, name: "Лист2", path: "Корень2" },
    ]
    const checks: number[] = new Array(tree.length)
    checks.fill(1, 0, tree.length)

    const index = 2
    const state = 0
    const result = propagate(tree, checks, index, state)
    expect(result[0]).toBe(0)
    expect(result[1]).toBe(0)
    expect(result[2]).toBe(0)
    expect(result[3]).toBe(1)
    expect(result[4]).toBe(1)
  })
})
