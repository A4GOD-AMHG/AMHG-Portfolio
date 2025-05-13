"use client";

import { useEffect } from "react";
import styles from "./AnimatedBackground.module.css";

export const AnimatedBackground = () => {
    useEffect(() => {
        let animationFrame: number;
        const interBubble = document.querySelector<HTMLDivElement>(".interactive")!;

        let curX = 0;
        let curY = 0;
        let tgX = 0;
        let tgY = 0;

        const move = () => {
            curX += (tgX - curX) / 25;  // Slower follow speed
            curY += (tgY - curY) / 25;
            interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
            animationFrame = requestAnimationFrame(move);
        };


        const handleMouseMove = (event: MouseEvent) => {
            tgX = event.clientX;
            tgY = event.clientY;
        };

        move();
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <div className={`fixed inset-0 -z-50`}>
            <svg aria-hidden="true" className="absolute inset-0 w-0 h-0">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 24 -10"
                            result="goo"
                        />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>
            <div className={`absolute inset-0 ${styles.gradientsContainer}`}>
                {/* Elementos existentes */}
                <div className={`${styles.g1} ${styles.figure}`}></div>
                <div className={`${styles.g2} ${styles.figure}`}></div>
                <div className={`${styles.g3} ${styles.figure}`}></div>
                <div className={`${styles.g4} ${styles.figure}`}></div>
                <div className={`${styles.g5} ${styles.figure}`}></div>
                <div className={`${styles.g6} ${styles.figure}`}></div>
                <div className={`${styles.g7} ${styles.figure}`}></div>
                <div className={`${styles.interactive} interactive`}></div>
            </div>
        </div>
        // <div className={`absolute inset-0 ${styles.gradientsContainer}`}>
        //     <div className={styles.g1}></div>
        //     <div className={styles.g2}></div>
        //     <div className={styles.g3}></div>
        //     <div className={styles.g4}></div>
        //     <div className={styles.g5}></div>
        //     <div className={`${styles.interactive} interactive`}></div>
        // </div>
        //</div>
    );
};