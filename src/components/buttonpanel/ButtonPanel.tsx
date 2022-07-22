import React from "react"
import styles from "./ButtonPanel.module.css"

type ButtonPanelProps = {
  children: React.ReactNode | React.ReactNode[]
}

export const ButtonPanel: React.FC<ButtonPanelProps> = ({ children }) => {
  return <div className={styles.buttonPanel}>{children}</div>
}
