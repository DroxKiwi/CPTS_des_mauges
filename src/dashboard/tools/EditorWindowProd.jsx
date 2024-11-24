
import { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { API_prodsDash } from '../services/api/prod/prodsServicesDash';

function EditorWindowProd (props) {

    async function handleAddProd() {
        try{
            await API_prodsDash.create_prod();
            window.location.reload();
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
                        <Button className='m-5' label='Ajouter' severity='info' onClick={handleAddProd} />
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

export default EditorWindowProd;