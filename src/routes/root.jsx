
import { useState, useEffect, useRef } from 'react';
import HomePage from '../app_client/pages/homepage/HomePage';
import Footer from '../app_client/footer/Footer';
import { Dialog } from 'primereact/dialog';
import {ls, ss} from '../utils/store';
import './root.css';

import useWindowSize from "../hooks/useWindowResize";

function Root () {

    const winW = useWindowSize();

    const [docWidth, setDocWidth] = useState(null);

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setDocWidth(window.innerWidth - 10);
    }, [window.innerHeight]);

    useEffect(() => {
        if (window.top.location.href !== 'http://localhost:3000/dashboard/viewer'){
            if (ss.getFormated("editmode")){
                ss.set("editmode", false);
            }
        }
    }, []);

    return (
        <div className="overflow-x-hidden wrapper">
            <HomePage />
            <Footer docWidth={docWidth} />
        </div>
    )
}

export default Root;