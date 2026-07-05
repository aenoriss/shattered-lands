import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { DoubleSide } from "three";
import BasicTile from './BasicTile';

function TileSpawn(props) {
    const [ChunkArr, setChunkArr] = useState([])
    useEffect(
        () => {
            let aux = false;
            let arrJoin;
            
            console.log()
            if (props.chunkPos != undefined) {
                arrJoin = props.chunkPos;
                arrJoin = arrJoin.join();

                ChunkArr.forEach(chunk => {
                    let copyChunk = chunk.join();;
                    if (copyChunk === arrJoin) {
                        aux = true;
                        console.log("FOUND")
                    }
                })
            }

            if (aux == false) {
                let aux2 = ChunkArr;
                aux2.push(props.chunkPos)
                setChunkArr(aux2)
                props.update()
                console.log("xD", ChunkArr);
            }
        },
    );

    return (
        ChunkArr.map(pos => (
            <BasicTile chunkPos={pos}/>
        ))
    )
}

export default TileSpawn;