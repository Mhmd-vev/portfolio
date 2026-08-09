function Contact() {
  return (
    <section className="page">
      <h1>Contact</h1>
      <p className="page-intro">
        N'hésite pas à me contacter pour échanger sur un projet ou toute autre
        demande.
      </p>

      <div className="contact-grid">
        <a className="contact-card" href="mailto:mobyass.pdf@gmail.com">
          <h3>✉️ Email</h3>
          <p>mouhmedelmahdi@gmail.com</p>
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
