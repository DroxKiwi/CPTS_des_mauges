
import { useEffect, useState } from 'react';
import './homepagesubtitle001.css';


function HomePageSubtitle001 (props) {

    const [elDistanceTop, setElDistanceTop] = useState(null);

    useEffect(() => {
        if (window.innerWidth > 1700){
            setElDistanceTop(props.docHeight - 500);

        }
        else {
            setElDistanceTop(props.docHeight - 400);
        }
    }, [props.docHeight])

    return (
        <div id="" className='grid place-items-center overflow-y-hidden'>
            <h2 className="homepagesubtitle001" style={{marginTop: elDistanceTop}}>
                Notre projet de santé
            </h2>
            <p className='homepagesubtitle001secondary'>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise 
                <br/>en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. 
                <br/>Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.</p>
        </div>
    )
}

export default HomePageSubtitle001;