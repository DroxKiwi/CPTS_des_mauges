import { useState, useEffect, useRef } from 'react';
import numbanddata from '../../services/numberband.json';
import { ls, ss } from '../../utils/store';

import './numberband.css';

function NumberBand() {

    const [number1, setNumber1] = useState(0);
    const maxNumber1 = numbanddata.data[0].value;
    const [number2, setNumber2] = useState(0);
    const maxNumber2 = numbanddata.data[1].value;
    const [number3, setNumber3] = useState(0);
    const maxNumber3 = numbanddata.data[2].value;

    useEffect(() => {
        window.addEventListener('scroll', function (event) {
            // Get the an HTML element
            var element = document.getElementById('testnumber');
            if (ss.get('window') === 'home'){
                if (isInViewport(element)) {
                    if (element.innerHTML === '0'){
                        startAnimation1();
                        startAnimation2();
                        startAnimation3();
                    }
                }
            }
        }, false);
    }, []);

    async function startAnimation1 () {
        var speed = 0.1;
        for (let i = 0; i < maxNumber1; i++){
            if (i > maxNumber1-11){
                speed = 100;
            }
            setNumber1(i);
            if (i < maxNumber1-100){
                i = i + 10;
            }
            await new Promise(r => setTimeout(r, speed));
        }
    };

    async function startAnimation2() {
        var speed = 100;
        for (let i = 0; i < maxNumber2; i++){
            setNumber2(i);
            await new Promise(r => setTimeout(r, speed));
        }
    }

    async function startAnimation3() {
        var speed = 0.00005;
        for (let i = 0; i < maxNumber3; i++){
            if (i > maxNumber3-11){
                speed = 100;
            }
            setNumber3(i);
            if (i < maxNumber3-100){
                i = i + 100;
            }
            await new Promise(r => setTimeout(r, speed));
        }
    }

    function isInViewport(element) {
        // Get the bounding client rectangle position in the viewport
        var bounding = element.getBoundingClientRect();
        
        // Checking part. Here the code checks if it's *fully* visible
        // Edit this part if you just want a partial visibility
        if (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        ) {
            console.log('In the viewport! :)');
            return true;
        } else {
            console.log('Not in the viewport. :(');
            return false;
        }
    }

    return (
        <div className='grid place-items-center'>
            <div className="numberband grid grid-cols-3">
                <div className='col-span-1 grid place-items-center'>
                    <h2 id="testnumber" className='numbers'>{number1}</h2>
                    <h3 className='numberstitle'>Professionnels de santé libéraux</h3>
                </div>
                <div className='col-span-1 grid place-items-center'>
                    <h2 className='numbers'>{number2}</h2>
                    <h3 className='numberstitle'>Communes</h3>
                </div>
                <div className='col-span-1 grid place-items-center'>
                    <h2 className='numbers'>{number3}</h2>
                    <h3 className='numberstitle'>Habitants</h3>
                </div>
            </div>
        </div>
    )
}

export default NumberBand;