import * as THREE from "three"
import { useCallback, useLayoutEffect, useMemo, useRef } from "react"

type ModelMeshProps = {
  color: string
  vertices: number[]
}

export const ModelMesh = ({ color, vertices }: ModelMeshProps) => {
  const points = useMemo(() => new Float32Array(vertices), [])
  const update = useCallback((self) => self.computeVertexNormals(), [])

  return (
    <mesh>
      <bufferGeometry attach="geometry" onUpdate={update}>
        <bufferAttribute
          attach="attributes-position"
          array={points}
          count={points.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <meshStandardMaterial
        attach="material"
        color={color}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}
