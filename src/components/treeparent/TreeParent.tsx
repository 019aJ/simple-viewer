import React, { useState } from "react"
import { Model } from "../../dto/Model"
import { Checkbox } from "../checkbox/Checkbox"
import styles from "./TreeParent.module.css"

type TreeParentProps = {
  model: Model
  children: React.ReactNode | React.ReactNode[]
  onCheckboxClick: (state: number) => void
  isChecked: number
  isOpen: boolean
}

export const TreeParent: React.FC<TreeParentProps> = ({
  model,
  onCheckboxClick,
  children,
  isChecked,
  isOpen = true,
}) => {
  const [nodeOpen, setNodeOpen] = useState(true)
  if (nodeOpen !== isOpen) {
    setNodeOpen(isOpen)
  }
  const id = model.id.toString()
  const name = model.name
  const currentPathArray = []
  currentPathArray.push(
    <div key={"dv" + id}>
      <span
        id={id}
        className={styles.caret}
        onClick={() => {
          setNodeOpen((prev) => !prev)
        }}
      />
      <Checkbox
        onClick={(e) => {
          onCheckboxClick(e)
        }}
        initialState={isChecked}
      />
      <label>{name}</label>
    </div>
  )
  currentPathArray.push(
    <ul key={"ul" + id} className={nodeOpen ? styles.active : styles.nested}>
      {children}
    </ul>
  )
  return <li className={styles.treeNode}>{currentPathArray}</li>
}
