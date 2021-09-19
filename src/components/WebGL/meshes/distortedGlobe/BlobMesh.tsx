import * as THREE from 'three'
import { vertexShader } from './shaders/blob/vertex'
import { fragmentShader } from './shaders/blob/fragment'
import React, { useEffect, useRef } from 'react'
import { useFrame, useThree } from 'react-three-fiber'

const uniforms = {
  u_time: { value: 0 },
  u_resolution: { value: new THREE.Vector2() },
  u_mouse: { value: new THREE.Vector2() },
  u_speed: { value: 0.25 },
  u_density: { value: 0.5 },
  u_strength: { value: 0.075 },
  u_frequency: { value: 2.218 },
  u_amplitude: { value: 5.991 },
  u_intensity: { value: 3.604 },
  u_brightness: { value: new THREE.Vector3(0.67, 0.48, 0.38) },
  u_contrast: { value: new THREE.Vector3(0.4, 0.41, 0.3) },
  u_oscilation: { value: new THREE.Vector3(0.44, 0.11, 0.21) },
  u_phase: { value: new THREE.Vector3(0.68, 0.73, 0.1) }
}

// Obje

export const BlobMesh = (props: JSX.IntrinsicElements['mesh']) => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.u_time.value = state.clock.elapsedTime
    }
  })

  return (
    <mesh {...props} ref={meshRef}>
      <icosahedronGeometry args={[0.24, 32]} />
      <rawShaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  )
}
