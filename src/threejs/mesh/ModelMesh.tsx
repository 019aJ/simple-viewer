import * as THREE from "three"
import { useCallback, useMemo } from "react"
import { ExtendedColors, NodeProps, Overwrite } from "@react-three/fiber"
THREE.ShaderLib["circlePointMaterial"] = {
  vertexShader: `
		#include <clipping_planes_pars_vertex>
		uniform float scale;
        uniform float size;
        void main() {
        	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
            gl_PointSize = size * scale;
            gl_Position = projectionMatrix * mvPosition;
            #include <clipping_planes_vertex>
        }
        `,
  fragmentShader: `
		#include <clipping_planes_pars_fragment>
		uniform vec3 outherColor;
        uniform vec3 innerColor;
        void main() {
        	#include <clipping_planes_fragment>
        	float l = length( gl_PointCoord - vec2( 0.5, 0.5 ) );
            if ( l > 0.475 ) discard;
            if ( l > 0.24) {
            	gl_FragColor = vec4( outherColor, 1.0 );
            } else {
            	gl_FragColor = vec4( innerColor, 1.0 );
            }
         }      
      `,
}

const getUniformsForCircles = (color: string) => {
  return Object.assign(
    THREE.UniformsUtils.merge([
      THREE.UniformsLib.common,
      THREE.UniformsLib.fog,
      THREE.UniformsLib.points,
    ]),
    {
      size: {
        value: 5,
      },
    },
    {
      outherColor: {
        value: new THREE.Color("black"),
      },
    },
    {
      innerColor: {
        value: new THREE.Color(color),
      },
    }
  )
}

type ModelMeshProps = {
  color: string
  vertices: number[]
  style?: string
}

export const ModelMesh = ({ color, vertices, style }: ModelMeshProps) => {
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
  if (style === "point") {
    return (
      <points>
        {geometry}
        <pointsMaterial color={color} size={5} sizeAttenuation />
      </points>
    )
  }
  if (style === "circle") {
    return (
      <points>
        {geometry}
        <shaderMaterial
          type={"CirclePointMaterial"}
          uniforms={getUniformsForCircles(color)}
          vertexShader={THREE.ShaderLib["circlePointMaterial"].vertexShader}
          fragmentShader={THREE.ShaderLib["circlePointMaterial"].fragmentShader}
          clipping={true}
        />
      </points>
    )
  }
  return (
    <mesh>
      {geometry}
      <meshStandardMaterial
        attach="material"
        color={color}
        side={style === "double" ? THREE.DoubleSide : THREE.FrontSide}
        wireframe={style === "wireframe"}
      />
    </mesh>
  )
}
