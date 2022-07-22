import { Model } from "../dto/Model"

export const isLeaf = (models: Model[], index: number, currentPath: string) =>
  index + 1 < models.length && !models[index + 1].path.startsWith(currentPath)

export const getCurrentPath = (currentModel: Model) =>
  currentModel.path
    ? currentModel.path + "/" + currentModel.name
    : currentModel.name

export const getAllParents = (
  currentModel: Model,
  index: number,
  tree: Model[]
) => {
  const parents: Model[] = []
  let currentPath = currentModel.path
  for (let i = index - 1; i > 0; index--) {
    const node = tree[i]
    if (getCurrentPath(node) === currentPath) {
      parents.push(node)
      currentPath = node.path
    }
  }
  return parents
}

export const getAllParentIndexes = (
  currentModel: Model,
  index: number,
  tree: Model[]
) => {
  const parents: number[] = []
  let currentPath = currentModel.path
  for (let i = index - 1; i >= 0; i--) {
    const node = tree[i]
    const nodePath = getCurrentPath(node)
    if (nodePath === currentPath) {
      parents.push(i)
      currentPath = node.path
    }
  }
  return parents
}

export const getChildrenIndexes = (index: number, tree: Model[]) => {
  const currentModel = tree[index]
  const parentPath = getCurrentPath(currentModel)
  const indexes: number[] = []

  for (let i = index + 1; i < tree.length; i++) {
    const node = tree[i]
    if (parentPath === node.path) {
      indexes.push(i)
    } else if (!node.path.startsWith(parentPath)) {
      return indexes
    }
  }
  return indexes
}

export const getAllChildrenIndexes = (index: number, tree: Model[]) => {
  const currentModel = tree[index]
  const parentPath = getCurrentPath(currentModel)
  const indexes: number[] = []

  for (let i = index + 1; i < tree.length; i++) {
    const node = tree[i]
    if (node.path.startsWith(parentPath)) {
      indexes.push(i)
    } else {
      return indexes
    }
  }
  return indexes
}
