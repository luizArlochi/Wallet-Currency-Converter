import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Coin = () => {
  const coin = useGLTF("./coin/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.01} groundColor='black' />
      <ambientLight intensity={3.4} />
      <spotLight
        position={[0, 10, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={5} />
      <primitive
        object={coin.scene}
        scale={6}
        position={[-3, -4, 5]}
        rotation={[-0.01, -0.01, -0.01]}
      />
    </mesh>
  );
};

const CoinCanvas = () => {

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 60], fov: 20 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={20}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableRotate={false}
        />
        <Coin />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default CoinCanvas;