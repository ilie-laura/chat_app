import React from 'react'
import gsap from 'gsap'
import '../styles/Highlights.css'
import { useGSAP } from '@gsap/react'
import { watchImg } from '../helpers';
import {rightImg} from '../helpers';
function Highlights() {
 useGSAP(() => {
  gsap.to('#title', {
    opacity: 1,
    y: 0,
    duration: 0.5,
    delay: 3,
    stagger: 0.2
  });
  gsap.to('.link', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 3,
    stagger: 0.25
  });
}, []);

  return (
    <section id='highlights' >
    <div className='highlights-content'>
      <div className='margin'>
      <h1 id='title' className='section-heading'> Get the Highlights</h1>
      <div className='extra'>
        <p className='link'>Watch the film
          <img src={watchImg} alt="Watch" width={20} height={20} style={{ marginLeft: '5px' }} />
        </p>
        <p className='link'>Watch the event
          <img src={rightImg} alt="Right Arrow" width={20} height={20} style={{ marginLeft: '5px' }} />
        </p>

      </div>
      </div>
      </div>
    </section>
  )
}

export default Highlights
