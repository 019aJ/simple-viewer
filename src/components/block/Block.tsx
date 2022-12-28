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
  <div
    // Stryker disable next-line StringLiteral
    key={"mn" + title}
    data-testid={title}
    className={styles.block}
    style={style}
  >
    <div
      // Stryker disable next-line StringLiteral
      key={"bt" + title}
      className={styles.blockTitle}
    >
      <ButtonPanel title={title}>{widgets}</ButtonPanel>
    </div>

    <div
      // Stryker disable next-line StringLiteral
      key={"bl" + title}
      className={styles.blockContent}
    >
      {children}
    </div>
  </div>
)
