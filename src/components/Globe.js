import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Globe() {
  const containerRef = useRef(null);
  const globeRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || globeRef.current) return;

    // Basic Three.js setup for a simple globe
    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Create a bigger globe
    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0x2563eb,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Add some lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 0.5);
    scene.add(directionalLight);

    camera.position.z = 10;

    // Auto rotation + Manual rotation with mouse
    let isMouseDown = false;
    let mouseX = 0;
    let mouseY = 0;
    let autoRotationSpeed = 0.005; // Base auto rotation speed

    const handleMouseDown = (event) => {
      isMouseDown = true;
      mouseX = event.clientX;
      mouseY = event.clientY;
      container.style.cursor = 'grabbing';
    };

    const handleMouseUp = () => {
      isMouseDown = false;
      container.style.cursor = 'grab';
    };

    const handleMouseMove = (event) => {
      if (!isMouseDown) return;
      
      const deltaX = event.clientX - mouseX;
      const deltaY = event.clientY - mouseY;
      
      globe.rotation.y += deltaX * 0.01;
      globe.rotation.x += deltaY * 0.01;
      
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseUp);
    container.style.cursor = 'grab';

    // Animation loop with auto + manual rotation
    function animate() {
      requestAnimationFrame(animate);
      
      // Auto rotation (continues even during manual interaction)
      if (!isMouseDown) {
        globe.rotation.y += autoRotationSpeed;
        globe.rotation.x += autoRotationSpeed * 0.3;
      }
      
      renderer.render(scene, camera);
    }
    animate();

    globeRef.current = { scene, camera, renderer, globe };

    // Cleanup
    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseUp);
      
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (!globeRef.current || !containerRef.current) return;
      
      const { camera, renderer } = globeRef.current;
      const container = containerRef.current;
      
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full h-96 relative">
        <div ref={containerRef} className="w-full h-full" />
      </div>
      <p className="text-gray-600 text-sm mt-4">
        auto rotating - drag to spin manually
      </p>
    </div>
  );
}