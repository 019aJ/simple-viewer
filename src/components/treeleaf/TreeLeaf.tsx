import React, { MouseEvent } from "react"
import { Model } from "../../dto/Model"
import { Checkbox } from "../checkbox/Checkbox"
import styles from "./TreeLeaf.module.css"

type TreeLeafProps = {
  model: Model
  onCheckboxClick: (state: number) => void
  isChecked: number
  onRowClick: () => void
}

export const TreeLeaf: React.FC<TreeLeafProps> = ({
  model,
  onCheckboxClick,
  isChecked,
  onRowClick,
}) => {
  const id = model.id.toString()
  const name = model.name
  return (
    <li id={id} key={id}>
      <Checkbox onClick={onCheckboxClick} initialState={isChecked} />
      <label onClick={onRowClick}>{name}</label>
    </li>
  )
}
