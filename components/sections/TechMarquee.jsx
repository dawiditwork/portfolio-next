/* eslint-disable @next/next/no-img-element */


const STACK = [
  {
    name: "React",
    icon: "/icons/react.svg",
    type: "UI",
  },
  {
    name: "Next.js",
    icon: "/icons/nextjs.svg",
    type: "Framework",
  },
  {
    name: "TypeScript",
    icon: "/icons/typescript.svg",
    type: "Language",
  },
  {
    name: "Node.js",
    icon: "/icons/nodejs.svg",
    type: "Backend",
  },
  {
    name: "PostgreSQL",
    icon: "/icons/postgresql.svg",
    type: "Database",
  },
  {
    name: "MongoDB",
    icon: "/icons/mongodb.svg",
    type: "Database",
  },
  {
    name: "Prisma",
    icon: "/icons/prisma.svg",
    type: "ORM",
  },
  {
    name: "Vitest",
    icon: "/icons/vitest.svg",
    type: "Testing",
  },
  {
    name: "Playwright",
    icon:"/icons/playwright.svg",
    type: "E2E",
  },
  {
    name: "Docker",
    icon: "/icons/docker.svg",
    type: "DevOps",
  },
  {
    name: "GitHub Actions",
    icon: "/icons/githubactions.svg",
    type: "CI / CD",
  },
];


function StackGroup({ duplicate = false }) {
  return (
    <div
      className="stack-loop-group"
      aria-hidden={duplicate ? "true" : undefined}
    >
      {STACK.map((item, index) => (
        <article
          className="stack-card"
          key={`${duplicate ? "duplicate-" : ""}${item.name}`}
          style={{
            "--stack-index": index,
          }}
        >
          <span className="stack-card-index">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="stack-icon-scene">
            <div
              className="stack-icon-orbit"
              aria-hidden="true"
            />

            <div className="stack-icon-3d">
              <div className="stack-icon-face stack-icon-front">
                <img
                  src={item.icon}
                  alt={duplicate ? "" : item.name}
                  loading="lazy"
              
                />
              </div>

              <div
                className="stack-icon-face stack-icon-back"
                aria-hidden="true"
              >
                <img
                  src={item.icon}
                  alt=""
                  loading="lazy"
                 
                />
              </div>
            </div>
          </div>

          <div className="stack-card-copy">
            <strong>{item.name}</strong>
            <span>{item.type}</span>
          </div>

          <i
            className="stack-card-corner"
            aria-hidden="true"
          />
        </article>
      ))}
    </div>
  );
}

export default function TechMarquee({ c }) {
  return (
    <section
      className="tech-marquee"
      aria-label={c.marqueeLabel}
    >
      <div className="stack-label">
        <span className="stack-label-index">
          00
        </span>

        <span className="stack-label-overline">
          ENGINEERING
        </span>

        <strong>
          {c.marqueeLabel}
        </strong>

        <span className="stack-label-meta">
          {String(STACK.length).padStart(2, "0")} / CORE TOOLS
        </span>

        <div
          className="stack-label-status"
          aria-hidden="true"
        >
          <i />
          ACTIVE STACK
        </div>
      </div>

      <div className="stack-stage">
        <div
          className="stack-perspective-grid"
          aria-hidden="true"
        />

        <div
          className="stack-stage-glow"
          aria-hidden="true"
        />

        <div className="stack-loop-window">
          <div className="stack-loop-track">
            <StackGroup />
            <StackGroup duplicate />
          </div>
        </div>

        <div
          className="stack-fade stack-fade-left"
          aria-hidden="true"
        />

        <div
          className="stack-fade stack-fade-right"
          aria-hidden="true"
        />
      </div>

      <div
        className="stack-side-label"
        aria-hidden="true"
      >
        <span>HOVER TO PAUSE</span>
        <i />
        <span>DF.DEV</span>
      </div>
    </section>
  );
}