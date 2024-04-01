import { useState, useEffect, useRef } from 'react';
import './desing001.css';

function Design001(props) {

    const [design001Top, setDesing001Top] = useState(null);
    const [design001W, setDesign001W] = useState(null);

    useEffect(() => {
        setDesing001Top(props.docHeight - 450);
        setDesign001W(window.innerWidth - 10);
    }, [props.docHeight])

    return (
        <div id="" className='homepagedesign001'  style={{paddingTop: design001Top}}>
            <svg xmlns="http://www.w3.org/2000/svg" width={design001W} height="842" viewBox="0 0 1920 842" fill="none">
                <g filter="url(#filter0_i_1_3925)">
                    <path d="M1954.45 359.425C1924.58 433.639 2360.45 917.925 2048.45 831.425C-606.409 95.3795 -124.555 1201.42 -22.0535 24.4247C2.8235 -113.075 72.0705 372.285 257.947 428.925C443.823 485.565 1999.57 247.314 1954.45 359.425Z" fill="#F74924" fill-opacity="0.33"/>
                </g>
                <defs>
                    <filter id="filter0_i_1_3925" x="-122" y="0" width="2283.52" height="845.731" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_3925"/>
                    </filter>
                </defs>
            </svg>
        </div>
    )
}

export default Design001;