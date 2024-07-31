
import { useState, useEffect, useRef } from 'react';
import nactusServ from '../services/nosactualites.json';
import "./nosactualites.css";
import { Card } from 'primereact/card';
import { Badge } from 'primereact/badge';

import { ls, ss } from '../utils/store';

function NosActualite (props) {

    useEffect(() => {
        ss.set('window', 'actu');
    }, []);
  
    const [docHeight, setDocHeight] = useState(null);
    const [docWidth, setDocWidth] = useState(null);
    const [data, setData] = useState(null);
      
    useEffect(() => {
        setDocHeight(window.innerHeight);
        setDocWidth(window.innerWidth - 10);
    }, [window.innerHeight]);

    useEffect(() => {
        setData(nactusServ);
        console.log(nactusServ);
    }, []);

    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );

    return (
        <div className='overflow-x-hidden nosactu' style={{width: docWidth + 10, height: docHeight - props.headerHeight}}>
            <div className='grid place-items-center card bg-transparent'>
                <h2 className='titleactu'>
                    L'actualité de la CPTS
                </h2>
                { 
                    data !== null ? (
                        <div className=''>
                            <p className='maintext card bg-transparent'>
                                <div>
                                    {data.mainText}
                                </div>
                            </p>
                            <div className='grid grid-cols-4'>
                                {
                                    data.data.map((d) => (
                                        <Card title={d.title} subTitle={d.detail} header={header} className="m-10 h-[10%]">
                                        <Badge style={{backgroundColor: "#0A727B"}} value="" size="xlarge"></Badge>

                                        </Card>
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
        </div>
    )
}

export default NosActualite;