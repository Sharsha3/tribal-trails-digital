import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export const MountainLandscape = () => {
  const mountainRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!mountainRef.current) return
    mountainRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
  })

  // Create mountain geometry
  const mountainGeometry = new THREE.ConeGeometry(3, 6, 8)
  
  return (
    <group>
      {/* Main Mountain */}
      <mesh ref={mountainRef} position={[0, -2, -10]} rotation={[0, 0, 0]}>
        <coneGeometry args={[4, 8, 6]} />
        <meshStandardMaterial 
          color="#4a5568" 
          transparent 
          opacity={0.4}
          roughness={0.8}
        />
      </mesh>

      {/* Secondary Mountains */}
      <mesh position={[-6, -3, -12]} rotation={[0, 0.5, 0]}>
        <coneGeometry args={[3, 6, 6]} />
        <meshStandardMaterial 
          color="#2d3748" 
          transparent 
          opacity={0.3}
          roughness={0.9}
        />
      </mesh>

      <mesh position={[5, -2.5, -11]} rotation={[0, -0.3, 0]}>
        <coneGeometry args={[2.5, 5, 6]} />
        <meshStandardMaterial 
          color="#4a5568" 
          transparent 
          opacity={0.35}
          roughness={0.7}
        />
      </mesh>

      {/* Floating Trees */}
      {[...Array(5)].map((_, index) => (
        <mesh 
          key={index}
          position={[
            (Math.random() - 0.5) * 15,
            -4 + Math.random() * 2,
            -8 - Math.random() * 4
          ]}
        >
          <cylinderGeometry args={[0.1, 0.2, 1]} />
          <meshStandardMaterial 
            color="#22c55e" 
            transparent 
            opacity={0.4}
          />
        </mesh>
      ))}
    </group>
  )
}