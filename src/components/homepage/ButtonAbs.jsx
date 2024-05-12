
import './buttonabs.css';
import cliquezSur from '../../assets/Images/cliquez-sur.png';
import cliquezSur1 from '../../assets/Images/cliquez-sur(1).png';
import cliquezSur2 from '../../assets/Images/cliquez-ici.png';
import cliquezSur3 from '../../assets/Images/le-curseur.png';

function ButtonAbs(props) {

    switch (props.selected){
        case 'decouvrir':
            return (
                <div className="btntrns decouvrirquinoussomme cursor-pointer z-10" onClick={() => props.setChildW('presentation')}>
                    <p className='decouvrirquinoussommetext'>Découvrir qui nous somme !</p>
                    <img className='decouvrirquinoussommeimg' src={cliquezSur} width='70px'/>
                </div>
            );
        case 'notreprojet':
            return (
                <div className="btntrns notreprojet cursor-pointer z-10" onClick={() => props.setChildW('projetdesante')}>
                    <p className='notreprojettext'>Notre projet de santé en détail !</p>
                    <img className='notreprojetimg' src={cliquezSur1} width='70px'/>
                </div>
            );
        case 'actualites':
            return (
                <div className="btntrns actualitessbtnabs cursor-pointer z-10" onClick={() => props.setChildW('nosactualites')}>
                    <p className='actualitesstextbtnabs'>Découvrir nos actualités !</p>
                    <img className='actualitessimgbtnabs' src={cliquezSur2} width='70px'/>
                </div>
            );
        case 'contact':
            return (
                <div className="btntrns contactbtnabs cursor-pointer z-10" onClick={() => props.setChildW('contact')}>
                    <p className='contacttextbtnabs'>Contactez nous !</p>
                    <img className='contactimgbtnabs' src={cliquezSur3} width='70px'/>
                </div>
            );
        default:
            return (
                null
            )  
    }


}

export default ButtonAbs;