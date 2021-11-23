import { useEffect, useRef } from 'react';

export const HeaderCanvas = (props: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas!.width = window.innerWidth;
    canvas!.height = window.innerHeight;
    const ctx = canvas?.getContext('2d');
    const x = ctx?.canvas.width ?? 0;
    const y = ctx?.canvas.height ?? 0;

    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, x, x);

      gradient.addColorStop(0.25, '#3b378a');
      gradient.addColorStop(0.5, '#4d47b4');
      gradient.addColorStop(0.75, '#6c63ff');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, y * 0.75);
      ctx.lineTo(x * 0.5, y * 1);
      ctx.lineTo(x, y * 0.75);
      ctx.lineTo(x, 0);

      ctx.fill();
    }
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};
