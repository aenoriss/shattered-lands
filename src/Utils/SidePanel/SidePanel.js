import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { DoubleSide } from "three";
import './SidePanel.css';


function SidePanel(props) {
    const [landPopulate, setLandPopulate] = useState([
        {
            type: "plain",
            level: 1
        },
        {
            type: "plain",
            level: 1
        },
        {
            type: "plain",
            level: 1
        },
        {
            type: "plain",
            level: 1
        },
        {
            type: "plain",
            level: 1
        },
        {
            type: "plain",
            level: 1
        },
        {
            type: "plain",
            level: 1
        },
        {
            type: "plain",
            level: 1
        },
    ]);

    useEffect(() => {
        if (window.ethereum.isMetaMask) {

            // useDispatch(setMetamaskLoading(true));

            window.ethereum.request({ method: 'eth_requestAccounts' }).then(async () => {
                console.log("Connected")

                // Change state 
                // metamaskConnect -> true

                // const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

                // const signer = provider.getSigner();

                // const blockNumber = await provider.getBlockNumber();

                // console.log("Block Number:", blockNumber)

                // const mainInstance = new ethers.Contract(data.contract_address, mainContract.abi, provider);


                // const mainWithSigner = mainInstance.connect(signer);

                // const accounts = await window.ethereum.request({ method: 'eth_accounts' })


                // if (accounts.length > 0) {

                //   console.log("breaks?: ", accounts)

                //   let isRegistered = await mainWithSigner.userToRegistered(accounts[0]).catch(e => {
                //     console.log("error: ", e)
                //   });

                //   console.log("isRegistered: ", isRegistered);
                // }

            }).catch(() => {
                console.log("Not Connected");
            })
        }
    }, [])

    return (
        <div>
            {props.data && <div id="menuPanel">
                <h1>Tile </h1>
                <h2>{"x: " + Math.ceil(props.data[0]) + "  y: " + Math.ceil(props.data[2]) + "  z: " + Math.ceil(props.data[1])}</h2>
                <h1>Inventory</h1>
                <div className="tileList">
                    {landPopulate.map((land) => {
                        return (
                            <div className="tile">
                                <img className="cardImage" src="shardium.png"></img>
                                <h3>{land.type}</h3>
                                <h3>{land.level}</h3>
                            </div>
                        )
                    })}
                </div>
                <div className="footer">
                    <button class="button">Create Land</button>
                    <button class="button">Add Land</button>
                </div>


            </div>}
        </div>
    )
}

export default SidePanel;