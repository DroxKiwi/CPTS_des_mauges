
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

    if (props.mobile){
        return (
            <div id="" className='grid place-items-center overflow-y-hidden mt-10'>
                <h2 className="homepagesubtitle001mobile">
                    Notre projet de santé
                </h2>
                <div className='grid grid-cols-5'>
                    <div className='grid col-start-2 col-span-3'>
                        <p className='homepagesubtitle001secondarymobile'>Retrouvez la déclinaison de notre projet de santé en fonction des missions.</p>
                        <p className='homepagesubtitle001secondarymobile'>
                        Le projet de santé porté par les professionnels de santé de notre CPTS peut évoluer au cours
                        du temps, en fonction des besoins de la population et des professionnels de santé ! Ce projet
                        de santé a été élaboré fin 2023. Il a été validé en CATS en mars 2024.</p>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div id="" className='grid place-items-center overflow-y-hidden mt-10'>
                <h2 className="homepagesubtitle001">
                    Notre projet de santé
                </h2>
                <div className='grid grid-cols-5'>
                    <div className='grid col-start-2 col-span-3'>
                        <p className='homepagesubtitle001secondary'>Retrouvez la déclinaison de notre projet de santé en fonction des missions.</p>
                        <p className='homepagesubtitle001secondary'>
                        Le projet de santé porté par les professionnels de santé de notre CPTS peut évoluer au cours
                        du temps, en fonction des besoins de la population et des professionnels de santé ! Ce projet
                        de santé a été élaboré fin 2023. Il a été validé en CATS en mars 2024.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePageSubtitle001;