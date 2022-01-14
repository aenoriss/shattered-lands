import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { DoubleSide } from "three";
import lands from "../../Data/Abis/Lands.json";
import { ethers } from "ethers"
import './SidePanel.css';

const data = {
    landAddress: ""
}

function SidePanel(props) {
    const [landPopulate, setLandPopulate] = useState([
        {
            type: "Plain",
            level: 1,
            description: "The basic tile is the building block of your island.",
            key: 1
        },
        {
            type: "Shardium",
            level: 1,
            description: "The basic tile is the building block of your island.",
            key: 2
        },
        {
            type: "Shardium",
            level: 1,
            description: "The basic tile is the building block of your island.",
            key: 3
        },
        {
            type: "Plain",
            level: 1,
            description: "The basic tile is the building block of your island.",
            key: 4
        },
        {
            type: "Iron",
            level: 1,
            description: "The basic tile is the building block of your island.",
            key: 5
        },
        {
            type: "Plain",
            level: 1,
            description: "The basic tile is the building block of your island.",
            key: 6
        },
        {
            type: "Iron",
            level: 1,
            description: "The basic tile is the building block of your island.",
            key: 7
        },
        {
            type: "Shardium",
            level: 1,
            description: "The basic tile is the building block of your island.",
            key: 8
        },
    ]);

    const [selectedNFT, setSelectedNFT] = useState(undefined)


    // useEffect(() => {
    //     if (window.ethereum.isMetaMask) {

    //         // useDispatch(setMetamaskLoading(true));

    //         window.ethereum.request({ method: 'eth_requestAccounts' }).then(async () => {
    //             console.log("Connected")

    //             // Change state 
    //             // metamaskConnect -> true

    //             const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

    //             const signer = provider.getSigner();

    //             const blockNumber = await provider.getBlockNumber();

    //             console.log("Block Number:", blockNumber)

    //             const landInstance = new ethers.Contract(data.landAddress, lands.abi, provider);


    //             const mainWithSigner = mainInstance.connect(signer);

    //             const accounts = await window.ethereum.request({ method: 'eth_accounts' })


    //             if (accounts.length > 0) {

    //             //  Load minted lands

    //             let balance = await landInstance.balanceOf(accounts[0]);

    //             const lands = [];

    //             for (let i = 0; i < balance; i++) {
    //                 let landId = await landInstance.tokenOfOwnerByIndex(accounts[0], i);

    //                 let land = await landInstance.indexToLand(landId);

    //                 lands.push(land);

    //             }

    //             console.log("Lands: ", lands);

    //             //   let isRegistered = await mainWithSigner.userToRegistered(accounts[0]).catch(e => {
    //             //     console.log("error: ", e)
    //             //   });

    //             //   console.log("isRegistered: ", isRegistered);
    //             }

    //         }).catch(() => {
    //             console.log("Not Connected");
    //         })
    //     }
    // }, [])

    // async function onMint() {
    //     window.ethereum.request({ method: 'eth_requestAccounts' }).then(async () => {
    //         console.log("Connected")

    //         const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

    //         const signer = provider.getSigner();

    //         const landInstance = new ethers.Contract(data.landAddress, lands.abi, provider);

    //         const mainWithSigner = mainInstance.connect(signer);

    //         const accounts = await window.ethereum.request({ method: 'eth_accounts' })

    //         if (accounts.length > 0) {

    //           let tx = await landInstance.mintLand(1, 0).catch(e => {
    //             console.log("error: ", e)
    //           });

    //           console.log("Transaction: ", tx);
    //         }
    //     })
    // }

    return (
        <div id="menuPanel">
            <img className="headerImage" src="hexagon.png"></img>
            <h1>Tile: {"[" + Math.ceil(props.data[0]) + "," + Math.ceil(props.data[2]) + "," + Math.ceil(props.data[1]) + "]"} </h1>
            {/* <p className="coordinates">{"[" + Math.ceil(props.data[0]) + "," + Math.ceil(props.data[2]) + "," + Math.ceil(props.data[1]) + "]"}</p> */}
            <h1>Select Land {selectedNFT}</h1>
            <div className="tileList">
                {landPopulate.map((land) => {
                    return (
                        <div key={land.key} onClick={(e => { setSelectedNFT(land.key) })} className="tile">
                            <img className="cardImage" src="shardium.png"></img>
                            <div className="cardInformation">
                                <p className="cardText cardTextTitle">{land.type}</p>
                                <p className="cardText cardsubTitle">Level {land.level}</p>
                                <p className="cardText">{land.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="footer">
                <button class="button">Create Land</button>
                <button class="button">Add Land</button>
            </div>
        </div>
    )
}

export default SidePanel;