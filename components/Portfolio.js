"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroLead = "I build digital products that feel ";
const heroEmphasis = "clear and human.";
const heroTitle = heroLead + heroEmphasis;
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeTab, setResumeTab] = useState("experience");
  const [formState, setFormState] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const [heroCharacters, setHeroCharacters] = useState(0);
  const [introCharacters, setIntroCharacters] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const reducedMotionTimer = window.setTimeout(() => {
        setHeroCharacters(heroTitle.length);
        setIntroCharacters(heroIntro.length);
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
      if (index < heroIntro.length) {
        timer = window.setTimeout(
          () => typeIntro(index + 1),
          nextDelay(heroIntro[index], 18),
        );
      }
    };

    const typeTitle = (index) => {
      if (cancelled) return;
      setHeroCharacters(index);
      if (index < heroTitle.length) {
        timer = window.setTimeout(
          () => typeTitle(index + 1),
          nextDelay(heroTitle[index], 44),
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
  }, []);

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
        <a className="brand" href="#home" aria-label="Go to home">FRANKOWICZ<span>.</span></a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
          {navItems.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s talk</a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Available for meaningful work</p>
            <h1 className="typewriter-title">
              <span className="sr-only">{heroTitle}</span>
              <span className="typewriter-reserve" aria-hidden="true">{heroLead}<em>{heroEmphasis}</em></span>
              <span className="typewriter-live" aria-hidden="true">
                {heroTitle.slice(0, Math.min(heroCharacters, heroLead.length))}
                <em>{heroTitle.slice(heroLead.length, heroCharacters)}</em>
                {heroCharacters < heroTitle.length && <span className="typewriter-caret" />}
              </span>
            </h1>
            <p className="hero-intro typewriter-intro">
              <span className="sr-only">{heroIntro}</span>
              <span className="typewriter-reserve" aria-hidden="true">{heroIntro}</span>
              <span className="typewriter-live" aria-hidden="true">
                {heroIntro.slice(0, introCharacters)}
                {heroCharacters === heroTitle.length && <span className="typewriter-caret small" />}
              </span>
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">Explore my work <span aria-hidden="true">↗</span></a>
              <a className="button secondary" href="/Dawid-Frankowicz-CV.pdf" download="Dawid-Frankowicz-CV.pdf">Download CV <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-stats">
              <div><strong>Engineer</strong><span>Computer Science</span></div>
              <div><strong>Web & Mobile</strong><span>Applications</span></div>
              <div><strong>Full Stack</strong><span>Development</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <Image src="/images/dawid-profile.png" alt="Dawid Frankowicz" fill priority sizes="(max-width: 900px) 80vw, 38vw" />
            </div>
            <p className="vertical-note">DESIGN · CODE · DELIVER</p>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section-label">01 / About</div>
          <div className="about-grid">
            <div className="about-copy">
              <p className="kicker">About me</p>
              <h2>Engineering background.<br />Practical mindset.</h2>
              <div className="about-intro">
                <p>I&apos;m Dawid Frankowicz, a full-stack developer with an engineering degree in Computer Science. I build modern web and mobile applications using React, Next.js, React Native and Node.js.</p>
                <p>I enjoy turning ideas into clear, reliable products — from responsive interfaces to APIs and databases. I value practical solutions, maintainable code and continuous development.</p>
              </div>
              <div className="values">
                <div><span>01</span><strong>Full-stack development</strong><p>Frontend, backend and databases working as one product.</p></div>
                <div><span>02</span><strong>Web & mobile</strong><p>Responsive websites and cross-platform applications.</p></div>
                <div><span>03</span><strong>Reliable approach</strong><p>Clear communication and maintainable solutions.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section resume" id="resume">
          <div className="section-label light">02 / Resume</div>
          <div className="section-heading light-heading">
            <p className="kicker">Experience & expertise</p>
            <h2>A practical builder,<br />always learning.</h2>
          </div>
          <div className="resume-layout">
            <div className="resume-tabs" role="tablist" aria-label="Resume sections">
              {resumeTabs.map((tab) => (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={resumeTab === tab}
                  onClick={() => setResumeTab(tab)}
                >
                  {tab}
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
                    <div className="timeline-date">03.2025 — PRESENT</div>
                    <div>
                      <h3>Professional Driver</h3>
                      <p className="company">Murpf AG · 4614 Hägendorf, Switzerland</p>
                      <p>Safe and reliable transport with responsibility for timely service.</p>
                    </div>
                  </article>
                  <article className="timeline-entry">
                    <div className="timeline-date">09.2021 — 12.2024</div>
                    <div>
                      <h3>Professional Driver</h3>
                      <p className="company">Eckert Baulogistik · 8212 Neuhausen, Switzerland</p>
                      <p>Safe and reliable transport with responsibility for timely service.</p>
                    </div>
                  </article>
                  <article className="timeline-entry">
                    <div className="timeline-date">2020 — 07.2021</div>
                    <div>
                      <h3>On-site Coordinator</h3>
                      <p className="company">OTTO Work Force · Eindhoven, Netherlands</p>
                      <p>On-site support and coordination.</p>
                    </div>
                  </article>
                  <article className="timeline-entry">
                    <div className="timeline-date">04.2019 — 12.2019</div>
                    <div>
                      <h3>WordPress Developer</h3>
                      <p className="company">InterStudio · Kielce, Poland</p>
                      <p>
                        Built, customized and maintained responsive WordPress websites,
                        including content updates, theme adjustments and ongoing technical support.
                      </p>
                    </div>
                  </article>
                </div>
                <div className="resume-document-section" aria-hidden={resumeTab !== "education"}>
                  <article className="timeline-entry">
                    <div className="timeline-date">10.2015 — 10.2019</div>
                    <div className="timeline-content-with-media">
                      <div>
                        <h3>Engineering Degree</h3>
                        <p className="company">Jan Kochanowski University in Kielce, Poland</p>
                        <p>Field: Computer Science<br />Specialization: IT Technologies</p>
                      </div>
                      <a
                        className="diploma-inline"
                        href="/images/diploma-redacted.png"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Redacted university diploma – open full size"
                      >
                        <Image
                          src="/images/diploma-redacted.png"
                          width={140}
                          height={200}
                          alt="Redacted university diploma"
                        />
                        <span>View diploma ↗</span>
                      </a>
                    </div>
                  </article>
                  <article className="timeline-entry">
                    <div className="timeline-date">09.2011 — 04.2015</div>
                    <div>
                      <h3>High School Diploma</h3>
                      <p className="company">Vocational School of Computer Science, Poland</p>
                      <p>Profile: Computer Science<br />Specialization: Computer Graphics</p>
                    </div>
                  </article>
                  <article className="timeline-entry">
                    <div className="timeline-date">2002 — 2011</div>
                    <div>
                      <h3>Compulsory Education</h3>
                      <p className="company">Poland</p>
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
          <div className="section-label">03 / Selected work</div>
          <div className="section-heading split-heading"><div><p className="kicker">Projects</p><h2>Ideas turned into useful products.</h2></div><p>A selection of web and mobile work covering product design, frontend systems and backend architecture.</p></div>
          <div className="project-list">
            {projects.map((project) => (
              <a className="project" href={project.href} target="_blank" rel="noreferrer" key={project.number}>
                <span className="project-number">{project.number}</span>
                <div className="project-copy">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="project-stack">{project.stack}</span>
                </div>
                <Image
                  className="project-shot"
                  src={project.image}
                  width={640}
                  height={360}
                  alt={`${project.title} homepage`}
                />
                <span className="project-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="section-label light">04 / Contact</div>
          <div className="contact-grid">
            <div className="contact-copy"><p className="kicker">Have a project in mind?</p><h2>Let&apos;s make something useful.</h2><p>Tell me what you&apos;re working on, where you&apos;re stuck, or what you want to improve. I&apos;ll get back to you as soon as possible.</p></div>
            <form className="contact-form" onSubmit={submitContact}>
              <label>Name<input name="name" autoComplete="name" required maxLength={80} placeholder="Your name" /></label>
              <label>Email<input name="email" type="email" autoComplete="email" required maxLength={160} placeholder="you@example.com" /></label>
              <label>Message<textarea name="message" required minLength={10} maxLength={4000} rows={5} placeholder="A few words about your project..." /></label>
              <button className="button primary" type="submit" disabled={formState === "loading"}>{formState === "loading" ? "Sending..." : "Send message"} <span>↗</span></button>
              <p className={`form-feedback ${formState}`} aria-live="polite">{feedback}</p>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand" href="#home">FRANKOWICZ<span>.</span></a>
        <p>Full-stack developer · Web & mobile</p>
        <div className="footer-links">
          <a href="https://github.com/dawiditwork" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
          <a href="https://www.linkedin.com/in/dawid-f-978307425/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
          <a href="#home">Back to top <span>↑</span></a>
        </div>
      </footer>
    </>
  );
}
