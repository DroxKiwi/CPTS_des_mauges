
import { useState, useEffect, useRef } from 'react';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import { InputSwitch } from "primereact/inputswitch";
import { Card } from 'primereact/card';
import { FileUpload } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import { Tooltip } from 'primereact/tooltip';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import { API_tagsDash } from '../services/api/tags/tagsServicesDash';
import { Dropdown } from 'primereact/dropdown';
import { API_actualitesDash } from '../services/api/articles/actualitesServicesDash';

function AddArticle () {
    
    const [nameArticle, setNameArticle] = useState(null);
    const [imgArticle, setImgArticle] = useState(null);
    const [tagArticle, setTagArticle] = useState(null);
    const [actifArticle, setActifArticle] = useState(true);
    const [totalSize, setTotalSize] = useState(0);
    const [base64Img, setBase64Img] = useState(null);
    const toast = useRef(null);
    const [tags, setTags] = useState([]);

    const templateTag = (tag) => {
        if (tag !== null) {
            return (
                <Tag value={tag.name} style={{backgroundColor: '#' + tag.color}} />
            )
        }
    }

    useEffect(() => {
        const getData = async () => {
            var tagTemp = await API_tagsDash.get_all();
            var result = [];
            for (var i = 0; i < tagTemp.length; i++) {
                if (tagTemp[i].actif){
                    result.push(tagTemp[i]);
                }
            }
            setTags(result);
        };
        getData();
    }, []);

    async function handleUpload(){
        var test = await customBase64Uploader(imgArticle);
        console.log(test);
        const postData = async () => {
            //await API_actualitesDash.create_article(nameArticle, base64Img, tagArticle, actifArticle); 
        }
        postData();
    };

    const customBase64Uploader = async (img) => {
        // convert file to base64 encoded
        if (img !== null){
            const file = img;
            const reader = new FileReader();
            let blob = await fetch(file.objectURL).then((r) => r.blob()); //blob:url
    
            reader.readAsDataURL(blob);
    
            var temp;
            reader.onloadend = function () {
                const base64data = reader.result;
                temp = base64data;
            };
            console.log(temp);
            return temp;
        }
    };

    const onTemplateSelect = (e) => {
        let _totalSize = totalSize;
        let files = e.files;
        setImgArticle(e.files[e.files.length - 1].objectURL);


        Object.keys(files).forEach((key) => {
            _totalSize += files[key].size || 0;
        });

        setTotalSize(_totalSize);
    };

    const emptyTemplate = () => {
        setImgArticle(null);
        return (
            <div className="flex align-items-center flex-column">
                <i className="pi pi-image mt-3 p-5" style={{ fontSize: '5em', borderRadius: '50%', backgroundColor: 'var(--surface-b)', color: 'var(--surface-d)' }}></i>
                <span style={{ fontSize: '1.2em', color: 'var(--text-color-secondary)' }} className="my-5">
                    Déposer une image ici
                </span>
            </div>
        );
    };

    const headerArticleEdit = () => {
        if (imgArticle !== null){
            return <img className='w-[500px] h-[300px]' alt="Card" src={imgArticle} /> 
        }
        else {
            return <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
        }
    };

    const nameArticleEdit = (
        <InputText className='w-full' placeholder="Choisir un nom d'article" value={nameArticle} onChange={(e) => setNameArticle(e.target.value)} />
    );

    return (
        <div className='grid place-items-center'>
            <div className='card grid-cols-3'>
                <div>
                    <Card title={nameArticleEdit} header={headerArticleEdit} className="m-10 h-[10%]">
                        <Dropdown value={tagArticle} onChange={(e) => setTagArticle(e.value)} options={tags} optionLabel="name" 
                            placeholder="Choisir un Tag" className="w-full md:w-14rem" itemTemplate={templateTag} valueTemplate={templateTag} />
                    </Card>
                </div>

                <div>
                    <Toast ref={toast}></Toast>
                    <FileUpload mode="basic" accept="image/*" maxFileSize={1000000} emptyTemplate={emptyTemplate} onSelect={onTemplateSelect} />
                </div>
                <p>Rendre l'article actif ?</p>
                <InputSwitch checked={actifArticle} onChange={(e) => setActifArticle(e.value)} />
                <Button label='Ajouter' severity='success' onClick={handleUpload}></Button>
            </div>
        </div>
    )
}

export default AddArticle;