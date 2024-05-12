import { useState, useEffect, useRef } from 'react';
import './organigrame.css';



function Organigrame (props) {

    useEffect(() => {
        var test = document.getElementById('test');
        test.addEventListener('mouseover', (e) => {
            console.log('test');
        });
    }, [])

    return (
        <div className='h-[100px] grid grid-rows-2 containerorga'>
            <div id="test" class={props.src.link}>
                <div className=''>
                    <img src={props.imgSrc} height="200px" width="200px" ></img>
                    <div className='nameoutbox'>
                        {props.src.label}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Organigrame;