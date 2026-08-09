import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects.js'
import { languages as languageSkills } from '../data/skills.js'

const skillByName = Object.fromEntries(languageSkills.map((skill) => [skill.name, skill]))

function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((item) => String(item.id) === id)

  if (!project) {
    return (
      <section className="page">
        <h1>Projet introuvable</h1>
        <Link to="/projets" className="section-top-link">
          ← Retour aux projets
        </Link>
      </section>
    )
  }

  return (
    <section className="page">
      <div className="detail-top">
        <Link to="/projets" className="section-top-link">
          ← Retour aux projets
        </Link>
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="section-top-link"
          >
            Voir sur GitHub →
          </a>
        )}
      </div>

      <h1>{project.title}</h1>

      <ul className="lang-badge-list detail-lang-list">
        {project.languages.map((lang) => {
          const skill = skillByName[lang]
          const Icon = skill?.icon
          return (
            <li key={lang} className="lang-badge" style={{ color: skill?.color }}>
              {Icon && <Icon aria-hidden="true" />}
              {lang}
            </li>
          )
        })}
      </ul>

      {project.image && (
        <img
          src={project.image}
          alt={`Aperçu du projet ${project.title}`}
          className="detail-image"
        />
      )}

      <p className="detail-text">{project.details || project.description}</p>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          Voir la démo
        </a>
      )}
    </section>
  )
}

export default ProjectDetail
