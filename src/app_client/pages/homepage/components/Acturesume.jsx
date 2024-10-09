
import { useState, useEffect, useRef } from 'react';
import './acturesume.css';
import nactusServ from '../../../services/nosactualites.json';
import { Card } from 'primereact/card';
import { Carousel } from 'primereact/carousel';
import { Badge } from 'primereact/badge';

function Acturesume () {

    const [data, setData] = useState(null);
    useEffect(() => {
        setData(nactusServ.data);
    }, []);

    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );

    const actuTemplate = (d) => {
        return (
            <Card title={d.title} subTitle={d.detail} header={header} className="m-10 h-[10%]">
                <Badge style={{backgroundColor: "#0A727B"}} value="" size="xlarge"></Badge>
            </Card>
        )
    };

    const responsiveOptions = [
        {
            breakpoint: '1468px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '1100px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    return (
        <div className='w-full'>
            <Carousel value={data} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
            autoplayInterval={10000} itemTemplate={actuTemplate} />
        </div>
    )
}

export default Acturesume;