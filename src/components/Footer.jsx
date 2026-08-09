function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <p>© {year} Mohamed — Portfolio étudiant, Licence Informatique</p>
      <div className="footer-links">
        <a href="mailto:mobyass.pdf@gmail.com">Email</a>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  )
}

export default Footer
