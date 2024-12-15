
import { useState, useEffect, useRef } from 'react';
import './contact.css';

import home from '../../assets/Images/icones/accueil.png';
import email from '../../assets/Images/icones/e-mail.png';
import fb from '../../assets/Images/icones/facebook.png';
import lk from '../../assets/Images/icones/linkedin.png';
import tel from '../../assets/Images/icones/telephone.png';
import Header from '../../header/Header';

import { ls, ss } from '../../../utils/store';
import Footer from '../../footer/Footer';

function Contact (props) {

    useEffect(() => {
        ss.set('window', 'bureauetconseil');
    }, []);

    const medias = [
        {
            name: 'Adresse des locaux',
            logo: home,
            type: 'text'
        },
        {
            name : 'cptsdesmauges@gmail.com',
            logo: email,
            type: 'mail'
        },
        {
            name: '06 00 00 00 00',
            logo: tel,
            type: 'tel'
        },
        {
            name: 'https://www.facebook/adrcptmauges.fr',
            logo: fb,
            type: 'redirection'
        },
        {
            name: 'https://www.linkedin/adrcptmauges.fr',
            logo: lk,
            type: 'redirection'
        }
    ]


    const [docWidth, setDocWidth] = useState(null);
    const [docHeight, setDocHeight] = useState(null);

    useEffect(() => {
        setDocHeight(window.innerHeight);
        setDocWidth(window.innerWidth - 10);
    }, [window.innerHeight]);

    return (
        <div className='container-root'>
            <Header setChildW={props.setChildW} setHeaderHeight={props.setHeaderHeight} />
            <div className='card bg-transparent'>
                <svg className='absolute w-[100%] h-[100%] z-0' xmlns="http://www.w3.org/2000/svg" width="1920" height="357" viewBox="0 0 1920 157" fill="none">
                <path d="M2005 26.4999C2192 -63.5007 2398.5 106.001 2005 135.5C1625.21 163.971 -92.4998 451.5 -176 177C-199.762 98.8847 -293.541 -50.1995 -71.9997 54.0001C518 331.5 1818 116.501 2005 26.4999Z" fill="#F2EE2C" fill-opacity="0.33"/>
                </svg>
                <svg className='absolute w-[100%] h-[100%] z-0' xmlns="http://www.w3.org/2000/svg" width="1920" height="357" viewBox="0 0 1920 357" fill="none">
                <path d="M1999.5 173.5C2186.5 83.4994 2363 250.501 1969.5 280C1589.71 308.471 -90.0001 475.501 -173.5 201C-197.262 122.885 -264.541 -74.1996 -43 30C547 307.5 1812.5 263.501 1999.5 173.5Z" fill="#F2EE2C" fill-opacity="0.33"/>
                </svg>
                <div className='card bg-transparent z-10'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86285.21704077048!2d-0.6451629578674148!3d47.481866608121415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480878da00e58e9d%3A0x40d37521e0d9c30!2sAngers!5e0!3m2!1sfr!2sfr!4v1715469450641!5m2!1sfr!2sfr" className='w-[100%] h-[250px]' allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
                </div>
                <div className='z-10'>  
                    <p className='maintext'>Vous pouvez nous contacter à l'adresse mail <a href={'mailto: cptsdesmauges@gmail.com'}><span className='text-sky-400 redirectioncontact'>cptsdesmauges@gmail.com</span></a></p>
                    <p className='maintext'>Par téléphone au <a href={'tel: 06 00 00 00 00'}><span className='text-sky-400 redirectioncontact'>06 00 00 00 00</span></a></p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;