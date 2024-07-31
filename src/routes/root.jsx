
import { useState, useEffect, useRef } from 'react';
import HomePage from '../containers/HomePage';
import Presentation from '../containers/Presentation';
import BureauEtConseil from '../containers/BureauEtConseil';
import ProjetDeSante from '../containers/ProjetDeSante';
import NosActualites from '../containers/NosActualites';
import JeSuisPatient from '../containers/JeSuisPatient';
import JeSuisProfessionnel from '../containers/JeSuisProfessionnel';
import CommentAdherer from '../containers/CommentAdherer';
import Contact from '../containers/Contact';
import Header from '../components/Header';
import Footer from '../components/footer/Footer';
import './root.css';

import useWindowSize from "../hooks/useWindowResize";
import Cookies from 'universal-cookie';

function Root () {

    const winW = useWindowSize();

    const cookies = new Cookies(null ,{ path: '/' });

    const [childW, setChildW] = useState(null);
    const [docHeight, setDocHeight] = useState(null);
    const [docWidth, setDocWidth] = useState(null);
    const [headerHeight, setHeaderHeight] = useState(null);

    useEffect(() => {
        setDocHeight(window.innerHeight);
        setDocWidth(window.innerWidth - 10);
    }, [window.innerHeight]);

    function ChildWindow () {
        switch (childW) {
            case 'presentation':
                return <Presentation headerHeight={headerHeight} />;
            case 'bureauetconseil':
                return <BureauEtConseil headerHeight={headerHeight} />;
            case 'projetdesante':
                return <ProjetDeSante headerHeight={headerHeight} />
            case 'nosactualites':
                return <NosActualites headerHeight={headerHeight} />;
            case 'jesuispatient':
                return <JeSuisPatient headerHeight={headerHeight} />;
            case 'jesuisprofessionnel':
                return <JeSuisProfessionnel headerHeight={headerHeight} />;
            case 'adherer':
                return <CommentAdherer headerHeight={headerHeight} />;
            case 'contact':
                return <Contact headerHeight={headerHeight} />;
            default:
                return <HomePage setChildW={setChildW} />;
        }
    }

    return (
        <div className="overflow-x-hidden wrapper">
            <Header setChildW={setChildW} setHeaderHeight={setHeaderHeight} />
            <ChildWindow />
            <Footer docWidth={docWidth} setChildW={setChildW} />
        </div>
    )
}

export default Root;