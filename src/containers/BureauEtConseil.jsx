

import { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/footer/Footer";
import useWindowSize from "../hooks/useWindowResize";
import './bureauetconseil.css';
import Organigrame from "../components/Organigrame";
import userProfil from '../assets/Images/User-Profile.png';
import orgServ from '../services/organigrame.json';

function BureauEtConseil() {

    const winW = useWindowSize();
  
    const [docHeight, setDocHeight] = useState(null);
    const [docWidth, setDocWidth] = useState(null);
  
    useEffect(() => {
        setDocHeight(window.innerHeight);
        setDocWidth(window.innerWidth - 10);
    }, [window.innerHeight]);

    // ----

    const [usersProfil, setUsersProfil] = useState([]);

    useEffect(() => {
        var tabTemp = [];
        for (let i = 0; i < orgServ.data.length; i++){
            tabTemp.push(orgServ.data[i]);
        }
        console.log(tabTemp)
        setUsersProfil(tabTemp);
    }, [])

    return (
        <div className="backgroundbureauetconseil overflow-hidden h-screen" style={{width: docWidth + 10}}>
            <Header/>
            <div className="grid grid-cols-12 m-10">
                {
                    usersProfil.map((up) => (
                        <div className="grid grid-rows-2">
                            {
                                usersProfil.length > 0 ? (
                                    <div>
                                        <Organigrame imgSrc={userProfil} src={up} />
                                    </div>
                                ) :
                                (
                                    null
                                )
                            }
                        </div>
                    ))
                }
            </div>
            <div className='h-[100px]'>
                <Footer docWidth={docWidth} />
            </div>
        </div>
    )
}

export default BureauEtConseil;