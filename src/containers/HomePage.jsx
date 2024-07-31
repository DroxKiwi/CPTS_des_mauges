import { useState, useEffect, useRef } from 'react';
import { ls, ss } from '../utils/store';

import './homepage.css';
import HomePageTitle from '../components/homepage/HomePageTitle';
import HomePageSubtitle001 from '../components/homepage/HomePageSubtitle001';
import ButtonAbs from '../components/homepage/ButtonAbs';
import CardProject from '../components/homepage/CardsProject';
import RecapCards from '../components/homepage/RecapCards';
import NumberBand from '../components/homepage/NumberBand';
import CoAssoc from '../components/homepage/CoAssoc';
import InfoBand from '../components/homepage/InfoBand';
import bg from '../assets/Images/backgrounds/bg-1.png';
import { Button } from 'primereact/button';

function HomePage(props) {

  const [docHeight, setDocHeight] = useState(null);
  const [docWidth, setDocWidth] = useState(null);

  useEffect(() => {
    ss.set('window', 'home');
  }, []);

  useEffect(() => {
      setDocHeight(window.innerHeight);
      setDocWidth(window.innerWidth - 10);

      var body = document.body,
      html = document.documentElement;

      var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
      setDocHeight(height);
  }, [window.innerHeight]);

  function test () {
    document.getElementById('homepage').classList.remove('test1');
    document.getElementById('homepage').classList.add('test2');
  }

  return (
      <div id='homepage' className="homepagebackgroundmain" style={{width: docWidth, height: docHeight}}>
        <div className='grid grid-rows-12'>
          <div className='absolute overflow-hidden' style={{width: window.innerWidth - 10, height: docHeight}}>
            {/*
              <Button label='test' onClick={test} ></Button>
            */}
            <img src={bg} className='bg' />
            <div className='cursor-pointer'>
              <ButtonAbs selected={'decouvrir'} setChildW={props.setChildW}/>
            </div>
            <div className='row-start-1 row-end-2'>
              <HomePageTitle />
            </div>
            <div id="" className='grid place-content-center row-start-2 row-end-3'>
              <HomePageSubtitle001 />
            </div>
            <div className='cursor-pointer'>
              <ButtonAbs selected={'notreprojet'} setChildW={props.setChildW}/>
            </div>
            <div className='my-10 row-start-3 row-end-4'>
              <CardProject setChildW={props.setChildW} />
            </div>
            {/*
            <div className='cursor-pointer'>
              <ButtonAbs selected={'actualites'} setChildW={props.setChildW}/>
            </div>
            */}
            <div className='row-start-4 row-end-5'>
              <RecapCards />
            </div>
            <div>
              <NumberBand />
            </div>
            <div>
              <CoAssoc />
            </div>
            <div className='cursor-pointer'>
              <ButtonAbs selected={'contact'} setChildW={props.setChildW}/>
            </div>
            <div>
              <InfoBand />
            </div>
          </div>
        </div>
      </div>
  );
}


export default HomePage;
