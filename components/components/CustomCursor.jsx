"use client";
import { motion } from "motion/react";
export default function CustomCursor({ cursorActive, cursorVisible, cursorSpringX, cursorSpringY }) {
    return (<motion.div className={`cursor-v3 ${cursorActive ? "active" : ""}`} aria-hidden="true" style={{
            x: cursorSpringX,
            y: cursorSpringY,
        }} animate={{
            opacity: cursorVisible ? 1 : 0,
            scale: cursorActive ? 1.7 : 1,
        }} transition={{
            opacity: {
                duration: 0.16,
            },
            scale: {
                duration: 0.18,
            },
        }}>

            <span />

          </motion.div>);
}
