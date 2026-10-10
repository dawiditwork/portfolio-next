"use client";

import { motion } from "motion/react";
import { useState } from "react";
import ExperienceMobile from "../components/ExperienceMobile";

const UI = {
  en: {
    eyebrow: "03 / BACKGROUND",
    title: "Experience & Education.",
    subtitle:
      "Formal Computer Science education and professional experience across Europe — the background behind the software I build today.",

    experience: "PROFESSIONAL EXPERIENCE",
    education: "ACADEMIC RECORD",
    development: "DEVELOPMENT",
    operations: "OPERATIONS",
    current: "CURRENT",

    experienceTitle: "Experience",
    experienceAccent: "in practice.",
    experienceText:
      "Development experience combined with professional responsibility across different roles and countries.",

    degreeLabel: "ENGINEERING DEGREE",
    degreeTitle: "Computer Science",
    degreeCompleted: "DEGREE COMPLETED",
    qualification: "Bachelor of Engineering",
    specialization: "IT Technologies",

    universityLabel: "UNIVERSITY",
    university: "Jan Kochanowski University",
    universityPlace: "Kielce · Poland",
    specializationLabel: "SPECIALIZATION",
    qualificationLabel: "QUALIFICATION",
    fieldLabel: "FIELD",
    statusLabel: "STATUS",

    diploma: "VIEW REDACTED DIPLOMA",
    technicalLabel: "PRIOR TECHNICAL EDUCATION",
    technicalFallback: "Computer Science · Computer Graphics",

    closeBook: "Close the book",
    openBook: "Open the book",

    coverKicker: "NEXT CHAPTER",
    coverTitle1: "SOFTWARE",
    coverTitle2: "ENGINEERING",
    coverText:
      "The education is complete. The experience is real. The direction is clear: building reliable software professionally.",

    build: "BUILD",
    buildText: "Production software",
    grow: "GROW",
    growText: "Inside a strong engineering team",
    own: "OWN",
    ownText: "From idea to deployment",
  },

  de: {
    eyebrow: "03 / HINTERGRUND",
    title: "Erfahrung & Ausbildung.",
    subtitle:
      "Abgeschlossene Informatik-Ausbildung und Berufserfahrung in Europa — die Grundlage hinter der Software, die ich heute entwickle.",

    experience: "BERUFSERFAHRUNG",
    education: "AKADEMISCHER WERDEGANG",
    development: "ENTWICKLUNG",
    operations: "BERUFSPRAXIS",
    current: "AKTUELL",

    experienceTitle: "Erfahrung",
    experienceAccent: "in der Praxis.",
    experienceText:
      "Entwicklungserfahrung kombiniert mit beruflicher Verantwortung in unterschiedlichen Rollen und Ländern.",

    degreeLabel: "INGENIEURSTUDIUM",
    degreeTitle: "Informatik",
    degreeCompleted: "STUDIUM ABGESCHLOSSEN",
    qualification: "Bachelor of Engineering",
    specialization: "IT Technologies",

    universityLabel: "HOCHSCHULE",
    university: "Jan Kochanowski University",
    universityPlace: "Kielce · Polen",
    specializationLabel: "VERTIEFUNG",
    qualificationLabel: "ABSCHLUSS",
    fieldLabel: "FACHRICHTUNG",
    statusLabel: "STATUS",

    diploma: "DIPLOM ANSEHEN",
    technicalLabel: "VORHERIGE TECHNISCHE AUSBILDUNG",
    technicalFallback: "Informatik · Computergrafik",

    closeBook: "Buch schließen",
    openBook: "Buch öffnen",

    coverKicker: "NÄCHSTES KAPITEL",
    coverTitle1: "SOFTWARE",
    coverTitle2: "ENGINEERING",
    coverText:
      "Die Ausbildung ist abgeschlossen. Die Erfahrung ist da. Die Richtung ist klar: professionelle Softwareentwicklung.",

    build: "BUILD",
    buildText: "Produktionssoftware",
    grow: "GROW",
    growText: "In einem starken Engineering-Team",
    own: "OWN",
    ownText: "Von Idee bis Deployment",
  },
};

function Job({
  years,
  title,
  company,
  description,
  type,
  current,
  development = false,
}) {
  return (
    <article className={`cvbook-job ${development ? "cvbook-job--dev" : ""}`}>
      <div className="cvbook-job__years">{years}</div>

      <div className="cvbook-job__body">
        <div className="cvbook-job__heading">
          <h4>{title}</h4>

          {current && (
            <span className="cvbook-job__current">
              <i />
              {current}
            </span>
          )}
        </div>

        <strong>{company}</strong>
        <p>{description}</p>
      </div>

      <span className="cvbook-job__type">{type}</span>
    </article>
  );
}

export default function Experience({ c, language = "en" }) {
  const t = UI[language] ?? UI.en;

  const [closed, setClosed] = useState(false);
  const [handGrabbing, setHandGrabbing] = useState(false);
  const [handDirection, setHandDirection] = useState("grab");

  const toggleBook = () => {
    if (handGrabbing) return;

    // OPENING BOOK
    if (closed) {
      setHandDirection("release");
      setHandGrabbing(true);

      window.setTimeout(() => {
        setClosed(false);
      }, 260);

      window.setTimeout(() => {
        setHandGrabbing(false);
      }, 850);

      return;
    }

    // CLOSING BOOK
    setHandDirection("grab");
    setHandGrabbing(true);

    window.setTimeout(() => {
      setClosed(true);
    }, 260);

    window.setTimeout(() => {
      setHandGrabbing(false);
    }, 850);
  };

  const handleKeyboardToggle = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleBook();
    }
  };

  const handleCoverKeyboard = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleBook();
    }
  };

  return (
    <section className="cvbook-section" id="experience">
      <div className="cvbook-background-grid" aria-hidden="true" />

      <div className="section-shell">
        <div className="cvbook-intro">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>{t.eyebrow}</span>
            <h2>{t.title}</h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            {t.subtitle}
          </motion.p>
        </div>

        <div className={`cvbook-stage ${closed ? "is-closed" : ""}`}>
          <div className="cvbook-floor-shadow" aria-hidden="true" />

          <motion.div
            className="cvbook"
            animate={{
              x: closed ? "25%" : "0%",
              y: closed ? 10 : 0,
              scale: closed ? 0.975 : 1,
            }}
            transition={{
              duration: 1.1,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            {/* LEFT PAGE — EXPERIENCE */}
            <div className="cvbook-page cvbook-page--left">
              <div className="cvbook-paper-grain" aria-hidden="true" />

              <div className="cvbook-page__inner">
                <header className="cvbook-page-header">
                  <span>01</span>
                  <strong>{t.experience}</strong>
                  <i />
                </header>

                <div className="cvbook-experience-hero">
                  <span>2019 — PRESENT</span>

                  <h3>
                    {t.experienceTitle}
                    <br />
                    <em>{t.experienceAccent}</em>
                  </h3>

                  <p>{t.experienceText}</p>
                </div>

                <div className="cvbook-jobs">
                  <Job
                    years={`2026 — ${c.present}`}
                    title={c.freelanceTitle}
                    company={c.freelanceCompany}
                    description={c.freelanceText}
                    type={t.development}
                    current={t.current}
                    development
                  />

                  <Job
                    years="2019"
                    title={c.wordpressTitle}
                    company={c.wordpressCompany}
                    description={c.wordpressText}
                    type={t.development}
                    development
                  />

                  <Job
                    years={`03.2025 — ${c.present}`}
                    title={c.driverTitle}
                    company={c.murpf}
                    description={c.driverText}
                    type={t.operations}
                    current={t.current}
                  />

                  <Job
                    years="2021 — 2024"
                    title={c.driverTitle}
                    company={c.eckert}
                    description={c.driverText}
                    type={t.operations}
                  />

                  <Job
                    years="2020 — 2021"
                    title={c.coordinatorTitle}
                    company={c.coordinatorCompany}
                    description={c.coordinatorText}
                    type={t.operations}
                  />
                </div>

                <footer className="cvbook-page-footer">
                  <span>POLAND · NETHERLANDS · SWITZERLAND</span>
                  <strong>01</strong>
                </footer>
              </div>

              <div
                className="cvbook-page-stack cvbook-page-stack--left"
                aria-hidden="true"
              />
            </div>

            {/* RIGHT LEAF — EDUCATION FRONT / COVER BACK */}
            <motion.div
              className="cvbook-leaf"
              animate={{
                rotateY: closed ? -180 : 0,
              }}
              transition={{
                duration: 1.18,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              {/* FRONT: EDUCATION */}
              <div className="cvbook-face cvbook-face--education">
                <div className="cvbook-paper-grain" aria-hidden="true" />

                <div className="cvbook-page__inner">
                  <header className="cvbook-page-header">
                    <span>02</span>
                    <strong>{t.education}</strong>
                    <i />
                  </header>

                  <div className="cvbook-academic">
                    <div className="cvbook-academic__top">
                      <span>{t.university}</span>
                      <strong>2015 — 2019</strong>
                    </div>

                    <div className="cvbook-academic__seal" aria-hidden="true">
                      <span>BACHELOR OF</span>
                      <strong>ENGINEERING</strong>
                      <em>2019</em>
                    </div>

                    <div className="cvbook-academic__main">
                      <span className="cvbook-academic__degree-label">
                        {t.degreeLabel}
                      </span>

                      <span className="cvbook-academic__complete">
                        <i />
                        {t.degreeCompleted}
                      </span>

                      <h3>{t.degreeTitle}</h3>

                      <div
                        className="cvbook-academic__rule"
                        aria-hidden="true"
                      >
                        <span />
                        <i />
                        <span />
                      </div>

                      <div className="cvbook-academic__university">
                        <span>{t.universityLabel}</span>
                        <strong>{t.university}</strong>
                        <p>{t.universityPlace}</p>
                      </div>

                      <div className="cvbook-academic__specialization">
                        <span>{t.specializationLabel}</span>
                        <strong>{t.specialization}</strong>
                      </div>

                      <a
                        className="cvbook-academic__diploma"
                        href="/images/diploma-redacted.png"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>{t.diploma}</span>
                        <strong>↗</strong>
                      </a>
                    </div>

                    <div className="cvbook-academic__meta">
                      <div>
                        <span>{t.qualificationLabel}</span>
                        <strong>{t.qualification}</strong>
                      </div>

                      <div>
                        <span>{t.fieldLabel}</span>
                        <strong>{t.degreeTitle}</strong>
                      </div>

                      <div>
                        <span>{t.statusLabel}</span>
                        <strong>{t.degreeCompleted} · 2019</strong>
                      </div>
                    </div>
                  </div>

                  <div className="cvbook-technical">
                    <div>
                      <span>{t.technicalLabel}</span>
                      <h4>{c.school}</h4>
                      <p>{c.schoolText || t.technicalFallback}</p>
                    </div>

                    <strong>2011 — 2015</strong>
                  </div>

                  <footer className="cvbook-page-footer">
                    <span>FORMAL EDUCATION · COMPUTER SCIENCE</span>
                    <strong>02</strong>
                  </footer>
                </div>

                <div className="cvbook-page-curl" aria-hidden="true" />
                <div
                  className="cvbook-page-stack cvbook-page-stack--right"
                  aria-hidden="true"
                />
              </div>

              {/* BACK: REAL COVER */}
              <div
                className="cvbook-face cvbook-face--cover"
                role="button"
                tabIndex={closed ? 0 : -1}
                aria-label={t.openBook}
                title={t.openBook}
                onClick={() => setClosed(false)}
                onKeyDown={handleCoverKeyboard}
              >
                <div className="cvbook-cover-texture" aria-hidden="true" />

                <div className="cvbook-cover-frame">
                  <div className="cvbook-cover-top">
                    <span>DF / DEV</span>
                    <strong>2027 →</strong>
                  </div>

                  <div className="cvbook-cover-main">
                    <span>{t.coverKicker}</span>

                    <h3>
                      {t.coverTitle1}
                      <br />
                      {t.coverTitle2}
                    </h3>

                    <p>{t.coverText}</p>
                  </div>

                  <div className="cvbook-cover-goals">
                    <div>
                      <strong>{t.build}</strong>
                      <span>{t.buildText}</span>
                    </div>

                    <div>
                      <strong>{t.grow}</strong>
                      <span>{t.growText}</span>
                    </div>

                    <div>
                      <strong>{t.own}</strong>
                      <span>{t.ownText}</span>
                    </div>
                  </div>

                  <div className="cvbook-cover-bottom">
                    <span>DAWID FRANKOWICZ</span>
                    <strong>{t.openBook} ↗</strong>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="cvbook-spine"
              aria-hidden="true"
              animate={{ opacity: closed ? 0 : 1 }}
              transition={{ duration: 0.2, delay: closed ? 0.72 : 0 }}
            >
              <i />
            </motion.div>
          </motion.div>

          {/* REALISTIC HAND CONTROL */}
          <motion.div
            className={`cvbook-hand-control ${closed ? "is-closed" : ""}`}
            role="button"
            tabIndex={0}
            aria-label={closed ? t.openBook : t.closeBook}
            title={closed ? t.openBook : t.closeBook}
            onClick={toggleBook}
            onKeyDown={handleKeyboardToggle}
            whileTap={{ scale: 0.97 }}
          >
            <motion.div
              className={`cvbook-real-hand ${
                handGrabbing
                  ? handDirection === "release"
                    ? "is-releasing"
                    : "is-grabbing"
                  : ""
              } ${closed ? "is-reversed" : ""}`}
              animate={
                handGrabbing
                  ? {
                      x: [-1, -9, -16, -13],
                      y: [0, 0, 2, 1],
                      rotate: [0, -3, -8, -6],
                      scaleX: [1, 0.98, 0.91, 0.94],
                      scaleY: [1, 1.01, 0.96, 0.98],
                    }
                  : {
                      x: 0,
                      y: [0, -1.5, 0],
                      rotate: 0,
                      scaleX: 1,
                      scaleY: 1,
                    }
              }
              transition={
                handGrabbing
                  ? {
                      duration: 0.65,
                      times: [0, 0.3, 0.72, 1],
                      ease: [0.22, 1, 0.36, 1],
                    }
                  : {
                      y: {
                        duration: 2.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }
              }
            >
              <img
                className="hand-open"
                src="/images/hand-real.webp"
                alt=""
                draggable={false}
              />

              <img
                className="hand-half"
                src="/images/hand-half.webp"
                alt=""
                draggable={false}
              />

              <img
                className="hand-grab"
                src="/images/hand-grab.webp"
                alt=""
                draggable={false}
              />
            </motion.div>

            <span className="cvbook-hand-glow" />
          </motion.div>
        </div>

        <ExperienceMobile
          c={c}
          t={t}
          language={language}
        />
      </div>
    </section>
  );
}