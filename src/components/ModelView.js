import React, { Suspense, useEffect } from "react";
import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

import Lights from "./Lights";
import Loader from "./Loader";
import IPhone from "./IPhone";

import "../styles/ModelView.css";

const BackgroundImage = ({ image }) => {
  const { scene } = useThree();

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(image, (texture) => {
      scene.background = texture;
    });

    // Opțional: la demontare resetăm background-ul
    return () => {
      scene.background = null;
    };
  }, [image, scene]);

  return null;
};

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`model-view ${index === 2 ? "right-offset" : ""}`}
    >

      <BackgroundImage color={item.color} />

      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      <group
        ref={groupRef}
        name={index === 1 ? "small" : "large"}
        position={[0, 0, 0]}
      >
        <Suspense fallback={<Loader />}>
          <IPhone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
