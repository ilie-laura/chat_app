// Features.js
import React, { useRef } from 'react';
import '../styles/Features.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { animateWithGsap } from '../helpers/animations';
import { exploreVideo, explore1Img, explore2Img } from '../helpers';

gsap.registerPlugin(ScrollTrigger);

function Features() {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to(videoRef.current, {
      scrollTrigger: {
        trigger: videoRef.current,
        start: 'top 80%',
        toggleActions: 'play pause none none',
      },
      onStart: () => {
        if (videoRef.current) videoRef.current.play().catch(console.error);
      },
    });

    animateWithGsap('#feature_title', { y: 0, opacity: 1 });
    animateWithGsap('.g_grow', { scale: 1, opacity: 1 }, { scrub: 5.5 });
    animateWithGsap('.g_text', { y: 0, opacity: 1, duration: 1 });
  }, []);

  return (
    <section className="section">
      <div className="features-container">
        <h1 id="feature_title" className="section-heading">
          Explore the full spectrum of features.
        </h1>

        <div className="flex-column">
          <div className="feature-intro">
            <h2>iPhone.</h2>
            <h2>Forged in titanium.</h2>
          </div>

          <div className="video-container">
            <div className="video-wrapper">
              <video
                id="exploreVideo"
                muted
                preload="none"
                playsInline
                ref={videoRef}
                loop
                autoPlay
                poster={explore1Img}
                className="feature-video"
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            <div className="feature-video-container">
              <div className="video-wrapper">
                <img src={explore1Img} alt="" className="feature-video g_grow" />
              </div><div className="video-wrapper">
                <img src={explore2Img} alt="" className="feature-video g_grow"  />
              </div>
            </div>

            <div className="feature-text-container">
              <div className="flex-item center-content">
                <p className="feature-text g_text">
                  iPhone 15 Pro is{' '}
                  <span className="text-white">
                    the first iPhone to feature an aerospace-grade titanium design
                  </span>
                  , using the same alloy that spacecrafts use for missions to Mars.
                </p>
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
    </section>
  );
}

export default Features;
