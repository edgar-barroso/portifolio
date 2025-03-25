import React, { useEffect, useRef } from "react";

export const RandomCirclesAndLines = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const generateCircles = (numCircles) => {
      const circles = [];
      for (let i = 0; i < numCircles; i++) {
        const radius = Math.random() + 8;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const dx = Math.random() * 1.5 - 1;
        const dy = Math.random() * 1.5 - 1;
        const color = `rgba(0,0,0,.6)`;
        circles.push({ x, y, radius, dx, dy, color });
      }
      return circles;
    };

    const drawCircles = (circles) => {
      circles.forEach(({ x, y, radius }) => {
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, "rgba(0, 0, 0, 0.6)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });
    };

    const updateCircles = (circles) => {
      circles.forEach((circle) => {
        circle.x += circle.dx;
        circle.y += circle.dy;

        if (
          circle.x - circle.radius < 0 ||
          circle.x + circle.radius > canvas.width
        ) {
          circle.dx *= -1;
        }
        if (
          circle.y - circle.radius < 0 ||
          circle.y + circle.radius > canvas.height
        ) {
          circle.dy *= -1;
        }
      });
    };

    const drawLines = (circles) => {
      for (let i = 0; i < circles.length; i++) {
        for (let j = i + 1; j < circles.length; j++) {
          const dx = circles[j].x - circles[i].x;
          const dy = circles[j].y - circles[i].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          ctx.lineWidth = (1 / distance) * 200;
          if (ctx.lineWidth > 1) ctx.lineWidth = 1.5;
          ctx.strokeStyle = `rgba(0, 0, 0, ${(1 / distance) * 10})`;
          if (distance < 250) {
            ctx.beginPath();
            ctx.moveTo(circles[i].x, circles[i].y);
            ctx.lineTo(circles[j].x, circles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const circles = generateCircles(100);
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawLines(circles);
      updateCircles(circles);
      drawCircles(circles);
      requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      className=" absolute left-0 top-0 -z-30"
      ref={canvasRef}
      style={{ display: "block", margin: 0, overflow: "hidden" }}
    />
  );
};
