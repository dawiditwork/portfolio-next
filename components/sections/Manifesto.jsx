"use client";

import { motion } from "motion/react";

export default function Manifesto({
  manifestoRef,
  c,
  reduceMotion,
  giantWordsX,
}) {
  return (
    <section
      className="manifesto section-v3"
      id="about"
      ref={manifestoRef}
    >
      <div className="section-shell">
        <div className="section-kicker-v3">
          <span>01</span>
          <p>{c.aboutEyebrow}</p>
        </div>

        <div className="manifesto-heading">
          <motion.h2
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 80,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {c.aboutTitle1}

            <br />

            <em>{c.aboutTitle2}</em>
          </motion.h2>

          <motion.p
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 35,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              delay: 0.12,
            }}
          >
            {c.aboutBody}
          </motion.p>
        </div>

        <div className="engineering-cards">
          {[
            ["01", c.build, c.buildText, "⌘"],
            ["02", c.test, c.testText, "✓"],
            ["03", c.ship, c.shipText, "↗"],
          ].map(([number, title, text, icon], index) => (
            <motion.article
              key={title}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 45,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.35,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
              }}
            >
              <div>
                <span>{number}</span>
                <i>{icon}</i>
              </div>

              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="giant-words"
          aria-hidden="true"
          style={
            reduceMotion
              ? undefined
              : {
                  x: giantWordsX,
                }
          }
        >
          <span>BUILD</span>
          <span>TEST</span>
          <span>SHIP</span>
        </motion.div>
      </div>
    </section>
  );
}