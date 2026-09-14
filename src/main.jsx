import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const profile = {
  name: "Shashank Bhoyar",
  role: "Java Full Stack Developer",
  email: "bhoyarshashank4@gmail.com",
  github: "https://github.com/Shashankur7",
  linkedin: "https://www.linkedin.com/in/shashank-bhoyar/",
};

const projects = [
  {
    no: "01",
    title: "ProcureFlow",
    category: "Full-stack application",
    description:
      "Procurement and inventory management platform connecting employee requests, manager approvals, purchase orders, suppliers, warehouse receipts, and stock balances.",
    stack: ["Java", "Spring Boot", "React", "PostgreSQL", "Spring Security", "JWT"],
    link: "https://github.com/Shashankur7/procureflow",
    featured: true,
  },
  {
    no: "02",
    title: "Safe Rail AI System",
    category: "Computer vision",
    description:
      "Railway-safety computer vision project built with Python, Flask, OpenCV, and YOLOv8.",
    stack: ["Python", "Flask", "OpenCV", "YOLOv8"],
    link: "https://github.com/Shashankur7/safe-rail-ai-system",
  },
  {
    no: "03",
    title: "Core Java Practice",
    category: "Java & problem solving",
    description:
      "Structured Java work covering OOP, collections, custom implementations, algorithms, and data-structures practice.",
    stack: ["Java", "OOP", "Collections", "DSA"],
    link: "https://github.com/Shashankur7/core-java-practice",
  },
];

const skills = {
  Backend: ["Java", "Spring Boot", "Spring Security", "REST APIs", "JPA / Hibernate", "JWT"],
  Frontend: ["React", "JavaScript", "HTML", "CSS", "Vite"],
  Data: ["PostgreSQL", "SQL", "Flyway"],
  Engineering: ["Git", "GitHub", "Maven", "Docker", "GitHub Actions", "Swagger / OpenAPI"],
};

function Arrow() {
  return <span className="arrow">↗</span>;
}

function App() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <div className="app">
      <header className="header">
        <a href="#home" className="wordmark" onClick={close}>
          <span className="wordmark-box">SB</span>
          <span>Shashank Bhoyar</span>
        </a>

        <button className="menu" onClick={() => setOpen(!open)} aria-label="Open menu">
          <span></span><span></span>
        </button>

        <nav className={open ? "nav open" : "nav"}>
          <a href="#about" onClick={close}>About</a>
          <a href="#skills" onClick={close}>Skills</a>
          <a href="#work" onClick={close}>Work</a>
          <a href="#background" onClick={close}>Background</a>
          <a href="#contact" className="nav-contact" onClick={close}>Contact <Arrow /></a>
        </nav>
      </header>

      <main id="home">
        <section className="hero wrap">
          <div className="hero-left">
            <div className="availability"><span></span> Open to entry-level opportunities</div>
            <p className="hero-kicker">JAVA / SPRING BOOT / FULL STACK</p>
            <h1>
              I build software
              <em> that solves</em>
              <br />
              real problems.
            </h1>
            <p className="hero-description">
              I’m Shashank Bhoyar, a Java Full Stack Developer focused on
              backend engineering, REST APIs, PostgreSQL, security, and practical web applications.
            </p>

            <div className="hero-buttons">
              <a className="btn dark" href="#work">View selected work <Arrow /></a>
              <a className="btn light" href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
              <a className="btn light" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            </div>

            <div className="hero-note">
              <span>Currently building with</span>
              <strong>Java · Spring Boot · React · PostgreSQL</strong>
            </div>
          </div>

          <div className="hero-art" aria-label="Abstract software architecture illustration">
            <div className="art-grid"></div>
            <div className="art-orbit orbit-one"></div>
            <div className="art-orbit orbit-two"></div>
            <div className="art-card art-main">
              <div className="art-card-top"><span>system</span><b>01</b></div>
              <div className="art-title">REQUEST</div>
              <div className="art-line long"></div>
              <div className="art-line medium"></div>
              <div className="art-status"><i></i> API / SECURE</div>
            </div>
            <div className="art-card art-small one"><b>DB</b><span>PostgreSQL</span></div>
            <div className="art-card art-small two"><b>API</b><span>Spring Boot</span></div>
            <div className="art-card art-small three"><b>UI</b><span>React</span></div>
            <div className="art-caption">BUILD / TEST / SHIP</div>
          </div>
        </section>

        <section className="ticker">
          <div className="ticker-track">
            <span>JAVA</span><i>•</i><span>SPRING BOOT</span><i>•</i><span>REST APIS</span><i>•</i>
            <span>POSTGRESQL</span><i>•</i><span>REACT</span><i>•</i><span>JAVA</span><i>•</i>
            <span>SPRING BOOT</span><i>•</i><span>REST APIS</span>
          </div>
        </section>

        <section className="section wrap" id="about">
          <div className="section-head">
            <span>01</span>
            <p>ABOUT</p>
          </div>
          <div className="about-layout">
            <h2>Backend-first.<br /><em>Product-minded.</em></h2>
            <div className="about-body">
              <p>
                I’m a B.Tech Information Technology graduate building practical
                applications through Full Stack Java development training and hands-on projects.
              </p>
              <p>
                I enjoy understanding the complete flow of a system — from a React interface
                and REST endpoint to validation, authentication, database design, and business rules.
              </p>
              <div className="about-facts">
                <div><span>Focus</span><strong>Java & Spring Boot</strong></div>
                <div><span>Approach</span><strong>Clean, practical systems</strong></div>
                <div><span>Learning</span><strong>DSA & backend architecture</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section wrap" id="skills">
          <div className="section-head">
            <span>02</span>
            <p>TECHNICAL SKILLS</p>
          </div>
          <div className="skills-intro">
            <h2>The stack I’m <em>building with.</em></h2>
            <p>Technologies I’m actively learning, using, and strengthening through projects.</p>
          </div>
          <div className="skill-table">
            {Object.entries(skills).map(([name, items]) => (
              <div className="skill-row" key={name}>
                <h3>{name}</h3>
                <div className="skill-items">
                  {items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section wrap" id="work">
          <div className="section-head">
            <span>03</span>
            <p>SELECTED WORK</p>
          </div>
          <div className="work-intro">
            <h2>Projects with a<br /><em>reason to exist.</em></h2>
            <p>I prefer a small number of meaningful projects that show how I think, build, and solve problems.</p>
          </div>

          <div className="project-feature">
            <div className="project-visual">
              <div className="browser">
                <div className="browser-bar">
                  <span></span><span></span><span></span>
                  <small>procureflow / dashboard</small>
                </div>
                <div className="mock-app">
                  <aside>
                    <b>PF</b>
                    <span>Overview</span><span>Requests</span><span>Orders</span><span>Inventory</span>
                  </aside>
                  <div className="mock-content">
                    <div className="mock-heading"><small>EMPLOYEE</small><strong>Purchase requests</strong></div>
                    <div className="mock-cards"><div></div><div></div><div></div></div>
                    <div className="mock-list">
                      <div><b>Laptop for new engineer</b><span>Pending</span></div>
                      <div><b>Monitor replacement</b><span>Approved</span></div>
                      <div><b>Office peripherals</b><span>In review</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-info">
              <div className="project-meta"><span>01</span><span>FEATURED PROJECT</span></div>
              <h3>ProcureFlow</h3>
              <p className="project-category">Procurement & inventory management platform</p>
              <p className="project-copy">
                A full-stack business workflow that moves a request through approval,
                procurement, purchase orders, warehouse receipt, and inventory balance.
              </p>
              <ul className="project-points">
                <li>Role-based workflow for employees, managers, procurement, warehouse, and admin.</li>
                <li>JWT authentication, validation, PostgreSQL persistence, and Flyway migrations.</li>
                <li>Designed as a modular monolith with traceable inventory and purchase-order flows.</li>
              </ul>
              <div className="chips">{projects[0].stack.map(x => <span key={x}>{x}</span>)}</div>
              <a className="project-cta" href={projects[0].link} target="_blank" rel="noreferrer">Open repository <Arrow /></a>
            </div>
          </div>

          <div className="project-grid">
            {projects.slice(1).map(project => (
              <article className="project-secondary" key={project.title}>
                <div className="secondary-top"><span>{project.no}</span><span>{project.category}</span></div>
                <div className="secondary-icon">{project.no === "02" ? "CV" : "JV"}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="chips">{project.stack.map(x => <span key={x}>{x}</span>)}</div>
                <a className="project-cta" href={project.link} target="_blank" rel="noreferrer">View on GitHub <Arrow /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="section wrap" id="background">
          <div className="section-head">
            <span>04</span>
            <p>BACKGROUND</p>
          </div>
          <div className="background-layout">
            <div>
              <h2>Learning by <em>building.</em></h2>
              <p>My current path combines formal education, Java development training, and project-based practice.</p>
            </div>
            <div className="timeline">
              <article>
                <span>EDUCATION</span>
                <div><h3>B.Tech — Information Technology</h3><p>KITS Ramtek · RTM Nagpur University</p></div>
              </article>
              <article>
                <span>TRAINING</span>
                <div><h3>Full Stack Java Development</h3><p>QSpiders</p></div>
              </article>
              <article>
                <span>CURRENT FOCUS</span>
                <div><h3>Spring Boot · REST · DSA</h3><p>Strengthening backend architecture, security, databases, and problem solving.</p></div>
              </article>
            </div>
          </div>
        </section>

        <section className="contact wrap" id="contact">
          <div className="contact-inner">
            <div>
              <span className="contact-label">05 / CONTACT</span>
              <h2>Let’s build something <em>useful.</em></h2>
              <p>I’m open to entry-level Java, Spring Boot, and full-stack development opportunities.</p>
            </div>
            <div className="contact-actions">
              <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <Arrow /></a>
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer wrap">
        <span>© 2026 Shashank Bhoyar</span>
        <span>Java Full Stack Developer</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
