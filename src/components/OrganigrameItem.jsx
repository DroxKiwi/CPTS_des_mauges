import { useState, useEffect, useRef } from 'react';
import './organigrame.css';



function Organigrame (props) {

    const testRef = useRef(null);
    const [loaded, setLoaded] = useState(false);;

    useEffect(() => {
        setLoaded(true);
    }, []);

    useEffect(() => {
        if (loaded){
            var test = testRef.current;
            test.addEventListener('mouseover', (e) => {
                test.classList.add('z-10');
            });
            test.addEventListener('mouseout', (e) => {
                test.classList.remove('z-0');
            });
        }
    }, [loaded])

    return (
        <div ref={testRef} className='h-[100px] grid grid-rows-2'>
            <div class={props.src.link}>
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