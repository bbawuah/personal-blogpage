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
interface Props {
  position: Position
  args: Width
  color: string
}

extend({OrbitControls})

const Controls = () => {
  const orbitRef = useRef()
  const {camera, gl} = useThree()

  // useFrame(() => {
  //   if (orbitRef.current) {
  //     orbitRef?.current?.update()
  //   }
  // })

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
    <mesh rotation={[-Math.PI / 2 , 0, 0]} position={[0, -0.5, 0]} receiveShadow={true}> 
       <planeBufferGeometry attach="geometry" args={[100, 100]} />
     <meshPhysicalMaterial attach="material" color="#e5e7eb" />
    </mesh>
  )
}

const SpinningMesh: React.FC = () => {
  // This reference gives direct access to the mesh
  const mesh = useRef<Mesh>()
  const [hovered, setHovered] = useState<boolean>(false)
  const [active, setActive] = useState<boolean>(false)
  // Rotate mesh every frame, this is outside of React without overhead

  const props = useSpring({
   scale: active ? [1.5,1.5, 1.5] : [1, 1, 1],
   color: hovered ? "#374151" : "#6B7280",
  })
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01
    }
  })

  return (
    <a.mesh 
    ref={mesh} 
    onClick={() => setActive(!active)} onPointerOver={() => setHovered(true)} 
    onPointerOut={() => setHovered(false)} 
    scale={(props.scale as any)}
    castShadow={true} >
      <ambientLight />
      <spotLight position={[2,2,6]} penumbra={0.25} castShadow={true}/>
      <boxBufferGeometry args={[1, 1, 1]} />
      <a.meshPhysicalMaterial attach="material" color={props.color}/>
  </a.mesh>
  )
}

export const Box: React.FC<MeshProps> = () => {
  return (
    <Fragment>
      <Canvas
      camera={{ position: [0, 5, 10], fov: 25 }}
      onCreated={({gl}) => {
        gl.shadowMap.enabled = true
        gl.shadowMap.type = THREE.PCFSoftShadowMap
      }}
      >
      <fog attach="fog" args={["#e5e7eb", 5, 15]}/>
        <Controls />
        <SpinningMesh />
        <Plane />
      </Canvas>
    </Fragment>
  )
}


//  colorManagement
// shadowMap
// camera={{ position: [0, 5, 10], fov: 20 }}