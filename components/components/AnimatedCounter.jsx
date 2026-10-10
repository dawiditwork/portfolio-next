"use client";
import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
export default function AnimatedCounter({ value, suffix = "", pad = false }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.8 });
    const reduceMotion = useReducedMotion();
    const [display, setDisplay] = useState(0);
    useEffect(() => {
        if (!inView)
            return;
        if (reduceMotion) {
            const frame = requestAnimationFrame(() => setDisplay(value));
            return () => cancelAnimationFrame(frame);
        }
        let frame;
        let startTime;
        const tick = (time) => {
            if (!startTime)
                startTime = time;
            const progress = Math.min((time - startTime) / 1150, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(value * eased));
            if (progress < 1) {
                frame = requestAnimationFrame(tick);
            }
        };
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [inView, reduceMotion, value]);
    const output = pad ? String(display).padStart(2, "0") : String(display);
    return (<strong ref={ref}>

      {output}

      {suffix}

    </strong>);
}
