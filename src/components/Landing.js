import * as React from 'react'
import '../css/project-base.css'
import '../css/animations.css';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from './Home/Navbar';
import Intro from './Home/Intro';

function Landing () {
    return (
      <div className="App">
        <div className='relative w-full h-full body'>
          <div className='relative'>
            <img className='absolute top-0' src="./img/bg-intro.png"></img>
            <div className='absolute left-0 top-0 w-full h-full bg-gradient-to-b from-[#0A3641EE] to-[#0C0B15]'></div>
            <img src="./img/left-eclipse4.png" className='absolute left-8 bottom-32'></img>
            <img src="./img/left-eclipse1.png" className='absolute left-48 bottom-[265px]'></img>
            <img src="./img/left-eclipse2.png" className='absolute left-48 bottom-[220px]'></img>
            <img src="./img/left-eclipse3.png" className='absolute left-56 bottom-64'></img>
            <Navbar />
            <Intro />
          </div>
        </div>
      </div>
    );
}

export default Landing;
