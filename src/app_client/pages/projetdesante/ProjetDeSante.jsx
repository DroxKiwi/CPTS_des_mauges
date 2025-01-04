import { useState, useEffect, useRef } from 'react';
//import pdsServ from "../services/projetdesante.json";
import pdsServ from "../../services/projetdesante.json";
import "./projetdesante.css";

import Rollup1 from '../../assets/Images/rollups/rollup1.png';
import Rollupimg1rounded from '../../assets/Images/rollups/rollupimg1rounded.png';
import Rollup2 from '../../assets/Images/rollups/rollup2.png';
import Rollupimg2rounded from '../../assets/Images/rollups/rollupimg2rounded.png';
import Rollup3 from '../../assets/Images/rollups/rollup3.png';
import Rollupimg3rounded from '../../assets/Images/rollups/rollupimg3rounded.png';
import Rollup4 from '../../assets/Images/rollups/rollup4.png';
import Rollupimg4rounded from '../../assets/Images/rollups/rollupimg4rounded.png';
import Rollup5 from '../../assets/Images/rollups/rollup5.png';
import Rollupimg5rounded from '../../assets/Images/rollups/rollupimg5rounded.png';
import Rollup6 from '../../assets/Images/rollups/rollup6.png';
import Rollupimg6rounded from '../../assets/Images/rollups/rollupimg6rounded.png';
import bg from '../../assets/Images/backgrounds/bg-3.png';
import Header from '../../header/Header';


import { ls, ss } from '../../../utils/store';

function ProjetDeSante (props) {
    
    useEffect(() => {
        ss.set('window', 'projetdesante');
    }, []);
  
    const [docHeight, setDocHeight] = useState(null);
    const [docWidth, setDocWidth] = useState(null);
    const [data, setData] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const [rollupSelection, setRollupSelection] = useState([]);
  
    useEffect(() => {
        setDocHeight(window.innerHeight + 500);
        setDocWidth(window.innerWidth - 10);
        setLoaded(true);
    }, [window.innerHeight]);

    useEffect(() => {
        var anchorPrj = ss.getFormated('anchorPrj');
        console.log(anchorPrj);
        if (document.getElementById(anchorPrj) !== null){
            document.getElementById(anchorPrj).scrollIntoView();
        }
    }, [loaded]);

    useEffect(() => {
        setData(pdsServ);
        setRollupSelection([
            {
                base: Rollup1,
                img: Rollupimg1rounded,
                color: pdsServ.accordion[0].bgcolor
            },
            {
                base: Rollup2,
                img: Rollupimg2rounded,
                color: pdsServ.accordion[1].bgcolor
            },
            {
                base: Rollup3,
                img: Rollupimg3rounded,
                color: pdsServ.accordion[2].bgcolor 
            },
            {
                base: Rollup4,
                img: Rollupimg4rounded,
                color: pdsServ.accordion[3].bgcolor 
            },
            {
                base: Rollup5,
                img: Rollupimg5rounded,
                color: pdsServ.accordion[4].bgcolor 
            },
            {
                base: Rollup6,
                img: Rollupimg6rounded,
                color: pdsServ.accordion[5].bgcolor 
            }
        ]);
    }, []);

    const RenderItems = (props) => {
        return (
            <div className='w-full overflow-x-hidden'>
                <div className='rollup-lvl-0'>
                    <div className='rollup-lvl-0-0 absolute'>
                        <img src={rollupSelection[props.it].base} className='rollup-lvl-0-0-item' width="300px" />
                        <img src={rollupSelection[props.it].img} className='rollup-lvl-0-0-image absolute' width="80px" />
                    </div>
                    <div className={'rollup-lvl-0-1 absolute z-' + props.z}>
                        <div className='rollup-lvl-0-1-item grid place-items-center w-full' style={{backgroundColor: rollupSelection[props.it].color}}>
                            <div>
                                {
                                    data.accordion.map((ia, i) => (
                                        <div className='accru-lvl-0'>
                                        {
                                            i === props.it ? (
                                                <div>
                                                    <span className='titleiacontent'>{ia.content}</span>
                                                    <div className='grid grid-cols-3 gridstartcolpjs'>
                                                    {
                                                        ia.items.map((ib) => (
                                                            <div class="cardpjs" style={{backgroundColor: ia.bgcolor, color: ia.color}}>
                                                                <div className='contentaccordion' style={{backgroundColor: ia.bgcolor, color: ia.color}}>
                                                                    <p className='subtitleaccordion'>{ib.content}</p>
                                                                    <div style={{backgroundColor: ia.bgcolor, color: ia.color}}>
                                                                        {
                                                                            ib.items.map((ic) => (
                                                                                <div className=''>
                                                                                        <p>{ic.content}</p>
                                                                                </div>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                    </div>
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
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    const RenderItemsMobile = (props) => {
        return (
            <div className='w-full overflow-x-hidden'>
                <div className='rollup-lvl-0'>
                    <div className=''>
                        <img src={rollupSelection[props.it].base} className='rollup-lvl-0-0-item' width="300px" />
                    </div>
                    <div className={'z-' + props.z}>
                        <div className='grid place-items-center w-full rollup-lvl-0-0-content' style={{backgroundColor: rollupSelection[props.it].color}}>
                            <div>
                                {
                                    data.accordion.map((ia, i) => (
                                        <div className=''>
                                        {
                                            i === props.it ? (
                                                <div className='px-5 py-10'>
                                                    <p className='titleiacontent'>{ia.content}</p>
                                                    <div className=''>
                                                    {
                                                        ia.items.map((ib) => (
                                                            <div class="" style={{backgroundColor: ia.bgcolor, color: ia.color}}>
                                                                <div className='contentaccordion' style={{backgroundColor: ia.bgcolor, color: ia.color}}>
                                                                    <p className='subtitleaccordion'>{ib.content}</p>
                                                                    <div style={{backgroundColor: ia.bgcolor, color: ia.color}}>
                                                                        {
                                                                            ib.items.map((ic) => (
                                                                                <div className=''>
                                                                                        <p className='contentmobile'>{ic.content}</p>
                                                                                </div>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                    </div>
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
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Header setChildW={props.setChildW} setHeaderHeight={props.setHeaderHeight} />
            <div className='overflow-x-hidden' style={{height: docHeight}}>
                <img src={bg} className='bg' />
                <h1 className='titleprojetsmissions grid place-items-center mt-10 bg-transparent'>
                    Nos Projets / Missions
                </h1>
                <div>
                    {
                        data !== null ? (
                            <div className='card bg-transparent'>
                                <div className='card bg-transparent'>
                                    <p className='maintext'>
                                        {data.mainText}
                                    </p>
                                </div>
                                <div id='aus' className='card bg-transparent my-10'>
                                    <RenderItems it={0} z='100' />
                                </div>
                                <div id='cs' className='card bg-transparent my-10'>
                                    <RenderItems it={1} z='90' />
                                </div>
                                <div id='pre' className='card bg-transparent my-10'>
                                    <RenderItems it={2} z='90' />
                                </div>
                                <div id='par' className='card bg-transparent my-10'>
                                    <RenderItems it={3} z='90' />
                                </div>
                                <div id='mo' className='card bg-transparent my-10'>
                                    <RenderItems it={4} z='90' />
                                </div>
                                <div className='card bg-transparent my-10'>
                                    <RenderItems it={5} z='90' />
                                </div>
                            </div>
                        ) : 
                        (
                            null
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjetDeSante;