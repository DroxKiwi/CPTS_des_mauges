import { useState, useEffect } from 'react';
import './homepagetitle.css';
import logo from '../../../assets/Images/logoDetoure.png';


function HomePageTitle(props) {

    const [elDistanceTop, setElDistanceTop] = useState(null);

    useEffect(() => {
        if (window.innerWidth > 1700){
            setElDistanceTop(props.docHeight - 750);
        }
        else {
            setElDistanceTop(props.docHeight - 600);
        }
    }, [props.docHeight])

    return (
        <div className='my-10 overflow-y-hidden grid place-items-center'>
            <h1 className="homepagetitle my-10"><p>Bienvenue sur le site de la</p> <p>CPTS des Mauges</p></h1>
            <h2 className='homepagetitlesecondary'>Communauté Professionnelle Territoriale de Santé</h2>
            <div className='h-[250px]'>
            </div>
        </div>
    )
}

export default HomePageTitle;