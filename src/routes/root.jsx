
import { useState, useEffect, useRef } from 'react';
import HomePage from '../app_client/pages/homepage/HomePage';
import { Dialog } from 'primereact/dialog';
import {ls, ss} from '../utils/store';
import './root.css';

import useWindowSize from "../hooks/useWindowResize";

function Root () {

    const winW = useWindowSize();

    useEffect(() => {
        if (window.top.location.href !== 'http://localhost:3000/dashboard/viewer'){
            if (ss.getFormated("editmode")){
                ss.set("editmode", false);
            }
        }
    }, []);

    return (
        <div>
            <HomePage />
        </div>
    )
}

export default Root;