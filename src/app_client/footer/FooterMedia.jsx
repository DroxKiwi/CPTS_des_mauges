
import { useState, useEffect, useRef } from 'react';

import './footermedia.css';
import home from '../assets/Images/icones/accueil.png';
import email from '../assets/Images/icones/e-mail.png';
import fb from '../assets/Images/icones/facebook.png';
import lk from '../assets/Images/icones/linkedin.png';
import tel from '../assets/Images/icones/telephone.png';
import logo from '../assets/Images/logoDetoure.png';
import carteCouleur from '../assets/Images/CarteSansFond.png';


function FooterMedia (props) {

    const medias = [
        {
            name: 'Adresse des locaux',
            logo: home,
            type: 'adr'
        },
        {
            name : 'cptsdesmauges@gmail.com',
            logo: email,
            type: 'mail'
        },
        {
            name: '06 00 00 00 00',
            logo: tel,
            type: 'tel'
        },
        {
            name: 'https://www.facebook/adrcptmauges.fr',
            logo: fb,
            type: 'redirection'
        },
        {
            name: 'https://www.linkedin/adrcptmauges.fr',
            logo: lk,
            type: 'redirection'
        }
    ];

    function handleClick(page){
        window.location.replace(process.env.REACT_APP_BASE_APP_URI + page);
    }

    if (window.innerWidth < 1468){
        return (
            <div className='footermedia'>
                {/*
                <div className={"mt-10 place-items-center grid grid-cols-1"} style={{width: props.docWidth}}>
                    {
                        medias.map((m) => (
                            <div className='grid place-items-center'>
                                <img src={m.logo} width={50} />
                                {
                                    m.type === 'redirection' ? (
                                        <p>
                                            <a className='targetfootermedia' target='_blank' href={m.name}>{m.name}</a>  
                                        </p>
                                    ) : 
                                    (
                                        null
                                    )
                                }
                                {
                                    m.type === 'mail' ? (
                                        <p>
                                            <a className='targetfootermedia' href={'mailto:' + m.name}>{m.name}</a>  
                                        </p>
                                    ) : 
                                    (
                                        null
                                    )
                                }
                                {
                                    m.type === 'tel' ? (
                                        <p>
                                            <a className='targetfootermedia' href={'tel:' + m.name}>{m.name}</a>  
                                        </p>
                                    ) : 
                                    (
                                        null
                                    )
                                }
                                {
                                    m.type === 'adr' ? (
                                        <p>
                                            <a className='targetfootermedia' onClick={() => handleClick('/contact')}>{m.name}</a>  
                                        </p>
                                    ) : 
                                    (
                                        null
                                    )
                                }
                                {
                                    m.type === 'text' ? (
                                        <p>
                                            {m.name}
                                        </p>
                                    ) : 
                                    (
                                        null
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
                */}
                <div className='grid grid-cols-3'>
                    <img src={logo} width={150} ></img>

                </div>
                <div className='declarationofficiel'>
                    <p>
                        CPTS des Mauges © 2024
                        Réalisé par KDDS avec ReactJS
                        <p>
                            <span>Développé par Corentin Fredj, </span>
                            <a className='targetfootermedia' href='mailto:corentinfredj.dev@gmail.com' target='_blank'>corentinfredj.dev@gmail.com </a>
                        </p>
                        <p>
                            Avec la participation de Alban W, <a className='targetfootermedia' href="mailto:alban45190@gmail.com">alban45190@gmail.com</a>
                        </p>
                    </p>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='footermedia'>
                {/*
                <div className={"mt-10 place-items-center grid grid-cols-" + medias.length} style={{width: props.docWidth}}>
                    {
                        medias.map((m) => (
                            <div className='grid place-items-center'>
                                <img src={m.logo} width={50} />
                                {
                                    m.type === 'redirection' ? (
                                        <p>
                                            <a className='targetfootermedia' target='_blank' href={m.name}>{m.name}</a>  
                                        </p>
                                    ) : 
                                    (
                                        null
                                    )
                                }
                                {
                                    m.type === 'mail' ? (
                                        <p>
                                            <a className='targetfootermedia' href={'mailto:' + m.name}>{m.name}</a>  
                                        </p>
                                    ) : 
                                    (
                                        null
                                    )
                                }
                                {
                                    m.type === 'tel' ? (
                                        <p>
                                            <a className='targetfootermedia' href={'tel:' + m.name}>{m.name}</a>  
                                        </p>
                                    ) : 
                                    (
                                        null
                                    )
                                }
                                {
                                    m.type === 'adr' ? (
                                        <p>
                                            <a className='targetfootermedia' onClick={() => handleClick('/contact')}>{m.name}</a>  
                                        </p>
                                    ) : 
                                    (
                                        null
                                    )
                                }
                                {
                                    m.type === 'text' ? (
                                        <p>
                                            {m.name}
                                        </p>
                                    ) : 
                                    (
                                        null
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
                */}
                <div className='grid grid-cols-3 place-items-center footer-media-grid'>
                    <div>
                        <img src={logo} width={250} ></img>
                        <p>Adresse des locaux</p>
                        <p>Code postal Ville</p>
                        <p>Numéro de Téléphone</p>
                    </div>
                    <div className='grid place-items-center'>
                        <p><b>Retrouvez nous sur les réseaux</b></p>
                        <div>
                            <img className='reseaux-footer-item' src={fb} width="40px" ></img>
                            <img className='reseaux-footer-item' src={lk} width="40px" ></img>
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

export default FooterMedia;