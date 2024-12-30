import { useState, useEffect } from 'react';
import './homepagetitle.css';


function HomePageTitle(props) {
    
    return (
        <div className='overflow-x-hidden'>
            <div className=''>
                <h1 className="homepagetitle"><p>Bienvenue sur le site de la</p> <p>CPTS des Mauges</p></h1>
                <p className='homepagetitlesecondary'>Communauté Professionnelle Territoriale de Santé</p>
            </div>
        </div>
    )
}

export default HomePageTitle;