import { Model } from "../dto/Model"

export const setCenters = (models: Model[]) => {
    models.forEach(model => { 
        if (model.triangulation) { 
            model.center = getCenter(model.triangulation)
        }
    })
}

const getCenter = (triangulation: number[]) => {
  let sx = 0
  let sy = 0
  let sz = 0
  for (let index = 0; index < triangulation.length; index += 3) {
    sx = sx + triangulation[index]
    sy = sy + triangulation[index + 1]
    sz = sz + triangulation[index + 2]
  }
  const n = triangulation.length / 3
  return [sx / n, sy / n, sz / n]
}
