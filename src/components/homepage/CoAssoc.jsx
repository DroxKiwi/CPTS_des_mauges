
import { useState, useEffect, useRef } from 'react';
import './coassoc.css';
import c1 from '../../assets/Images/coassoc1.png';
import c2 from '../../assets/Images/coassoc2.png';
import c3 from '../../assets/Images/coassoc3.png';
import c4 from '../../assets/Images/coassoc4.png';
import c5 from '../../assets/Images/coassoc5.png';
import { Carousel } from 'primereact/carousel';


function CoAssoc () {

    const [coassoc, setCoassoc] = useState([]);

    useEffect(() => {
        var totalCoAssocTemp = [];
        totalCoAssocTemp.push(c1);
        totalCoAssocTemp.push(c2);
        totalCoAssocTemp.push(c3);
        totalCoAssocTemp.push(c4);
        totalCoAssocTemp.push(c5);
        setCoassoc(totalCoAssocTemp);
    }, []);

    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    
    const coassocTemplate = (coassoc) => {
        return (
            <div className='grid'>
                <div className='grid px-5 place-items-center col-span-1'>
                    <img height='200px' width='200px' src={coassoc} />
                </div>
            </div>
        );
    };

    return (
        <div className='grid place-items-center'>
            <div className="coassoc grid place-items-center">
                <Carousel value={coassoc} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={coassocTemplate} />
            </div>
        </div>
    )
}

export default CoAssoc;