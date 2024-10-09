
import { useState, useEffect, useRef } from 'react';
import { Dialog } from 'primereact/dialog';
import './editortag.css';
import { InputText } from 'primereact/inputtext';
import { InputSwitch } from "primereact/inputswitch";
import { Card } from 'primereact/card';
import { Badge } from 'primereact/badge';
import { FileUpload } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import { Tooltip } from 'primereact/tooltip';
import { Tag } from 'primereact/tag';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

import { API_actualitesDash } from '../services/api/articles/actualitesServicesDash';

function EditorTag (props) {

    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState(null);

    const header = () => {
        if (props.type === 'article'){
            return (
                <div>
                    Modification Article
                </div>
            )
        }
    }

    function handleSetVisible(){
        const getData = async () => {
            setSelected(await API_actualitesDash.get_by_id(props.id));
        }
        getData();
    };

    useEffect(() => {
        if (selected !== null){
            setVisible(true);
        }
    }, [selected]);


    // Gestion article ------------------------------------------------------------------------------------------
    const [nameArticle, setNameArticle] = useState(null);
    const [imgArticle, setImgArticle] = useState(null);
    const [tagArticle, setTagArticle] = useState(null);
    const [actifArticle, setActifArticle] = useState(false);
    const [totalSize, setTotalSize] = useState(0);
    const fileUploadRef = useRef(null);
    const toast = useRef(null);

    const onTemplateSelect = (e) => {
        let _totalSize = totalSize;
        let files = e.files;

        Object.keys(files).forEach((key) => {
            _totalSize += files[key].size || 0;
        });

        setTotalSize(_totalSize);
    };

    const onTemplateUpload = (e) => {
        let _totalSize = 0;

        e.files.forEach((file) => {
            _totalSize += file.size || 0;
        });

        setTotalSize(_totalSize);
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };

    const onTemplateRemove = (file, callback) => {
        setTotalSize(totalSize - file.size);
        callback();
    };

    const onTemplateClear = () => {
        setTotalSize(0);
    };

    const headerTemplate = (options) => {
        const { className, chooseButton, uploadButton, cancelButton } = options;
        const value = totalSize / 10000;
        const formatedValue = fileUploadRef && fileUploadRef.current ? fileUploadRef.current.formatSize(totalSize) : '0 B';

        return (
            <div className={className} style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}>
                {chooseButton}
                {uploadButton}
                {cancelButton}
                <div className="flex align-items-center gap-3 ml-auto">
                    <span>{formatedValue} / 1 MB</span>
                    <ProgressBar value={value} showValue={false} style={{ width: '10rem', height: '12px' }}></ProgressBar>
                </div>
            </div>
        );
    };

    const itemTemplate = (file, props) => {
        return (
            <div className="flex align-items-center flex-wrap">
                <div className="flex align-items-center" style={{ width: '40%' }}>
                    <img alt={file.name} role="presentation" src={file.objectURL} width={100} />
                    <span className="flex flex-column text-left ml-3">
                        {file.name}
                        <small>{new Date().toLocaleDateString()}</small>
                    </span>
                </div>
                <Tag value={props.formatSize} severity="warning" className="px-3 py-2" />
                <Button type="button" icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger ml-auto" onClick={() => onTemplateRemove(file, props.onRemove)} />
            </div>
        );
    };

    const emptyTemplate = () => {
        return (
            <div className="flex align-items-center flex-column">
                <i className="pi pi-image mt-3 p-5" style={{ fontSize: '5em', borderRadius: '50%', backgroundColor: 'var(--surface-b)', color: 'var(--surface-d)' }}></i>
                <span style={{ fontSize: '1.2em', color: 'var(--text-color-secondary)' }} className="my-5">
                    Déposer une image ici
                </span>
            </div>
        );
    };

    const chooseOptions = { icon: 'pi pi-fw pi-images', iconOnly: true, className: 'custom-choose-btn p-button-rounded p-button-outlined' };
    const uploadOptions = { icon: 'pi pi-fw pi-cloud-upload', iconOnly: true, className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined' };
    const cancelOptions = { icon: 'pi pi-fw pi-times', iconOnly: true, className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined' };


    const headerArticleEdit = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );

    const nameArticleEdit = (
        <InputText value={nameArticle} onChange={(e) => setNameArticle(e.target.value)} />
    )

    const RenderArticleModal = () => {

        setNameArticle(selected.name);
        setImgArticle(selected.img);
        setTagArticle(selected.tag);
        setActifArticle(selected.actif);

        return (
            <div>
                {
                    <div className='card'>

                        <div>
                            <Card title={nameArticleEdit} header={headerArticleEdit} className="m-10 h-[10%]">
                                <Badge style={{backgroundColor: "#0A727B"}} value="" size="xlarge"></Badge>            
                            </Card>
                        </div>

                        <div>
                        <Toast ref={toast}></Toast>

                        <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
                        <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
                        <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />

                        <FileUpload ref={fileUploadRef} name="demo[]" url="/api/upload" multiple accept="image/*" maxFileSize={1000000}
                            onUpload={onTemplateUpload} onSelect={onTemplateSelect} onError={onTemplateClear} onClear={onTemplateClear}
                            headerTemplate={headerTemplate} itemTemplate={itemTemplate} emptyTemplate={emptyTemplate}
                            chooseOptions={chooseOptions} uploadOptions={uploadOptions} cancelOptions={cancelOptions} />
                        </div>

                        <InputText value={tagArticle} onChange={(e) => tagArticle(e.target.value)} />
                        <InputSwitch checked={actifArticle} onChange={(e) => setActifArticle(e.value)} />
                    </div>
                }
            </div>
        )
    };
    // Gestion article ------------------------------------------------------------------------------------------

    return (
        <div>
            {
                window.top.location.href === 'http://localhost:3000/dashboard/viewer' ? (
                    <div className='is-editable' onClick={() => handleSetVisible()}>
                        <p className='id-editable'>{props.id}</p>
                        {props.children}
                    </div>
                ) :
                (
                    <>
                        {props.children}
                    </>
                )
            }

            <Dialog header={header} visible={visible} onHide={() => setVisible(false)}>
                {
                    selected !== null ? (
                        <>
                            {
                                props.type === 'article'? (
                                    <RenderArticleModal />
                                ) :
                                (
                                    null
                                )
                            }
                        </>
                    ) : 
                    (
                        null
                    )
                }
            </Dialog>
        </div>
    )
}

export default EditorTag;