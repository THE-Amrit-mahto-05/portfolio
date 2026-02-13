import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const FluxBackground = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const pulsesRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const handleClick = (e) => {
            pulsesRef.current.push({
                x: e.clientX,
                y: e.clientY,
                r: 0,
                maxR: Math.max(canvas.width, canvas.height),
                opacity: 0.5,
                color: Math.random() > 0.5 ? '#00F2FF' : '#BD00FF'
            });
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('click', handleClick);
        resize();

        // Fluid Blobs
        const blobs = Array.from({ length: 8 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 300 + 200,
            vx: (Math.random() - 0.5) * 1,
            vy: (Math.random() - 0.5) * 1,
            baseOpacity: Math.random() * 0.3 + 0.1
        }));

        const draw = () => {
            ctx.fillStyle = '#020617';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw Blobs (Ink effect)
            ctx.filter = 'blur(80px)';
            blobs.forEach(b => {
                b.x += b.vx;
                b.y += b.vy;

                if (b.x < -b.r) b.x = canvas.width + b.r;
                if (b.x > canvas.width + b.r) b.x = -b.r;
                if (b.y < -b.r) b.y = canvas.height + b.r;
                if (b.y > canvas.height + b.r) b.y = -b.r;

                const dist = Math.hypot(b.x - mouseRef.current.x, b.y - mouseRef.current.y);
                const hoverBoost = Math.max(0, 1 - dist / 800) * 0.2;

                ctx.fillStyle = `rgba(189, 0, 255, ${b.baseOpacity + hoverBoost})`;
                ctx.beginPath();
                ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
                ctx.fill();

                ctx.fillStyle = `rgba(0, 242, 255, ${b.baseOpacity * 0.5})`;
                ctx.beginPath();
                ctx.arc(canvas.width - b.x, canvas.height - b.y, b.r * 0.8, 0, Math.PI * 2);
                ctx.fill();
            });
            ctx.filter = 'none';

            // Draw Pulses (Bioluminescence)
            pulsesRef.current = pulsesRef.current.filter(p => p.opacity > 0.01);
            pulsesRef.current.forEach(p => {
                p.r += 15;
                p.opacity *= 0.96;

                ctx.strokeStyle = p.color;
                ctx.globalAlpha = p.opacity;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.stroke();

                ctx.shadowBlur = 20;
                ctx.shadowColor = p.color;
                ctx.stroke();
                ctx.shadowBlur = 0;
            });
            ctx.globalAlpha = 1.0;

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleClick);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#020617]">
            <canvas ref={canvasRef} className="w-full h-full opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/20 to-[#020617]" />
        </div>
    );
};

export default FluxBackground;
