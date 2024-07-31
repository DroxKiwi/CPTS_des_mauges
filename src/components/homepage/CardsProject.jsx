
import './cardsproject.css';
import mo from '../../assets/Images/icones/cibler.png';
import par from '../../assets/Images/icones/antecedents-medicaux.png'
import crise from '../../assets/Images/icones/criseSanitaire.png'
import sp from '../../assets/Images/icones/sante-publique.png'
import as from '../../assets/Images/icones/trousse-de-premiers-secours.png'

function CardProject(props) {

    return (
        <div className='grid grid-cols-5'>
            <div className="cardprj1 cardprj grid place-items-center" onClick={() => props.setChildW("projetdesante")}>
                <img src={as} className='icMid' width='100px'></img>
                <div className='cardprjbottom grid place-items-center'>
                    <p className='textCard'>Accès aux soins</p>
                </div>
                
            </div>
            <div className="cardprj2 cardprj grid place-items-center" onClick={() => props.setChildW("projetdesante")}>
                <img src={crise} className='icMid' width='100px'></img>
                <div className='cardprjbottom grid place-items-center'>
                    <p className='textCard'>Crise sanitaire</p>
                </div>
                
            </div>
            <div className="cardprj3 cardprj grid place-items-center" onClick={() => props.setChildW("projetdesante")}>
                <img src={par} className='icMid' width='100px'></img>
                <div className='cardprjbottom grid place-items-center'>
                    <p className='textCard'>Parcours</p>
                </div>
                
            </div>
            <div className="cardprj4 cardprj grid place-items-center" onClick={() => props.setChildW("projetdesante")}>
                <img src={sp} className='icMid' width='100px'></img>
                <div className='cardprjbottom grid place-items-center'>
                    <p className='textCard'>Prévention</p>
                </div>
                
            </div>
            <div className="cardprj5 cardprj grid place-items-center" onClick={() => props.setChildW("projetdesante")}>
                <img src={mo} className='icMid' width='100px'></img>
                <div className='cardprjbottom grid place-items-center'>
                    <p className='textCard'>Missions optionnelles</p>
                </div>
                
            </div>
        </div>

    )

}

export default CardProject;