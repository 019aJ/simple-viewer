import { modelAttributes, modelList } from "../modelstubs/ModelStub"
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
export const getModelTree = async () => {
  await sleep(100)
  return { ok: true, json: () => modelList }
}

export const getModelAttributes = async (id: number) => {
  await sleep(100)
  return { ok: true, json: () => modelAttributes[id - 1] }
}
