
import { useState, useEffect, useRef } from 'react';
import jspServ from '../services/jesuispatient.json';
import pdftest1 from '../services/jesuispatientpdf1.pdf';
import pdftest2 from '../services/jesuispatientpdf2.pdf';
import pdftest3 from '../services/jesuispatientpdf3.pdf';
import pdftest4 from '../services/jesuispatientpdf4.pdf';
import pdftest5 from '../services/jesuispatientpdf5.pdf';
import "./jesuispatient.css";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

import { ls, ss } from '../utils/store';

function JeSuisPatient (props) {

    useEffect(() => {
        ss.set('window', 'jesuispatient');
    }, []);

    const [docHeight, setDocHeight] = useState(null);
    const [docWidth, setDocWidth] = useState(null);
    const [data, setData] = useState(null);
    const [dataPDF, setDataPDF] = useState([]);
    const [dialogPdfVisible, setDialogPdfVisible] = useState(false);
    const [pdfSelected, setPdfSelected] = useState(null);
      
    useEffect(() => {
        setDocHeight(window.innerHeight);
        setDocWidth(window.innerWidth - 10);
    }, [window.innerHeight]);

    useEffect(() => {
        var jspServTemp = jspServ;
        var pdfTabTemp = [];
        pdfTabTemp.push(pdftest1);
        pdfTabTemp.push(pdftest2);
        pdfTabTemp.push(pdftest3);
        pdfTabTemp.push(pdftest4);
        pdfTabTemp.push(pdftest5);
        for (let i = 0; i < pdfTabTemp.length; i++){
            jspServTemp.data[i].pdf = pdfTabTemp[i];
        }
        setData(jspServTemp);
        console.log(jspServTemp);
    }, []);

    function handleSetPdfSelected(i) {
        setPdfSelected(data.data[i].pdf);
        setDialogPdfVisible(true);
    }

    return (
        <div className='overflow-x-hidden mb-10 jsp' style={{width: docWidth + 10, height: docHeight - props.headerHeight}}> 
            <div className='grid place-items-center card bg-transparent'>
                <h2 className='titlejsp'>
                    Je suis Patient
                </h2>
                { 
                    data !== null ? (
                        <div>
                            <p className='maintext card bg-transparent'>
                                        <div>
                                            {data.mainText}
                                        </div>
                            </p>
                            <div className='grid grid-cols-4'>
                                {
                                    data.data.map((d, i) => (
                                        <div className='grid grid-cols-1'>
                                            <p>{d.title}</p>
                                            <p>{d.detail}</p>
                                            <iframe src={d.pdf} />
                                            <Button className='w-[300px] my-5 btnopenpdf bg-white' label='Agrandir le PDF' raised text onClick={() => handleSetPdfSelected(i)}></Button>
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
            <Dialog visible={dialogPdfVisible} onHide={() => setDialogPdfVisible(false)}>
                {
                    pdfSelected !== null ? (
                        <iframe className='h-[80vh] w-[150vh]' src={pdfSelected} />
                    ) : 
                    (
                        null
                    )
                }
            </Dialog>
        </div>
    )
}

export default JeSuisPatient;