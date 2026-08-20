import { useEffect, useRef } from "react";
import Logo from "../assets/symbol.svg";

const AsciiGraphic = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const image = new Image();
    image.src = Logo;

    let animationFrame;
    let particles = [];

    const mouse = {
      x: -1000,
      y: -1000,
    };

    // =========================
    // CHARACTER SET
    // =========================

    const getCharacter = (brightness) => {
      const chars = "@#8&$%*+;:,. ";

      const index = Math.floor((brightness / 255) * (chars.length - 1));

      return chars[index];
    };

    // =========================
    // CREATE ASCII
    // =========================

    const createAscii = (canvasWidth, canvasHeight) => {
      const offscreen = document.createElement("canvas");
      const offCtx = offscreen.getContext("2d");

      const imageWidth = image.naturalWidth;
      const imageHeight = image.naturalHeight;

      if (!imageWidth || !imageHeight) return;

      /*
        Characters are taller than they are wide,
        so we use different horizontal and vertical
        sampling distances.
      */
      const gapX = 7;
      const gapY = 4;

      /*
        Scale the image so it fits inside the canvas
        while maintaining its original aspect ratio.
      */
      const scale = Math.min(
        (canvasWidth * 0.9) / imageWidth,
        (canvasHeight * 0.9) / imageHeight,
      );

      const drawWidth = imageWidth * scale;
      const drawHeight = imageHeight * scale;

      /*
        Center the image inside the canvas.
      */
      const offsetX = (canvasWidth - drawWidth) / 2;

      const offsetY = (canvasHeight - drawHeight) / 2;

      /*
        Create a small sampling canvas.

        Instead of processing potentially hundreds
        of thousands of pixels, we process only the
        pixels that actually become ASCII characters.
      */
      const sampleWidth = Math.ceil(canvasWidth / gapX);

      const sampleHeight = Math.ceil(canvasHeight / gapY);

      offscreen.width = sampleWidth;
      offscreen.height = sampleHeight;

      offCtx.clearRect(0, 0, sampleWidth, sampleHeight);

      /*
        Draw the image into the sampling canvas.

        IMPORTANT:
        Everything is divided by the sampling
        distance so the image doesn't get repeated
        or distorted.
      */
      offCtx.drawImage(
        image,
        offsetX / gapX,
        offsetY / gapY,
        drawWidth / gapX,
        drawHeight / gapY,
      );

      const data = offCtx.getImageData(0, 0, sampleWidth, sampleHeight).data;

      particles = [];

      /*
        Convert sampled pixels into ASCII particles.
      */
      for (let y = 0; y < sampleHeight; y++) {
        for (let x = 0; x < sampleWidth; x++) {
          const index = (y * sampleWidth + x) * 4;

          const alpha = data[index + 3];

          // Ignore transparent pixels
          if (alpha <= 30) continue;

          const brightness =
            (data[index] + data[index + 1] + data[index + 2]) / 3;

          const posX = x * gapX;
          const posY = y * gapY;

          particles.push({
            originX: posX,
            originY: posY,

            x: posX,
            y: posY,

            vx: 0,
            vy: 0,

            char: getCharacter(brightness),
          });
        }
      }
    };

    // =========================
    // RESIZE
    // =========================

    const resize = () => {
      const rect = canvas.getBoundingClientRect();

      if (rect.width === 0 || rect.height === 0) {
        return;
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      /*
        Work in CSS pixels while keeping the canvas
        sharp on high-DPI displays.
      */
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createAscii(rect.width, rect.height);
    };

    // =========================
    // ANIMATION
    // =========================

    const animate = () => {
      const rect = canvas.getBoundingClientRect();

      ctx.clearRect(0, 0, rect.width, rect.height);

      ctx.font = "7px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#5d3fd3";

      const mouseRadius = 80;

      for (const particle of particles) {
        // =====================
        // CURSOR INTERACTION
        // =====================

        const dx = particle.x - mouse.x;

        const dy = particle.y - mouse.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRadius && distance > 0) {
          const force = (mouseRadius - distance) / mouseRadius;

          const angle = Math.atan2(dy, dx);

          particle.vx += Math.cos(angle) * force * 1.5;

          particle.vy += Math.sin(angle) * force * 1.5;
        }

        // =====================
        // RETURN HOME
        // =====================

        const homeX = particle.originX - particle.x;

        const homeY = particle.originY - particle.y;

        particle.vx += homeX * 0.03;

        particle.vy += homeY * 0.03;

        // =====================
        // FRICTION
        // =====================

        particle.vx *= 0.85;
        particle.vy *= 0.85;

        // =====================
        // POSITION
        // =====================

        particle.x += particle.vx;
        particle.y += particle.vy;

        // =====================
        // DRAW
        // =====================

        ctx.fillText(particle.char, particle.x, particle.y);
      }

      animationFrame = requestAnimationFrame(animate);
    };

    // =========================
    // MOUSE
    // =========================

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();

      mouse.x = e.clientX - rect.left;

      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    // =========================
    // IMAGE LOAD
    // =========================

    image.onload = () => {
      resize();
      animate();
    };

    // =========================
    // EVENTS
    // =========================

    canvas.addEventListener("mousemove", handleMouseMove);

    canvas.addEventListener("mouseleave", handleMouseLeave);

    window.addEventListener("resize", resize);

    // =========================
    // CLEANUP
    // =========================

    return () => {
      cancelAnimationFrame(animationFrame);

      canvas.removeEventListener("mousemove", handleMouseMove);

      canvas.removeEventListener("mouseleave", handleMouseLeave);

      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="block h-full w-full" />;
};

export default AsciiGraphic;
