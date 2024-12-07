
import './footer.css';
import FooterMedia from './FooterMedia';
import handDown from '../assets/Images/icones/robinet.png';
import { useEffect } from 'react';

function Footer (props){

    return (
        <div id='divFooter' className="footer">
            {/* 
                <img id='imgHandDown' src={handDown} width={30} className='animate-pulse' />
                <FooterMedia docWidth={props.docWidth} setChildW={props.setChildW} />
            */}
            <div class="container">
                <div class="distorted-oval">
                    <p>Texte sur l'ovale</p>
                </div>
            </div>

        </div>
    )
}

export default Footer;