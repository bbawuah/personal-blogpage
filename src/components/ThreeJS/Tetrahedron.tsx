import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import type { Mesh } from 'three'
import { Position } from './SpinningBox'

interface TetrahedronProps {
  position: Position
  args?: [number, number]
  pace?: number
  color: string
}

export const Tetrahedron: React.FC<TetrahedronProps> = ({
  position,
  args = [0.75, 0],
  pace = 0,
  color
}) => {
  // This reference gives direct access to the mesh
  const mesh = useRef<Mesh>()
  // Rotate mesh every frame, this is outside of React without overhead

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01
      mesh.current.position.y = Math.sin(clock.getElapsedTime() - pace) + 0.8
    }
  })

  return (
    <mesh ref={mesh} position={position} castShadow={true}>
      <tetrahedronGeometry attach="geometry" args={args} />
      <meshPhysicalMaterial attach="material" color={color} />
    </mesh>
  )
}
