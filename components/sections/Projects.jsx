import ProjectScene from "../components/ProjectScene";
import { PROJECTS } from "../data/portfolioData";

export default function Projects({ c, language }) {
  return (
    <section className="projects-v3" id="projects">
      <div className="projects-intro section-shell">
        <div className="section-kicker-v3 light">
          <span>02</span>
          <p>{c.workEyebrow}</p>
        </div>

        <div className="projects-intro-grid">
          <h2>{c.workTitle}</h2>

          <div className="projects-intro-meta">
            <span>SELECTED / {String(PROJECTS.length).padStart(2, "0")}</span>
            <span>DESIGN · ENGINEERING · DELIVERY</span>
          </div>
        </div>
      </div>

      <div className="projects-list">
        {PROJECTS.map((project, index) => (
          <ProjectScene
            key={project.title}
            project={project}
            language={language}
            labels={c}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}