
import { useState, useEffect, useRef } from 'react';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { API_eventsDash } from '../services/api/events/eventsServicesDash';
import { API_tagsDash } from '../services/api/tags/tagsServicesDash';

function EditorWindowAdh (props) {

    const toast = useRef(null);
    const triggerError = (error) => {
        toast.current.show({ severity: 'warn', summary: 'Erreur', detail: error.message, sticky: true });
    };
    const showAdd = () => {
        toast.current.show({ severity: 'success', summary: 'Succès !', detail: 'Evenement ajouté' });
    };

    const showError = () => {
        toast.current.show({ severity: 'warn', summary: 'Erreur', detail: "Aucun tags de créé et d'actif !" });
    };

    async function handleAddEvent() {
        try {
            await API_eventsDash.create_event();
            showAdd();
            window.location.reload();
        }
        catch(error){
            triggerError(error);
            console.error(error);
        }
    };

    return (
        <div>
            {
                window.top.location.href === process.env.REACT_APP_BASE_APP_URI + '/dashboard/viewer' ? (
                    <div>
                        <Button className='m-5' label='Ajouter' severity='info' onClick={handleAddEvent} />
                        <Toast ref={toast}></Toast> 
                        {props.children}
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

export default EditorWindowAdh;