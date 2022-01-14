import Box from "./Utils/Box";
import ReactDOM from 'react-dom';
import CameraControls from "./Utils/Camera";
import React, { useRef, useState } from 'react'
import Grid from "./Utils/Board/Grid";
import { Canvas, useFrame, useLoader, extend } from '@react-three/fiber'
import SidePanel from "./Utils/SidePanel/SidePanel";
import BasicTile from "./ModelComponent/BasicTile";
import './App.css';

//Turns OrbitControls into a JSX element.
// extend({ OrbitControls });

function App() {
  const [selectedTile, setselectedTile] = useState()

  const handleData = (data) => {
    setselectedTile(data);
  }
  
  return (
    <div className="App">
      <SidePanel data={selectedTile}/>
      <Canvas>
        <color attach="background" args={["#229aca"]} />
        <CameraControls/>
        {/* <Box position={[-1.5, 0, 0]} /> */}
        {/* <Box position={[0, 0, 0]} /> */}
        {/* <Box position={[1.5, 0, 0]} /> */}
        <Grid type={0} data={handleData}/>
        <Grid type={[1]}/>
        {/* <BasicTile/> */}
        {/* <axesHelper/> */}
        <pointLight position={[10, 10, 10]} />
        <ambientLight />
      </Canvas>
    </div>
  );
};


export default App;
