import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, Box, Cone } from '@react-three/drei'
import * as THREE from 'three'

interface FloatingElementProps {
  position: [number, number, number]
  color: string
  type: 'sphere' | 'box' | 'cone'
  speed?: number
}

const FloatingElement = ({ position, color, type, speed = 1 }: FloatingElementProps) => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    
    meshRef.current.rotation.x += 0.01 * speed
    meshRef.current.rotation.y += 0.02 * speed
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5
  })

  const commonProps = {
    ref: meshRef,
    position,
    scale: 0.5 + Math.random() * 0.5
  }

  return (
    <mesh {...commonProps}>
      {type === 'sphere' && <Sphere args={[1, 16, 16]} />}
      {type === 'box' && <Box args={[1, 1, 1]} />}
      {type === 'cone' && <Cone args={[1, 2, 8]} />}
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.3}
        roughness={0.5}
        metalness={0.2}
      />
    </mesh>
  )
}

export const FloatingElements = () => {
  const elements = [
    { position: [-8, 2, -5] as [number, number, number], color: '#22c55e', type: 'sphere' as const, speed: 0.8 },
    { position: [6, -1, -8] as [number, number, number], color: '#f97316', type: 'box' as const, speed: 1.2 },
    { position: [-3, 4, -6] as [number, number, number], color: '#dc2626', type: 'cone' as const, speed: 0.6 },
    { position: [8, 3, -4] as [number, number, number], color: '#3b82f6', type: 'sphere' as const, speed: 1.1 },
    { position: [-6, -2, -7] as [number, number, number], color: '#8b5cf6', type: 'box' as const, speed: 0.9 },
    { position: [4, 5, -9] as [number, number, number], color: '#06b6d4', type: 'cone' as const, speed: 1.3 },
    { position: [-9, 1, -3] as [number, number, number], color: '#eab308', type: 'sphere' as const, speed: 0.7 },
    { position: [7, -3, -6] as [number, number, number], color: '#ec4899', type: 'box' as const, speed: 1.0 }
  ]

  return (
    <>
      {elements.map((element, index) => (
        <FloatingElement key={index} {...element} />
      ))}
    </>
  )
}