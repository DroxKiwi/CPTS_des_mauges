import { useState, useEffect, useRef } from 'react';
import './organigrame.css';



function Organigrame (props) {

    return (
        <div className='h-[100px] grid grid-rows-2 containerorga'>
            <div className='nameoutbox'>
                {props.src.name}
            </div>
            <div>
                <div class={props.src.link}>
                    <div className=''>
                        <img src={props.imgSrc} height="200px" width="200px" ></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Organigrame;