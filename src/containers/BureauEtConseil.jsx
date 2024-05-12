

import { useState, useEffect, useRef } from "react";
import './bureauetconseil.css';
import Organigrame from "../components/Organigrame";
import userProfil from '../assets/Images/User-Profile.png';
import orgServ from '../services/organigrame.json';
import { SpeedDial } from 'primereact/speeddial';
import { getElementError } from "@testing-library/react";
import { getActiveElement } from "@testing-library/user-event/dist/utils";


function BureauEtConseil(props) {
  
    const [docHeight, setDocHeight] = useState(null);
    const [docWidth, setDocWidth] = useState(null);
    const [items, setItems] = useState([]);
    const [usersProfil, setUsersProfil] = useState([]);

    const refSpeedDial = useRef(null);

    useEffect(() => {
        var temp = orgServ.items;
        for (let i = 0; i < temp.length; i++) {
            temp[i].template = <Organigrame imgSrc={userProfil} src={temp[i]} />
        }
        setItems(temp);
    }, []);

    useEffect(() => {
        var tabTemp = [];
        for (let i = 0; i < orgServ.items.length; i++){
            tabTemp.push(orgServ.items[i]);
        }
        setUsersProfil(tabTemp);
        refSpeedDial.current.show();
    }, [items])
  
    useEffect(() => {
        setDocHeight(window.innerHeight);
        setDocWidth(window.innerWidth - 10);
    }, [window.innerHeight]);

    // ----

    return (
        <div className="backgroundbureauetconseil overflow-hidden h-screen" style={{width: docWidth + 10, height: docHeight - props.headerHeight}}>
            <div className={"grid place-items-center h-[600px]"}>
                <SpeedDial ref={refSpeedDial} visible={true} buttonStyle={{display: 'none'}} disabled={false} hideOnClickOutside={false} model={items} radius={(300)} type="circle" rotateAnimation={true} />
            </div> 
        </div>
    )
}

export default BureauEtConseil;