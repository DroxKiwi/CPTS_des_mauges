

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

import { ls, ss } from '../../../utils/store';

function CommentAdherer(props) {

    const [visible, setVisible] = useState(false);
    const [images, setImages] = useState(null);

    const [docWidth, setDocWidth] = useState(null);
    const [docHeight, setDocHeight] = useState(null);

    useEffect(() => {
        setDocHeight(window.innerHeight);
        setDocWidth(window.innerWidth - 10);
    }, [window.innerHeight]);

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
            <div style={{width: docWidth + 10, height: docHeight - props.headerHeight}} className='grid'>
                <Header setChildW={props.setChildW} setHeaderHeight={props.setHeaderHeight} />
                <div className='grid place-items-center'>
                    <div className="btntrns redirect-adherer-mobile cursor-pointer grid place-items-center" onClick={() => handleRelocateToURL('presentation')}>
                        <p className='redirect-adherer-text'>Adhérer à la CPTS des Mauges</p>
                    </div>
                    <div class="container" onClick={() => setVisible(true)}>
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
            </div>
        )
    }
    else {
        return (
            <div style={{width: docWidth + 10, height: docHeight - props.headerHeight}} className='grid'>
                <Header setChildW={props.setChildW} setHeaderHeight={props.setHeaderHeight} />
                <div className='grid place-items-center'>
                    <div className="btntrns redirect-adherer cursor-pointer mb-10 grid place-items-center" onClick={() => handleRelocateToURL('presentation')}>
                        <p className='redirect-adherer-text'>Adhérer à la CPTS des Mauges</p>
                    </div>
                    <div class="container" onClick={() => setVisible(true)}>
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
            </div>
        )
    }
}

export default CommentAdherer;