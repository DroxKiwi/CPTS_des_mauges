

import { useState, useEffect, useRef } from 'react';
import { Dialog } from 'primereact/dialog';
import { Galleria } from 'primereact/galleria';
import ldl1 from '../assets/Images/ldl/1.png';
import ldl2 from '../assets/Images/ldl/2.png';
import ldl3 from '../assets/Images/ldl/3.png';
import ldl4 from '../assets/Images/ldl/4.png';
import ldl5 from '../assets/Images/ldl/5.png';
import ldl6 from '../assets/Images/ldl/6.png';
import ldl7 from '../assets/Images/ldl/7.png';
import ldl8 from '../assets/Images/ldl/8.png';
import ldl9 from '../assets/Images/ldl/9.png';
import ldl10 from '../assets/Images/ldl/10.png';
import ldl from '../assets/Images/ldl.pdf';
import './commentadherer.css';

import { ls, ss } from '../utils/store';

function CommentAdherer() {

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
    }

    return (
        <div className='grid place-content-center mt-10 h-full'>
            <div class="container h-full" onClick={() => setVisible(true)}>
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
    )
}

export default CommentAdherer;