

import { useState, useEffect, useRef } from 'react';
import carteCouleur from '../assets/Images/carteCouleur.png';
import './presentation.css';

function Presentation () {
  
    const [docHeight, setDocHeight] = useState(null);
    const [docWidth, setDocWidth] = useState(null);
  
    useEffect(() => {
        setDocHeight(window.innerHeight);
        setDocWidth(window.innerWidth - 10);
    }, [window.innerHeight]);

    return( 
        <div className='overflow-hidden presentation' style={{width: docWidth}}>
            <div className='grid grid-cols-2 my-10'>
                <div className='h-[420px] px-5 grid place-items-center'>
                    <span className='titlepresentation'>
                        Qu’est-ce qu’une CPTS ?                    
                    </span>
                    <span className='textpresentation'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed non risus. Suspendisse lectus tortor, 
                        dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                    </span>
                    <span className='subtitlepresentation'>
                        Notre fonctionnement
                    </span>
                    <span className='textpresentation'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed non risus. Suspendisse lectus tortor, 
                        dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                    </span>
                    <span className='subtitlepresentation'>
                        Nos zones d'actions
                    </span>
                    <span className='textpresentation'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed non risus. Suspendisse lectus tortor, 
                        dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                    </span>
                </div>
                <div className='h-[400px] grid place-items-center grid-cols-3'>
                    <img src={carteCouleur} width='600px' className='col-span-3'/>
                    <div className='btnundermap grid place-items-center'>
                        *** Communes
                    </div>
                    <div className='btnundermap grid place-items-center'>
                        *** Habitants
                    </div>
                    <div className='btnundermap grid place-items-center'>
                        *** Professionnels
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presentation;