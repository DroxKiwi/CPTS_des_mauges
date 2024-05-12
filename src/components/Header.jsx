import { useEffect, useRef } from 'react';
import './Header.css';

import { Button } from 'primereact/button';
import logo from '../assets/Images/logoDetoure.png';


// Le but du header est uniquement de gérer la gestion d'affichage autre part que dans le corps du composant tableau de bord.

function Header (props) {

    return (
        <div id="">
            <div id="" className='socialMediaHeader grid grid-cols-12'>
                <div className='iconMediaHeader'>

                </div>
                <div className='iconMediaHeader'>

                </div>
            </div>
            <div className='w-screen header  p-5 grid grid-cols-8'>
                <img src={logo} height={50} width={50} className='cursor-pointer' onClick={() => props.setChildW('homepage')}/>
                <Button className='headerButton' label='Présentation' onClick={() => props.setChildW('presentation')}></Button>
                <Button className='headerButton' label='Bureau et conseil d’administration' onClick={() => props.setChildW('bureauetconseil')}></Button>
                <Button className='headerButton' label='Le Projet de santé' onClick={() => props.setChildW('projetdesante')}></Button>
                <Button className='headerButton' label='Nos Actualités' onClick={() => props.setChildW('nosactualites')}></Button>
                <Button className='headerButton' label='Je suis patient' onClick={() => props.setChildW('jesuispatient')}></Button>
                <Button className='headerButton' label='Contact' onClick={() => props.setChildW('contact')}></Button>
            </div>
        </div>
    )
}

export default Header;