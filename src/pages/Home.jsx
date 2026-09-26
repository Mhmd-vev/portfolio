import { Link } from 'react-router-dom'
import { languages } from '../data/skills.js'

function Home() {
  return (
    <>
      <section className="hero">
        <p className="hero-eyebrow">Étudiant en Master 1 Informatique</p>
        <h1>
          Salut, moi c'est <span className="highlight">Mouhmed</span>.
        </h1>
        <p className="hero-subtitle">
          Je développe des applications et j'explore différents langages de
          programmation. Ce portfolio rassemble mes projets et mes
          compétences.
        </p>
        <div className="hero-actions">
          <Link to="/projets" className="btn btn-primary">
            Voir mes projets
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Me contacter
          </Link>
        </div>
      </section>

      {languages.length > 0 && (
        <section className="section">
          <h2>Langages maîtrisés</h2>
          <div className="skill-logo-row">
            {languages.map(({ name, icon: Icon, color }) => (
              <div key={name} className="skill-logo-card">
                <Icon className="skill-logo" style={{ color }} aria-hidden="true" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  )
}

export default Home
