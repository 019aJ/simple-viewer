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
  // Stryker disable next-line ArrayDeclaration
  const currentPathArray = []
  currentPathArray.push(
    <div
      // Stryker disable next-line StringLiteral
      key={"dv" + id}
    >
      <span
        data-testid={"row" + id}
        id={id}
        className={styles.caret}
        onClick={() => {
          setNodeOpen((prev) => !prev)
        }}
      />
      <Checkbox
        // Stryker disable next-line StringLiteral
        data-testid={"cb" + id}
        onClick={(e) => {
          onCheckboxClick(e)
        }}
        initialState={isChecked}
      />
      <label>{name}</label>
    </div>
  )
  currentPathArray.push(
    <ul
      // Stryker disable next-line StringLiteral
      key={"ul" + id}
      data-testid={"treeParentCont" + id}
      className={nodeOpen ? styles.active : styles.nested}
    >
      {children}
    </ul>
  )
  return (
    <li data-testid={"treeParent" + id} className={styles.treeNode}>
      {currentPathArray}
    </li>
  )
}
