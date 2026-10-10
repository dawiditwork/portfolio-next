
"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";

const reveal = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Contact({
  c,
  submitContact,
  formState,
  feedback,
}) {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const megaY = useTransform(
    scrollYProgress,
    [0, 1],
    [65, 0]
  );

  const megaOpacity = useTransform(
    scrollYProgress,
    [0.35, 0.95],
    [0.12, 0.75]
  );

  return (
    <section
      ref={sectionRef}
      className="contact-v3"
      id="contact"
    >
      <div
        className="contact-orbit one"
        aria-hidden="true"
      />

      <div
        className="contact-orbit two"
        aria-hidden="true"
      />

      <div className="contact-glow" aria-hidden="true" />

      <div className="section-shell contact-shell">
        <motion.div
          className="section-kicker-v3 light"
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={reveal}
          transition={{ duration: 0.6 }}
        >
          <span>04</span>
          <p>{c.contactEyebrow}</p>
        </motion.div>

        <div className="contact-heading-v3">
          <motion.h2
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {c.contactTitle1}
            <br />
            <em>{c.contactTitle2}</em>
          </motion.h2>

          <motion.p
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
          >
            {c.contactBody}
          </motion.p>
        </div>

        <motion.form
          className="contact-form-v3"
          onSubmit={submitContact}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={reveal}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <label className="contact-field">
            <span>{c.name}</span>

            <input
              name="name"
              autoComplete="name"
              required
              maxLength={80}
              placeholder={c.yourName}
            />
          </label>

          <label className="contact-field">
            <span>{c.email}</span>

            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={160}
              placeholder="you@example.com"
            />
          </label>

          <label className="contact-field wide">
            <span>{c.message}</span>

            <textarea
              name="message"
              required
              minLength={10}
              maxLength={4000}
              rows={4}
              placeholder={c.messagePlaceholder}
            />
          </label>

          <div className="contact-submit-row">
            <motion.button
              className="button-v3 contact-button"
              type="submit"
              disabled={formState === "loading"}
              whileHover={
                reduceMotion || formState === "loading"
                  ? undefined
                  : { y: -3, scale: 1.015 }
              }
              whileTap={
                reduceMotion || formState === "loading"
                  ? undefined
                  : { scale: 0.97 }
              }
            >
              <span>
                {formState === "loading"
                  ? c.sending
                  : c.send}
              </span>

              <span
                className="contact-button-arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </motion.button>

            <p
              className={`form-feedback-v3 ${formState}`}
              aria-live="polite"
              role={formState === "error" ? "alert" : undefined}
            >
              {feedback}
            </p>
          </div>
        </motion.form>

        <div className="contact-finale">
          <div className="contact-finale-line">
            <span>DF / DEV</span>
            <span>DESIGN · ENGINEERING · DELIVERY</span>
          </div>

          <motion.div
            className="contact-mega"
            style={
              reduceMotion
                ? undefined
                : {
                    y: megaY,
                    opacity: megaOpacity,
                  }
            }
            aria-hidden="true"
          >
            LET&apos;S BUILD.
          </motion.div>

          <span
            className="contact-finale-light"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
