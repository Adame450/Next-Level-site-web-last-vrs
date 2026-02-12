import React, { useEffect, useRef } from 'react';

interface Signal {
  x: number;
  y: number;
  axis: 'x' | 'y';
  direction: 1 | -1;
  speed: number;
  length: number;
  opacity: number;
}

const GridBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Config
    const gridSpacing = 60; 
    const gridColor = 'rgba(40, 40, 40, 0.5)';
    const crossColor = 'rgba(80, 80, 80, 0.8)';
    
    // State
    let signals: Signal[] = [];
    let animationFrameId: number;
    let time = 0;
    
    // Mouse tracking for interaction
    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
        if(e.touches.length > 0) {
            mouseX = e.touches[0].clientX;
            mouseY = e.touches[0].clientY;
        }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Volumetric Fog "Planets" (Blobs)
    // Expanded array for more depth and complexity
    const fogBlobs = [
        // Main Deep Void Center
        { x: width * 0.5, y: height * 0.5, r: 400, vx: 0, vy: 0, color: 'rgba(5, 5, 10, 0.9)' },
        // Nebula Purple
        { x: width * 0.2, y: height * 0.3, r: 300, vx: 0.2, vy: 0.1, color: 'rgba(30, 10, 50, 0.4)' },
        // Deep Blue Abyss
        { x: width * 0.8, y: height * 0.8, r: 350, vx: -0.15, vy: -0.1, color: 'rgba(10, 15, 40, 0.5)' },
        // Neon Highlight (Mobile focus)
        { x: width * 0.5, y: height * 0.5, r: 150, vx: -0.3, vy: 0.2, color: 'rgba(139, 92, 246, 0.12)' },
        // Distant Acid Green (Subtle hint)
        { x: width * 0.1, y: height * 0.9, r: 250, vx: 0.1, vy: -0.05, color: 'rgba(163, 230, 53, 0.05)' },
        // Red Warning (Far background)
        { x: width * 0.9, y: height * 0.1, r: 200, vx: -0.05, vy: 0.05, color: 'rgba(255, 50, 50, 0.03)' },
        // Extra Violet Pulse
        { x: width * 0.6, y: height * 0.2, r: 180, vx: 0.08, vy: 0.1, color: 'rgba(139, 92, 246, 0.08)' }
    ];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      // Re-center main blobs on resize
      fogBlobs[0].x = width * 0.5;
      fogBlobs[0].y = height * 0.5;
    };

    const createSignal = () => {
      const axis = Math.random() > 0.5 ? 'x' : 'y';
      const isX = axis === 'x';
      const x = isX ? Math.random() * width : Math.floor(Math.random() * (width / gridSpacing)) * gridSpacing;
      const y = !isX ? Math.random() * height : Math.floor(Math.random() * (height / gridSpacing)) * gridSpacing;
      
      signals.push({
        x,
        y,
        axis,
        direction: Math.random() > 0.5 ? 1 : -1,
        speed: 2 + Math.random() * 5,
        length: 50 + Math.random() * 100,
        opacity: 1
      });
    };

    window.addEventListener('resize', resize);
    resize();

    const render = () => {
      time++;
      ctx.clearRect(0, 0, width, height);

      // --- 0. BACKGROUND VOLUMETRIC FOG ---
      fogBlobs.forEach((blob, i) => {
          // Physics: Fluid-like interaction with mouse
          const dx = mouseX - blob.x;
          const dy = mouseY - blob.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          // Repulsion radius
          const maxDist = 500;
          
          if (dist < maxDist && dist > 1) {
              const force = (maxDist - dist) / maxDist;
              // Push away from mouse
              blob.vx -= (dx / dist) * force * 0.5;
              blob.vy -= (dy / dist) * force * 0.5;
          }

          // Pull back to center (Elasticity)
          // Weak pull to keep them drifting but generally on screen
          const centerX = width * (i % 2 === 0 ? 0.3 : 0.7); // Distribute attractors
          const centerY = height * (i % 3 === 0 ? 0.3 : 0.7);
          const pullStrength = 0.0002; 
          
          blob.vx += (centerX - blob.x) * pullStrength;
          blob.vy += (centerY - blob.y) * pullStrength;

          // Constant ambient movement
          blob.x += blob.vx + Math.sin(time * 0.002 + i) * 0.2;
          blob.y += blob.vy + Math.cos(time * 0.002 + i) * 0.2;

          // Friction
          blob.vx *= 0.98;
          blob.vy *= 0.98;

          // Ensure coordinates are finite before creating gradient
          if (Number.isFinite(blob.x) && Number.isFinite(blob.y) && Number.isFinite(blob.r)) {
              const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.r);
              gradient.addColorStop(0, blob.color);
              gradient.addColorStop(1, 'transparent');
              
              // Use 'screen' for lighter blobs, 'source-over' for dark voids
              ctx.globalCompositeOperation = blob.color.includes('0, 0, 0') ? 'source-over' : 'screen';
              ctx.fillStyle = gradient;
              ctx.fillRect(0, 0, width, height);
          }
      });
      ctx.globalCompositeOperation = 'source-over'; 

      // --- 1. Draw Grid Lines ---
      ctx.beginPath();
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 0.5;

      for (let x = 0; x <= width; x += gridSpacing) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y <= height; y += gridSpacing) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // --- 2. Draw Intersections ---
      ctx.fillStyle = crossColor;
      for (let x = 0; x <= width; x += gridSpacing) {
        for (let y = 0; y <= height; y += gridSpacing) {
          const size = 2;
          ctx.fillRect(x - size/2, y - 1, size, 2);
          ctx.fillRect(x - 1, y - size/2, 2, size);
        }
      }

      // --- 3. Random Lighting Cells ---
      if (time % 5 === 0) { // Faster blink
        const activeX = Math.floor(Math.random() * (width / gridSpacing)) * gridSpacing;
        const activeY = Math.floor(Math.random() * (height / gridSpacing)) * gridSpacing;
        ctx.fillStyle = 'rgba(139, 92, 246, 0.15)';
        ctx.fillRect(activeX, activeY, gridSpacing, gridSpacing);
      }

      // --- 4. Draw Signals ---
      if (time % 15 === 0 && signals.length < 15) { // More signals
        createSignal();
      }

      ctx.shadowBlur = 15;
      ctx.shadowColor = '#8b5cf6';

      for (let i = signals.length - 1; i >= 0; i--) {
        const s = signals[i];
        if (s.axis === 'x') {
          s.x += s.speed * s.direction;
        } else {
          s.y += s.speed * s.direction;
        }

        const gradient = ctx.createLinearGradient(
          s.axis === 'x' ? s.x - s.length * s.direction : s.x,
          s.axis === 'y' ? s.y - s.length * s.direction : s.y,
          s.x,
          s.y
        );
        gradient.addColorStop(0, 'rgba(139, 92, 246, 0)');
        gradient.addColorStop(1, `rgba(139, 92, 246, ${s.opacity})`);

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.moveTo(s.axis === 'x' ? s.x - s.length * s.direction : s.x, s.axis === 'y' ? s.y - s.length * s.direction : s.y);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();

        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(s.x, s.y, 1.5, 0, Math.PI * 2);
        ctx.fill();

        if (s.x < -200 || s.x > width + 200 || s.y < -200 || s.y > height + 200) {
          signals.splice(i, 1);
        }
      }
      
      ctx.shadowBlur = 0;

      // --- 5. Hard Vignette ---
      if (width > 0 && height > 0) {
        const gradient = ctx.createRadialGradient(width/2, height/2, height/2, width/2, height/2, height);
        gradient.addColorStop(0, 'transparent');
        gradient.addColorStop(0.8, 'rgba(3,3,3,0.5)');
        gradient.addColorStop(1, '#030303');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none bg-void"
      style={{ opacity: 1 }}
    />
  );
};

export default GridBackground;