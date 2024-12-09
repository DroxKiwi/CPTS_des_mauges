
import { useState, useEffect, useRef } from 'react';
import './acturesume.css';
import { Card } from 'primereact/card';
import { Carousel } from 'primereact/carousel';
import { API_actualites } from '../../../services/api/actualitesServices';
import { Tag } from 'primereact/tag';

function Acturesume () {

    const [data, setData] = useState(null);
    const [allTags, setAllTags] = useState([]);

    useEffect(() => {
        try {
            const getData = async () => {
                try {
                    setData(await API_actualites.get_all());
                    var allTagsTemp = await API_actualites.get_all_tags();
                    allTagsTemp.push({ name: 'Aucun', tag_id: null });
                    setAllTags(allTagsTemp);
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

    const RenderTag = (props) => {
        try {
            if (allTags.length > 0){
                for (let i = 0; i < allTags.length; i++) {
                    if (allTags[i].tag_id === props.tagid) {
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
        catch(error){
            console.error(error);
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
        }
    };

    const actuTemplate = (d) => {
        return (
            <Card title={d.title} subTitle={d.subtitle} header={() => header(d)} className="m-10 h-[300px] w-[300px]">
                <RenderTag tagid={d.tagid}/>
                <p>Publié : {d.tectimeinsert.split("T")[0]} à {d.tectimeinsert.split("T")[1]}</p>
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
        <div className=''>
            <div className='grid place-items-center'>
                <h2 className='title-acturesume'>L'actualité de la CPTS résumée</h2>
            </div>
            <Carousel value={data} numVisible={4} numScroll={4} responsiveOptions={responsiveOptions} className="custom-carousel" circular
            autoplayInterval={10000} itemTemplate={actuTemplate} />
        </div>
    )
}

export default Acturesume;