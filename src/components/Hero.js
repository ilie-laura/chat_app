import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

import { useRef } from "react";
import {heroVideo,smallHeroVideo} from '../helpers/index.js'
import '../styles/Hero.css'

function Hero() {
 const [videoSrc,setVideoSrc]=useState(window.innerWidth > 760 ? heroVideo : smallHeroVideo);
   const heroRef = useRef();
const handleVideoSrcSet=()=>{
  if(window.innerWidth > 760){
    setVideoSrc(heroVideo);
  }else{
    setVideoSrc(smallHeroVideo);
  }
}

useEffect(() => {
  window.addEventListener('resize', handleVideoSrcSet);
  return () => {
    window.removeEventListener('resize', handleVideoSrcSet);
  };
}, []);

useGSAP(() => {
  gsap.from('.hero-title', { opacity: 0, delay: 1.5 });
  gsap.to('#buy', { opacity: 1, y: -20, delay: 2 });
}, { scope: heroRef });

  return (
   <section className='hero' ref={heroRef}>
     <div className='hero-content'>
<p className='hero-title'>Iphone 25 Air Pr0</p>
<div className='hero-description'>
 <video className='pointer-events-none' autoPlay muted playsInline key={videoSrc}>
   <source src={videoSrc} type="video/mp4"/>
 </video>
</div>
     </div> <br></br> 
<div id='buy' className='buy-button'>
  <a href="#highlights" className='btn'>Buy Now</a>
  
  <p className='price'> From 199$/month or 699$</p>
</div>
   </section>
  )
}

export default Hero
