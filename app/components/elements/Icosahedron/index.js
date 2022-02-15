import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useRef } from 'react';

const IcosahedronSmall = () => {
  const icoSmall = useRef();

  useFrame(({ clock }) => {
    icoSmall.current.rotation.y = -clock.getElapsedTime() / 4;
    icoSmall.current.rotation.x = -clock.getElapsedTime() / 4;
  });
  return (
    <mesh ref={icoSmall}>
      <icosahedronBufferGeometry args={[4.5, 1]} />
      <meshPhongMaterial flatShading />
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
      <icosahedronBufferGeometry args={[6, 1]} />
      <meshPhongMaterial wireframe side={THREE.DoubleSide} />
    </mesh>
  );
};
const Icosahedron = () => {
  return (
    <>
      <Canvas camera={{ fov: 45, position: [0, 0, 30] }}>
        <ambientLight color={0x545454} />
        <directionalLight color={0xe0e0e0} intensity="1" position={[1, 0, 0]} />
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
