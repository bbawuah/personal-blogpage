import React, { Fragment, useRef, useState } from 'react'
import {
  Canvas,
  MeshProps,
  useFrame,
  extend,
  useThree,
  ReactThreeFiber
} from 'react-three-fiber'
import type { Mesh } from 'three'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { useSpring, a } from '@react-spring/three'
import { WobbleMesh } from './WobbleMesh'
import { Torus } from './TorusGeometry'
import { SpinningBox } from './SpinningBox'
import { Tetrahedron } from './Tetrahedron'

// softShadows()

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<
        OrbitControls,
        typeof OrbitControls
      >
    }
  }
}

extend({ OrbitControls })

const Controls = () => {
  const orbitRef = useRef()
  const { camera, gl } = useThree()

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
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -1, 0]}
      receiveShadow={true}
    >
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshPhysicalMaterial attach="material" color="#e5e7eb" />
    </mesh>
  )
}

export const Scene: React.FC<MeshProps> = () => {
  return (
    <Fragment>
      <Canvas
        camera={{ position: [0, 5, 10], fov: 30 }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true
          gl.shadowMap.type = THREE.PCFSoftShadowMap
        }}
      >
        <pointLight intensity={1} position={[-10, -25, -10]} />
        <spotLight
          castShadow={true}
          intensity={2.25}
          angle={0.2}
          penumbra={1}
          position={[25, 25, 25]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.0001}
        />
        <fog attach="fog" args={['#e5e7eb', 5, 15]} />
        <Controls />
        <SpinningBox
          position={[3, 1.25, 0]}
          args={[0.5, 0.5, 0.5]}
          pace={4}
          color="#1d3354"
        />
        <SpinningBox position={[-3, 0, 0]} pace={2} color="#3d348b" />
        <SpinningBox
          position={[0, -3, 0]}
          args={[0.25, 0.5, 0.5]}
          color="#d64045"
        />
        <WobbleMesh position={[2, -9, 0]} args={0.1} color="#0d3b66" />
        <WobbleMesh
          position={[-1, -4, 0]}
          args={0.3}
          color="#0d3b66"
          pace={1.5}
        />
        <WobbleMesh position={[2, -2, 2]} args={0.4} color="#0d3b66" pace={5} />
        <Torus position={[2, -1, -3]} color="#0d3b66" pace={7} />
        <Tetrahedron position={[-3.125, -12, 3]} color="#ee6c4d" pace={7} />
        <Tetrahedron
          position={[2.8, 0, 4]}
          color="#2c699a"
          pace={8}
          args={[0.25, 0]}
        />
        <Tetrahedron
          position={[-1, 0, -2]}
          color="#2c699a"
          pace={9}
          args={[0.25, 0]}
        />
        <Tetrahedron
          position={[0.5, 4, 4]}
          color="#2c699a"
          pace={10}
          args={[0.1, 0]}
        />
        <Plane />
      </Canvas>
    </Fragment>
  )
}
