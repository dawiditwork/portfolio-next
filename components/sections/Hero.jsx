"use client";

import Image from "next/image";
import { motion } from "motion/react";
import AnimatedCounter from "../components/AnimatedCounter";

const TITLE_LINES = ["heroLine1", "heroLine2", "heroLine3"];

export default function Hero({
  heroRef,
  handleHeroPointerMove,
  handleHeroPointerLeave,
  reduceMotion,
  spotlightX,
  spotlightY,
  heroTextY,
  heroTextOpacity,
  c,
  cvFile,
  portraitX,
  heroVisualY,
  heroVisualScale,
  heroVisualOpacity,
  portraitRotateX,
  portraitRotateY,
}) {
  return (
    <section
      className="hero-v3"
      id="home"
      ref={heroRef}
      onPointerMove={handleHeroPointerMove}
      onPointerLeave={handleHeroPointerLeave}
    >
      {/* BACKGROUND */}
      <motion.div
        className="hero-spotlight"
        style={
          reduceMotion
            ? undefined
            : {
                "--spot-x": spotlightX,
                "--spot-y": spotlightY,
              }
        }
        aria-hidden="true"
      />

      <div className="hero-grid-v3" aria-hidden="true" />
      <div className="hero-noise" aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />
      <div className="hero-beam hero-beam-one" aria-hidden="true" />
      <div className="hero-beam hero-beam-two" aria-hidden="true" />

      {/* LEFT TECH RAIL */}
      <motion.div
        className="hero-side-rail"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        aria-hidden="true"
      >
        <span>FRANKOWICZ.DEV</span>
        <i />
        <span>2026</span>
      </motion.div>

      {/* COPY */}
      <motion.div
        className="hero-copy-v3"
        style={
          reduceMotion
            ? undefined
            : {
                y: heroTextY,
                opacity: heroTextOpacity,
              }
        }
      >
        <motion.div
          className="availability-pill"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          <i />
          <span>{c.available}</span>

          <span className="availability-code" aria-hidden="true">
            CH / 01
          </span>
        </motion.div>

        <motion.div
          className="hero-role-row"
          initial={reduceMotion ? false : { opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.16 }}
        >
          <p className="hero-role-v3">{c.heroTop}</p>

          <span className="hero-role-line" aria-hidden="true" />

          <span className="hero-role-status">BUILD · TEST · SHIP</span>
        </motion.div>

        <h1 className="hero-title-v3">
          {TITLE_LINES.map((key, index) => (
            <span className="hero-title-line" key={key}>
              <motion.em
                initial={reduceMotion ? false : { y: "115%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.14 + index * 0.11,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {c[key]}
              </motion.em>
            </span>
          ))}
        </h1>

        <motion.div
          className="hero-bottom-v3"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            delay: 0.66,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="hero-intro-wrap">
            <span className="hero-intro-index">01</span>

            <p>{c.heroIntro}</p>
          </div>

          <div className="hero-buttons-v3">
            <a className="button-v3 primary" href="#projects">
              <span className="button-label">{c.explore}</span>
              <span className="button-icon">↓</span>
            </a>

            <a
              className="button-v3 ghost"
              href={`/${cvFile}`}
              download
            >
              <span className="button-label">{c.download}</span>
              <span className="button-icon">↘</span>
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* PORTRAIT / TECH VISUAL */}
      <motion.aside
        className="hero-visual-v3"
        style={
          reduceMotion
            ? undefined
            : {
                x: portraitX,
                y: heroVisualY,
                scale: heroVisualScale,
                opacity: heroVisualOpacity,
                rotateX: portraitRotateX,
                rotateY: portraitRotateY,
              }
        }
      >
        <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-two" aria-hidden="true" />

        <div className="portrait-tech-frame">
          <div className="portrait-frame-label portrait-frame-label-top">
            <span>01</span>
            <span>PROFILE / ENGINEERING</span>
          </div>

          <div className="portrait-frame-label portrait-frame-label-bottom">
            <span>47.4418° N</span>
            <span>BASEL-LAND · CH</span>
          </div>

          <div className="portrait-v3">
            <Image
              src="/images/dawid-profile.png"
              alt="Dawid Frankowicz"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 900px) 74vw, 34vw"
            />

            <div className="portrait-scan" aria-hidden="true" />
            <div className="portrait-crosshair" aria-hidden="true">
              <i />
              <i />
            </div>

            <div className="portrait-status">
              <span className="portrait-status-dot" />
              SYSTEM ONLINE
            </div>
          </div>

          <motion.div
            className="floating-chip chip-one"
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, -9, 0],
                    rotate: [-2, 1, -2],
                  }
            }
            transition={{
              duration: 4.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <small>CORE</small>
            <strong>React + Next.js</strong>
            <span>Frontend systems</span>
          </motion.div>

          <motion.div
            className="floating-chip chip-two"
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, 11, 0],
                    rotate: [1, -2, 1],
                  }
            }
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <small>BACKEND</small>
            <strong>Node + PostgreSQL</strong>
            <span>APIs · data · auth</span>
          </motion.div>

          <motion.div
            className="floating-chip chip-three"
            animate={
              reduceMotion
                ? undefined
                : {
                    x: [0, 8, 0],
                    y: [0, -5, 0],
                  }
            }
            transition={{
              duration: 6.1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <small>QUALITY</small>
            <strong>Tests + CI</strong>
            <span>Ship with confidence</span>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual-caption"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95 }}
        >
          <span>ENGINEERING MODE</span>
          <span>ACTIVE</span>
        </motion.div>
      </motion.aside>

      {/* STATS */}
      <motion.div
        className="hero-stats-v3"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.95,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="hero-stat">
          <span className="hero-stat-index">01</span>

          <div>
            <AnimatedCounter value={3} pad />
            <span>{c.statProjects}</span>
          </div>
        </div>

        <div className="hero-stat">
          <span className="hero-stat-index">02</span>

          <div>
            <AnimatedCounter value={80} suffix="+" />
            <span>{c.statTests}</span>
          </div>
        </div>

        <div className="hero-stat">
          <span className="hero-stat-index">03</span>

          <div>
            <strong>FULL STACK</strong>
            <span>{c.statFlow}</span>
          </div>
        </div>
      </motion.div>

      <a className="hero-scroll-v3" href="#about">
        <span>{c.scroll}</span>
        <i />
      </a>
    </section>
  );
}