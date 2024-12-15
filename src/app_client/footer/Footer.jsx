
import './footer.css';
import FooterMedia from './FooterMedia';
import handDown from '../assets/Images/icones/robinet.png';
import { useEffect } from 'react';
import fb from '../assets/Images/icones/facebook.png';
import lk from '../assets/Images/icones/linkedin.png';

function Footer (props){

    return (
        <div id='divFooter' className="footer">
            {/* 
                <img id='imgHandDown' src={handDown} width={30} className='animate-pulse' />
                <FooterMedia docWidth={props.docWidth} setChildW={props.setChildW} />
            */}
            <div class="container-footer">
                <div className=''>
                    <h2 className='reseaux-footer-title cooperblack'>#cptsdesmauges</h2>
                    <h3 className='reseaux-footer-subtitle comicsansms'>Retrouvez nous sur les réseaux</h3>
                    <div className='reseaux-footer-items'>
                        <img className='reseaux-footer-item' src={fb} width="50px" ></img>
                        <img className='reseaux-footer-item' src={lk} width="50px" ></img>
                    </div>
                </div>
                <div class="distorted-oval">
                    <FooterMedia />
                </div>
            </div>

        </div>
    )
}

export default Footer;