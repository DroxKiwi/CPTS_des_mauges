
import { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { API_patdsDash } from '../services/api/patd/patdsServicesDash';
import { Divider } from 'primereact/divider';
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';
import { Editor } from 'primereact/editor';
import { FileUpload } from 'primereact/fileupload';
import { InputText } from 'primereact/inputtext';
import defaultImg from '../assets/Images/defaultimg.png';
import { InputSwitch } from 'primereact/inputswitch';

function EditorWindowPatd (props) {

    async function handleAddPatd() {
        try{
            await API_patdsDash.create_patd();
            window.location.reload();
        }
        catch(error){
            console.error(error);
        }
    };

    async function handleAddPatf(){
        try{
            await API_patdsDash.create_patd_patf();
            window.location.reload();
        }
        catch(error){
            console.error(error);
        }
    };

    // Gestion des patfs

    const [allPatfs, setAllPatfs] = useState([]);
    const [visiblePatfEdit, setVisiblePatfEdit] = useState(false);

    useEffect(() => {
        try {
            const getData = async () => {
                setAllPatfs(await API_patdsDash.get_all_patf());
            }
            getData();
        }
        catch(error){
            console.error(error);
        }
    }, []);

    const header = (d) => {
        try {
            console.log(d);
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

    async function handleDeletePatf (patf_id) {
        try{
            await API_patdsDash.remove_patd_patf(patf_id);
            window.location.reload();
        }
        catch(error){
            console.error(error);
        }
    };

    // Editor
    
    const [namePatf, setNamePatf] = useState(null);
    const [subtitlePatf, setSubtitlePatf] = useState(null);
    const [descriptionPatf, setDescriptionPatf] = useState(null);
    const [imgPatf, setImgPatf] = useState(null);
    const [actifPatf, setActifPatf] = useState(false);
    const [totalSize, setTotalSize] = useState(0);
    const toast = useRef(null);
    const [selected, setSelected] = useState(null);

    function handleSetVisible(patf_id){
        try {
            const getData = async () => {
                setSelected(await API_patdsDash.get_by_id_patf(patf_id));
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
                console.log(selected);
                setNamePatf(selected.name);
                setSubtitlePatf(selected.subtitle);
                setDescriptionPatf(selected.description);
                setImgPatf(selected.img);
                setActifPatf(selected.actif);
                setVisiblePatfEdit(true);
            }
        }
        catch(error){
            console.error(error);
        }
    }, [selected]);

    const namePatfEdit = (
        <InputText value={namePatf} onChange={(e) => setNamePatf(e.target.value)} />
    );

    const headerPatfEdit = () => {
        try {
            if (selected !== null) {
                if (selected.img === 'null'){
                    return <img id="imgToDownloadPatf" alt="Card" src={defaultImg} />
                }
                else {
                    return <img id="imgToDownloadPatf" alt="Card" src={imgPatf} />
                }
            }
            else {
                return <img id="imgToDownloadPatf" alt="Card" src={defaultImg} />
            }
        }
        catch(error){
            console.error(error);
        }
    };

    const emptyTemplate = () => {
        try {
            setImgPatf(null);
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

    const onTemplateSelect = (e) => {
        try {
            let _totalSize = totalSize;
            let files = e.files;
            setImgPatf(e.files[e.files.length - 1].objectURL);
    
    
            Object.keys(files).forEach((key) => {
                _totalSize += files[key].size || 0;
            });
    
            setTotalSize(_totalSize);
        }
        catch(error){
            console.error(error);
        }
    };

    async function handleUpdatePatf(){
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
                await API_patdsDash.update_patd_patf(selected.patf_id, namePatf, subtitlePatf, descriptionPatf, base64, actifPatf);
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
            var imageFromTag = document.getElementById('imgToDownloadPatf');
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
    
    return (
        <div>
            {
                window.top.location.href === 'http://localhost:3000/dashboard/viewer' ? (
                    <div>
                        <Button className='m-5' label='Créer un dossier' severity='info' onClick={handleAddPatd} />
                        <h2 className='text-sky-700 ml-2'>Dossiers existants</h2>
                        {props.children}
                        <Divider />
                        <Button className='m-5' label='Créer un document' severity='secondary' onClick={handleAddPatf} />
                        <h2 className='text-green-700 ml-2'>Documents existants</h2>
                        <div className='grid grid-cols-5 gap-5 mx-5'>
                            {
                                allPatfs.map((patf) => (
                                    <div key={patf.patf_id}>
                                        <p>{patf.patf_id}</p>
                                        <Button className='mb-5' severity='danger' label='Supprimer le document' onClick={() => handleDeletePatf(patf.patf_id)}></Button>
                                        <div className='is-editable mx-5 py-5'>
                                            <Card title={patf.name} header={() => header(patf)} className='cursor-pointer mx-10' onClick={() => handleSetVisible(patf.patf_id)}>
                                                <p></p>
                                                <i className="pi pi-file" style={{ color: 'slateblue' }}></i>
                                            </Card>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <Dialog visible={visiblePatfEdit} onHide={() => setVisiblePatfEdit(false)}>
                            <Card title={namePatfEdit} header={headerPatfEdit} className="m-10 h-[10%]">
                                <InputText className='w-full card mt-5' value={subtitlePatf} onChange={(e) => setSubtitlePatf(e.target.value)} placeholder="Sous-titre de l'patf" />
                                {/*
                                <InputTextarea className='w-full card mt-5' value={descriptionPatf} onChange={(e) => setDescriptionPatf(e.target.value)} rows={10} placeholder="Description de l'patf" />
                                */}
                                {
                                    descriptionPatf !== null ? (
                                        <div>
                                            <Editor value={descriptionPatf.replaceAll('_GD_', '"').replaceAll('_GS_', "'")} onTextChange={(e) => setDescriptionPatf(e.htmlValue)} style={{ height: '320px' }} />
                                        </div>
                                    ) :
                                    (
                                        <div>
                                            <Editor value={descriptionPatf} onTextChange={(e) => setDescriptionPatf(e.htmlValue)} style={{ height: '320px' }} /> 
                                        </div>
                                    )
                                }
                            </Card>

                            <div>
                                <Toast ref={toast}></Toast>
                                <FileUpload mode="basic" accept="image/*" maxFileSize={1000000} emptyTemplate={emptyTemplate} onSelect={onTemplateSelect} />
                            </div>
                            <p>Rendre le document actif ?</p>
                            <InputSwitch checked={actifPatf} onChange={(e) => setActifPatf(e.value)} />
                            <Button label='Modifier' severity='success' onClick={handleUpdatePatf}></Button>
                        </Dialog>
                    </div>
                ) :
                (
                    <>
                        {props.children}
                    </>
                )
            }
        </div>
    )
}

export default EditorWindowPatd;