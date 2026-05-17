"use client";

import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export const WovenCanvas = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // --- scene ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000,
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // --- particles ---
    const particleCount = 50000;
    const positions      = new Float32Array(particleCount * 3);
    const originalPos    = new Float32Array(particleCount * 3);
    const colors         = new Float32Array(particleCount * 3);
    const velocities     = new Float32Array(particleCount * 3);

    const geometry   = new THREE.BufferGeometry();
    const torusKnot  = new THREE.TorusKnotGeometry(1.5, 0.5, 200, 32);
    const srcPos     = torusKnot.attributes.position;
    const totalVerts = srcPos.count;

    const col = new THREE.Color();
    for (let i = 0; i < particleCount; i++) {
      const vi = i % totalVerts;
      const x = srcPos.getX(vi), y = srcPos.getY(vi), z = srcPos.getZ(vi);
      positions[i*3]=x; positions[i*3+1]=y; positions[i*3+2]=z;
      originalPos[i*3]=x; originalPos[i*3+1]=y; originalPos[i*3+2]=z;

      col.setHSL(0.1 + Math.random() * 0.08, 0.75, 0.55 + Math.random() * 0.2);
      colors[i*3]=col.r; colors[i*3+1]=col.g; colors[i*3+2]=col.b;
    }
    torusKnot.dispose();

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color',    new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Pre-allocate scratch vectors — avoids 250k allocations/frame
    const mouse     = new THREE.Vector2(0, 0);
    const mouseWorld = new THREE.Vector3(0, 0, 0);
    const currentP  = new THREE.Vector3();
    const origP     = new THREE.Vector3();
    const vel       = new THREE.Vector3();
    const dir       = new THREE.Vector3();
    const returnF   = new THREE.Vector3();

    const clock = new THREE.Clock();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x =  (e.clientX / window.innerWidth)  * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animFrameId: number;
    const animate = () => {
      animFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      mouseWorld.set(mouse.x * 3, mouse.y * 3, 0);

      for (let i = 0; i < particleCount; i++) {
        const ix = i*3, iy = ix+1, iz = ix+2;

        currentP.set(positions[ix], positions[iy], positions[iz]);
        origP.set(originalPos[ix], originalPos[iy], originalPos[iz]);
        vel.set(velocities[ix], velocities[iy], velocities[iz]);

        const dist = currentP.distanceTo(mouseWorld);
        if (dist < 1.5) {
          const force = (1.5 - dist) * 0.01;
          dir.subVectors(currentP, mouseWorld).normalize().multiplyScalar(force);
          vel.add(dir);
        }

        returnF.subVectors(origP, currentP).multiplyScalar(0.001);
        vel.add(returnF);
        vel.multiplyScalar(0.95);

        positions[ix] += vel.x; positions[iy] += vel.y; positions[iz] += vel.z;
        velocities[ix] = vel.x; velocities[iy] = vel.y; velocities[iz] = vel.z;
      }
      geometry.attributes.position.needsUpdate = true;

      points.rotation.y = t * 0.05;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const w = container.clientWidth, h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 w-full h-full" />;
};
