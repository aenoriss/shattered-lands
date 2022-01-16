import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useLoader } from '@react-three/fiber';

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Planicie.gltf')

  const colorMap = useLoader(TextureLoader, 'islandBaseColor.png')
  // const heightMap = useLoader(TextureLoader, 'islandHeightMap.png')
  const metalicMap = useLoader(TextureLoader, 'islandMetallic.png')
  const roughMap = useLoader(TextureLoader, 'islandRough.png')
  const normalMap = useLoader(TextureLoader, 'islandNormal.png')

  materials.DefaultMaterial.map = colorMap;
  // materials.DefaultMaterial.displacementMap = heightMap;
  materials.DefaultMaterial.metalnessMap = metalicMap;
  // materials.DefaultMaterial.roughnessMap = roughMap;
  materials.DefaultMaterial.normalMap = normalMap;

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Chunk_LP.geometry}
        material={materials.DefaultMaterial}
        scale={[0.085,0.085,0.085]}
        position={props.chunkPos}
      />
    </group>
  )
}

useGLTF.preload('/Planicie.gltf')




