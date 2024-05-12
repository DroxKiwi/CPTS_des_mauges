
import { useState, useEffect, useRef } from 'react';
import Header from "../components/Header";
import Footer from "../components/footer/Footer";
import useWindowSize from "../hooks/useWindowResize";
import nactusServ from '../services/nosactualites.json';
import "./nosactualites.css";
import { Card } from 'primereact/card';

function NosActualite () {


    const winW = useWindowSize();
  
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
        <div className='overflow-x-hidden'>
            <Header/>
            <div className='grid place-items-center card'>
                <h2 className='titleactu'>
                    L'actualité de la CPTS
                </h2>
                { 
                    data !== null ? (
                        <div>
                            <p className='maintext card'>
                                <div>
                                    {data.mainText}
                                </div>
                            </p>
                            <div className='grid grid-cols-4'>
                                {
                                    data.data.map((d) => (
                                        <Card title={d.title} subTitle={d.detail} header={header} className="m-10 h-[10%]">
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
            <div className='h-[100px]'>
                <Footer docWidth={docWidth} />
            </div>
        </div>
    )
}

export default NosActualite;