import { MeshWobbleMaterial } from 'drei'
import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import { Mesh } from 'three'
import { Position } from './SpinningBox'

interface WobbleMeshProps {
  position: Position
  args?: number
  color: string
  pace?: number
}

export const WobbleMesh: React.FC<WobbleMeshProps> = ({
  position,
  args = 1,
  color,
  pace = 0
}) => {
  // This reference gives direct access to the mesh
  const mesh = useRef<Mesh>()

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01
      mesh.current.position.y = Math.sin(clock.getElapsedTime() - pace) + 0.25
    }
  })

  return (
    <mesh castShadow={true} position={position} ref={mesh}>
      <dodecahedronGeometry attach="geometry" args={[args, 0]} />
      <MeshWobbleMaterial
        attach="material"
        color={color}
        factor={1}
        speed={10}
      />
    </mesh>
  )
}
