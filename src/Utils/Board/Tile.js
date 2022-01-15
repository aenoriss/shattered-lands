import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { DoubleSide } from "three";


function Tile(props) {
    const mesh = useRef()
    const [hovered, setHover] = useState(false)
    const [theta, setTheta] = useState(props.type == 0 ? 0: 0.54)

    //useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
    function updateGrid(state) {
        //Grid Selection
        if (state == true) {
            setHover(true);
        } else {
            setHover(false);
        }
    }

    return (
        <mesh
            {...props}
            ref={mesh}
            rotation={[Math.PI / 2, 0, 0]}
            onPointerOver={(event) => {
                updateGrid(true);
            }}

            onPointerOut={(event) => {
                updateGrid(false);
            }}

            onClick={(event) => {
                // console.log("clicked", props.position)
                props.data(props.position);

            }}>
            <ringGeometry position={[props.position[0], props.position[2], props.position[1]]} args={[theta, 0.579, 6]} />
            <meshStandardMaterial side={DoubleSide} color="white" color={hovered ? "#567d46" : "white"} />
        </mesh>
    )
}

export default Tile;