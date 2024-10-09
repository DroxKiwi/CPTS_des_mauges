

import { useState, useEffect, useRef } from 'react';
import carteCouleur from '../../assets/Images/CarteSansFond.png';
import './presentation.css';
import bg from '../../assets/Images/backgrounds/bg-2.png';
import numbanddata from '../../services/numberband.json';
import Header from '../../header/Header';

import { ls, ss } from '../../../utils/store';

function Presentation (props) {

    const [number1, setNumber1] = useState(numbanddata.data[0].value);
    const maxNumber1 = numbanddata.data[0].value;
    const [number2, setNumber2] = useState(numbanddata.data[1].value);
    const maxNumber2 = numbanddata.data[1].value;
    const [number3, setNumber3] = useState(numbanddata.data[2].value);
    const maxNumber3 = numbanddata.data[2].value;
  
    const [docHeight, setDocHeight] = useState(null);
    const [docWidth, setDocWidth] = useState(null);

    useEffect(() => {
        ss.set('window', 'presentation');
        var element = document.getElementById('testnumberpres');
        if (element.innerHTML === '0'){
            startAnimation1();
            startAnimation2();
            startAnimation3();
        }
    }, []);

    async function startAnimation1 () {
        var speed = 0.1;
        for (let i = 0; i < maxNumber1; i++){
            if (i > maxNumber1-11){
                speed = 100;
            }
            setNumber1(i);
            if (i < maxNumber1-100){
                i = i + 10;
            }
            await new Promise(r => setTimeout(r, speed));
        }
    };

    async function startAnimation2() {
        var speed = 100;
        for (let i = 0; i < maxNumber2; i++){
            setNumber2(i);
            await new Promise(r => setTimeout(r, speed));
        }
    }

    async function startAnimation3() {
        var speed = 0.00005;
        for (let i = 0; i < maxNumber3; i++){
            if (i > maxNumber3-11){
                speed = 100;
            }
            setNumber3(i);
            if (i < maxNumber3-100){
                i = i + 100;
            }
            await new Promise(r => setTimeout(r, speed));
        }
    }
  
    useEffect(() => {
        setDocHeight(window.innerHeight);
        setDocWidth(window.innerWidth - 10);
    }, [window.innerHeight]);

    if (window.innerWidth < 1468){
        return( 
            <div className='presentation absolute overflow-hidden' style={{width: docWidth + 10}}>
                <Header setChildW={props.setChildW} setHeaderHeight={props.setHeaderHeight} />
                <img src={bg} className='bg' />
                <div className='grid grid-cols-1 my-10'>
                    <div className='grid place-items-center grid-cols-1 z-10'>
                        <img src={carteCouleur} width='100%' className='carte' />
                        <div id="testnumberpres" className='btnundermap grid place-items-center'>
                            {number2} Communes
                        </div>
                        <div className='btnundermap grid place-items-center'>
                            {number3} Habitants
                        </div>
                        <div className='btnundermap grid place-items-center'>
                            {number1} Professionnels
                        </div>
                    </div>
                    <div className='my-10 px-5 grid place-items-center z-10   '>
                        <span className='titlepresentation card bg-transparent'>
                            Qu’est-ce qu’une CPTS ?                    
                        </span>
                        <span className='textpresentation card bg-transparent'>
                            « Créées en 2016 par la loi de modernisation de notre système de santé, les communautés professionnelles territoriales de
                            santé (CPTS) constituent un dispositif souple à la main des professionnels qui veulent travailler ensemble pour répondre aux
                            besoins de santé spécifiques d’un bassin de population.
                            Constituées à l’initiative des « professionnels de santé », ces CPTS ont vocation à rassembler les « acteurs de santé » de leur
                            territoire. En effet, elles se composent de professionnels des soins du premier et/ou du second recours mais aussi
                        </span>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return( 
            <div className='presentation absolute overflow-hidden' style={{width: docWidth}}>
                <Header setChildW={props.setChildW} setHeaderHeight={props.setHeaderHeight} />
                <img src={bg} className='bg' />
                <div className='grid grid-cols-1 my-10'>
                    <div className='grid place-items-center grid-cols-3 z-10'>
                        <img src={carteCouleur} width='800px' className='col-span-3'/>
                        <div id="testnumberpres" className='btnundermap grid place-items-center'>
                            {number2} Communes
                        </div>
                        <div className='btnundermap grid place-items-center'>
                            {number3} Habitants
                        </div>
                        <div className='btnundermap grid place-items-center'>
                            {number1} Professionnels
                        </div>
                    </div>
                    <div className='my-10 px-5 grid place-items-center z-10   '>
                        <span className='titlepresentation card bg-transparent'>
                            Qu’est-ce qu’une CPTS ?                    
                        </span>
                        <span className='textpresentation card bg-transparent'>
                            « Créées en 2016 par la loi de modernisation de notre système de santé, les communautés professionnelles territoriales de
                            santé (CPTS) constituent un dispositif souple à la main des professionnels qui veulent travailler ensemble pour répondre aux
                            besoins de santé spécifiques d’un bassin de population.
                            Constituées à l’initiative des « professionnels de santé », ces CPTS ont vocation à rassembler les « acteurs de santé » de leur
                            territoire. En effet, elles se composent de professionnels des soins du premier et/ou du second recours mais aussi
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Presentation;