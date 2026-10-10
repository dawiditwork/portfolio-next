"use client";

import { motion } from "motion/react";

const UI = {
  en: {
    journey: "CAREER JOURNEY",
    history: "PROFESSIONAL HISTORY",
    education: "EDUCATION / CREDENTIALS",
    current: "CURRENT",
    completed: "COMPLETED",
    degree: "ACADEMIC FOUNDATION",
    school: "TECHNICAL FOUNDATION",
    openDiploma: "VIEW REDACTED DIPLOMA",
    route: "SWITZERLAND · NETHERLANDS · POLAND",
  },

  de: {
    journey: "BERUFLICHER WEG",
    history: "BERUFLICHE STATIONEN",
    education: "AUSBILDUNG / ABSCHLÜSSE",
    current: "AKTUELL",
    completed: "ABGESCHLOSSEN",
    degree: "AKADEMISCHE BASIS",
    school: "TECHNISCHE BASIS",
    openDiploma: "GESCHWÄRZTES DIPLOM ANSEHEN",
    route: "SCHWEIZ · NIEDERLANDE · POLEN",
  },
};

function CareerCard({
  number,
  date,
  title,
  company,
  description,
  current = false,
  developer = false,
  index,
}) {
  return (
    <motion.article
      className={[
        "career-card",
        current ? "career-card-current" : "",
        developer ? "career-card-developer" : "",
      ].join(" ")}
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? 45 : -45,
        y: 20,
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration: 0.58,
        delay: 0.06 + index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="career-node">
        <span />
        <i />
      </div>

      <div className="career-card-top">
        <span className="career-number">
          {number}
        </span>

        <span className="career-date">
          {date}
        </span>

        {current && (
          <span className="career-current">
            <i />
            LIVE
          </span>
        )}
      </div>

      <div className="career-card-body">
        <h3>{title}</h3>

        <p className="career-company">
          {company}
        </p>

        <p className="career-description">
          {description}
        </p>
      </div>

      <div
        className="career-card-scan"
        aria-hidden="true"
      />

      <span
        className="career-card-corner"
        aria-hidden="true"
      />
    </motion.article>
  );
}

function EducationCard({
  number,
  years,
  eyebrow,
  title,
  institution,
  description,
  diploma,
  diplomaLabel,
  accent = "cyan",
  index,
}) {
  return (
    <motion.article
      className={`credential-card credential-${accent}`}
      initial={{
        opacity: 0,
        y: 45,
        rotateX: 7,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotateX: 0,
      }}
      transition={{
        duration: 0.68,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <span
        className="credential-ghost-number"
        aria-hidden="true"
      >
        {number}
      </span>

      <div className="credential-top">
        <span>{eyebrow}</span>
        <strong>{years}</strong>
      </div>

      <div className="credential-body">
        <div className="credential-seal">
          <div className="credential-seal-ring">
            <i />
          </div>

          <strong>{number}</strong>
        </div>

        <div className="credential-copy">
          <h3>{title}</h3>

          <p className="credential-institution">
            {institution}
          </p>

          <p className="credential-description">
            {description}
          </p>

          {diploma && (
            <a
              className="credential-link"
              href="/images/diploma-redacted.png"
              target="_blank"
              rel="noreferrer"
            >
              <span>{diplomaLabel}</span>
              <strong>↗</strong>
            </a>
          )}
        </div>
      </div>

      <div className="credential-bottom">
        <span>DF / EDUCATION</span>
        <span>VERIFIED RECORD</span>
      </div>

      <div
        className="credential-scan"
        aria-hidden="true"
      />
    </motion.article>
  );
}

export default function ExperienceContent({
  tab,
  c,
  language = "en",
}) {
  const ui = UI[language] ?? UI.en;

  if (tab === "education") {
  const educationUi =
    language === "de"
      ? {
          eyebrow: "AUSBILDUNG",
          title1: "Abgeschlossene",
          title2: "IT-Ausbildung.",
          intro:
            "Formale Ausbildung in Informatik – vom technischen Fundament bis zum abgeschlossenen Ingenieurstudium.",
          completed: "ABGESCHLOSSEN",
          awarded: "ABSCHLUSS ERWORBEN",
          degreeType: "INGENIEURSTUDIUM",
          schoolType: "TECHNISCHE AUSBILDUNG",
          diploma: "DIPLOM ANSEHEN",
        }
      : {
          eyebrow: "EDUCATION",
          title1: "Completed",
          title2: "IT education.",
          intro:
            "Formal education in Computer Science — from a technical foundation to a completed engineering degree.",
          completed: "COMPLETED",
          awarded: "DEGREE AWARDED",
          degreeType: "ENGINEERING DEGREE",
          schoolType: "TECHNICAL EDUCATION",
          diploma: "VIEW DIPLOMA",
        };

  return (
    <motion.div
      key="education"
      className="education-record"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="education-record-heading">
        <div>
          <span>{educationUi.eyebrow}</span>

          <h3>
            {educationUi.title1}
            <br />
            <em>{educationUi.title2}</em>
          </h3>
        </div>

        <p>{educationUi.intro}</p>
      </div>

      <div className="education-record-list">
        <motion.article
          className="education-entry education-entry-primary"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="education-entry-meta">
            <span className="education-type">
              {educationUi.degreeType}
            </span>

            <span className="education-years">
              2015 — 2019
            </span>
          </div>

          <div className="education-entry-main">
            <div>
              <div className="education-completed">
                <i />
                {educationUi.awarded}
              </div>

              <h4>{c.engineeringDegree}</h4>

              <p className="education-institution">
                {c.university}
              </p>

              <p className="education-description">
                {c.universityText}
              </p>
            </div>

            <div className="education-entry-action">
              <span className="education-year-big">
                2019
              </span>

              <a
                href="/images/diploma-redacted.png"
                target="_blank"
                rel="noreferrer"
              >
                <span>{educationUi.diploma}</span>
                <strong>↗</strong>
              </a>
            </div>
          </div>
        </motion.article>

        <motion.article
          className="education-entry"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay: 0.16,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="education-entry-meta">
            <span className="education-type">
              {educationUi.schoolType}
            </span>

            <span className="education-years">
              2011 — 2015
            </span>
          </div>

          <div className="education-entry-main">
            <div>
              <div className="education-completed secondary">
                <i />
                {educationUi.completed}
              </div>

              <h4>{c.school}</h4>

              <p className="education-institution">
                Poland
              </p>

              <p className="education-description">
                {c.schoolText}
              </p>
            </div>

            <div className="education-entry-action">
              <span className="education-year-big">
                2015
              </span>
            </div>
          </div>
        </motion.article>
      </div>
    </motion.div>
  );
}

  return (
    <motion.div
      key="experience"
      className="career-showcase"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="career-view-heading">
        <div>
          <span>{ui.journey}</span>

          <h3>
            Real-world
            <br />
            <em>experience.</em>
          </h3>
        </div>

        <div className="career-route">
          <span>{ui.history}</span>

          <strong>
            {ui.route}
          </strong>

          <div className="career-route-line">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>

      <div className="career-timeline">
        <div
          className="career-spine"
          aria-hidden="true"
        >
          <span />
        </div>

        <CareerCard
          index={0}
          number="01"
          date={`2026 — ${c.present}`}
          title={c.freelanceTitle}
          company={c.freelanceCompany}
          description={c.freelanceText}
          current
          developer
        />

        <CareerCard
          index={1}
          number="02"
          date={`03.2025 — ${c.present}`}
          title={c.driverTitle}
          company={c.murpf}
          description={c.driverText}
          current
        />

        <CareerCard
          index={2}
          number="03"
          date="2021 — 2024"
          title={c.driverTitle}
          company={c.eckert}
          description={c.driverText}
        />

        <CareerCard
          index={3}
          number="04"
          date="2020 — 2021"
          title={c.coordinatorTitle}
          company={c.coordinatorCompany}
          description={c.coordinatorText}
        />

        <CareerCard
          index={4}
          number="05"
          date="2019"
          title={c.wordpressTitle}
          company={c.wordpressCompany}
          description={c.wordpressText}
          developer
        />
      </div>
    </motion.div>
  );
}