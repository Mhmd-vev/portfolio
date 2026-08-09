function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <p>© {year} Mouhmed · Portfolio étudiant, Licence Informatique</p>
      <div className="footer-links">
        <a href="mailto:mouhmedelmahdi@gmail.com">Email</a>
        <a href="https://github.com/Mhmd-vev" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/mouhmed-allouche/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  )
}

export default Footer
