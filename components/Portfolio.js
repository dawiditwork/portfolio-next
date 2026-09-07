"use client";

import { german } from "./translations";
import Image from "next/image";
import { useEffect, useState } from "react";

const heroLead = "I build digital products that feel ";
const heroEmphasis = "clear and human.";
const heroIntro = "I'm Dawid, a full-stack developer with a Computer Science background, building modern web and mobile applications — from user interface to backend.";
const resumeTabs = ["experience", "education", "skills"];

const navItems = [
  ["home", "Home"],
  ["about", "About"],
  ["resume", "Resume"],
  ["projects", "Projects"],
  ["contact", "Contact"],
];

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "React Native",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "REST APIs",
  "HTML5",
  "CSS3",
  "Git",
  "Docker",
];

const projects = [
  {
    number: "01",
    title: "Blog Application",
    description: "A personal blog focused on technology, development and shared experience.",
    stack: "Blog · Technology · Development",
    href: "https://blog.dawidfrankowicz.com/",
    image: "/images/project-blog.png",
  },
  {
    number: "02",
    title: "AI Application",
    description: "A web application exploring practical use cases for artificial intelligence.",
    stack: "AI · Web application",
    href: "https://ai.dawidfrankowicz.com/",
    image: "/images/project-ai.png",
  },
  {
    number: "03",
    title: "MyHikes",
    description: "A dedicated web experience for hiking and outdoor exploration.",
    stack: "Hiking · Outdoor · Web application",
    href: "https://myhikes.dawidfrankowicz.com/",
    image: "/images/project-myhikes.png",
  },
];

export default function Portfolio() {
  const [language, setLanguage] = useState("en");
  const t = (text) => language === "de" ? (german[text] ?? text) : text;
  const translatedLead = t(heroLead);
  const translatedEmphasis = t(heroEmphasis);
  const translatedTitle = translatedLead + translatedEmphasis;
  const translatedIntro = t(heroIntro);
  const cvFile = language === "de" ? "Dawid-Frankowicz-CV-DE.pdf" : "Dawid-Frankowicz-CV.pdf";

  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio-language");
      if (saved === "de") {
        const timer = window.setTimeout(() => setLanguage("de"), 0);
        return () => window.clearTimeout(timer);
      }
    } catch { /* The switch still works when storage is unavailable. */ }
  }, []);

  useEffect(() => { document.documentElement.lang = language; }, [language]);

  function changeLanguage(next) {
    setLanguage(next);
    setHeroCharacters(0);
    setIntroCharacters(0);
    try { localStorage.setItem("portfolio-language", next); } catch { /* Optional persistence. */ }
  }

  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeTab, setResumeTab] = useState("experience");
  const [formState, setFormState] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const [heroCharacters, setHeroCharacters] = useState(0);
  const [introCharacters, setIntroCharacters] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const reducedMotionTimer = window.setTimeout(() => {
        setHeroCharacters(translatedTitle.length);
        setIntroCharacters(translatedIntro.length);
      }, 0);
      return () => window.clearTimeout(reducedMotionTimer);
    }

    let timer;
    let cancelled = false;

    const nextDelay = (character, base) => {
      if (/[.,—]/.test(character)) return base + 170;
      if (/\s/.test(character)) return base + 18;
      return base + Math.round(Math.random() * 34);
    };

    const typeIntro = (index) => {
      if (cancelled) return;
      setIntroCharacters(index);
      if (index < translatedIntro.length) {
        timer = window.setTimeout(
          () => typeIntro(index + 1),
          nextDelay(translatedIntro[index], 18),
        );
      }
    };

    const typeTitle = (index) => {
      if (cancelled) return;
      setHeroCharacters(index);
      if (index < translatedTitle.length) {
        timer = window.setTimeout(
          () => typeTitle(index + 1),
          nextDelay(translatedTitle[index], 44),
        );
      } else {
        timer = window.setTimeout(() => typeIntro(1), 320);
      }
    };

    timer = window.setTimeout(() => typeTitle(1), 400);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [translatedTitle, translatedIntro]);

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return;
    }

    const revealSelector = [
      ".section-label",
      ".about-copy > .kicker",
      ".about-copy > h2",
      ".about-intro > p",
      ".values > div",
      ".section-heading > *",
      ".resume-tabs > button",
      ".resume-panel",
      ".split-heading > div > *",
      ".split-heading > p",
      ".project-list > .project",
      ".contact-copy > *",
      ".contact-form > *",
    ].join(",");

    sections.forEach((section) => {
      section.classList.add("reveal-ready");
      section.querySelectorAll(revealSelector).forEach((item, index) => {
        item.classList.add("reveal-item");
        item.style.setProperty("--reveal-order", index);
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px -2% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  async function submitContact(event) {
  event.preventDefault();

  const formElement = event.currentTarget;
  const formData = new FormData(formElement);

  setFormState("loading");
  setFeedback("");

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    const data = await response.json();

    if (!response.ok) {
      setFeedback(data.message || "The message could not be sent.");
      setFormState("error");
      return;
    }

    formElement.reset();
    setFeedback(data.message || "Thank you — your message has been sent.");
    setFormState("success");
  } catch (error) {
    console.error("Contact form request error:", error);
    setFeedback("The message could not be sent. Please try again later.");
    setFormState("error");
  }
}

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label={t("Go to home")}>FRANKOWICZ<span>.</span></a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-label={t("Toggle navigation")}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label={t("Main navigation")}>
          {navItems.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{t(label)}</a>
          ))}
        </nav>
        <div className="language-switch" role="group" aria-label={language === "de" ? "Sprache" : "Language"}>
          {["en", "de"].map((value) => (
            <button key={value} type="button" lang={value} aria-label={value === "en" ? "English" : "Deutsch"} aria-pressed={language === value} onClick={() => changeLanguage(value)}>{value.toUpperCase()}</button>
          ))}
        </div>
        <a className="header-cta" href="#contact">{t("Let's talk")}</a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span /> {t("Available for meaningful work")}</p>
            <h1 className="typewriter-title">
              <span className="sr-only">{translatedTitle}</span>
              <span className="typewriter-reserve" aria-hidden="true">{translatedLead}<em>{translatedEmphasis}</em></span>
              <span className="typewriter-live" aria-hidden="true">
                {translatedTitle.slice(0, Math.min(heroCharacters, translatedLead.length))}
                <em>{translatedTitle.slice(translatedLead.length, heroCharacters)}</em>
                {heroCharacters < translatedTitle.length && <span className="typewriter-caret" />}
              </span>
            </h1>
            <p className="hero-intro typewriter-intro">
              <span className="sr-only">{translatedIntro}</span>
              <span className="typewriter-reserve" aria-hidden="true">{translatedIntro}</span>
              <span className="typewriter-live" aria-hidden="true">
                {translatedIntro.slice(0, introCharacters)}
                {heroCharacters === translatedTitle.length && <span className="typewriter-caret small" />}
              </span>
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">{t("Explore my work")} <span aria-hidden="true">↗</span></a>
              <a className="button secondary" href={`/${cvFile}`} download={cvFile}>{t("Download CV")} <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-stats">
              <div><strong>{t("Engineer")}</strong><span>{t("Computer Science")}</span></div>
              <div><strong>{t("Web & Mobile")}</strong><span>{t("Applications")}</span></div>
              <div><strong>{t("Full Stack")}</strong><span>{t("Development")}</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <Image src="/images/dawid-profile.png" alt="Dawid Frankowicz" fill priority sizes="(max-width: 900px) 80vw, 38vw" />
            </div>
            <p className="vertical-note">{t("DESIGN · CODE · DELIVER")}</p>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section-label">{t("01 / About")}</div>
          <div className="about-grid">
            <div className="about-copy">
              <p className="kicker">{t("About me")}</p>
              <h2>{t("Engineering background.")}<br />{t("Practical mindset.")}</h2>
              <div className="about-intro">
                <p>{t("I'm Dawid Frankowicz, a full-stack developer with an engineering degree in Computer Science. I build modern web and mobile applications using React, Next.js, React Native and Node.js.")}</p>
                <p>{t("I enjoy turning ideas into clear, reliable products — from responsive interfaces to APIs and databases. I value practical solutions, maintainable code and continuous development.")}</p>
              </div>
              <div className="values">
                <div><span>01</span><strong>{t("Full-stack development")}</strong><p>{t("Frontend, backend and databases working as one product.")}</p></div>
                <div><span>02</span><strong>{t("Web & mobile")}</strong><p>{t("Responsive websites and cross-platform applications.")}</p></div>
                <div><span>03</span><strong>{t("Reliable approach")}</strong><p>{t("Clear communication and maintainable solutions.")}</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section resume" id="resume">
          <div className="section-label light">{t("02 / Resume")}</div>
          <div className="section-heading light-heading">
            <p className="kicker">{t("Experience & expertise")}</p>
            <h2>{t("A practical builder,")}<br />{t("always learning.")}</h2>
          </div>
          <div className="resume-layout">
            <div className="resume-tabs" role="tablist" aria-label={t("Resume sections")}>
              {resumeTabs.map((tab) => (
                <button
                  key={t(tab)}
                  role="tab"
                  aria-selected={resumeTab === tab}
                  onClick={() => setResumeTab(tab)}
                >
                  {t(tab)}
                </button>
              ))}
            </div>
            <div className="resume-panel">
              <div
                className="resume-document"
                style={{ "--resume-index": resumeTabs.indexOf(resumeTab) }}
              >
                <div className="resume-document-section" aria-hidden={resumeTab !== "experience"}>
                  <article className="timeline-entry">
                    <div className="timeline-date">{t("03.2025 — PRESENT")}</div>
                    <div>
                      <h3>{t("Professional Driver")}</h3>
                      <p className="company">{t("Murpf AG · 4614 Hägendorf, Switzerland")}</p>
                      <p>{t("Safe and reliable transport with responsibility for timely service.")}</p>
                    </div>
                  </article>
                  <article className="timeline-entry">
                    <div className="timeline-date">09.2021 — 12.2024</div>
                    <div>
                      <h3>{t("Professional Driver")}</h3>
                      <p className="company">{t("Eckert Baulogistik · 8212 Neuhausen, Switzerland")}</p>
                      <p>{t("Safe and reliable transport with responsibility for timely service.")}</p>
                    </div>
                  </article>
                  <article className="timeline-entry">
                    <div className="timeline-date">2020 — 07.2021</div>
                    <div>
                      <h3>{t("On-site Coordinator")}</h3>
                      <p className="company">{t("OTTO Work Force · Eindhoven, Netherlands")}</p>
                      <p>{t("On-site support and coordination.")}</p>
                    </div>
                  </article>
                  <article className="timeline-entry">
                    <div className="timeline-date">04.2019 — 12.2019</div>
                    <div>
                      <h3>{t("WordPress Developer")}</h3>
                      <p className="company">{t("InterStudio · Kielce, Poland")}</p>
                      <p>{t("Built, customized and maintained responsive WordPress websites, including content updates, theme adjustments and ongoing technical support.")} </p>
                    </div>
                  </article>
                </div>
                <div className="resume-document-section" aria-hidden={resumeTab !== "education"}>
                  <article className="timeline-entry">
                    <div className="timeline-date">10.2015 — 10.2019</div>
                    <div className="timeline-content-with-media">
                      <div>
                        <h3>{t("Engineering Degree")}</h3>
                        <p className="company">{t("Jan Kochanowski University in Kielce, Poland")}</p>
                        <p>{t("Field: Computer Science")}<br />{t("Specialization: IT Technologies")}</p>
                      </div>
                      <a
                        className="diploma-inline"
                        href="/images/diploma-redacted.png"
                        target="_blank"
                        rel="noreferrer"
                        aria-label={t("Redacted university diploma – open full size")}
                      >
                        <Image
                          src="/images/diploma-redacted.png"
                          width={140}
                          height={200}
                          alt={t("Redacted university diploma")}
                        />
                        <span>{t("View diploma ↗")}</span>
                      </a>
                    </div>
                  </article>
                  <article className="timeline-entry">
                    <div className="timeline-date">09.2011 — 04.2015</div>
                    <div>
                      <h3>{t("High School Diploma")}</h3>
                      <p className="company">{t("Vocational School of Computer Science, Poland")}</p>
                      <p>{t("Profile: Computer Science")}<br />{t("Specialization: Computer Graphics")}</p>
                    </div>
                  </article>
                  <article className="timeline-entry">
                    <div className="timeline-date">2002 — 2011</div>
                    <div>
                      <h3>{t("Compulsory Education")}</h3>
                      <p className="company">{t("Poland")}</p>
                    </div>
                  </article>
                </div>
                <div className="resume-document-section" aria-hidden={resumeTab !== "skills"}>
                  <div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section projects" id="projects">
          <div className="section-label">{t("03 / Selected work")}</div>
          <div className="section-heading split-heading"><div><p className="kicker">{t("Projects")}</p><h2>{t("Ideas turned into useful products.")}</h2></div><p>{t("A selection of web and mobile work covering product design, frontend systems and backend architecture.")}</p></div>
          <div className="project-list">
            {projects.map((project) => (
              <a className="project" href={project.href} target="_blank" rel="noreferrer" key={project.number}>
                <span className="project-number">{project.number}</span>
                <div className="project-copy">
                  <h3>{t(project.title)}</h3>
                  <p>{t(project.description)}</p>
                  <span className="project-stack">{t(project.stack)}</span>
                </div>
                <Image
                  className="project-shot"
                  src={project.image}
                  width={640}
                  height={360}
                  alt={`${t(project.title)} ${t("homepage")}`}
                />
                <span className="project-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="section-label light">{t("04 / Contact")}</div>
          <div className="contact-grid">
            <div className="contact-copy"><p className="kicker">{t("Have a project in mind?")}</p><h2>{t("Let's make something useful.")}</h2><p>{t("Tell me what you're working on, where you're stuck, or what you want to improve. I'll get back to you as soon as possible.")}</p></div>
            <form className="contact-form" onSubmit={submitContact}>
              <label>{t("Name")}<input name="name" autoComplete="name" required maxLength={80} placeholder={t("Your name")} /></label>
              <label>{t("Email")}<input name="email" type="email" autoComplete="email" required maxLength={160} placeholder="you@example.com" /></label>
              <label>{t("Message")}<textarea name="message" required minLength={10} maxLength={4000} rows={5} placeholder={t("A few words about your project...")} /></label>
              <button className="button primary" type="submit" disabled={formState === "loading"}>{formState === "loading" ? t("Sending...") : t("Send message")} <span>↗</span></button>
              <p className={`form-feedback ${formState}`} aria-live="polite">{t(feedback)}</p>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand" href="#home">FRANKOWICZ<span>.</span></a>
        <p>{t("Full-stack developer · Web & mobile")}</p>
        <div className="footer-links">
          <a href="https://github.com/dawiditwork" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
          <a href="https://www.linkedin.com/in/dawid-f-978307425/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
          <a href="#home">{t("Back to top")} <span>↑</span></a>
        </div>
      </footer>
    </>
  );
}
