import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { Suspense } from 'react'

import { useFBX } from '@react-three/drei'


function BasicTile() {
  const fbx = useFBX('./Models/Planicie.fbx')
  console.log(fbx)
  return (
    <Suspense fallback={null}>
     <primitive object={fbx} />
     </Suspense>

  )
}

export default BasicTile;
