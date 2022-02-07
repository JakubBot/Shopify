import * as THREE from 'three';
import { Canvas, useFrame, extend, useLoader } from '@react-three/fiber';
import { shaderMaterial, useTexture } from '@react-three/drei';
import glsl from 'glslify';
import { Suspense, useEffect, useRef } from 'react';
import CanMaterial from './canSmall.jpg';

const WavyShaderMaterial = shaderMaterial(
  { uTime: 0, uTexture: new THREE.Texture() },
  glsl`
  #pragma glslify: snoise3 = require(glsl-noise/simplex/3d);
  precision mediump float;
  uniform float uTime;
  varying vec2 vUv;
  varying float vWave;
  void main() {
    vUv = uv;
    float noiseFreq =0.8;
    float noiseAmp = 0.45;
    vec3 pos = position;
    vec3 noisePos = vec3(pos.x * noiseFreq + uTime,pos.y,pos.z);
    pos.z = snoise3(noisePos) * noiseAmp;
    vWave = pos.z;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
  `,
  glsl`
  precision mediump float;
  uniform sampler2D uTexture;
  varying vec2 vUv;
  varying float vWave;
  void main() {
    float wave= vWave * 0.1;
    vec3 texture = texture(uTexture, vUv + wave).rgb;
    gl_FragColor = vec4(texture,1.0);
  }
  `
);

extend({ WavyShaderMaterial });

const Wave = () => {
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, CanMaterial.src);
  useFrame(({ clock }) => {
    ref.current.uTime = clock.getElapsedTime();
  });
  return (
    <mesh>
      <planeGeometry args={[0.8, 1, 32, 32]} />
      <wavyShaderMaterial ref={ref} uTexture={texture} />
    </mesh>
  );
};

const WavyImage = () => {
  useEffect(() => {
    return () => window.location.reload();
  }, []);

  return (
    <>
      <Canvas camera={{ position: [0, 0, 5], fov: 15 }}>
        <Suspense fallback={null}>
          <Wave />
        </Suspense>
      </Canvas>
    </>
  );
};

export default WavyImage;
