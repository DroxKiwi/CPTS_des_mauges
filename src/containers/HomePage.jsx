import { useState, useEffect, useRef } from 'react';
import { ls, ss } from '../utils/store';
import useWindowSize from "../hooks/useWindowResize";
import Cookies from 'universal-cookie';

import './homepage.css';
import Design001 from '../components/desingPattern/homepage/Design001';
import Design002 from '../components/desingPattern/homepage/Design002';
import Design003 from '../components/desingPattern/homepage/Design003';
import Design004 from '../components/desingPattern/homepage/Design004';
import Header from '../components/Header';
import HomePageTitle from '../components/homepage/HomePageTitle';
import HomePageSubtitle001 from '../components/homepage/HomePageSubtitle001';
import ButtonAbs from '../components/homepage/ButtonAbs';
import CardProject from '../components/homepage/CardsProject';
import RecapCards from '../components/homepage/RecapCards';
import NumberBand from '../components/homepage/NumberBand';
import CoAssoc from '../components/homepage/CoAssoc';
import InfoBand from '../components/homepage/InfoBand';
import Footer from '../components/footer/Footer';

function HomePage() {

  const winW = useWindowSize();

  const cookies = new Cookies(null ,{ path: '/' });

  const [docHeight, setDocHeight] = useState(null);
  const [docWidth, setDocWidth] = useState(null);

  useEffect(() => {
      setDocHeight(window.innerHeight);
      setDocWidth(window.innerWidth - 10);
  }, [window.innerHeight]);


  return (
      <div id='homepage' className="homepagebackgroundmain overflow-hidden" style={{width: docWidth}}>
        <div className='grid grid-rows-12'>
          <Design001 className='section static' docHeight={docHeight}/>
          <Design002 docHeight={docHeight}/>
          <Design003 docHeight={docHeight}/>
          <Design004 docHeight={docHeight}/>
          <div className='fulldocH absolute overflow-hidden' style={{width: window.innerWidth - 10}}>
            <div className='row-start-0 row-end-1'>
              <Header/>
            </div>
            <div className=' absolute cursor-pointer'>
              <ButtonAbs selected={'decouvrir'}/>
            </div>
            <div className='row-start-1 row-end-2'>
              <HomePageTitle docHeight={docHeight}/>
            </div>
            <div id="" className='grid place-content-center row-start-2 row-end-3'>
              <HomePageSubtitle001 docHeight={docHeight}/>
            </div>
            <div className=' absolute cursor-pointer'>
              <ButtonAbs selected={'notreprojet'}/>
            </div>
            <div className='my-10 row-start-3 row-end-4'>
              <CardProject/>
            </div>
            <div className=' absolute cursor-pointer'>
              <ButtonAbs selected={'recapcards'}/>
            </div>
            <div className='row-start-4 row-end-5'>
              <RecapCards />
            </div>
            <div>
              <NumberBand />
            </div>
            <div>
              <CoAssoc />
            </div>
            <div className=' absolute cursor-pointer'>
              <ButtonAbs selected={'contact'}/>
            </div>
            <div>
              <InfoBand />
            </div>
            <div>
              <Footer docWidth={docWidth} />
            </div>
          </div>
        </div>
      </div>
  );
}


export default HomePage;
