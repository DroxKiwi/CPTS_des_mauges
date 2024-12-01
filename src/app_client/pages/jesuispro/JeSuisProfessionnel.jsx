
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
import './jesuisprofessionnel.css';


import { ls, ss } from '../../../utils/store';

function JeSuisProfessionnel (props) {

    useEffect(() => {
        ss.set('window', 'jesuispatient');
    }, []);

    const [docHeight, setDocHeight] = useState(null);
    const [docWidth, setDocWidth] = useState(null);
    const [data, setData] = useState(null);
    const [detailProdVisible, setDetailProdVisible] = useState(false);
    const [profs, setProfs] = useState([]);

    useEffect(() => {
        try {
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

    async function handleOpenProd(prof_ids){
        try {
            setDetailProdVisible(true);
            var profsTemp = [];
            if (prof_ids !== ""){
                console.log(prof_ids)
                var tabProf_ids = prof_ids.split(',');
                for (let i = 0; i < tabProf_ids.length; i++){
                    profsTemp.push(await API_prods.get_by_id_prof(tabProf_ids[i]));
                }
            }
            setProfs(profsTemp);
        }
        catch(error){
            console.error(error);
        }
    };

    // Gestion ouverture des profs

    const [visibleProf, setVisibleProf] = useState(false);
    const [selectedProf, setSelectedProf] = useState(null);

    async function handleVisibleProf(p) {
        setSelectedProf(p);
        setVisibleProf(true);
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
                <EditorWindowProd>
                    <div className='overflow-x-hidden jsp grid place-items-center' style={{width: docWidth + 10, height: docHeight - props.headerHeight}}>
                        <Header setChildW={props.setChildW} setHeaderHeight={props.setHeaderHeight} />

                        <h2 className='titlejsp'>Les outils pour votre pratique</h2>

                        { 
                            data !== null ? (
                                <div className='grid grid-cols-5'>
                                    {
                                        data.map((d) => (
                                            <EditorTagProd dataObject={d} id={d.prod_id} type="prod" setDetailProdVisible={setDetailProdVisible}>
                                                <Card onClick={() => handleOpenProd(d.prof_ids)} title={d.name.replaceAll('_GD_', '"').replaceAll("_GS_", "'")} header={() => header(d)} className="m-10 cursor-pointer bg-sky-200">
                                                    <p></p>
                                                    <i className="pi pi-folder-open" style={{ color: 'slateblue' }}></i>
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
                    <Dialog className='h-[90dvh] w-[80dvw]' visible={detailProdVisible} onHide={() => setDetailProdVisible(false)}>
                        <div className='grid grid-cols-6 gap-10'>
                            {
                                profs.map((d) => (
                                    <Card onClick={() => handleVisibleProf(d)} title={d.name.replaceAll('_GD_', '"').replaceAll("_GS_", "'")} header={header(d)} className="md:w-25rem cursor-pointer">
                                        <p></p>
                                    </Card>
                                ))
                            }
                        </div>
                    </Dialog>

                    <Dialog className='h-[80dvh] w-[70dvw]' visible={visibleProf} onHide={() => setVisibleProf(false)}>
                        {
                            selectedProf !== null ? (
                                <Card title={selectedProf.name.replaceAll('_GD_', '"').replaceAll("_GS_", "'")} subTitle={selectedProf.subtitle.replaceAll('_GD_', '"').replaceAll("_GS_", "'")} header={() => header(selectedProf)} className="m-10 h-[10%]">
                                    <div>
                                        {
                                            selectedProf.description.split("&lt;iframe")[1] !== undefined ? (
                                                <div>
                                                    <div dangerouslySetInnerHTML={{ __html: selectedProf.description.replaceAll('_GD_', '"').replaceAll("_GS_", "'").replaceAll('/@', "<a target='_blank' href='").replaceAll('@/', "'>lien</a>").split("&lt;iframe")[0] + selectedProf.description.replaceAll('_GD_', '"').replaceAll("_GS_", "'").replaceAll('/@', "<a target='_blank' href='").replaceAll('@/', "'>lien</a>").split("iframe&gt;")[1] }}></div>
                                                    <iframe width="560" height="315" src={selectedProf.description.replaceAll('_GD_', '"').replaceAll("_GS_", "'").split("iframe")[1].split('src="')[1].split('" title="')[0]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                                </div>
                                            ) :
                                            (
                                                <div dangerouslySetInnerHTML={{ __html: selectedProf.description.replaceAll('_GD_', '"').replaceAll("_GS_", "'").replaceAll('/@', "<a target='_blank' href='").replaceAll('@/', "'>lien</a>") }}></div>
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
                </EditorWindowProd>
            </div>
        )
    }
}

export default JeSuisProfessionnel;