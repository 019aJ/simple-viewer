import React from "react"
import { Checkbox } from "../checkbox/Checkbox"

type TreeLeafProps = {
  id: string
  name: string
  onCheckboxClick: (state: number) => void
  isChecked: number
  onRowClick: () => void
}

export const TreeLeaf: React.FC<TreeLeafProps> = ({
  id,
  name,
  onCheckboxClick,
  isChecked,
  onRowClick,
}) => {
  return (
    <li id={id} key={id}>
      <Checkbox onClick={onCheckboxClick} initialState={isChecked} />
      <label onClick={onRowClick}>{name}</label>
    </li>
  )
}
