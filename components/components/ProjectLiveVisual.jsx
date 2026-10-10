"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const aiTools = [
  { icon: "✦", name: "AI EDIT", status: "READY" },
  { icon: "◈", name: "REMOVE BG", status: "ACTIVE" },
  { icon: "↗", name: "UPSCALE", status: "4×" },
];

const routePath = "M 35 151 C 95 151, 78 72, 146 101 S 226 34, 307 52";

export default function ProjectLiveVisual({ index = 0, reducedMotion = false }) {
  const containerRef = useRef(null);
  const visible = useInView(containerRef, { amount: 0.25, margin: "-10% 0px -10% 0px" });
  const active = visible && !reducedMotion;

  return (
    <div
      ref={containerRef}
      className={`plv plv--${index === 0 ? "ai" : index === 1 ? "hikes" : "blog"}`}
      aria-hidden="true"
    >
      <div className="plv-vignette" />
      <div className="plv-grid" />

      {index === 0 && (
        <>
          <div className="plv-ai-status"><i /> AI ENGINE / ONLINE</div>
          <div className="plv-ai-tools">
            {aiTools.map((tool, i) => (
              <motion.div
                className="plv-tool"
                key={tool.name}
                initial={false}
                animate={active ? { y: [0, -5 - i * 2, 0] } : { y: 0 }}
                transition={{ duration: 3.3 + i * 0.5, repeat: active ? Infinity : 0, ease: "easeInOut", delay: i * 0.2 }}
              >
                <span className="plv-tool-icon">{tool.icon}</span>
                <span className="plv-tool-label">{tool.name}</span>
                <small>{tool.status}</small>
              </motion.div>
            ))}
          </div>
          <div className="plv-ai-process">
            <div className="plv-process-top"><span>IMAGE PIPELINE</span><b>01 / 03</b></div>
            <div className="plv-process-track">
              <motion.span
                initial={false}
                animate={active ? { scaleX: [0.06, 1, 1, 0.06] } : { scaleX: 0.7 }}
                transition={{ duration: 5.8, repeat: active ? Infinity : 0, times: [0, 0.6, 0.8, 1], ease: "easeInOut" }}
              />
            </div>
            <div className="plv-process-bottom"><span>ANALYSING PIXELS</span><strong>✦</strong></div>
            <motion.div
              className="plv-process-scan"
              initial={false}
              animate={active ? { x: ["-150%", "450%"] } : { x: "-150%" }}
              transition={{ duration: 5.8, repeat: active ? Infinity : 0, ease: "easeInOut", repeatDelay: 0.6 }}
            />
          </div>
        </>
      )}

      {index === 1 && (
        <>
          <div className="plv-hikes-caption"><i /> EXPLORATION / LIVE ROUTE</div>
          <div className="plv-route-window">
            <div className="plv-route-heading">TRAIL TRACKER <span>03 / WAYPOINTS</span></div>
            <svg className="plv-route" viewBox="0 0 342 185" preserveAspectRatio="xMidYMid meet">
              <path d={routePath} className="plv-route-back" />
              <motion.path
                d={routePath}
                className="plv-route-line"
                initial={false}
                animate={active ? { pathLength: [0, 1, 1] } : { pathLength: 1 }}
                transition={{ duration: 5, times: [0, 0.82, 1], repeat: active ? Infinity : 0, repeatDelay: 0.7, ease: "easeInOut" }}
              />
              {[[35, 151], [146, 101], [307, 52]].map(([cx, cy], i) => (
                <g key={i}>
                  <motion.circle
                    cx={cx} cy={cy} r="10"
                    fill="none" stroke="currentColor" strokeWidth="1.5"
                    initial={false}
                    animate={active ? { r: [7, 18], opacity: [0.85, 0] } : { r: 10, opacity: 0.45 }}
                    transition={{ duration: 2.2, repeat: active ? Infinity : 0, delay: i * 0.65 }}
                  />
                  <circle cx={cx} cy={cy} r="4" fill="#a0ffdb" />
                </g>
              ))}
            </svg>
            <div className="plv-route-footer"><span>ROUTE PREVIEW</span><span className="plv-live-dot">● CONNECTED</span></div>
          </div>
          <motion.div className="plv-hikes-tag" initial={false} animate={active ? { y: [0, -6, 0] } : { y: 0 }} transition={{ duration: 4.4, repeat: active ? Infinity : 0, ease: "easeInOut" }}>⌖ &nbsp; EXPLORE MORE</motion.div>
        </>
      )}

      {index >= 2 && (
        <>
          <div className="plv-blog-caption">DEV JOURNAL <span>● AUTOSAVED</span></div>
          <motion.div
            className="plv-editor"
            initial={false}
            animate={active ? { y: [0, -6, 0] } : { y: 0 }}
            transition={{ duration: 4.8, repeat: active ? Infinity : 0, ease: "easeInOut" }}
          >
            <div className="plv-editor-head"><span><i /><i /><i /></span><small>CONTENT STUDIO</small></div>
            <div className="plv-editor-body">
              <span className="plv-editor-overline">NEW / ARTICLE</span>
              <strong>Building with React<br />&amp; Next.js<span className="plv-caret">▍</span></strong>
              <span className="plv-editor-rule" />
              <span className="plv-editor-rule plv-editor-rule--short" />
            </div>
            <div className="plv-editor-foot"><span>MDX / DRAFT</span><b>✓ SAVED</b></div>
          </motion.div>
          <motion.div
            className="plv-publish"
            initial={false}
            animate={active ? { x: [0, 5, 0], y: [0, -5, 0] } : { x: 0, y: 0 }}
            transition={{ duration: 3.8, repeat: active ? Infinity : 0, ease: "easeInOut" }}
          >
            <span>POST / 01</span><strong>READY TO PUBLISH ↗</strong>
          </motion.div>
        </>
      )}
      <span className="plv-edge plv-edge--tl" />
      <span className="plv-edge plv-edge--br" />
    </div>
  );
}
