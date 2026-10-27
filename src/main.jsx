import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const profile = {
  name: "Shashank Bhoyar",
  role: "Java Full Stack Developer",
  email: "bhoyarshashank4@gmail.com",
  github: "https://github.com/Shashankur7",
  linkedin: "https://www.linkedin.com/in/shashank-bhoyar-592145203",
  portfolio: "https://shashank-bhoyar-portfolio.vercel.app/",
};

const projects = [
  {
    no: "01", title: "ProcureFlow", type: "JAVA / FULL STACK", subtitle: "Procurement & inventory workflows",
    description: "A business workflow platform connecting purchase requests, role-based approvals, purchase orders, suppliers, warehouse receipts, and inventory balances.",
    stack: ["Java", "Spring Boot", "React", "PostgreSQL", "Spring Security", "JWT"],
    link: "https://github.com/Shashankur7/procureflow", featured: true,
  },
  {
    no: "02", title: "Employee Leave Management", type: "JAVA / WEB APPLICATION", subtitle: "Leave requests and approvals",
    description: "An application focused on employee leave workflows, request handling, and clear role-based management.",
    stack: ["Java", "Spring Boot", "SQL", "REST APIs"],
    link: "https://github.com/Shashankur7/employee-leave-management",
  },
  {
    no: "03", title: "Core Java Practice", type: "JAVA / DSA", subtitle: "Fundamentals through practice",
    description: "A growing collection of Java exercises covering object-oriented programming, collections, algorithms, and problem solving.",
    stack: ["Java", "OOP", "Collections", "DSA"],
    link: "https://github.com/Shashankur7/core-java-practice",
  },
  {
    no: "04", title: "Safe Rail AI", type: "COMPUTER VISION", subtitle: "Railway safety monitoring",
    description: "A computer-vision project exploring railway-track obstacle detection with Python, OpenCV, Flask, and YOLOv8.",
    stack: ["Python", "Flask", "OpenCV", "YOLOv8"],
    link: "https://github.com/Shashankur7/safe-rail-ai-system",
  },
];

const skillGroups = [
  { name: "Java & Backend", items: ["Core Java", "OOP", "Spring Boot", "REST APIs", "Spring Security", "JPA / Hibernate"] },
  { name: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"] },
  { name: "Databases", items: ["SQL", "PostgreSQL", "MySQL", "JDBC"] },
  { name: "Tools & Practices", items: ["Git", "GitHub", "Maven", "Docker", "Postman", "Software Testing"] },
];

function Arrow({ className = "" }) { return <span className={"arrow " + className} aria-hidden="true">↗</span>; }

function HeroSculpture() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  return <div className="hero-sculpture" onPointerMove={e => {
    const r = e.currentTarget.getBoundingClientRect();
    setTilt({ x: ((e.clientX - r.left) / r.width - .5) * 16, y: ((e.clientY - r.top) / r.height - .5) * -12 });
  }} onPointerLeave={() => setTilt({ x: 0, y: 0 })} aria-label="Interactive abstract Java engineering sculpture">
    <div className="scene-grid" />
    <div className="scan-line" />
    <div className="orbit orbit-a" />
    <div className="orbit orbit-b" />
    <div className="orbit orbit-c" />
    <div className="core-wrap" style={{ transform: `translate(-50%, -50%) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }}>
      <div className="core-glow" />
      <div className="core-disc"><span>SB</span><i /></div>
    </div>
    <span className="float-tag tag-a">JAVA / OOP</span>
    <span className="float-tag tag-b">SPRING BOOT</span>
    <span className="float-tag tag-c">SQL / DATA</span>
    <span className="float-tag tag-d">REST APIs</span>
    <div className="scene-hud"><span>ENGINEERING <b>· 01</b></span><span>MOVE TO EXPLORE ↗</span></div>
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSkill, setActiveSkill] = useState(0);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    }), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const nav = [["ABOUT", "#about"], ["JOURNEY", "#journey"], ["JAVA PROJECTS", "#projects"], ["SKILLS", "#skills"]];

  return <div className="site-shell">
    <header className="site-header">
      <a href="#home" className="brand" onClick={() => setMenuOpen(false)}><span className="brand-mark">SB</span><span>SHASHANK BHOYAR<span className="brand-dot">.</span></span></a>
      <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? "CLOSE −" : "MENU +"}</button>
      <nav className={menuOpen ? "site-nav nav-open" : "site-nav"}>
        {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>LET'S TALK <Arrow /></a>
      </nav>
    </header>

    <main id="home">
      <section className="hero-section">
        <div className="hero-copy">
          <div className="availability"><span /> OPEN TO ENTRY-LEVEL OPPORTUNITIES</div>
          <p className="eyebrow">JAVA DEVELOPER · INDIA</p>
          <h1>Building useful<br /><em>software,</em> one<br />good decision at a time.</h1>
          <p className="hero-description">I’m Shashank — a Java Full Stack Developer interested in reliable backend systems, thoughtful workflows, and applications that solve real problems.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#projects">EXPLORE MY WORK <Arrow /></a>
            <a className="button button-outline" href={profile.github} target="_blank" rel="noreferrer">GITHUB <Arrow /></a>
          </div>
          <div className="hero-footnote"><span>CURRENT TOOLKIT</span><b>JAVA · SPRING BOOT · SQL · REACT</b></div>
        </div>
        <HeroSculpture />
        <div className="hero-index"><span>01 / 05</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <div className="ticker"><div className="ticker-track"><span>JAVA</span><i>✳</i><span>SPRING BOOT</span><i>✳</i><span>REST APIS</span><i>✳</i><span>DATABASES</span><i>✳</i><span>FULL STACK</span><i>✳</i><span>JAVA</span><i>✳</i><span>SPRING BOOT</span><i>✳</i><span>REST APIS</span></div></div>

      <section className="about-stage" id="about">
        <div className="about-inner">
          <div className="section-marker"><span>01</span><span>ABOUT ME / PHILOSOPHY</span></div>
          <div className="about-heading reveal"><p className="micro-label">HOW I THINK ABOUT SOFTWARE</p><h2>Good software is<br /> <em>clear thinking,</em><br />made useful.</h2></div>
          <div className="about-story reveal">
            <p>I believe good software is not just code that runs. It is <em>clear thinking made useful</em> — reliable logic, thoughtful design, and systems people can trust.</p>
            <p>As a B.Tech Information Technology graduate, I’m building my skills through Java development, backend projects, and consistent problem-solving practice. I like understanding the whole flow: from a user's action to API validation, business rules, and the data that makes it work.</p>
          </div>
          <div className="principles">
            <article className="principle reveal"><span>01 / LOGIC</span><h3>Make the<br />fundamentals solid.</h3><p>Understand the problem before reaching for a solution.</p></article>
            <article className="principle reveal"><span>02 / CRAFT</span><h3>Keep code<br />clear and intentional.</h3><p>Readable code is easier to debug, extend, and trust.</p></article>
            <article className="principle reveal"><span>03 / IMPACT</span><h3>Solve a real<br />problem.</h3><p>Build for people and workflows, not just a demo screen.</p></article>
          </div>
        </div>
      </section>

      <section className="journey-section" id="journey">
        <div className="section-marker"><span>02</span><span>THE JOURNEY</span></div>
        <div className="journey-title reveal"><p className="micro-label">LEARN / BUILD / IMPROVE</p><h2>Learning by<br /><em>building.</em></h2><p className="journey-intro">A foundation in Information Technology, followed by hands-on Java practice and projects that turn concepts into working systems.</p></div>
        <div className="journey-track">
          <article className="journey-item reveal"><span className="journey-year">2022 — 2026</span><div className="journey-line" /><div><p className="micro-label">FOUNDATION</p><h3>B.Tech — Information Technology</h3><p>Kavikulguru Institute of Technology and Science · RTM Nagpur University</p></div></article>
          <article className="journey-item reveal"><span className="journey-year">IN PROGRESS</span><div className="journey-line" /><div><p className="micro-label">ENGINEERING PRACTICE</p><h3>Java / Spring Boot</h3><p>Core Java, REST APIs, databases, validation, authentication, and backend workflows.</p></div></article>
          <article className="journey-item reveal"><span className="journey-year">EVERY DAY</span><div className="journey-line" /><div><p className="micro-label">NEXT CHAPTER</p><h3>Build. Test. Refine.</h3><p>Improving DSA, clean code, software testing, and practical full-stack development.</p></div></article>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-marker"><span>03</span><span>SELECTED WORK / JAVA FIRST</span></div>
        <div className="projects-heading"><div><p className="micro-label">IDEAS TURNED INTO PROJECTS</p><h2>Work with a<br /><em>reason to exist.</em></h2></div><p>Projects that show how I approach workflows, backend logic, data, and problem-solving.</p></div>
        <div className="project-tabs" role="tablist" aria-label="Select project">{projects.map((p, i) => <button key={p.no} className={activeProject === i ? "project-tab active" : "project-tab"} onClick={() => setActiveProject(i)} role="tab" aria-selected={activeProject === i}><span>{p.no}</span>{p.title}<Arrow /></button>)}</div>
        <div className="project-showcase" key={projects[activeProject].no}>
          <div className="project-art">
            <div className="project-art-grid" />
            <div className="project-window"><div className="window-bar"><i/><i/><i/><span>{projects[activeProject].title.toLowerCase().replaceAll(" ", "-")}</span></div><div className="window-body"><div className="window-sidebar"><b>{activeProject === 0 ? "PF" : activeProject === 1 ? "LM" : activeProject === 2 ? "JV" : "AI"}</b><span/><span/><span/><span/></div><div className="window-main"><small>{projects[activeProject].type}</small><h3>{projects[activeProject].title}</h3><div className="window-stats"><i/><i/><i/></div><div className="window-row"/><div className="window-row short"/><div className="window-row"/><div className="window-row mid"/></div></div>
            <div className="project-art-caption">CONCEPT / WORKFLOW / IMPLEMENTATION</div>
          </div>
          <div className="project-detail"><div className="project-meta"><span>{projects[activeProject].no}</span><span>{projects[activeProject].type}</span></div><p className="micro-label">{projects[activeProject].subtitle}</p><h3>{projects[activeProject].title}</h3><p className="project-description">{projects[activeProject].description}</p><div className="project-stack">{projects[activeProject].stack.map(x => <span key={x}>{x}</span>)}</div><a className="project-link" href={projects[activeProject].link} target="_blank" rel="noreferrer">VIEW PROJECT ON GITHUB <Arrow /></a></div>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-marker"><span>04</span><span>TOOLS / TECHNOLOGIES</span></div>
        <div className="skills-heading"><p className="micro-label">A STACK IN PROGRESS</p><h2>The tools I use<br />to <em>make it work.</em></h2><p>Skills I’m learning, using, and strengthening through practice and projects.</p></div>
        <div className="skills-accordion">{skillGroups.map((group, i) => <article className={activeSkill === i ? "skill-accordion active" : "skill-accordion"} key={group.name}><button onClick={() => setActiveSkill(activeSkill === i ? -1 : i)} aria-expanded={activeSkill === i}><span className="skill-number">0{i + 1}</span><span className="skill-name">{group.name}</span><span className="skill-count">{String(group.items.length).padStart(2, "0")} SKILLS</span><span className="skill-plus">{activeSkill === i ? "−" : "+"}</span></button>{activeSkill === i && <div className="skill-list">{group.items.map(item => <span key={item}>{item}</span>)}</div>}</article>)}</div>
      </section>

      <section className="contact-section" id="contact"><div className="contact-orbit" /><div className="section-marker"><span>05</span><span>CONTACT / NEXT STEP</span></div><p className="micro-label">OPEN TO OPPORTUNITIES</p><h2>Let’s build<br /><em>something useful.</em></h2><p className="contact-copy">Looking for an entry-level Java, Spring Boot, or full-stack opportunity where I can contribute, learn from a team, and keep growing as an engineer.</p><div className="contact-links"><a className="contact-primary" href={`mailto:${profile.email}`}>SAY HELLO <Arrow /></a><a href={profile.github} target="_blank" rel="noreferrer">GITHUB <Arrow /></a><a href={profile.linkedin} target="_blank" rel="noreferrer">LINKEDIN <Arrow /></a></div><div className="contact-big">SHASHANK<span>.</span></div></section>
    </main>
    <footer className="site-footer"><span>© 2026 SHASHANK BHOYAR</span><span>JAVA FULL STACK DEVELOPER</span><a href="#home">BACK TO TOP ↑</a></footer>
  </div>;
}

createRoot(document.getElementById("root")).render(<App />);
