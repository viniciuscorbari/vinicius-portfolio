import "./Projects.css";
import { projects } from "../data/projects.js";

function ProjectCard({ p }) {
  return (
    <article className="card">
      <div className="card__top">
        <h3 className="card__title">{p.title}</h3>
        <p className="card__desc">{p.description}</p>
      </div>

      <div className="card__tags">
        {p.tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>

      <div className="card__actions">
        {p.liveUrl ? (
          <a
            className="linkBtn"
            href={p.liveUrl}
            target={p.liveUrl.startsWith("http") ? "_blank" : "_self"}
            rel="noreferrer"
          >
            Ver online
          </a>
        ) : (
          <span className="linkBtn linkBtn--disabled">Sem link</span>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projetos" className="section">
      <div className="container">
        <div className="sectionHead">
          <h2>Projetos</h2>
          <p>Alguns trabalhos e exemplos do que eu consigo entregar rápido.</p>
        </div>

        <div className="grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}