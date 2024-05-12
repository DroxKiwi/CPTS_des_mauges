
import { useState, useEffect, useRef } from 'react';
import HomePage from '../containers/HomePage';

function Root () {

    const [childW, setChildW] = useState(null);

    const ChildWindow = () => {
        switch (childW) {
            case 'homepage':
                return <HomePage />;
            default:
                return <HomePage />;
        }
    }

    return (
        <div>
            <HomePage />
        </div>
    )
}

export default Root;