import { useState } from 'react'
import './App.css'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const projects = [
  {
    title: 'Project One',
    description:
      'A short description of what this project does and the problem it solves.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Project Two',
    description:
      'A short description of what this project does and the problem it solves.',
    tags: ['TypeScript', 'Next.js', 'Tailwind'],
  },
  {
    title: 'Project Three',
    description:
      'A short description of what this project does and the problem it solves.',
    tags: ['Python', 'FastAPI', 'Docker'],
  },
]

const skillGroups = [
  { category: 'Frontend', items: ['React', 'JavaScript', 'HTML/CSS', 'Vite'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'REST APIs'] },
  { category: 'Tools', items: ['Git', 'Docker', 'Figma'] },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          Your Name
        </a>

        <button
          type="button"
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="home" className="section hero-section">
          <div className="hero-content">
            <p className="eyebrow">Hi, my name is</p>
            <h1 className="hero-name">Your Name</h1>
            <h2 className="hero-subtitle">I build things for the web.</h2>
            <p className="hero-text">
              I'm a software developer focused on building accessible,
              performant products from front to back.
            </p>
            <a href="#projects" className="cta-button">
              View My Work
            </a>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="ball-glow"></div>
            <svg
              className="football"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="100" cy="100" r="88" className="ball-body" />
              <g className="ball-seams">
                <polygon points="100,65 133.3,89.2 120.6,128.3 79.4,128.3 66.7,89.2" />
                <line x1="100" y1="65" x2="100" y2="12" />
                <line x1="133.3" y1="89.2" x2="185.6" y2="72.2" />
                <line x1="120.6" y1="128.3" x2="152.9" y2="172.8" />
                <line x1="79.4" y1="128.3" x2="47.1" y2="172.8" />
                <line x1="66.7" y1="89.2" x2="14.4" y2="72.2" />
              </g>
              <circle cx="100" cy="100" r="88" className="ball-outline" />
            </svg>
          </div>
        </section>

        <section id="about" className="section">
          <h2 className="section-title">About</h2>
          <p className="about-text">
            I'm a developer with a passion for turning ideas into fast,
            usable software. I enjoy working across the stack, from crafting
            interfaces to designing the systems behind them. When I'm not
            coding, I'm usually learning something new or contributing to
            open source.
          </p>
        </section>

        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="tag-list">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div key={group.category} className="skill-group">
                <h3>{group.category}</h3>
                <ul className="tag-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <h2 className="section-title">Contact</h2>
          <p className="about-text">
            I'm currently open to new opportunities. Feel free to reach out.
          </p>
          <a href="mailto:you@example.com" className="cta-button">
            Say Hello
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
