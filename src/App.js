import CameraControls from "./Utils/Camera";
import React, { useState, Suspense, useEffect } from 'react'
import Grid from "./Utils/Board/Grid";
import SidePanel from "./Utils/SidePanel/SidePanel";
import Enviroment from "./Environment";
import { Canvas, useFrame, useLoader, extend, useThree } from '@react-three/fiber'
import { CubeTextureLoader } from "three";


// import * as THREE from "three";
import './App.css';
import { Environment } from "@react-three/drei";
function App() {
  // const { scene } = useThree();
  const [selectedTile, setselectedTile] = useState(undefined)
  const [sceneLoaded, setSceneLoaded] = useState(false)



  const handleData = (data) => {
    setselectedTile(data);
  }

  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={"loading"}>
          {/* <color attach="background" args={["#229aca"]} /> */}
          <Enviroment/>
          <CameraControls />
          <Grid type={0} data={handleData} />
          <Grid type={[1]} />
          {/* <Environment
            background={true}
            files={['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']}
            path={"/Environment"}
            preset={null}
          /> */}
          {/* <BasicTile/> */}
          {/* <axesHelper/> */}
          <pointLight position={[10, 10, 10]} />
          <ambientLight />
        </Suspense>
      </Canvas>
      {selectedTile != undefined && <SidePanel data={selectedTile} />}
    </div>

  );
};


export default App;
