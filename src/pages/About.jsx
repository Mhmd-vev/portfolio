import { Link } from 'react-router-dom'
import { languages, tools } from '../data/skills.js'

const softSkills = ['Travail en équipe', 'Gestion de projet', 'Autonomie']

function About() {
  return (
    <section className="page">
      <h1>À propos de moi</h1>

      <div className="about-block">
        <h2>Parcours</h2>
        <p>
          Actuellement en 3e année de Licence Informatique, je me forme aux
          fondamentaux du développement logiciel : algorithmique, structures de
          données, programmation orientée objet, bases de données et
          développement web. Je m'intéresse particulièrement à la conception
          d'applications et à l'apprentissage de nouveaux langages.
        </p>
        <div className="fact-row">
          <div className="fact">
            <span className="fact-label">Formation</span>
            <span className="fact-value">Licence Informatique, 3e année</span>
          </div>
          <div className="fact">
            <span className="fact-label">Recherche</span>
            <span className="fact-value">Stage / alternance</span>
          </div>
        </div>
      </div>

      <div className="about-block">
        <h2>Langages</h2>
        <div className="skill-logo-row skill-logo-row-wrap">
          {languages.map(({ name, icon: Icon, color }) => (
            <div key={name} className="skill-logo-card">
              <Icon className="skill-logo" style={{ color }} aria-hidden="true" />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="about-block">
        <h2>Outils</h2>
        <div className="skill-logo-row skill-logo-row-wrap">
          {tools.map(({ name, icon: Icon, color }) => (
            <div key={name} className="skill-logo-card">
              <Icon className="skill-logo" style={{ color }} aria-hidden="true" />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="about-block">
        <h2>Compétences transverses</h2>
        <ul className="tag-list">
          {softSkills.map((item) => (
            <li key={item} className="tag">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="about-block">
        <h2>Objectif</h2>
        <p>
          Je suis à la recherche d'un stage ou d'une alternance pour mettre en
          pratique mes compétences et continuer à progresser aux côtés d'une
          équipe de développement.
        </p>
        <Link to="/contact" className="btn btn-primary about-cta">
          Me contacter
        </Link>
      </div>
    </section>
  )
}

export default About
