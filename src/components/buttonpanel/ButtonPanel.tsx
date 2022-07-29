import React from "react"
import styles from "./ButtonPanel.module.css"

type ButtonPanelProps = {
  title?: string
  children?: React.ReactNode | React.ReactNode[]
  style?: {}
}

export const ButtonPanel: React.FC<ButtonPanelProps> = ({
  children,
  title,
  style,
}) => {
  return (
    <div className={styles.buttonPanel} style={style} data-testid={"btnPanel"}>
      {title ? <div className={styles.panelTitle}>{title}</div> : <></>}
      {children}
    </div>
  )
}
