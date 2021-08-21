import React, { Fragment, useRef } from 'react'
import {
  Canvas,
  MeshProps,
  extend,
  useThree,
  ReactThreeFiber
} from 'react-three-fiber'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import loadable from '@loadable/component'
const WobbleMesh = loadable(() => import('./WobbleMesh'))
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
    <div>
      <Canvas
        orthographic={true}
        camera={{ left: -1, right: 1, top: 1, bottom: -1, far: 0.1, near: 30 }}
      >
        <Controls />
      </Canvas>
    </div>
  )
}
