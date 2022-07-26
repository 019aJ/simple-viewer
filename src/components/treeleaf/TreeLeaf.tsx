import React from "react"
import { Checkbox } from "../checkbox/Checkbox"
import styles from "./TreeLeaf.module.css"

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
      <label onClick={onRowClick} className={styles.leaf}>
        {name}
      </label>
    </li>
  )
}
