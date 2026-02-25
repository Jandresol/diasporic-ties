import { useRef, useEffect } from 'react';

export default function BackgroundGlow({ width, height }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = width;
    canvas.height = height;

    const gr = ctx.createRadialGradient(
      width * 0.48,
      height * 0.5,
      0,
      width * 0.48,
      height * 0.5,
      width * 0.6
    );

    gr.addColorStop(0, 'rgba(160,90,20,0.05)');
    gr.addColorStop(1, 'rgba(0,0,0,0)');

    ctx.fillStyle = gr;
    ctx.fillRect(0, 0, width, height);
  }, [width, height]);

  return <canvas className="bg-canvas" ref={canvasRef} />;
}