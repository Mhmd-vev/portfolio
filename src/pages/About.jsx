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
          Actuellement en Master 1 Informatique, je me forme à un large socle
          de compétences : algorithmique, structures de données, programmation
          orientée objet, bases de données et développement web. Je n'ai pas
          encore arrêté mon domaine de spécialisation et j'aime explorer
          différents langages et façons de développer.
        </p>
        <div className="fact-row">
          <div className="fact">
            <span className="fact-label">Formation</span>
            <span className="fact-value">Master 1 Informatique</span>
          </div>
          <div className="fact">
            <span className="fact-label">Recherche</span>
            <span className="fact-value">
              Alternance (2 sem. cours / 2 sem. entreprise)
            </span>
          </div>
        </div>
      </div>

      {languages.length > 0 && (
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
      )}

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
          Je suis à la recherche d'une alternance en informatique (rythme 2
          semaines de cours / 2 semaines en entreprise). Mon objectif :
          contribuer à de vrais projets tout en continuant à apprendre auprès
          d'une équipe expérimentée.
        </p>
        <Link to="/contact" className="btn btn-primary about-cta">
          Me contacter
        </Link>
      </div>
    </section>
  )
}

export default About
