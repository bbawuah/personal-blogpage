import React, { useRef, useState } from 'react'
import { useSpring, a } from 'react-spring'
import { useFrame } from 'react-three-fiber'
import type { Mesh } from 'three'
import { Position, Width } from './SpinningBox'

interface TorusGeometryProps {
  position: Position
  args?: Width
  pace?: number
  color: string
}

export const Torus: React.FC<TorusGeometryProps> = ({
  position,
  args = [0.25, 0.1, 30, 150],
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
      <torusBufferGeometry attach="geometry" args={args} />
      <meshPhysicalMaterial attach="material" color={color} />
    </mesh>
  )
}
