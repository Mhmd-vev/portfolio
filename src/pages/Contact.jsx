function Contact() {
  return (
    <section className="page">
      <h1>Contact</h1>
      <p className="page-intro">
        Je suis à la recherche d'une alternance (2 semaines de cours / 2
        semaines en entreprise). N'hésite pas à me contacter pour en discuter
        ou échanger sur un projet.
      </p>

      <div className="contact-grid">
        <a className="contact-card" href="mailto:mouhmed.allouchee@gmail.com">
          <h3>✉️ Email</h3>
          <p>mouhmed.allouchee@gmail.com</p>
        </a>
        <a
          className="contact-card"
          href="https://github.com/Mhmd-vev"
          target="_blank"
          rel="noreferrer"
        >
          <h3>💻 GitHub</h3>
          <p>Voir mes dépôts</p>
        </a>
        <a
          className="contact-card"
          href="https://www.linkedin.com/in/mouhmed-allouche/"
          target="_blank"
          rel="noreferrer"
        >
          <h3>🔗 LinkedIn</h3>
          <p>Voir mon profil</p>
        </a>
      </div>
    </section>
  )
}

export default Contact
