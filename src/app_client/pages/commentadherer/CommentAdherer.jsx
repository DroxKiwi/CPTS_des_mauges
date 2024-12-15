

import { useState, useEffect, useRef } from 'react';
import { Dialog } from 'primereact/dialog';
import { Galleria } from 'primereact/galleria';
import { Button } from 'primereact/button';
import ldl1 from '../../assets/Images/ldl/1.png';
import ldl2 from '../../assets/Images/ldl/2.png';
import ldl3 from '../../assets/Images/ldl/3.png';
import ldl4 from '../../assets/Images/ldl/4.png';
import ldl5 from '../../assets/Images/ldl/5.png';
import ldl6 from '../../assets/Images/ldl/6.png';
import ldl7 from '../../assets/Images/ldl/7.png';
import ldl8 from '../../assets/Images/ldl/8.png';
import ldl9 from '../../assets/Images/ldl/9.png';
import ldl10 from '../../assets/Images/ldl/10.png';
import ldl from '../../assets/Images/ldl.pdf';
import './commentadherer.css';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import iconehand from '../../assets/Images/icones/cliquez-sur.png';

import { ls, ss } from '../../../utils/store';

function CommentAdherer(props) {

    const [visible, setVisible] = useState(false);
    const [images, setImages] = useState(null);

    useEffect(() => {
        ss.set('window', 'commentadherer');
        setImages(
            [
                {
                    itemImageSrc: ldl2,
                },
                {
                    itemImageSrc: ldl3,
                },
                {
                    itemImageSrc: ldl4,
                },
                {
                    itemImageSrc: ldl5,
                },
                {
                    itemImageSrc: ldl6,
                },
                {
                    itemImageSrc: ldl7,
                },
                {
                    itemImageSrc: ldl8,
                },
                {
                    itemImageSrc: ldl9,
                },
                {
                    itemImageSrc: ldl10,
                },
            ]
        )
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} style={{ width: '100%', display: 'block' }} />;
    };
    
    const indicatorTemplate = (index) => {
        return <span className='btn-index' style={{color: 'black', cursor: 'pointer'}}>{index + 1}</span>;
    };

    function handleDownloadLdl () {
        window.open(ldl, '_blank');
    };

    function handleRelocateToURL() {
        window.open('https://www.helloasso.com/associations/communaute-professionnelle-territoriale-de-sante-des-mauges/adhesions/adhesion-2024', '_blank');
    }

    if (window.innerWidth < 800){
        return (
            <div className='grid'>

            </div>
        )
    }
    else {
        return (
            <div className='container-root'>
                <Header setChildW={props.setChildW} setHeaderHeight={props.setHeaderHeight} />        
                <div className='grid place-items-center card bg-transparent z-10'>
                    <svg className='absolute w-[100%] h-[100%] z-0' xmlns="http://www.w3.org/2000/svg" width="1920" height="357" viewBox="0 0 1920 257" fill="none">
                    <path d="M1999.5 29C2223.5 284.5 2312.5 382.5 2024 153C1725.95 -84.0969 -100.5 487.002 -184 212.502C-207.762 134.386 -405.541 29.802 -184 134.002C406 411.502 1862.69 -127.051 1999.5 29Z" fill="#F74924" fill-opacity="0.33"/>
                    </svg>
                    <svg className='absolute w-[100%] h-[100%] z-0' xmlns="http://www.w3.org/2000/svg" width="1920" height="357" viewBox="0 0 1920 357" fill="none">
                    <path d="M2006 24.5001C2108.97 129.168 2248.83 416.111 1956.5 245C1499.5 -22.5 -159.629 596.5 -239.468 232C-259.52 140.453 -444.877 80.6212 -239.467 213.832C172.5 481 1860.46 -123.444 2006 24.5001Z" fill="#F74924" fill-opacity="0.33"/>
                    </svg>
                    <Button label='Adhérer à la CPTS des Mauges' onClick={() => handleRelocateToURL()}></Button>
                    <div class="container z-10" onClick={() => setVisible(true)}>
                        <div class="book">
                            <div class="front">
                                <div class="cover">
                                    <img src={ldl1} alt="" className="w-[97%]"/>
                                </div>
                            </div>
                            <div class="left-side">
                                <h2>
                                    <span>CPTS des Mauges</span>
                                    <span>2024</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <img src={iconehand} width="50px" />
                    <p className='comicsansms'>Cliquez sur le livre pour l'ouvrir</p>
                    {
                        images !== null ? (
                            <Dialog visible={visible} onHide={() => setVisible(false)} >
                                <div>
                                    <div className='btn-download grid place-items-center' onClick={() => handleDownloadLdl()}>
                                        <p>Télécharger</p>
                                    </div>
                                    <Galleria
                                        value={images}
                                        style={{ maxWidth: '640px' }}
                                        className="custom-indicator-galleria"
                                        showThumbnails={false}
                                        showIndicators
                                        changeItemOnIndicatorHover
                                        showIndicatorsOnItem
                                        indicatorsPosition="top"
                                        item={itemTemplate}
                                        indicator={indicatorTemplate}
                                    />
                                </div>
                            </Dialog>
                        ) : 
                        (
                            null
                        )
                    }
                </div>
                <Footer />
            </div>
        )
    }
}

export default CommentAdherer;