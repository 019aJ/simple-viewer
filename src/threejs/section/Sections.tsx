import { Model } from "../../dto/Model"
import * as THREE from "three"
import { createSection } from "../SectionHelper"
import { Section } from "./Section"

type SectionsProps = {
  models: Model[]
  plane: THREE.Plane
}

export const Sections = ({ models, plane }: SectionsProps) => {
  const geometries: number[][] = models
    .filter((m) => m.triangulation)
    .map((m) => m.triangulation)
  const sections = createSection(geometries, plane)
  return (
    <group>
      {sections.map((section, index) => (
        <Section key={"section" + index} section={section} />
      ))}
    </group>
  )
}
