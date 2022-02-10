import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useRef } from 'react';

import styles from './index.module.scss'

const IcosahedronSmall = () => {
  const icoSmall = useRef();

  useFrame(({ clock }) => {
    icoSmall.current.rotation.y = -clock.getElapsedTime() /4;
    icoSmall.current.rotation.x = -clock.getElapsedTime() /4;
  });
  return (
    <mesh ref={icoSmall}>
      <icosahedronBufferGeometry args={[7.5, 1]} />
      <meshPhongMaterial flatShading color="0xffffff" />
    </mesh>
  );
};

const IcosahedronBig = () => {
  const ico = useRef();

  useFrame(({ clock }) => {
    ico.current.rotation.y = -clock.getElapsedTime() / 4;
    ico.current.rotation.x = -clock.getElapsedTime() / 4;
  });
  return (
    <mesh ref={ico}>
      <icosahedronBufferGeometry args={[10, 1]} />
      <meshPhongMaterial color="0xffffff"  wireframe side={THREE.DoubleSide} />
    </mesh>
  );
};

const Icosahedron = () => {
  return (
    <>
      <h2>saa</h2>

      <Canvas  className={styles.sa} camera={{ fov: 45, position: [0, 0, 50] }}>
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        <ambientLight color={0x545454} />
        <directionalLight color={0xffffff} intensity="1" position={[1, 0, 0]} />
        <directionalLight
          color={0x11e8bb}
          intensity="1"
          position={[0.75, 1, 0.5]}
        />
        <directionalLight
          color={0x8200c9}
          intensity="1"
          position={[-0.75, -1, 0.5]}
        />
        <IcosahedronSmall />
        <IcosahedronBig />
      </Canvas>
    </>
  );
};

export default Icosahedron;
