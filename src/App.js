import CameraControls from "./Utils/Camera";
import React, { useState, Suspense } from 'react'
import Grid from "./Utils/Board/Grid";
import { Canvas } from '@react-three/fiber'
import SidePanel from "./Utils/SidePanel/SidePanel";
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
      <Canvas>
        <Suspense fallback={"loading"}>
          <color attach="background" args={["#229aca"]} />
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
