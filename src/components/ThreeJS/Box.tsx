import React, { Fragment, useRef, useState } from 'react'
import { Canvas, MeshProps, useFrame, extend, useThree, ReactThreeFiber } from 'react-three-fiber'
import type { Mesh } from 'three'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { MeshWobbleMaterial, softShadows } from 'drei'
import { useSpring, a } from '@react-spring/three'

// softShadows()

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>
    }
  }
}

type Position = [x: number, y: number, z: number]
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

interface WobbleMeshProps {
  position: Position
  args?: number
  color: string
  pace?: number
}

interface TorusGeometryProps {
  position: Position
  args?: Width
  pace?: number
  color: string
}
extend({OrbitControls})

const Controls = () => {
  const orbitRef = useRef()
  const {camera, gl} = useThree()

  return (
    <orbitControls 
    enableZoom={false}
    maxPolarAngle={Math.PI / 3}
    minPolarAngle={Math.PI / 3}
    ref={orbitRef}
    args={[camera, gl.domElement]}
    />
  )
}

const Plane: React.FC = () => {
  return  (
    <mesh rotation={[-Math.PI / 2 , 0, 0]} position={[0, -1, 0]} receiveShadow={true}> 
       <planeBufferGeometry attach="geometry" args={[100, 100]} />
     <meshPhysicalMaterial attach="material" color="#e5e7eb" />
    </mesh>
  )
}


const TorusGeometry: React.FC<TorusGeometryProps> = ({position, args = [0.25, 0.1, 30, 150], pace = 0, color}) => {
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
      <torusBufferGeometry args={args} />
      <a.meshPhysicalMaterial attach="material" color={props.color}/>
  </a.mesh>
  )
}

const WobbleMesh: React.FC<WobbleMeshProps> = ({ position, args = 1, color, pace = 0}) => {
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
      <dodecahedronBufferGeometry attach="geometry" args={[args, 0]} />
      <MeshWobbleMaterial
        attach="material"
        color={color}
        factor={1}
        speed={10}
      />
    </mesh>
  )
}

const SpinningBox: React.FC<SpinningMeshProps> = ({position, args = [1,1,1], pace = 0, color}) => {
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

export const Scene: React.FC<MeshProps> = () => {
  return (
    <Fragment>
      <Canvas
      camera={{ position: [0, 5, 10], fov: 30 }}
      onCreated={({gl}) => {
        gl.shadowMap.enabled = true
        gl.shadowMap.type = THREE.PCFSoftShadowMap
      }}
      >
      <fog attach="fog" args={["#e5e7eb", 5, 15]}/>
        <Controls />
        <SpinningBox position={[3, 1.25, 0]} args={[0.5, 0.5, 0.5]} pace={4} color="#1d3354"/>
        <SpinningBox position={[-3, 0, 0]} pace={2} color="#3d348b"/>
        <SpinningBox position={[0, -3, 0]} args={[0.25, 0.5, 0.5]} color="#d64045"/>
        <WobbleMesh position={[2, -9, 0]} args={0.1} color="#0d3b66"/>
        <WobbleMesh position={[-1, -4, 0]} args={0.3} color="#0d3b66" pace={1.5}/>
        <WobbleMesh position={[2, -2, 2]} args={0.4} color="#0d3b66" pace={5}/>
        <TorusGeometry position={[2, -1, -3]} color="#0d3b66" pace={5}/>
        <Plane />
      </Canvas>
    </Fragment>
  )
}