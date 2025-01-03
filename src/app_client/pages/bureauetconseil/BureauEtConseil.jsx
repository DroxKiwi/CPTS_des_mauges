

import { useState, useEffect, useRef } from "react";
import './bureauetconseil.css';
import OrganigrameItem from "./OrganigrameItem";
import userProfil from '../../assets/Images/User-Profile.png';
import orgServ from '../../services/organigrame.json';
import { SpeedDial } from 'primereact/speeddial';
import { ls, ss } from '../../../utils/store';
import Header from '../../header/Header';

function BureauEtConseil(props) {
  
    const [docHeight, setDocHeight] = useState(null);
    const [docWidth, setDocWidth] = useState(null);
    const [orgaHeight, setOrgaHeight] = useState(null);
    const [items, setItems] = useState([]);
    const [usersProfil, setUsersProfil] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const refSpeedDial = useRef(null);
    
    useEffect(() => {
        ss.set('window', 'bureauetconseil');
    }, []);

    useEffect(() => {
        var temp = orgServ.items;
        for (let i = 0; i < temp.length; i++) {
            temp[i].template = <OrganigrameItem imgSrc={userProfil} src={temp[i]} />
        }
        setItems(temp);
        setLoaded(true);
    }, []);

    useEffect(() => {
        var orga = document.getElementById('organigrame');
        if (orga){
            console.log(orga.offsetHeight);
        }
    }, [loaded])

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

    if (window.innerWidth < 1468){
        return (
            <div className="overflow-x-hidden">
                <Header setHeaderHeight={props.setHeaderHeight} />
                <div className="backgroundbureauetconseil overflow-x-hidden place-items-center" style={{width: docWidth, height: "100%"}}>
                    <div className={"ml-10 dialmobile"}>
                        <SpeedDial id='organigrame' ref={refSpeedDial} visible={true} buttonStyle={{display: 'none'}} disabled={false} hideOnClickOutside={false} model={items} />
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <Header setHeaderHeight={props.setHeaderHeight} />
                <div className="backgroundbureauetconseil overflow-hidden h-screen grid grid-cols-1 place-items-center">
                    <div className={"grid place-items-center h-[500px]"}>
                        <SpeedDial id='organigrame' ref={refSpeedDial} visible={true} buttonStyle={{display: 'none'}} disabled={false} hideOnClickOutside={false} model={items} radius={(250)} type="circle" rotateAnimation={true} />
                    </div>
                </div>
            </div>
        )
    }
}

export default BureauEtConseil;