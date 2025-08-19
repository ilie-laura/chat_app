import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { View } from '@react-three/drei';

import ModelView from './ModelView';
import { yellowImg } from '../helpers';
import { models, sizes } from '../components/index_c.js';
import { animateWithGsapTimeline } from '../helpers/animations';

import '../styles/Model.css';

function Model() {
  const [size, setSize] = useState('small');
  const [model, setModel] = useState({
    title: 'iPhone 15 Pro',
    color: ['#8788A1', '#FFE7B9', '#6F6C64'],
    img: yellowImg,
  });

  // Refs for camera control
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  // Refs for model groups
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // Rotation state
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const tl = gsap.timeline();

  useEffect(() => {
  if (size === 'large') {
    animateWithGsapTimeline(tl, small, smallRotation, '#view1', '#view2', {
      transform: 'translateX(-100%)',
      duration: 2,
    });
    animateWithGsapTimeline(tl, large, largeRotation, '#view2', '#view1', {
      transform: 'translateX(0)',
      duration: 2,
    });
  }

  if (size === 'small') {
    animateWithGsapTimeline(tl, large, largeRotation, '#view2', '#view1', {
      transform: 'translateX(-100%)',
      duration: 2,
    });
    animateWithGsapTimeline(tl, small, smallRotation, '#view1', '#view2', {
      transform: 'translateX(0)',
      duration: 2,
    });
  }
}, [size]);

  useGSAP(() => {
    gsap.to('#heading', { y: 0, opacity: 1 });
  }, []);

  return (
    <section className="model-section">
      <div className="model-container">
        <h1 id="heading" className="section-heading">
          Take a closer look at our model.
        </h1>

        <div className="model-view-wrapper">
          <div className="model-views">
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />

            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />

            <Canvas
              style={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: 'hidden',
              }}
              eventSource={document.getElementById('root')}
            >
              <View.Port />
            </Canvas>
          </div>

          <p className="model-title">{model.title}</p>

          <div className="model-controls">
            <ul className="color-container" style={{ listStyle: 'none' }}>
              {models.map((item, i) => (
                <li
                  key={i}
                  className="color-circle"
                  style={{ backgroundColor: item.color[0] }}
                  onClick={() => setModel(item)}
                />
              ))}
            </ul>

            <div className="size-buttons">
              {sizes.map(({ label, value }) => (
                <span
                  key={label}
                  className={`size-button ${size === value ? 'active' : ''}`}
                  onClick={() => setSize(value)}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Model;
