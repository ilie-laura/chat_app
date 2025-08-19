// Model.js
import React, { useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import '../styles/IPhone.css';

export default function Model({ item, ...props }) {
  const { nodes, materials } = useGLTF("/model/scene.glb");
  const texture = useTexture(item.img); // item.img e path-ul imaginii

  useEffect(() => {
    // Modificăm materialele GLTF: culoare și randare pe ambele fețe
    Object.entries(materials).forEach(([name, mat]) => {
      mat.side = THREE.DoubleSide; // 👈 se adaugă pentru a randa și spatele

      if (
        name !== "zFdeDaGNRwzccye" &&
        name !== "ujsvqBWRMnqdwPx" &&
        name !== "hUlRcbieVuIiOXG" &&
        name !== "jlzuBkUzuJqgiAK" &&
        name !== "xNrofRCqOXXHVZt"
      ) {
        mat.color = new THREE.Color(item.color[0]);
      }

      mat.needsUpdate = true;
    });
  }, [materials, item]);

  return (
    <group {...props} dispose={null}>
      {/* Mesh cu textura custom (din item.img) */}
      <mesh
        geometry={nodes.xXDHkMplTIDAXLN.geometry}
        scale={0.01}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          map={texture}
          roughness={1}
          side={THREE.DoubleSide} // 👈 important pentru vizibilitate pe ambele părți
        />
      </mesh>

      {/* Alte mesh-uri cu materiale din GLB */}
      <mesh
        geometry={nodes.ttmRoLdJipiIOmf.geometry}
        material={materials.hUlRcbieVuIiOXG}
        scale={0.01}
        castShadow
        receiveShadow
      />
    </group>
  );
}

useGLTF.preload("/model/scene.glb");
