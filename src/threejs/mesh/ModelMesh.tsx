import * as THREE from "three"
import { useCallback, useMemo } from "react"
import { ExtendedColors, NodeProps, Overwrite } from "@react-three/fiber"
import { ViewStyle } from "../ViewStyles"
import { CircleMaterial } from "../materials/CircleMaterial"

type ModelMeshProps = {
  color: string
  vertices: number[]
  style?: string
}

export const ModelMesh = ({ color, vertices, style }: ModelMeshProps) => {
  // Stryker disable next-line ArrayDeclaration
  const points = useMemo(() => new Float32Array(vertices), [])
  const update = useCallback(
    (
      self: ExtendedColors<
        Overwrite<THREE.BufferGeometry, NodeProps<THREE.BufferGeometry, any>>
      >
    ) => self.computeVertexNormals(),
    []
  )
  const geometry = (
    <bufferGeometry attach="geometry" onUpdate={update}>
      <bufferAttribute
        attach="attributes-position"
        array={points}
        count={points.length / 3}
        itemSize={3}
      />
    </bufferGeometry>
  )
  if (style === ViewStyle.POINT) {
    return (
      <points>
        {geometry}
        <pointsMaterial color={color} size={5} sizeAttenuation />
      </points>
    )
  }
  if (style === ViewStyle.CIRCLE) {
    return (
      <points>
        {geometry}
        <CircleMaterial color={color} />
      </points>
    )
  }
  return (
    <mesh>
      {geometry}
      <meshStandardMaterial
        attach="material"
        color={color}
        side={style === ViewStyle.SINGLE ? THREE.FrontSide : THREE.DoubleSide}
        wireframe={style === ViewStyle.WIREFRAME}
        opacity={0.7}
        transparent={style === ViewStyle.OPACITY}
      />
    </mesh>
  )
}
