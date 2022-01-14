import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { DoubleSide } from "three";
import './SidePanel.css';


function SidePanel(props) {
    console.log("HEHEH", props.data)
    return (
        <div>
            {props.data && <div id="menuPanel">
                <h1>Add Chunk at: </h1>
                <h2>{"x: "+ Math.ceil( props.data[0]) + "  y: " + Math.ceil(props.data[2]) + "  z: "+ Math.ceil(props.data[1])}</h2>
                <h1>Inventory</h1>
                <button class ="button">Add</button>
            </div>}
        </div>
    )
}

export default SidePanel;