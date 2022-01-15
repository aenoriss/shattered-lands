import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { DoubleSide } from "three";
import Tile from './Tile';
import TileLayout from './TileLayout';

function Grid(props) {
    const [matrix, setMatrix] = useState([])
    useEffect(
        () => {
            //Generation Algorithm
            const boundary = 5;
            let change = -4.5;
            let matrixAux = [];

            for (let r = -5; r < boundary; r = r + 0.87) {
                // console.log(change)
                for (let c = change; c < boundary; c++) {
                    let point = { x: r, z: c }
                    matrixAux.push(point) 
                }
                if (change == -4.5) {
                    change = -4;
                } else {
                    change = -4.5;
                }
            }

            setMatrix(matrixAux);
        },
        [],
    );


    return (
        matrix.map(pos => (
            props.type == 0 ? <Tile type={[0]} position={[pos.x, 0, pos.z]} data={props.data} /> : <TileLayout type={[1]} position={[pos.x, 0.0001, pos.z ]} />
        ))
    )
}

export default Grid;