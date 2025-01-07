import { useState, useEffect, useRef } from 'react';
import './organigrame.css';
import ErrorPage from '../../../utils/error-page';


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
    
    try {
        return (
            <div ref={testRef} className='h-[100px] grid grid-rows-2'>
                <div class={props.src.link}>
                    <div className='grid grid-cols-2'>
                        <img className='imgorganigrame' src={props.imgSrc} ></img>
                        <div className='nameoutbox'>
                            <p>{props.src.role}</p>
                            <p>{props.src.comp}</p>
                        </div>
                        <div className='nameoutbox nameoutboxlabel'>
                            {props.src.label}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    catch(error){
        return <ErrorPage error={error} />
    }
}

export default Organigrame;