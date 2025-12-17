"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

function AnimatedSphere() {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        if (meshRef.current) {
            // Subtle rotation
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;

            // Move slightly with mouse (normalized mouse coordinates)
            const { x, y } = state.mouse;
            meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, x * 2, 0.1);
            meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, y * 2, 0.1);
        }
    });

    return (
        <Sphere args={[1, 100, 200]} scale={2.4} ref={meshRef} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)}>
            <MeshDistortMaterial
                color="#8b5cf6"
                attach="material"
                distort={0.4}
                speed={1.5}
                roughness={0.2}
                metalness={0.8}
                bumpScale={0.005}
            />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#ec4899" />
            <ambientLight intensity={0.5} />
        </Sphere>
    );
}

export function HeroOrb() {
    return (
        <div className="w-full h-full absolute inset-0 -z-10 opacity-60">
            <Canvas className="bg-transparent">
                <ambientLight intensity={1} />
                <directionalLight position={[2, 5, 2]} intensity={1} />
                <AnimatedSphere />
            </Canvas>
        </div>
    );
}
