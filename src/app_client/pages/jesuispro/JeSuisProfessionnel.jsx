
import { useState, useEffect, useRef } from 'react';
import "../jesuispatient/jesuispatient.css";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import ErrorComponent from '../../../dashboard/tools/ErrorComponent';
import { API_prods } from '../../services/api/prodsServices';
import EditorWindowProd from '../../../dashboard/tools/EditorWindowProd';
import EditorTagProd from '../../../dashboard/tools/EditorTagProd';
import Header from '../../header/Header';


import { ls, ss } from '../../../utils/store';

function JeSuisProfessionnel (props) {

    useEffect(() => {
        ss.set('window', 'jesuispatient');
    }, []);

    const [docHeight, setDocHeight] = useState(null);
    const [docWidth, setDocWidth] = useState(null);
    const [data, setData] = useState(null);
    const [detailProdVisible, setDetailProdVisible] = useState(false);
    const [selectedDetail, setSelectedDetail] = useState(null);

    useEffect(() => {
        try {
            //setData(nactusServ);
            const getData = async () => {
                try {
                    setData(await API_prods.get_all());
                }
                catch(error){
                    console.error(error);
                }
            }
            getData();   
        }
        catch(error){
            console.error(error);
        }
    }, []);

    useEffect(() => {
        console.log(data)
    }, [data])
      
    useEffect(() => {
        setDocHeight(window.innerHeight);
        setDocWidth(window.innerWidth - 10);
    }, [window.innerHeight]);

    function handleOpenProd(d) {
        try {
            setDetailProdVisible(true);
            setSelectedDetail(d);
        }
        catch(error){
            console.error(error);
            return <ErrorComponent error={error} />
        }
    };

    const header = (d) => {
        try {
            if (d.img !== null && d.img !== undefined && d.img !== "null"){
                return (
                    <img alt="Card" src={d.img} />
                )
            }
            else {
                return (
                    <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
                )
            }
        }
        catch(error){
            console.error(error);
            return <ErrorComponent error={error} />
        }
    };

    if (window.innerWidth < 1468){
        return (
            <div className='overflow-x-hidden jsp' style={{width: docWidth + 10, height: docHeight - props.headerHeight}}> 

            </div>
        )
    }
    else {
        return (
            <EditorWindowProd>
                <div className='overflow-x-hidden jsp' style={{width: docWidth + 10, height: docHeight - props.headerHeight}}>
                    <Header setChildW={props.setChildW} setHeaderHeight={props.setHeaderHeight} />
                    { 
                        data !== null ? (
                            <div className='grid grid-cols-4'>
                                {
                                    data.map((d) => (
                                        <EditorTagProd dataObject={d} id={d.prod_id} type="prod" setDetailProdVisible={setDetailProdVisible}>
                                            <Card onClick={() => setDetailProdVisible(true)} title={d.name.replaceAll('_GD_', '"').replaceAll("_GS_", "'")} header={() => header(d)} className="m-10 h-[100%] cursor-pointer">
                                                <p></p>
                                            </Card>
                                        </EditorTagProd>
                                    ))
                                }
                            </div>
                        ) :
                        (
                            null
                        )
                    }
                </div>
                <Dialog className='h-[80dvh] w-[60dvw]' visible={detailProdVisible} onHide={() => setDetailProdVisible(false)}>

                </Dialog>
            </EditorWindowProd>
        )
    }
}

export default JeSuisProfessionnel;