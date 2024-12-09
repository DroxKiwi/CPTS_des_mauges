import { useState, useEffect, useRef } from 'react';
import { ls, ss } from '../../../utils/store';

import './homepage.css';
import HomePageTitle from './components/HomePageTitle';
import HomePageSubtitle001 from './components/HomePageSubtitle001';
import ButtonAbs from './components/ButtonAbs';
import CardProject from './components/CardsProject';
import RecapCards from './components/RecapCards';
import NumberBand from './components/NumberBand';
import CoAssoc from './components/CoAssoc';
import InfoBand from './components/InfoBand';
import bg from '../../assets/Images/backgrounds/bg-1.png';
import Acturesume from './components/Acturesume';
import Agendaresume from './components/Agendaresume';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import logo from '../../assets/Images/logoDetoure.png';

function HomePage(props) {

  

  useEffect(() => {
    ss.set('window', 'home');
  }, []);

  if (window.innerWidth < 1468){
    return (
      <div>
        <Header setChildW={props.setChildW} setHeaderHeight={props.setHeaderHeight} />
        <HomePageTitle />
        <div className='h-[150px] grid grid-cols-5'>
          <div className='col-start-2'>
            <ButtonAbs selected={'decouvrir'} setChildW={props.setChildW}/>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
  else {
    return (
      <div className='container-root'>
        <Header setChildW={props.setChildW} setHeaderHeight={props.setHeaderHeight} />

        <svg className='headerformsvg' xmlns="http://www.w3.org/2000/svg" width="1920" height="274" viewBox="0 0 1920 274" fill="none">
          <path d="M1969.5 147.685C1997.68 176.5 2000 291.828 1969.5 270.5C1623.69 28.6873 55.3823 294.383 -147.5 91.5C-182 57 -105 -16.3691 -66.4998 4.18471C508.669 311.247 1824.41 -0.699097 1969.5 147.685Z" fill="#008CDD" fill-opacity="0.33"/>
        </svg>

        <div className='grid place-items-center'>
          <img className='upperelementheader' src={logo} width="300px" />
        </div>

        <HomePageTitle />

        <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="261" viewBox="0 0 1920 261" fill="none">
          <path d="M1975 125.5C2023 61.4996 2058.5 160 1992 253.5C1962.15 295.468 123 125.5 -108 253.5C-179.418 293.074 -173.5 -145 -59.0001 51.9999C61.9463 260.091 1918 201.499 1975 125.5Z" fill="#F74924" fill-opacity="0.33"/>
        </svg>
        
        <div className='h-[50px] grid grid-cols-5'>
          <div className='col-start-2'>
            <ButtonAbs selected={'decouvrir'} setChildW={props.setChildW}/>
          </div>
        </div>

        <NumberBand />

        <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="371" viewBox="0 0 1920 371" fill="none">
          <path d="M2010 22.5002C2197 -67.5004 2429 151.001 2035.5 180.5C1655.71 208.971 -90.0001 535.501 -173.5 261C-197.262 182.885 -395.041 76.3007 -173.5 180.5C416.5 458.001 1823 112.501 2010 22.5002Z" fill="#008CDD" fill-opacity="0.33"/>
        </svg>

        <HomePageSubtitle001 />

        <ButtonAbs selected={'notreprojet'} setChildW={props.setChildW}/>

        <CardProject setChildW={props.setChildW} />

        <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="357" viewBox="0 0 1920 357" fill="none">
          <path d="M1999.5 173.5C2186.5 83.4994 2363 250.501 1969.5 280C1589.71 308.471 -90.0001 475.501 -173.5 201C-197.262 122.885 -264.541 -74.1996 -43 30C547 307.5 1812.5 263.501 1999.5 173.5Z" fill="#F2EE2C" fill-opacity="0.33"/>
        </svg>

        <Acturesume setChildW={props.setChildW}/>

        <Agendaresume setChildW={props.setChildW}/>

        <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="318" viewBox="0 0 1920 318" fill="none">
          <path d="M1999.5 28.4999C2286 321.5 2324.39 307.534 1969.5 135C1590 -49.5 -63.9998 515 -147.5 240.5C-171.262 162.385 -254.5 -15.4999 -62.5 87.0001C512.671 394.058 1854.41 -119.884 1999.5 28.4999Z" fill="#8DC943" fill-opacity="0.33"/>
        </svg>

        <CoAssoc />

        <ButtonAbs selected={'contact'} setChildW={props.setChildW}/>

        <InfoBand setChildW={props.setChildW} />

        <Footer />
      </div>
    );
  }
}

export default HomePage;
