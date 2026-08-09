import { useState } from 'react'
import { Link } from 'react-router-dom'
import { languages, projects } from '../data/projects.js'
import { languages as languageSkills } from '../data/skills.js'

const skillByName = Object.fromEntries(languageSkills.map((skill) => [skill.name, skill]))

function Projects() {
  const [activeLanguage, setActiveLanguage] = useState('Tous')

  const filtered =
    activeLanguage === 'Tous'
      ? projects
      : projects.filter((project) => project.languages.includes(activeLanguage))

  return (
    <section className="page">
      <h1>Mes projets</h1>

      <div className="filters">
        <button
          className={'filter-btn' + (activeLanguage === 'Tous' ? ' active' : '')}
          onClick={() => setActiveLanguage('Tous')}
        >
          Tous
        </button>
        {languages.map((lang) => {
          const skill = skillByName[lang]
          const Icon = skill?.icon
          return (
            <button
              key={lang}
              className={'filter-btn' + (activeLanguage === lang ? ' active' : '')}
              onClick={() => setActiveLanguage(lang)}
            >
              {Icon && <Icon style={{ color: skill.color }} aria-hidden="true" />}
              {lang}
            </button>
          )
        })}
      </div>

      <div className="project-list">
        {filtered.map((project) => (
          <Link key={project.id} to={`/projets/${project.id}`} className="project-card">
            {project.image && (
              <img
                src={project.image}
                alt=""
                className="card-image"
              />
            )}
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <ul className="lang-badge-list">
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
          </Link>
        ))}
        {filtered.length === 0 && <p>Aucun projet pour ce langage pour le moment.</p>}
      </div>
    </section>
  )
}

export default Projects
