
import './infoband.css';

function InfoBand (props) {
    return (
        <div>
            <div className="infoband infoband1 grid place-items-center">
                <p className='infobandtext'>
                    Vous souhaitez connaître les professionnels de santé à proximité ? 
                </p>
            </div>
            <div className="infoband infoband2 grid place-items-center">
                <p className='infobandtext'>
                    Vous souhaitez adhérer ?
                </p>
            </div>
            <div className="infoband infoband3 grid place-items-center">
                <p className='infobandtext'>
                    Vous êtes professionnels et souhaitez rejoindre la CPTS ?
                </p>
            </div>
        </div>
    )
}

export default InfoBand;