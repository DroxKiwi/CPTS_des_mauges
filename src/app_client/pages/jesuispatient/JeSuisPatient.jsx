
import { useState, useEffect, useRef } from 'react';
import "../jesuispatient/jesuispatient.css";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import ErrorComponent from '../../../dashboard/tools/ErrorComponent';
import { API_patds } from '../../services/api/patdsServices';
import EditorTagPatd from '../../../dashboard/tools/EditorTagPatd';
import EditorWindowPatd from '../../../dashboard/tools/EditorWindowPatd';
import Header from '../../header/Header';
import './jesuispatient.css';


import { ls, ss } from '../../../utils/store';

function JeSuisProfessionnel (props) {

    useEffect(() => {
        ss.set('window', 'jesuispatient');
    }, []);

    const [docHeight, setDocHeight] = useState(null);
    const [docWidth, setDocWidth] = useState(null);
    const [data, setData] = useState(null);
    const [detailPatdVisible, setDetailPatdVisible] = useState(false);
    const [patfs, setPatfs] = useState([]);

    useEffect(() => {
        try {
            const getData = async () => {
                try {
                    setData(await API_patds.get_all());
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
        setDocHeight(window.innerHeight);
        setDocWidth(window.innerWidth - 10);
    }, [window.innerHeight]);

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

    async function handleOpenPatd(patf_ids){
        try {
            setDetailPatdVisible(true);
            var patfsTemp = [];
            if (patf_ids !== ""){
                var tabpatf_ids = patf_ids.split(',');
                for (let i = 0; i < tabpatf_ids.length; i++){
                    patfsTemp.push(await API_patds.get_by_id_patf(tabpatf_ids[i]));
                }
            }
            setPatfs(patfsTemp);
        }
        catch(error){
            console.error(error);
        }
    };

    // Gestion ouverture des patfs

    const [visiblePatf, setVisiblePatf] = useState(false);
    const [selectedPatf, setSelectedPatf] = useState(null);

    async function handlevisiblePatf(p) {
        setSelectedPatf(p);
        setVisiblePatf(true);
    };

    if (window.innerWidth < 1468){
        return (
            <div className='overflow-x-hidden jsp' style={{width: docWidth + 10, height: docHeight - props.headerHeight}}> 

            </div>
        )
    }
    else {
        return (
            <div className='fullscreen-bg'>
                <EditorWindowPatd>
                    <div className='overflow-x-hidden jsp grid place-items-center' style={{width: docWidth + 10, height: docHeight - props.headerHeight}}>
                        <Header setChildW={props.setChildW} setHeaderHeight={props.setHeaderHeight} />

                        <h2 className='titlejsp'>Les outils pour votre pratique</h2>

                        { 
                            data !== null ? (
                                <div className='grid grid-cols-5'>
                                    {
                                        data.map((d) => (
                                            <EditorTagPatd dataObject={d} id={d.patd_id} type="prod" setDetailPatdVisible={setDetailPatdVisible}>
                                                <Card onClick={() => handleOpenPatd(d.patf_ids)} title={d.name.replaceAll('_GD_', '"').replaceAll("_GS_", "'")} header={() => header(d)} className="m-10 cursor-pointer bg-sky-200">
                                                    <p></p>
                                                    <i className="pi pi-folder-open" style={{ color: 'slateblue' }}></i>
                                                </Card>
                                            </EditorTagPatd>
                                        ))
                                    }
                                </div>
                            ) :
                            (
                                null
                            )
                        }
                    </div>
                    <Dialog className='h-[90dvh] w-[80dvw]' visible={detailPatdVisible} onHide={() => setDetailPatdVisible(false)}>
                        <div className='grid grid-cols-6 gap-10'>
                            {
                                patfs.map((d) => (
                                    <Card onClick={() => handlevisiblePatf(d)} title={d.name.replaceAll('_GD_', '"').replaceAll("_GS_", "'")} header={header(d)} className="md:w-25rem cursor-pointer">
                                        <p></p>
                                    </Card>
                                ))
                            }
                        </div>
                    </Dialog>

                    <Dialog className='h-[80dvh] w-[70dvw]' visible={visiblePatf} onHide={() => setVisiblePatf(false)}>
                        {
                            selectedPatf !== null ? (
                                <Card title={selectedPatf.name.replaceAll('_GD_', '"').replaceAll("_GS_", "'")} subTitle={selectedPatf.subtitle.replaceAll('_GD_', '"').replaceAll("_GS_", "'")} header={() => header(selectedPatf)} className="m-10 h-[10%]">
                                    <div>
                                        {
                                            selectedPatf.description.split("&lt;iframe")[1] !== undefined ? (
                                                <div>
                                                    <div dangerouslySetInnerHTML={{ __html: selectedPatf.description.replaceAll('_GD_', '"').replaceAll("_GS_", "'").replaceAll('/@', "<a target='_blank' href='").replaceAll('@/', "'>lien</a>").split("&lt;iframe")[0] + selectedPatf.description.replaceAll('_GD_', '"').replaceAll("_GS_", "'").replaceAll('/@', "<a target='_blank' href='").replaceAll('@/', "'>lien</a>").split("iframe&gt;")[1] }}></div>
                                                    <iframe width="560" height="315" src={selectedPatf.description.replaceAll('_GD_', '"').replaceAll("_GS_", "'").split("iframe")[1].split('src="')[1].split('" title="')[0]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                                </div>
                                            ) :
                                            (
                                                <div dangerouslySetInnerHTML={{ __html: selectedPatf.description.replaceAll('_GD_', '"').replaceAll("_GS_", "'").replaceAll('/@', "<a target='_blank' href='").replaceAll('@/', "'>lien</a>") }}></div>
                                            )
                                        }
                                    </div>
                                </Card>
                            ) :
                            (
                                null
                            )
                        }
                    </Dialog>
                </EditorWindowPatd>
            </div>
        )
    }
}

export default JeSuisProfessionnel;