import { useState, useEffect, useRef } from 'react';

import './numberband.css';

function NumberBand() {

    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [number3, setNumber3] = useState(0);

    return (
        <div className='grid place-items-center'>
            <div className="numberband grid grid-cols-3">
                <div className='col-span-1 grid place-items-center'>
                    <h2 className='numbers'>{number1}</h2>
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