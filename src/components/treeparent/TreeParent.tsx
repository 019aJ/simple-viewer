import React, { useEffect, useState } from "react"
import { Checkbox } from "../checkbox/Checkbox"
import styles from "./TreeParent.module.css"

type TreeParentProps = {
  id: string
  name: string
  children: React.ReactNode | React.ReactNode[]
  onCheckboxClick: (state: number) => void
  isChecked: number
  isOpen: boolean
}

export const TreeParent: React.FC<TreeParentProps> = ({
  id,
  name,
  onCheckboxClick,
  children,
  isChecked,
  isOpen,
}) => {
  const [nodeOpen, setNodeOpen] = useState(isOpen)

  useEffect(() => {
    if (nodeOpen !== isOpen) {
      setNodeOpen(isOpen)
    }
  }, [isOpen])
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
