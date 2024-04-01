import { useState, useEffect, useRef } from 'react';
import { ls, ss } from '../utils/store';
import useWindowSize from "../hooks/useWindowResize";
import Cookies from 'universal-cookie';

import './homepage.css';
import Design001 from '../components/desingPattern/homepage/Design001';
import Design002 from '../components/desingPattern/homepage/Design002';
import Header from '../components/Header';
import HomePageTitle from '../components/homepage/HomePageTitle';
import HomePageSubtitle001 from '../components/homepage/HomePageSubtitle001';
// Ce fichier représente la route root, la racine du projet, elle instancie les cookies, et utilise le hook "useWindowResize" pour définir si l'application va tourner sur mobile ou non
// Ce code injecte ensuite la valeur de la taille de l'écran dans le Wrapper, qui a pour but d'assembler l'application

function Root() {

  const winW = useWindowSize();

  const cookies = new Cookies(null ,{ path: '/' });

  const [docHeight, setDocHeight] = useState(null);
  const [docWidth, setDocWidth] = useState(null);

  useEffect(() => {
      setDocHeight(window.innerHeight);
      setDocWidth(window.innerWidth - 10);
  }, [window.innerHeight]);

  // Gestion parallax, mettre en commentaire pour enlever
  function parallax() {
    var s = document.getElementById("floater");
    var yPos = 0 - window.scrollY/30;	
    s.style.top = yPos + "%";
  }
  window.addEventListener("scroll", function(){
      parallax();	
  });

  return (
      <div className="homepagebackgroundmain overflow-hidden" style={{width: docWidth}}>
        <div className='grid grid-rows-12'>
          <Design001 docHeight={docHeight}/>
          <Design002 docHeight={docHeight}/>
          <div id='floater' className='absolute overflow-hidden' style={{width: window.innerWidth - 10}}>
            <div className='row-start-0 row-end-1'>
              <Header/>
            </div>
            <div className='row-start-1 row-end-2'>
              <HomePageTitle docHeight={docHeight}/>
            </div>

            <div id="" className='grid place-content-center row-start-2 row-end-3'>
              <HomePageSubtitle001 docHeight={docHeight}/>
            </div>
          </div>
        </div>
      </div>
  );
}


export default Root;
