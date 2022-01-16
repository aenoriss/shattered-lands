import CameraControls from "./Utils/Camera";
import React, { useState, Suspense, useEffect } from 'react'
import Grid from "./Utils/Board/Grid";
import SidePanel from "./Utils/SidePanel/SidePanel";
import Enviroment from "./Environment";
import { Canvas, useFrame, useLoader, extend, useThree } from '@react-three/fiber'
import TileSpawn from "./ModelComponent/TileSpawn";
import { CubeTextureLoader } from "three";
import BasicTile from "./ModelComponent/BasicTile";


// import * as THREE from "three";
import './App.css';
function App() {
  const [selectedTile, setselectedTile] = useState(undefined)
  const [updateSystem, setupdateSystem] = useState(undefined)


  const handleData = (data) => {
    console.log("POSITION", data)
    setselectedTile(data);
  }

  const update = () => {
    setupdateSystem(Math.random())
  }

  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={"loading"}>
          <Enviroment/>
          <CameraControls />
          <Grid type={0} data={handleData}/>
          <Grid type={[1]} />
          {selectedTile && <TileSpawn chunkPos={selectedTile} update={update}/>}
          <axesHelper/>
          <pointLight position={[10, 10, 10]} />
          <ambientLight />
        </Suspense>
      </Canvas>
      {selectedTile != undefined && <SidePanel data={selectedTile} />}
    </div>

  );
};


export default App;
