import React, { FC } from "react"
import { ButtonPanel } from "../buttonpanel/ButtonPanel"

import styles from "./Block.module.css"

type BlockProps = {
  title?: string
  widgets?: React.ReactNode | React.ReactNode[]
  children: React.ReactNode | React.ReactNode[]
  style?: {}
}

export const Block: FC<BlockProps> = ({ title, widgets, children, style }) => (
  <div key={"mn" + title} className={`${styles.block} `} style={style}>
    <div key={"bt" + title} className={`${styles.blockTitle}`}>
      <ButtonPanel title={title}>{widgets}</ButtonPanel>
    </div>
    <div key={"bl" + title} className={`${styles.blockContent}`}>
      {children}
    </div>
  </div>
)
