import React, { useRef, useState } from "react"
import { useSpring, a } from "react-spring"
import { useFrame } from "react-three-fiber"
import type { Mesh } from 'three'

export type Position = [x: number, y: number, z: number]
type Width = [
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
    const [hovered, setHovered] = useState<boolean>(false)
    const [active, setActive] = useState<boolean>(false)
    // Rotate mesh every frame, this is outside of React without overhead
  
    const props = useSpring({
     scale: active ? [1.5,1.5, 1.5] : [1, 1, 1],
     color: hovered ? "#374151" : color,
    })
    useFrame(({clock}) => {
      if (mesh.current) {
          mesh.current.rotation.x = mesh.current.rotation.y += 0.01
          mesh.current.position.y = Math.sin(clock.getElapsedTime() - pace) + 0.8
        }
    })
  
    return (
      <a.mesh 
      ref={mesh} 
      position={position}
      onClick={() => setActive(!active)} onPointerOver={() => setHovered(true)} 
      onPointerOut={() => setHovered(false)} 
      scale={(props.scale as any)}
      castShadow={true} >
        <ambientLight />
        <spotLight position={[0,3,4]} penumbra={0.25} castShadow={true}/>
        <boxBufferGeometry args={args} />
        <a.meshPhysicalMaterial attach="material" color={props.color}/>
    </a.mesh>
    )
  }