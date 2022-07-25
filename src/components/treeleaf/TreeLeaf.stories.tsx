import { TreeLeaf } from "./TreeLeaf"
export default {
  title: "TreeLeaf",
  component: TreeLeaf,
}

export const CheckedTreeLeaf = () => (
  <TreeLeaf
    id={"1"}
    name={"Узел дерева"}
    isChecked={1}
    onCheckboxClick={() => {}}
    onRowClick={() => {}}
  />
)
export const UncheckedTreeLeaf = () => (
  <TreeLeaf
    id={"1"}
    name={"Узел дерева"}
    isChecked={0}
    onCheckboxClick={() => {}}
    onRowClick={() => {}}
  />
)
