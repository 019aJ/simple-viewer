import { Model } from "../dto/Model"

export const buildTree = (models: Model[]) => {
  const treePaths = models.flatMap((x) => {
    const pathArray = x.path.split("/")
    const transformed: string[] = pathArray.map((pathElem, index) =>
      getPath(pathArray, index + 1)
    )
    transformed.push(x.path + "/" + x.name)
    return transformed
  })
  const uniquePaths = [...new Set(treePaths)].sort((x, y) => x.localeCompare(y))
  const tree: Model[] = uniquePaths.map((path, index) => {
    return {
      id: generateId(index),
      path: getPrevPath(path),
      name: getName(path),
    }
  })
  models.forEach((model) => {
    const index = uniquePaths.indexOf(model.path + "/" + model.name)
    tree[index] = model
  })
  return tree
}

const getPath = (pathArray: string[], index: number) => {
  return pathArray.slice(0, index).join("/")
}

const generateId = (index: number) => {
  return 1000 + index
}
const getName = (path: string) => {
  return path.lastIndexOf("/") > 0
    ? path.substring(path.lastIndexOf("/") + 1)
    : path
}

const getPrevPath = (path: string) => {
  return path.lastIndexOf("/") > 0
    ? path.substring(0, path.lastIndexOf("/"))
    : ""
}
