import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float, MeshWobbleMaterial } from '@react-three/drei';

const TechGuy = () => {
  const groupRef = useRef();

  useFrame((state) => {
    const { x, y } = state.mouse;
    if (groupRef.current) {
      groupRef.current.rotation.y = x * 0.5;
      groupRef.current.rotation.x = -y * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Head */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial 
          color="#FF4D00" 
          emissive="#FF4D00" 
          emissiveIntensity={0.8} 
          wireframe 
        />
      </mesh>

      {/* Torso */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.5, 0.3, 1.2, 6]} />
        <meshStandardMaterial 
          color="#333333" 
          emissive="#333333" 
          emissiveIntensity={0.2} 
          wireframe 
        />
      </mesh>

      {/* Arms */}
      <mesh position={[0.7, 0.4, 0]} rotation={[0, 0, 0.2]}>
        <cylinderGeometry args={[0.1, 0.08, 1.0, 8]} />
        <meshStandardMaterial color="#FF4D00" wireframe />
      </mesh>
      <mesh position={[-0.7, 0.4, 0]} rotation={[0, 0, -0.2]}>
        <cylinderGeometry args={[0.1, 0.08, 1.0, 8]} />
        <meshStandardMaterial color="#FF4D00" wireframe />
      </mesh>

      {/* Tech Ring */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 1.5, 0]}>
          <torusGeometry args={[0.7, 0.02, 16, 100]} />
          <meshStandardMaterial color="#FF4D00" emissive="#FF4D00" emissiveIntensity={2} />
        </mesh>
      </Float>
    </group>
  );
};

const Avatar = () => {
  return (
    <div style={{ width: '100%', height: '100%', cursor: 'grab' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#FF4D00" />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#FFFFFF" />
        <TechGuy />
      </Canvas>
    </div>
  );
};

export default Avatar;
