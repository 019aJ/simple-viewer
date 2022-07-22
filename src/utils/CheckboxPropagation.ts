import { Model } from "../dto/Model"
import {
  getAllChildrenIndexes,
  getAllParentIndexes,
  getChildrenIndexes,
  getCurrentPath,
  isLeaf,
} from "./TreePathHelper"

export const propagate = (
  tree: Model[],
  checks: number[],
  index: number | undefined,
  state: number | undefined
) => {
  if ((index || index === 0) && (state === 0 || state === 1)) {
    const checksCopy = [...checks]
    console.log(checksCopy[index], "->", state, " for index", index)
    const model = tree[index]
    checksCopy[index] = state
    //propagate up - to parents
    propagateUp(tree, checksCopy, index, state, model)
    if (!isLeaf(tree, index, getCurrentPath(model))) {
      propagateDown(tree, checksCopy, index, state)
    }
    return checksCopy
  }
  return checks
}

const propagateDown = (
  tree: Model[],
  checksCopy: number[],
  index: number,
  state: number,
) => {
  const childrenIndexes = getAllChildrenIndexes(index, tree)
  //set same value to all children
  childrenIndexes.forEach(i => {checksCopy[i] = state})
}

const propagateUp = (
  tree: Model[],
  checksCopy: number[],
  index: number,
  state: number,
  model: Model
) => {
  const parents = getAllParentIndexes(model, index, tree)
  parents.forEach((i) => {
    const childrenIndexes = getChildrenIndexes(i, tree)
    const checkedCount = childrenIndexes.filter(
      (x) => checksCopy[x] === 1
    ).length
    //change to 0 or 2
    if (state === 0) {
      checksCopy[i] = checkedCount === 0 ? 0 : 2
    } else {
      //change to 1 or 2
      checksCopy[i] = checkedCount === childrenIndexes.length ? 1 : 2
    }
  })
}
