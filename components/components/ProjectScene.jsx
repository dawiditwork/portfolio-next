"use client";

import Image from "next/image";
import { useRef, useSyncExternalStore } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

import ProjectLiveVisual from "./ProjectLiveVisual";
import ProjectVideo from "./ProjectVideo";

const ACCENTS = [
  {
    primary: "#76d4ff",
    soft: "rgba(118, 212, 255, 0.15)",
  },
  {
    primary: "#77e4a3",
    soft: "rgba(119, 228, 163, 0.14)",
  },
  {
    primary: "#ff5f32",
    soft: "rgba(255, 95, 50, 0.14)",
  },
];

// Subscribe only to viewport changes, not every scroll event.
const DESKTOP_QUERY = "(min-width: 901px) and (hover: hover) and (pointer: fine)";

function subscribeDesktop(callback) {
  const query = window.matchMedia(DESKTOP_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function isDesktop() {
  return window.matchMedia(DESKTOP_QUERY).matches;
}

function serverDesktop() {
  return false;
}

export default function ProjectScene(props) {
  const reduceMotion = useReducedMotion();
  const desktop = useSyncExternalStore(subscribeDesktop, isDesktop, serverDesktop);

  if (desktop && !reduceMotion) {
    return <AnimatedProjectScene {...props} reduceMotion={false} />;
  }

  return <ProjectSceneContent {...props} reduceMotion={reduceMotion} />;
}

function AnimatedProjectScene(props) {
  const sectionRef = useRef(null);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  const smoothTiltX = useSpring(tiltX, {
    stiffness: 170,
    damping: 20,
    mass: 0.45,
  });

  const smoothTiltY = useSpring(tiltY, {
    stiffness: 170,
    damping: 20,
    mass: 0.45,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["7%", "-7%"]);
  const imageScale = useTransform(
    scrollYProgress,
    [0.08, 0.5, 0.92],
    [0.91, 1, 0.95],
  );
  const imageRotate = useTransform(
    scrollYProgress,
    [0.08, 0.5, 0.92],
    [-3.5, 0, 2.5],
  );
  const copyY = useTransform(scrollYProgress, [0, 0.45, 1], [65, 0, -35]);
  const glowOpacity = useTransform(
    scrollYProgress,
    [0.08, 0.5, 0.92],
    [0.12, 0.78, 0.14],
  );
  const ghostX = useTransform(scrollYProgress, [0, 1], [70, -40]);

  function handleProjectPointerMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    tiltY.set(x * 7);
    tiltX.set(y * -5);
  }

  function handleProjectPointerLeave() {
    tiltX.set(0);
    tiltY.set(0);
  }

  return (
    <ProjectSceneContent
      {...props}
      sectionRef={sectionRef}
      transforms={{
        imageY,
        imageScale,
        imageRotate,
        copyY,
        glowOpacity,
        ghostX,
        smoothTiltX,
        smoothTiltY,
      }}
      onPointerMove={handleProjectPointerMove}
      onPointerLeave={handleProjectPointerLeave}
    />
  );
}

function ProjectSceneContent({
  project,
  language,
  labels,
  index = 0,
  reduceMotion = false,
  sectionRef,
  transforms,
  onPointerMove,
  onPointerLeave,
}) {
  const animated = Boolean(transforms);
  const accent = ACCENTS[index % ACCENTS.length];
  const hostname = project.href
    .replace("https://", "")
    .replace("http://", "")
    .replace(/\/$/, "");

  return (
    <article
      className={`project-scene project-scene-${project.number}`}
      ref={sectionRef}
      data-project={project.number}
      style={{
        "--project-accent": accent.primary,
        "--project-accent-soft": accent.soft,
      }}
    >
      <div className="project-sticky">
        <motion.span
          className="project-ghost-number"
          style={animated ? { x: transforms.ghostX } : undefined}
          aria-hidden="true"
        >
          {project.number}
        </motion.span>

        <motion.div
          className="project-ambient"
          style={animated ? { opacity: transforms.glowOpacity } : undefined}
          aria-hidden="true"
        />

        <div className="project-system-grid" aria-hidden="true" />

        <div className="project-stage">
          {/* MEDIA */}
          <motion.div
            className="project-media-wrap"
            onPointerMove={onPointerMove}
            onPointerLeave={onPointerLeave}
            style={
              animated
                ? {
                    y: transforms.imageY,
                    scale: transforms.imageScale,
                    rotateZ: transforms.imageRotate,
                    rotateX: transforms.smoothTiltX,
                    rotateY: transforms.smoothTiltY,
                  }
                : undefined
            }
          >
            <div className="project-media-index" aria-hidden="true">
              <span>CASE</span>
              <strong>{project.number}</strong>
            </div>

            <a
              className="project-media"
              href={project.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${labels.projectOpen}: ${project.title}`}
            >
              <div className="project-browser-bar">
                <div className="project-browser-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <em>{hostname}</em>
                <span className="project-browser-status">LIVE</span>
              </div>

              <div className="project-image-shell">
                {index === 0 || index === 1 ? (
                  <ProjectVideo
                    src={
                      index === 0
                        ? "/images/ai-toolkit-showcase.mp4"
                        : "/images/myhikes-showcase.mp4"
                    }
                    poster={project.image}
                    title={project.title}
                    reducedMotion={reduceMotion}
                  />
                ) : (
                  <>
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      width={1400}
                      height={900}
                      sizes="(max-width: 900px) 92vw, 58vw"
                    />
                    <ProjectLiveVisual
                      index={index}
                      reducedMotion={reduceMotion}
                    />
                  </>
                )}

                <div className="project-screen-grid" aria-hidden="true" />
                <span className="project-media-shine" aria-hidden="true" />

                <span className="project-open-overlay">
                  <span>{labels.projectView}</span>
                  <strong>↗</strong>
                </span>
              </div>
            </a>

            <div className="project-media-footer">
              <span>BUILD / {String(index + 1).padStart(2, "0")}</span>
              <span>PRODUCTION SYSTEM</span>
            </div>
          </motion.div>

          {/* DETAILS */}
          <motion.div
            className="project-details"
            style={animated ? { y: transforms.copyY } : undefined}
          >
            <motion.div
              className="project-meta"
              initial={!animated ? false : { opacity: 0, x: 28 }}
              whileInView={animated ? { opacity: 1, x: 0 } : undefined}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55 }}
            >
              <span>{project.number}</span>
              <i />
              <span>{project.kicker}</span>
            </motion.div>

            <motion.h3
              initial={!animated ? false : { opacity: 0, y: 28 }}
              whileInView={animated ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.65,
                delay: 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {project.title}
            </motion.h3>

            <motion.p
              className="project-description"
              initial={!animated ? false : { opacity: 0, y: 20 }}
              whileInView={animated ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: 0.12 }}
            >
              {project.description[language]}
            </motion.p>

            <div className="project-section-label">
              <span>METRICS</span>
              <i />
            </div>

            <div className="project-stats">
              {project.stats.map(([value, label], statIndex) => (
                <motion.div
                  key={`${project.title}-${label}`}
                  initial={!animated ? false : { opacity: 0, y: 18 }}
                  whileInView={animated ? { opacity: 1, y: 0 } : undefined}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: 0.15 + statIndex * 0.06 }}
                >
                  <small>0{statIndex + 1}</small>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </motion.div>
              ))}
            </div>

            <div className="project-section-label">
              <span>ENGINEERING</span>
              <i />
            </div>

            <div className="project-highlights-v3">
              {project.highlights[language].map((highlight, highlightIndex) => (
                <motion.span
                  key={highlight}
                  initial={!animated ? false : { opacity: 0, x: 18 }}
                  whileInView={animated ? { opacity: 1, x: 0 } : undefined}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ delay: 0.12 + highlightIndex * 0.045 }}
                >
                  <i>+</i>
                  {highlight}
                </motion.span>
              ))}
            </div>

            <div className="project-section-label">
              <span>STACK</span>
              <i />
            </div>

            <div className="project-stack-v3">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <a
              className="project-link"
              href={project.href}
              target="_blank"
              rel="noreferrer"
            >
              <span className="project-link-label">{labels.projectView}</span>
              <span className="project-link-arrow">↗</span>
            </a>
          </motion.div>
        </div>

        <div className="project-edge-label" aria-hidden="true">
          <span>PROJECT / {project.number}</span>
          <i />
          <span>DF.DEV</span>
        </div>
      </div>
    </article>
  );
}
