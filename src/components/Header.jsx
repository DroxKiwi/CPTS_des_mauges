import { useEffect, useRef } from 'react';
import './Header.css';

import { Button } from 'primereact/button';
import logo from '../assets/Images/logoDetoure.png'

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
                <img src={logo} height={50} width={50}/>
                <Button className='headerButton' label='Présentation'></Button>
                <Button className='headerButton' label='Bureau et conseil d’administration'></Button>
                <Button className='headerButton' label='Le Projet de santé'></Button>
                <Button className='headerButton' label='Nos Missions'></Button>
                <Button className='headerButton' label='Nos Actualités'></Button>
                <Button className='headerButton' label='Je suis patient'></Button>
                <Button className='headerButton' label='Contact'></Button>
            </div>
        </div>
    )
}

export default Header;