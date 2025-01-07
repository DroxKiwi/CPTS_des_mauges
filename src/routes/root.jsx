
import { useState, useEffect, useRef } from 'react';
import HomePage from '../app_client/pages/homepage/HomePage';
import { Dialog } from 'primereact/dialog';
import {ls, ss} from '../utils/store';
import './root.css';

import useWindowSize from "../hooks/useWindowResize";

function Root () {

    const winW = useWindowSize();

    function isDashboardViewerUrl(url) {
        const regex = /.*\/dashboard\/viewer$/;
        return regex.test(url);
    };

    useEffect(() => {
        if (!isDashboardViewerUrl(window.top.location.href)){
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