
import { useState, useEffect, useRef } from 'react';
import "./nosactualites.css";
import { Card } from 'primereact/card';
import { Badge } from 'primereact/badge';
import Header from '../../header/Header';
import { API_actualites } from '../../services/api/actualitesServices';
import { Tag } from 'primereact/tag';

import EditorTag from '../../../dashboard/tools/EditorTag';

import { ls, ss } from '../../../utils/store';

function NosActualite (props) {

    useEffect(() => {
        ss.set('window', 'actu');
    }, []);
  
    const [docHeight, setDocHeight] = useState(null);
    const [docWidth, setDocWidth] = useState(null);
    const [allTags, setAllTags] = useState([]);
    const [data, setData] = useState([]);
      
    useEffect(() => {
        setDocHeight(window.innerHeight - props.headerHeight);
        setDocWidth(window.innerWidth - 10);
    }, [window.innerHeight]);

    useEffect(() => {
        //setData(nactusServ);
        const getData = async () => {
            try {
                setData(await API_actualites.get_all());
                setAllTags(await API_actualites.get_all_tags());
                console.log(data);
                console.log(allTags);
            }
            catch(error){
                console.error(error);
            }
        }
        getData();
    }, []);

    const header = (d) => {
        if (d.img !== null && d.img !== undefined){
            return (
                <img alt="Card" src={d.img} />
            )
        }
        else {
            return (
                <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
            )
        }
    };

    const RenderTag = (props) => {
        console.log(data, allTags, props.tagid);
        if (allTags.length > 0){
            for (let i = 0; i < allTags.length; i++) {
                console.log(allTags[i], props.tagid);
                if (allTags[i].tag_id === props.tagid) {
                    console.log(allTags[i]);
                    return (
                        <Tag value={allTags[i].name} style={{backgroundColor: '#' + allTags[i].color}} />
                    )
                }
            }
        }
        else {
            return (
                null
            )
        }
    }

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
                                            <Card title={d.name} header={() => header(d)} className="m-10 h-[10%]">
                                                <RenderTag tagid={d.tagid}/>
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
                                                    <Card title={d.name} header={() => header(d)} className="m-10 h-[10%]">
                                                        <RenderTag tagid={d.tagid}/>
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