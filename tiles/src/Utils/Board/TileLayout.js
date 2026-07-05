import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { DoubleSide } from "three";


function TileLayout(props) {
    const mesh = useRef()
    const [hovered, setHover] = useState(false)
    const [theta, setTheta] = useState(0.56)

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
            rotation={[Math.PI / 2, 0, 0]}
            ref={mesh}>
            <ringGeometry position={[props.position[0], props.position[2], props.position[1]]} args={[theta, 0.579, 6]} />
            <meshStandardMaterial side={DoubleSide} color="#229aca"/>
        </mesh>
    )
}

export default TileLayout;