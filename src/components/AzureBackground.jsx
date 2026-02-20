import React, { useEffect, useRef } from "react";

const AzureBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        let animationFrameId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resize);
        resize();

        const clouds = Array.from({ length: 5 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 400 + 300,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            color: Math.random() > 0.5 ? "rgba(14, 165, 233, 0.15)" : "rgba(56, 189, 248, 0.12)",
        }));

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            clouds.forEach((cloud) => {
                cloud.x += cloud.vx;
                cloud.y += cloud.vy;

                if (cloud.x < -cloud.radius) cloud.x = canvas.width + cloud.radius;
                if (cloud.x > canvas.width + cloud.radius) cloud.x = -cloud.radius;
                if (cloud.y < -cloud.radius) cloud.y = canvas.height + cloud.radius;
                if (cloud.y > canvas.height + cloud.radius) cloud.y = -cloud.radius;

                const gradient = ctx.createRadialGradient(
                    cloud.x,
                    cloud.y,
                    0,
                    cloud.x,
                    cloud.y,
                    cloud.radius
                );
                gradient.addColorStop(0, cloud.color);
                gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(cloud.x, cloud.y, cloud.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden">
            <canvas ref={canvasRef} className="w-full h-full bg-white" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#F0F9FF]/20 via-transparent to-[#F0F9FF]/40" />
        </div>
    );
};

export default AzureBackground;
