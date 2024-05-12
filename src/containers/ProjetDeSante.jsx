import { useState, useEffect, useRef } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import pdsServ from "../services/projetdesante.json";
import "./projetdesante.css";


function ProjetDeSante () {

  
    const [docHeight, setDocHeight] = useState(null);
    const [docWidth, setDocWidth] = useState(null);
    const [data, setData] = useState(null);
  
    useEffect(() => {
        setDocHeight(window.innerHeight);
        setDocWidth(window.innerWidth - 10);
    }, [window.innerHeight]);

    useEffect(() => {
        console.log(pdsServ);
        setData(pdsServ);
    }, []);

    const RenderItems = () => {
        return (
            <Accordion>
            {
                    data.accordion.map((ia) => (
                        <AccordionTab header={ia.content} style={{backgroundColor: ia.color}}>
                            <Accordion>
                            {
                                ia.items.map((ib) => (
                                    <AccordionTab header={ib.content}>
                                        {
                                            ib.items.map((ic) => (
                                                <div>
                                                    {ic.content}
                                                </div>
                                            ))
                                        }
                                    </AccordionTab>
                                ))
                            }
                            </Accordion>
                        </AccordionTab>
                    ))
                }
            </Accordion>
        )
    }

    return (
        <div className='overflow-x-hidden'>
            <div>
                {
                    data !== null ? (
                        <div className='card'>
                            <div className='card'>
                                <p className='maintext'>
                                    {data.mainText}
                                </p>
                            </div>
                            <div className='card'>
                                <RenderItems />
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

export default ProjetDeSante;