
import './infoband.css';

function InfoBand (props) {

    function handleClick(page) {
        window.location.replace(process.env.REACT_APP_BASE_APP_URI + page);
    } 

    if (props.mobile){
        return (
            <div>
                <div className="infoband infoband1 grid place-items-center" onClick={() => handleClick("/jesuispatient")}>
                    <p className='infobandtext'>
                        Vous souhaitez connaître les professionnels de santé à proximité ? 
                    </p>
                </div>
                <div className="infoband infoband2 grid place-items-center" onClick={() => handleClick("/adherer")}>
                    <p className='infobandtext'>
                        Vous souhaitez adhérer ?
                    </p>
                </div>
                <div className="infoband infoband3 grid place-items-center" onClick={() => handleClick("/jesuisprofessionnel")}>
                    <p className='infobandtext'>
                        Vous êtes professionnels et souhaitez rejoindre la CPTS ?
                    </p>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='mb-10'>
                <div className="infoband infoband1 grid place-items-center" onClick={() => handleClick("/jesuispatient")} >
                    <p className='infobandtext'>
                        Vous souhaitez connaître les professionnels de santé à proximité ? 
                    </p>
                </div>
                <div className="infoband infoband2 grid place-items-center" onClick={() => handleClick("/adherer")}>
                    <p className='infobandtext'>
                        Vous souhaitez adhérer ?
                    </p>
                </div>
                <div className="infoband infoband3 grid place-items-center" onClick={() => handleClick("/jesuisprofessionnel")}>
                    <p className='infobandtext'>
                        Vous êtes professionnels et souhaitez rejoindre la CPTS ?
                    </p>
                </div>
            </div>
        )
    }
}

export default InfoBand;