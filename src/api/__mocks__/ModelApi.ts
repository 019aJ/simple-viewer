import { stubModelAttributes, stubModelList } from "../../modelstubs/ModelStub"
export const getModelTree = async () => {
  return { ok: true, json: () => JSON.parse(JSON.stringify(stubModelList)) }
}

export const getModelAttributes = async (id: number) => {
  return { ok: true, json: () => stubModelAttributes[id - 1] }
}
