import { Model } from "../dto/Model"

export const buildTree = (models: Model[]) => {
  const treePaths = models.flatMap((x) => {
    const path = getNormalPath(x)
    const pathArray =
      path.indexOf("/") > 0 ? path.split("/") : path.length > 0 ? [path] : []
    const transformed: string[] = pathArray.map((pathElem, index) =>
      getPath(pathArray, index + 1)
    )
    transformed.push(path + "/" + x.name)
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
    const modelPath = getNormalPath(model)
    const index = uniquePaths.indexOf(modelPath + "/" + model.name)
    model.path = modelPath
    tree[index] = model
  })
  return tree
}
const getNormalPath = (model: Model) => {
  return model.path.trim().startsWith("/")
    ? model.path.trim().substring(1)
    : model.path.trim()
}

const getPath = (pathArray: string[], index: number) => {
  return pathArray.slice(0, index).join("/")
}

const generateId = (index: number) => {
  return 1000 + index
}
const getName = (path: string) => path.substring(path.lastIndexOf("/") + 1)

const getPrevPath = (path: string) => path.substring(0, path.lastIndexOf("/"))
