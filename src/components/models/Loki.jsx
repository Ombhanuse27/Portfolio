"use client";

import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function Loki(props) {
  const { nodes, materials } = useGLTF('/models/loki-transformed.glb');

  return (
    <group
      {...props}
      dispose={null}
      position={[0, 0, 0]}          // Center at the origin
      scale={[3.5, 3.5, 3.5]}        // Scale model for size
      rotation={[0, -Math.PI / 2, 0]}
   // Rotate to face the front (assuming front is along the Z-axis)
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_0d962f77-4278-4623-bae2-6853ab395847'].geometry}
        material={materials['tripo_material_0d962f77-4278-4623-bae2-6853ab395847']}
        position={[0, 0, 0]}         // Position mesh at the center
      />
    </group>
  );
}

useGLTF.preload('/models/loki-transformed.glb');
