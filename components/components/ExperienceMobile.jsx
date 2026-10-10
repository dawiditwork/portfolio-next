
"use client";

import { useState } from "react";
import {
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";

export default function ExperienceMobile({ c, t, language }) {
  const [expanded, setExpanded] = useState(false);

  const isDE = language === "de";

  const jobs = [
    {
      years: `03.2025 — ${c.present}`,
      title: c.driverTitle,
      company: c.murpf,
      description: c.driverText,
    },
    {
      years: "2021 — 2024",
      title: c.driverTitle,
      company: c.eckert,
      description: c.driverText,
    },
    {
      years: "2020 — 2021",
      title: c.coordinatorTitle,
      company: c.coordinatorCompany,
      description: c.coordinatorText,
    },
  ];

  return (
    <div className="cv-mobile">
      <div className="cv-mobile__paper">
        <div className="cv-mobile__topline">
          <span>DF / DEV</span>
          <span>CURRICULUM VITAE</span>
        </div>

        <div className="cv-mobile__heading">
          <span className="cv-mobile__eyebrow">
            01 / {t.experience}
          </span>

          <h3>
            {t.experienceTitle}
            <span> {t.experienceAccent}</span>
          </h3>
        </div>

        <div className="cv-mobile__list">
          <article className="cv-mobile__entry">
            <div className="cv-mobile__icon">
              <Code2 size={19} strokeWidth={1.6} />
            </div>

            <div className="cv-mobile__entry-content">
              <span className="cv-mobile__date">
                2026 — {c.present}
              </span>

              <h4>{c.freelanceTitle}</h4>
              <strong>{c.freelanceCompany}</strong>
              <p>{c.freelanceText}</p>
            </div>
          </article>

          <article className="cv-mobile__entry">
            <div className="cv-mobile__icon">
              <Code2 size={19} strokeWidth={1.6} />
            </div>

            <div className="cv-mobile__entry-content">
              <span className="cv-mobile__date">
                2019
              </span>

              <h4>{c.wordpressTitle}</h4>
              <strong>{c.wordpressCompany}</strong>
              <p>{c.wordpressText}</p>
            </div>
          </article>
        </div>

        <div className="cv-mobile__education">
          <div className="cv-mobile__education-top">
            <GraduationCap size={21} strokeWidth={1.5} />
            <span>02 / {t.education}</span>
          </div>

          <span className="cv-mobile__date">
            2015 — 2019
          </span>

          <h3>{t.degreeTitle}</h3>

          <strong>{t.qualification}</strong>

          <p>
            {t.university}
            <span> · {t.universityPlace}</span>
          </p>

          <div className="cv-mobile__degree-status">
            <span className="cv-mobile__status-dot" />
            {t.degreeCompleted}
          </div>

          <a
            href="/images/diploma-redacted.png"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-mobile__diploma"
          >
            <span>{t.diploma}</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="cv-mobile__more">
          <button
            type="button"
            className="cv-mobile__more-button"
            aria-expanded={expanded}
            aria-controls="cv-mobile-extra"
            onClick={() => setExpanded((value) => !value)}
          >
            <span className="cv-mobile__more-left">
              <BriefcaseBusiness
                size={18}
                strokeWidth={1.6}
              />

              {isDE
                ? "Weitere Berufserfahrung"
                : "Additional experience"}
            </span>

            <ChevronDown
              size={19}
              className={
                expanded
                  ? "cv-mobile__chevron is-open"
                  : "cv-mobile__chevron"
              }
            />
          </button>

          <div
            id="cv-mobile-extra"
            className={`cv-mobile__extra ${
              expanded ? "is-open" : ""
            }`}
            hidden={!expanded}
          >
            {jobs.map((job, index) => (
              <article
                className="cv-mobile__extra-job"
                key={`${job.years}-${index}`}
              >
                <span className="cv-mobile__date">
                  {job.years}
                </span>

                <h4>{job.title}</h4>
                <strong>{job.company}</strong>
                <p>{job.description}</p>
              </article>
            ))}

            <article className="cv-mobile__school">
              <span className="cv-mobile__date">
                2011 — 2015
              </span>

              <span className="cv-mobile__school-label">
                {t.technicalLabel}
              </span>

              <h4>{c.school}</h4>

              <p>
                {c.schoolText ||
                  t.technicalFallback}
              </p>
            </article>
          </div>
        </div>

        <div className="cv-mobile__bottomline">
          <span>BUILD / TEST / SHIP</span>
          <span>DF — 2026</span>
        </div>
      </div>
    </div>
  );
}
