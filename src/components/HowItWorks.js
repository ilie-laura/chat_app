import React from 'react'
import '../styles/HIW.css'
import { chipImg, frameImg, frameVideo } from '../helpers'
import { useGSAP } from '@gsap/react'
import { animateWithGsap } from '../helpers/animations';
import {useRef} from 'react'
import gsap from 'gsap'
import Footer from './Footer';

function HowItWorks() {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom',
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.out',
    })
     animateWithGsap('#feature_title', { y: 0, opacity: 1 });
        animateWithGsap('.g_grow', { scale: 1, opacity: 1 }, { scrub: 5.5 });
        animateWithGsap('.g_text', { y: 0, opacity: 1, duration: 1 });
  }, [])

  return (
    <section className="HIW-sec">
      <div>
        <div id="chip" className="HIW-chip">
          <img
            src={chipImg}
            alt="Chip"
            style={{ width: '180px', height: 'auto', marginTop: '5rem' }}
          />
        </div>

        <div className="HIW-content">
          <h2 className="HIW-title">
            A17 PRO Chip.
            <br />
            The monster win for gaming.
          </h2>
          <p className="HIW-subtitle">
            Unleash the power of the update for an unparalleled gaming experience.
          </p>
        </div>

        <div className="HIW-video">
          <div className="video">
            <div className="video-fr">
              <img
                src={frameImg}
                alt="Frame"
                style={{
                  width: '50%',
                  height: 'auto',
                  objectFit: 'cover',
                  position: 'relative',
                  zIndex: 1,
                }}
              />
              <div className="hiw-video">
                <video
                  ref={videoRef}
                  src={frameVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover' , borderRadius: '8px' }}
                />
              </div>

            </div>
            <p style={{ textAlign: 'center', color: '#CCCCCC', fontSize: '1rem', marginTop: '1rem',fontStyle:'semi-bold' }}>
                Honkai: Star Rail</p>
                 <div className="feature-text-container">
              <div className="flex-item center-content">
                <p className="feature-text g_text">
                  iPhone 15 Pro is{' '}
                  <span className="text-white">
                    the first iPhone to feature an aerospace-grade titanium design
                  </span>
                  , using the same alloy that spacecrafts use for missions to Mars.
                </p>
                <br/>
              </div>
              <div className="flex-item center-content">
                <p className="feature-text g_text">
                  Titanium has one of the best strength-to-weight ratios of any metal, making these our{' '}
                  <span className="text-white">lightest Pro models ever.</span> You'll notice the difference the moment you pick one up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default HowItWorks
