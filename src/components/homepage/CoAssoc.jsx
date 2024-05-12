
import { useState, useEffect, useRef } from 'react';
import './coassoc.css';
import c1 from '../../assets/Images/coassoc1.png'
import c2 from '../../assets/Images/coassoc2.png'
import c3 from '../../assets/Images/coassoc3.png'
import c4 from '../../assets/Images/coassoc4.png'
import c5 from '../../assets/Images/coassoc5.png'


function CoAssoc () {

    const [totalCoAssoc, setTotalCoAssoc] = useState([]);

    useEffect(() => {
        var totalCoAssocTemp = [];
        totalCoAssocTemp.push(c1);
        totalCoAssocTemp.push(c2);
        totalCoAssocTemp.push(c3);
        totalCoAssocTemp.push(c4);
        totalCoAssocTemp.push(c5);
        setTotalCoAssoc(totalCoAssocTemp);
    }, []);

    return (
        <div className='grid place-items-center'>
            <div className={'coassoc grid grid-cols-' + totalCoAssoc.length}>
                { 
                    totalCoAssoc.map((as) => (
                        <div className='grid px-5 place-items-center col-span-1'>
                            <img src={as} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CoAssoc;