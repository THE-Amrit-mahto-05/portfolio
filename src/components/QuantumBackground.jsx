import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useVelocity, useSpring, useTransform } from 'framer-motion';

const QuantumBackground = () => {
    const canvasRef = useRef(null);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });

    const [isGlitching, setIsGlitching] = useState(false);
    const opacity = useTransform(smoothVelocity, [-1000, 0, 1000], [0.8, 0, 0.8]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);
        resize();

        const particles = Array.from({ length: 50 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 2 + 1
        }));

        const draw = () => {
            const velocity = Math.abs(smoothVelocity.get());
            const quantumLevel = velocity / 2000;

            if (velocity > 500) {
                document.documentElement.setAttribute('data-quantum-mode', 'true');
                setIsGlitching(true);
            } else {
                document.documentElement.setAttribute('data-quantum-mode', 'false');
                setIsGlitching(false);
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (velocity > 100) {
                ctx.strokeStyle = `rgba(0, 242, 255, ${Math.min(quantumLevel, 0.5)})`;
                ctx.lineWidth = 1;

                particles.forEach((p, i) => {
                    p.x += p.vx * (1 + quantumLevel * 10);
                    p.y += p.vy * (1 + quantumLevel * 10);

                    if (p.x < 0) p.x = canvas.width;
                    if (p.x > canvas.width) p.x = 0;
                    if (p.y < 0) p.y = canvas.height;
                    if (p.y > canvas.height) p.y = 0;

                    // Drawing connections
                    particles.slice(i + 1).forEach(p2 => {
                        const dx = p.x - p2.x;
                        const dy = p.y - p2.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        if (distance < 150) {
                            ctx.beginPath();
                            ctx.moveTo(p.x, p.y);
                            ctx.lineTo(p2.x, p2.y);
                            ctx.stroke();
                        }
                    });
                });
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [smoothVelocity]);

    return (
        <motion.div
            style={{ opacity }}
            className="fixed inset-0 pointer-events-none z-[-1] bg-black"
        >
            <canvas ref={canvasRef} className="w-full h-full" />
            {isGlitching && (
                <div className="absolute inset-0 bg-[rgba(0,242,255,0.05)] mix-blend-overlay animate-pulse" />
            )}
        </motion.div>
    );
};

export default QuantumBackground;
