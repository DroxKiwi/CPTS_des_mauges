
import { useState, useEffect, useRef } from 'react';
import './contact.css';

import home from '../assets/Images/accueil.png';
import email from '../assets/Images/e-mail.png';
import fb from '../assets/Images/facebook.png';
import lk from '../assets/Images/linkedin.png';
import tel from '../assets/Images/telephone.png';

function Contact () {

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
        <div className='overflow-x-hidden'>
            <div className='card'>
                <div className='card'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86285.21704077048!2d-0.6451629578674148!3d47.481866608121415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480878da00e58e9d%3A0x40d37521e0d9c30!2sAngers!5e0!3m2!1sfr!2sfr!4v1715469450641!5m2!1sfr!2sfr" className='w-[100%] h-[250px]' allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
                </div>
                <div>  
                    <p className='maintext'>Vous pouvez nous contacter à l'adresse mail <a href={'mailto: cptsdesmauges@gmail.com'}><span className='text-sky-400'>cptsdesmauges@gmail.com</span></a></p>
                    <p className='maintext'>Par téléphone au <a href={'tel: 06 00 00 00 00'}><span className='text-sky-400'>06 00 00 00 00</span></a></p>
                </div>
            </div>
        </div>
    )
}

export default Contact;