
import { useState, useEffect, useRef } from 'react';
import { Dialog } from 'primereact/dialog';
import './editortag.css';
import { InputText } from 'primereact/inputtext';
import { InputSwitch } from "primereact/inputswitch";
import { Card } from 'primereact/card';
import { FileUpload } from 'primereact/fileupload';
import { Tag } from 'primereact/tag';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from "primereact/inputtextarea";
import { Editor } from "primereact/editor";
import defaultImg from '../assets/Images/defaultimg.png';

import { API_prodsDash } from '../services/api/prod/prodsServicesDash';

function EditorTagProd (props) {

    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState(null);

    const header = () => {
        if (props.type === 'prod'){
            return (
                <div>
                    Modification dossier professionnel
                </div>
            )
        }
    };

    // Gestion article ------------------------------------------------------------------------------------------
    const [nameProd, setNameProd] = useState(null);
    const [imgProd, setImgProd] = useState(null);
    const [actifProd, setActifProd] = useState(false);
    const [totalSize, setTotalSize] = useState(0);
    const toast = useRef(null);

    const onTemplateSelect = (e) => {
        try {
            let _totalSize = totalSize;
            let files = e.files;
            setImgProd(e.files[e.files.length - 1].objectURL);
    
    
            Object.keys(files).forEach((key) => {
                _totalSize += files[key].size || 0;
            });
    
            setTotalSize(_totalSize);
        }
        catch(error){
            console.error(error);
        }
    };

    async function handleUpdateProd(){
        try {
            customBase64UploaderCanvas(
                (dataUrl) => {
                    upload(dataUrl);
                }
            );
        }
        catch(error){
            console.error(error);
        }
    };

    async function upload(base64){
        try {
            const postData = async () => {
                await API_prodsDash.update_article(selected.prod_id, nameProd, base64, actifProd);
                window.location.reload();
            }
            postData();
        }
        catch(error){
            console.error(error);
        }
    }

    const customBase64UploaderCanvas = async (callback) => {
        try {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            var dataURL;
            var imageFromTag = document.getElementById('imgToDownload');
            ctx.drawImage(imageFromTag, 0, 0);
            //createImageBitmap(this).then(imageBitmap=>{ctx.drawImage(imageBitmap,0,0)});
            canvas.toBlob(function() {        // get content as JPEG blob
                // here the image is a blob
            }, "image/png", 0.75);
            dataURL = canvas.toDataURL();
            callback(dataURL);
        }
        catch(error){
            console.error(error);
        }
    };

    const headerProdEdit = () => {
        try {
            if (selected !== null) {
                if (selected.img === 'null'){
                    return <img id="imgToDownload" alt="Card" src={defaultImg} />
                }
                else {
                    return <img id="imgToDownload" alt="Card" className='w-[500px] h-[300px]' src={imgProd} />
                }
            }
            else {
                return <img id="imgToDownload" alt="Card" src={defaultImg} />
            }
        }
        catch(error){
            console.error(error);
        }
    };

    const nameProdEdit = (
        <InputText value={nameProd} onChange={(e) => setNameProd(e.target.value)} />
    )

    const emptyTemplate = () => {
        try {
            setImgProd(null);
            return (
                <div className="flex align-items-center flex-column">
                    <i className="pi pi-image mt-3 p-5" style={{ fontSize: '5em', borderRadius: '50%', backgroundColor: 'var(--surface-b)', color: 'var(--surface-d)' }}></i>
                    <span style={{ fontSize: '1.2em', color: 'var(--text-color-secondary)' }} className="my-5">
                        Déposer une image ici
                    </span>
                </div>
            );
        }
        catch(error){
            console.error(error);
        }
    };

    function handleSetVisible(){
        try {
            props.setDetailProdVisible(false);
            const getData = async () => {
                setSelected(await API_prodsDash.get_by_id(props.id));
            }
            getData();
        }
        catch(error){
            console.error(error);
        }
    };

    useEffect(() => {
        try {
            if (selected !== null){
                setNameProd(selected.name);
                setImgProd(selected.img);
                setActifProd(selected.actif);
                setVisible(true);
            }
        }
        catch(error){
            console.error(error);
        }
    }, [selected]);

    // Suppression d'un article

    async function handleRemoveProd(id){
        try{
            await API_prodsDash.remove_prod(id);
            window.location.reload();
        }
        catch(error){
            console.error(error);
        }
    };

    // Gestion prod ------------------------------------------------------------------------------------------

    return (
        <div>
            {
                window.top.location.href === 'http://localhost:3000/dashboard/viewer' ? (
                    <div>
                        <p className='id-editable'>{props.id}</p>
                        <Button label='Supprimer' severity='danger' onClick={() => handleRemoveProd(props.id)}></Button>
                        <div className='is-editable' onClick={() => handleSetVisible()}>
                            {props.children}
                        </div>
                    </div>
                ) :
                (
                    <>
                        {props.children}
                    </>
                )
            }

            <Dialog maximizable header={header} visible={visible} onHide={() => setVisible(false)}>
                {
                    selected !== null ? (
                        <div className='card'>
                            <div className='card grid-cols-3'>
                                <div>
                                    <Card title={nameProdEdit} header={headerProdEdit} className="m-10 h-[10%]">

                                    </Card>
                                </div>

                                <div>
                                    <Toast ref={toast}></Toast>
                                    <FileUpload mode="basic" accept="image/*" maxFileSize={1000000} emptyTemplate={emptyTemplate} onSelect={onTemplateSelect} />
                                </div>
                                <p>Rendre le dossier actif ?</p>
                                <InputSwitch checked={actifProd} onChange={(e) => setActifProd(e.value)} />
                                <Button label='Modifier' severity='success' onClick={handleUpdateProd}></Button>
                            </div>
                        </div>
                    ) : 
                    (
                        null
                    )
                }
            </Dialog>
        </div>
    )
}

export default EditorTagProd;