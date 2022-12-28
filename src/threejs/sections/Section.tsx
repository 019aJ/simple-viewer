import { Line } from "@react-three/drei"
import { Fragment } from "react"
type SectionProps = {
  section: number[][]
}

export const Section = ({ section }: SectionProps) => {
  return (
    <Fragment>
      {section.map((line, index) => (
        <Line key={index} points={line} color="darkgreen" />
      ))}
    </Fragment>
  )
}
