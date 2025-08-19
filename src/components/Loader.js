import React from 'react';
import { Html } from '@react-three/drei';
import '../styles/Loader.css';

const Loader = () => {
  return (
    <Html>
      <div className="loader-overlay">
        <div className="loader-spinner">
          Loading...
        </div>
      </div>
    </Html>
  );
};

export default Loader;
