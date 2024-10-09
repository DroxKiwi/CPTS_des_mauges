
import { useState, useEffect, useRef } from 'react';
import "./nosactualites.css";
import { Card } from 'primereact/card';
import { Badge } from 'primereact/badge';
import Header from '../../header/Header';
import { API_actualites } from '../../services/api/actualitesServices';

import EditorTag from '../../../dashboard/tools/EditorTag';

import { ls, ss } from '../../../utils/store';

function NosActualite (props) {

    useEffect(() => {
        ss.set('window', 'actu');
    }, []);
  
    const [docHeight, setDocHeight] = useState(null);
    const [docWidth, setDocWidth] = useState(null);
    const [data, setData] = useState(null);
      
    useEffect(() => {
        setDocHeight(window.innerHeight - props.headerHeight);
        setDocWidth(window.innerWidth - 10);
    }, [window.innerHeight]);

    useEffect(() => {
        //setData(nactusServ);
        const getData = async () => {
            try {
                setData(await API_actualites.get_all());
                console.log(data);
            }
            catch(error){
                console.error(error);
            }
        }
        getData();
    }, []);

    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );

    if (window.innerWidth < 1468){
        return (
            <div className='overflow-x-hidden' style={{width: docWidth - 10, height: docHeight}}>
                <Header setChildW={props.setChildW} setHeaderHeight={props.setHeaderHeight} />
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
                                <div className='grid grid-cols-1'>
                                    {
                                        data.data.map((d) => (
                                            <Card title={d.name} header={header} className="m-10 h-[10%]">
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
    else {
        return (
            <div className='overflow-x-hidden'>
                <Header setChildW={props.setChildW} setHeaderHeight={props.setHeaderHeight} />
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
                                        data.map((d) => (
                                            <EditorTag dataObject={d} id={d.article_id} type="article">
                                                <div>
                                                    <Card title={d.name} header={header} className="m-10 h-[10%]">
                                                        <Badge style={{backgroundColor: "#0A727B"}} value="" size="xlarge"></Badge>            
                                                    </Card>
                                                </div>
                                            </EditorTag>
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

}

export default NosActualite;