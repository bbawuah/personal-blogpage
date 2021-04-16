import React, { useRef } from "react"
import { useFrame } from "react-three-fiber"
import type { Mesh } from 'three'
import * as THREE from 'three'


export type Position = [x: number, y: number, z: number]
export type Width = [
  width?: number,
  height?: number,
  depth?: number,
  widthSegments?: number,
  heightSegments?: number,
  depthSegments?: number
]

interface SpinningMeshProps {
    position: Position
    args?: Width
    pace?: number
    color: string
  }

  
export const SpinningBox: React.FC<SpinningMeshProps> = ({position, args = [1,1,1], pace = 0, color}) => {
    // This reference gives direct access to the mesh
    const mesh = useRef<Mesh>()
  
    // Rotate mesh every frame, this is outside of React without overhead
  
    useFrame(({clock}) => {
      if (mesh.current) {
          mesh.current.rotation.x = mesh.current.rotation.y += 0.01
          mesh.current.position.y = Math.sin(clock.getElapsedTime() - pace) + 0.8
        }
    })
  
    return (
      <mesh 
      ref={mesh} 
      position={position}
      castShadow={true} >
        <ambientLight />
        <spotLight position={[0,3,4]} penumbra={0.25} castShadow={true}/>
        <boxBufferGeometry args={args} />
        <meshPhysicalMaterial attach="material" color={color}/>
    </mesh>
    )
  }