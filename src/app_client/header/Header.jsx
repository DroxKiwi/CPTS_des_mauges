import { useEffect, useRef, useState } from 'react';
import './Header.css';
import { ls, ss } from '../../utils/store';

import { Button } from 'primereact/button';
import logo from '../assets/Images/logoDetoure.png';
import fb from '../assets/Images/icones/facebook.png';
import linkedin from '../assets/Images/icones/linkedin.png';

import { Dialog } from 'primereact/dialog';

import { API_global } from '../services/api/globalServices';


// Le but du header est uniquement de gérer la gestion d'affichage autre part que dans le corps du composant tableau de bord.

function Header (props) {

    const [globalData, setGlobalData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setGlobalData(await API_global.get_all());
        }
        getData();
    }, []);

    function handleRedirect(wh){
        try{
            console.log(globalData)
            if (wh === 'fb'){
                window.open(globalData[0].facebook);
            }
            else if (wh === 'lk'){
                window.open(globalData[0].linkedin);
            }
        }
        catch(error){
            console.error(error);
        }
    };

    const [visible, setVisible] = useState(false);

    const [docWidth, setDocWidth] = useState(null);
    useEffect(() => {
        setDocWidth(window.innerWidth - 10);
    }, [window.innerHeight]);

    function handleClickOngle(e){
        console.log(e.target.nodeName);
        var tbh = document.getElementById('tbh');
        for (let i = 0; i < tbh.childNodes.length; i++){
            tbh.childNodes[i].classList.remove('activeh');
            var temp = tbh.childNodes[i].childNodes;
            if (temp[0] !== undefined){
                temp[0].classList.remove('activeh');
            }
        }
        if (e.target.nodeName === 'BUTTON'){
            e.target.classList.add('activeh');
        }
        else if (e.target.nodeName === 'SPAN'){
            e.target.parentNode.classList.add('activeh');
        }
    };

    function handleAnimationPlay(e, page) {
        //document.getElementById('container-animation').classList.add('container-animation-maskon');
        //document.getElementById('container-animation').classList.remove('container-animation');
        setTimeout(() => {
            //document.getElementById('container-animation').classList.add('container-animation');
            setTimeout(() => {
                //props.setChildW(page);
                window.location.replace(process.env.REACT_APP_BASE_APP_URI + page);
                //handleClickOngle(e);
            }, 0);
        }, 0);
    };

    if (!ss.getFormated("editmode")){
        if (docWidth < 1468){  
            return (
                <div className='header grid place-items-center h-[100px] z-100'>
                </div>
            )  
        }
        else {
            return (
                <div className='relative z-10' id="headerDiv z-100">
                    <div className='grid grid-cols-12'>
                        <div id="tbh" className='w-screen header col-span-8 grid grid-cols-11'>
                            <img src={logo} height="100dvh" width="100dvw" className='cursor-pointer ml-10' onClick={(e) => {handleAnimationPlay(e, '/')}}/>
                            <Button id='presentation' className='headerButton my-10' text label='qui sommes nous' onClick={(e) => {handleAnimationPlay(e, '/presentation')}}></Button>
                            <Button id='bureauetconseil' className='headerButton my-10' text label='bureau et CA' onClick={(e) => {handleAnimationPlay(e, '/bureauetconseil')}}></Button>
                            <Button id='projetdesante' className='headerButton my-10' text label='nos projets missions' onClick={(e) => {handleAnimationPlay(e, '/projetdesante')}}></Button>
                            <Button id='nosactualites' className='headerButton my-10' text label='nos actualités' onClick={(e) => {handleAnimationPlay(e, '/nosactualites')}}></Button>
                            <Button id='agenda' className='headerButton my-10' text label='agenda' onClick={(e) => {handleAnimationPlay(e, '/agenda')}}></Button>
                            <Button id='jesuispatient' className='headerButton my-10' text label='je suis patient' onClick={(e) => {handleAnimationPlay(e, '/jesuispatient')}}></Button>
                            <Button id='jesuisprofessionnel' className='headerButton my-10' text label='je suis professionnel' onClick={(e) => {handleAnimationPlay(e, '/jesuisprofessionnel')}}></Button>
                            <Button id='adherer' className='headerButton my-10' text label='comment adhérer' onClick={(e) => {handleAnimationPlay(e, '/adherer')}}></Button>
                            <Button id='contact' className='headerButton my-10' text label='contacts' onClick={(e) => {handleAnimationPlay(e, '/contact')}}></Button>
                        </div>
                        <div className='grid grid-cols-2 col-start-11 col-end-12'>
                            <div className='iconMediaHeader grid place-items-center ' onClick={() => handleRedirect("fb")} >
                                <img src={fb} width={30} />
                            </div>
                            <div className='iconMediaHeader grid place-items-center' onClick={() => handleRedirect("lk")} >
                                <img src={linkedin} width={30} />
                            </div>
                        </div>
                    </div>
                </div>
            )   
        }
    }
    else {
        return null
    }
}

export default Header;