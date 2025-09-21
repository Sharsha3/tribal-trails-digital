import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { FloatingElements } from './floating-elements'
import { MountainLandscape } from './mountain-landscape'

export const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={0.6}
          color="#ffffff"
        />
        <pointLight 
          position={[-5, 5, 5]} 
          intensity={0.3} 
          color="#22c55e"
        />

        {/* 3D Elements */}
        <FloatingElements />
        <MountainLandscape />
        
        {/* Stars */}
        <Stars 
          radius={100} 
          depth={50} 
          count={1000} 
          factor={4} 
          saturation={0.5} 
          fade 
        />

        {/* Controls (subtle, no zoom) */}
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.2}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  )
}