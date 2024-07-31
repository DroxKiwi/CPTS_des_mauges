
import './footer.css';
import FooterMedia from './FooterMedia';
import handDown from '../../assets/Images/icones/robinet.png';
import { useEffect } from 'react';

function Footer (props){

    useEffect(() => {
        document.getElementById('divFooter').addEventListener('mouseover', () => {
            document.getElementById('imgHandDown').classList.remove('animate-bounce')
        })
        document.getElementById('divFooter').addEventListener('mouseleave', () => {
            document.getElementById('imgHandDown').classList.add('animate-bounce')
        })
    }, [])

    return (
        <div id='divFooter' className="footer">
            <img id='imgHandDown' src={handDown} width={30} className='animate-bounce' />
            <FooterMedia docWidth={props.docWidth} setChildW={props.setChildW} />
        </div>
    )
}

export default Footer;