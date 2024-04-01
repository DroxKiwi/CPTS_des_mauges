import { useState, useEffect } from 'react';
import './homepagetitle.css';


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
        <div className='my-10 overflow-y-hidden' style={{marginTop: elDistanceTop}}>
            <h1 className="homepagetitle"><p>Bienvenue sur le site de la</p> <p>CPTS des Mauges</p></h1>
            <h2 className='homepagetitlesecondary'>communauté professionnelle territoriale de santé</h2>
        </div>
    )

}

export default HomePageTitle;