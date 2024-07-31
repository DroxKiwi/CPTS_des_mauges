
import { useState, useEffect, useRef } from 'react';

import './footermedia.css';
import home from '../../assets/Images/icones/accueil.png';
import email from '../../assets/Images/icones/e-mail.png';
import fb from '../../assets/Images/icones/facebook.png';
import lk from '../../assets/Images/icones/linkedin.png';
import tel from '../../assets/Images/icones/telephone.png';


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
    ]

    return (
        <div className='footermedia'>
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
                                        <a className='targetfootermedia' onClick={() => props.setChildW('contact')}>{m.name}</a>  
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

export default FooterMedia;