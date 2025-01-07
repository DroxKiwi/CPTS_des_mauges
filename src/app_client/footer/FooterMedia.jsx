
import { useState, useEffect, useRef } from 'react';

import './footermedia.css';
import home from '../assets/Images/icones/accueil.png';
import email from '../assets/Images/icones/e-mail.png';
import fb from '../assets/Images/icones/facebook.png';
import lk from '../assets/Images/icones/linkedin.png';
import tel from '../assets/Images/icones/telephone.png';
import logo from '../assets/Images/logoDetoure.png';
import carteCouleur from '../assets/Images/CarteSansFond.png';
import { API_global } from '../services/api/globalServices';


function FooterMedia (props) {

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

    try {
        if (window.innerWidth < 1468){
            return (
                <div className='footermedia'>
    
                </div>
            )
        }
        else {
            return (
                <div className='footermedia'>
                    <div className='grid grid-cols-3 place-items-center footer-media-grid'>
                        {
                            globalData !== null ? (
                                <div>
                                    <img src={logo} width={250} ></img>
                                    <p>{globalData[0].adr}</p>
                                    <p>{globalData[0].postalcode}</p>
                                    <p>{globalData[0].tel}</p>
                                </div>
                            ) :
                            (
                                null
                            )
                        }
                        <div className='grid place-items-center'>
                            <p><b>Retrouvez nous sur les réseaux</b></p>
                            <div>
                                <img className='reseaux-footer-item' src={lk} width="40px" onClick={() => handleRedirect("lk")} ></img>
                                <img className='reseaux-footer-item' src={fb} width="40px" onClick={() => handleRedirect("fb")} ></img>
                            </div>
                        </div>
                        <div>
                            <img src={carteCouleur} width={400}></img>
                        </div>
                    </div>
                    <div className='declarationofficiel'>
                        <p>
                            CPTS des Mauges © 2024
                            Réalisé par KDDS avec ReactJS
                            <p>
                                <span>Développé par Corentin Fredj, </span>
                                <a className='targetfootermedia' href='mailto:corentinfredj.dev@gmail.com' target='_blank'>corentinfredj.dev@gmail.com </a>
                                <span>Avec la participation de Alban W, <a className='targetfootermedia' href="mailto:alban45190@gmail.com">alban45190@gmail.com</a></span>
                            </p>
                        </p>
                    </div>
                </div>
            )
        }
    }
    catch(error){
        return (
            null
        )
    }
}

export default FooterMedia;