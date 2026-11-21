"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";
import { lens } from "./lensState";

const RIM = 64;

// A magnifying glass: brass rim, clear glass disc, short handle. Sized in pixels (orthographic, zoom 1).
function MagnifyingGlass() {
  const group = useRef<Group>(null);
  const { size } = useThree();

  useFrame(({ clock }) => {
    const g = group.current;
    if (!g) return;
    const s = (lens.r / RIM) * lens.presence;
    g.scale.setScalar(Math.max(s, 0.0001));
    g.position.set(lens.x - size.width / 2, size.height / 2 - lens.y, 0);
    // tilt into the direction of travel, plus a slow idle sway
    const t = clock.elapsedTime;
    g.rotation.x = Math.max(-0.5, Math.min(0.5, lens.vy * 0.0012)) + Math.sin(t * 0.8) * 0.05;
    g.rotation.y = Math.max(-0.5, Math.min(0.5, lens.vx * 0.0012)) + Math.cos(t * 0.6) * 0.05;
  });

  return (
    <group ref={group}>
      <mesh>
        <torusGeometry args={[RIM, 6, 32, 96]} />
        <meshPhysicalMaterial color="#c9a36a" metalness={0.85} roughness={0.22} clearcoat={1} clearcoatRoughness={0.1} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[RIM - 2, RIM - 2, 6, 96]} />
        <meshPhysicalMaterial
          color="#fffaf2"
          transmission={1}
          thickness={12}
          roughness={0.04}
          ior={1.45}
          clearcoat={1}
          transparent
          opacity={0.35}
        />
      </mesh>
      <mesh position={[RIM * 0.92, -RIM * 0.92, 0]} rotation={[0, 0, Math.PI / 4]}>
        <cylinderGeometry args={[7, 8, RIM * 0.9, 24]} />
        <meshPhysicalMaterial color="#5b3a24" roughness={0.5} clearcoat={0.6} />
      </mesh>
    </group>
  );
}

export default function LensCanvas() {
  // phones get fewer pixels and a smaller light map; the lens is 44px there, detail is not visible
  const small = window.innerWidth < 640;

  return (
    <Canvas
      orthographic
      camera={{ zoom: 1, position: [0, 0, 500], near: 1, far: 2000 }}
      gl={{ alpha: true, antialias: !small, powerPreference: "low-power" }}
      dpr={small ? [1, 1.5] : [1, 2]}
      style={{ position: "fixed", inset: 0, zIndex: 30, pointerEvents: "none" }}
      aria-hidden="true"
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[300, 400, 500]} intensity={2.2} />
      <Environment resolution={small ? 64 : 128}>
        <Lightformer form="rect" intensity={4} position={[0, 4, 4]} scale={[8, 1.5, 1]} />
        <Lightformer form="rect" intensity={2} position={[-5, 0, 2]} scale={[2, 6, 1]} color="#ffe8cc" />
        <Lightformer form="circle" intensity={3} position={[4, -2, 3]} scale={1.5} />
      </Environment>
      <MagnifyingGlass />
    </Canvas>
  );
}
