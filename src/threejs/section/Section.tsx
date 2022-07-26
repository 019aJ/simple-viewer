import { Line } from "@react-three/drei"
import { Fragment } from "react"
type SectionProps = {
  section: number[][]
}

export const Section = ({ section }: SectionProps) => {
  return (
    <Fragment>
      {section.map((line) => (
        <Line points={line} color="red" />
      ))}
    </Fragment>
  )
}
