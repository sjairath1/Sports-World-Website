import React, { useEffect, useRef } from 'react';
import './GradientBackground.css';

const GradientBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Gradient parameters
    let time = 0;
    const colors = [
      { r: 102, g: 126, b: 234 }, // Blue
      { r: 240, g: 147, b: 251 }, // Pink
      { r: 79, g: 172, b: 254 }, // Light Blue
      { r: 0, g: 242, b: 254 },  // Cyan
      { r: 255, g: 236, b: 210 }, // Cream
      { r: 252, g: 87, b: 108 }   // Red
    ];

    // Animation loop
    const animate = () => {
      time += 0.005;
      
      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      
      colors.forEach((color, index) => {
        const offset = (index / (colors.length - 1)) + Math.sin(time + index) * 0.1;
        const clampedOffset = Math.max(0, Math.min(1, offset));
        
        // Add some color shifting
        const r = color.r + Math.sin(time * 2 + index) * 20;
        const g = color.g + Math.cos(time * 1.5 + index) * 20;
        const b = color.b + Math.sin(time * 3 + index) * 20;
        
        gradient.addColorStop(clampedOffset, `rgb(${r}, ${g}, ${b})`);
      });

      // Fill canvas with gradient
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add some floating orbs
      for (let i = 0; i < 5; i++) {
        const x = Math.sin(time + i) * canvas.width * 0.3 + canvas.width * 0.5;
        const y = Math.cos(time * 0.7 + i) * canvas.height * 0.3 + canvas.height * 0.5;
        const radius = Math.sin(time * 1.5 + i) * 50 + 100;
        
        const orbGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        orbGradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
        orbGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = orbGradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="gradient-background" />;
};

export default GradientBackground;
