
import './cardsproject.css';
import mo from '../../assets/Images/cibler.png';
import par from '../../assets/Images/antecedents-medicaux.png'
import crise from '../../assets/Images/criseSanitaire.png'
import sp from '../../assets/Images/sante-publique.png'
import as from '../../assets/Images/trousse-de-premiers-secours.png'

function CardProject() {

    return (
        <div className='grid grid-cols-5'>
            <div className="cardprj1 cardprj grid place-items-center">
                <img src={as} className='icMid' width='100px'></img>
                <div className='cardprjbottom grid place-items-center'>
                    <p className='textCard'>Accès aux soins</p>
                </div>
                
            </div>
            <div className="cardprj2 cardprj grid place-items-center">
                <img src={crise} className='icMid' width='100px'></img>
                <div className='cardprjbottom grid place-items-center'>
                    <p className='textCard'>Crise sanitaire</p>
                </div>
                
            </div>
            <div className="cardprj3 cardprj grid place-items-center">
                <img src={par} className='icMid' width='100px'></img>
                <div className='cardprjbottom grid place-items-center'>
                    <p className='textCard'>Parcours</p>
                </div>
                
            </div>
            <div className="cardprj4 cardprj grid place-items-center">
                <img src={sp} className='icMid' width='100px'></img>
                <div className='cardprjbottom grid place-items-center'>
                    <p className='textCard'>Prévention</p>
                </div>
                
            </div>
            <div className="cardprj5 cardprj grid place-items-center">
                <img src={mo} className='icMid' width='100px'></img>
                <div className='cardprjbottom grid place-items-center'>
                    <p className='textCard'>Missions optionnelles</p>
                </div>
                
            </div>
        </div>

    )

}

export default CardProject;