import { TreeLeaf } from "../treeleaf/TreeLeaf"
import { TreeParent } from "./TreeParent"
export default {
  title: "TreeParent",
  component: TreeParent,
}
const child = (
  <TreeLeaf
    id={"2"}
    name={"Дочерний узел дерева"}
    isChecked={1}
    onCheckboxClick={() => {}}
    onRowClick={() => {}}
  />
)
export const CheckedClosedTreeParent = () => (
  <TreeParent
    id={"1"}
    name={"Родительский узел дерева"}
    isChecked={1}
    onCheckboxClick={() => {}}
    isOpen={false}
  >
    {child}
  </TreeParent>
)
export const UncheckedClosedTreeParent = () => (
  <TreeParent
    id={"1"}
    name={"Родительский узел дерева"}
    isChecked={0}
    onCheckboxClick={() => {}}
    isOpen={false}
  >
    {child}
  </TreeParent>
)

export const CheckedOpenedTreeParent = () => (
  <TreeParent
    id={"1"}
    name={"Родительский узел дерева"}
    isChecked={1}
    onCheckboxClick={() => {}}
    isOpen={true}
  >
    {child}
  </TreeParent>
)
export const UncheckedOpenedTreeParent = () => (
  <TreeParent
    id={"1"}
    name={"Родительский узел дерева"}
    isChecked={0}
    onCheckboxClick={() => {}}
    isOpen={true}
  >
    {child}
  </TreeParent>
)
