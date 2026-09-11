"use client";

import Image from "next/image";

const projects = [
  {
    number: "01",
    title: "Food Adulteration Detection",
    description:
      "AI-based ensemble model for the detection and quantification of sugar adulteration using a self-created image dataset.",
    technologies: [
      "Python",
      "Deep Learning",
      "Computer Vision",
      "Machine Learning",
    ],
    type: "Research & Thesis",
  },
  {
    number: "02",
    title: "Blind Person Guide Robot",
    description:
      "An assistive robotics prototype designed to support visually impaired users through obstacle detection and environmental sensing.",
    technologies: ["ESP32", "IoT", "Embedded Systems", "Sensors"],
    type: "Hardware & Robotics",
  },
  {
    number: "03",
    title: "FitFat",
    description:
      "A health and fitness platform featuring calorie tracking, diet planning, and an administrative dashboard.",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL"],
    type: "Full-Stack Development",
  },
  {
    number: "04",
    title: "SkillWise",
    description:
      "A collaborative skill-sharing platform with community and assessment features.",
    technologies: ["MERN Stack", "React.js", "Node.js", "MongoDB"],
    type: "Web Application",
  },
  {
    number: "05",
    title: "Matrimonial Website",
    description:
      "A database-driven web application designed to manage user profiles, preferences, and matchmaking information.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    type: "Web Development",
  },
  {
    number: "06",
    title: "Smart Safety-Zone of Rickshaw Enforcement System",
    description:
      "An IoT-based road safety solution developed as a robotics prototype using embedded hardware systems.",
    technologies: ["Robotics", "IoT", "Embedded Systems"],
    type: "Robotics Prototype",
  },
];

const skills = [
  {
    category: "Languages",
    items: "Python · C/C++ · JavaScript · Java · SQL · Assembly",
  },
  {
    category: "Web Development",
    items:
      "MERN Stack · React.js · Node.js · Express.js · HTML · PHP · CSS",
  },
  {
    category: "Databases",
    items: "MySQL · MongoDB",
  },
  {
    category: "Tools",
    items: "Git · GitHub · Postman · VS Code · XAMPP · Figma",
  },
];

export default function Home() {
  return (
    <main>
      {/* ================= NAVIGATION ================= */}

      <nav className="navbar">
        <a href="#" className="logo">
          N<span>A</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-right">
          <a
            href="https://github.com/nashita-anjum"
            target="_blank"
            rel="noopener noreferrer"
            className="github-nav"
          >
            GitHub ↗
          </a>

          <a href="#contact" className="nav-contact">
            Let&apos;s Talk
          </a>
        </div>
      </nav>

    {/* Hero */}
<section className="hero">
  <div className="hero-background">
    <div className="red-glow" />
    <div className="grid-pattern" />
  </div>

  <div className="hero-layout">

    {/* LEFT — NAME + INTRO */}
    <div className="hero-content">
      <div className="status">
        <span className="status-dot" />
        AVAILABLE FOR OPPORTUNITIES
      </div>

      <p className="hero-small">
        COMPUTER SCIENCE &amp; ENGINEERING
      </p>

      <h1>
        Nashita
        <br />
        <span>Anjum.</span>
      </h1>

      <h2>
        Researcher &amp; Developer building technology with
        <span> purpose.</span>
      </h2>

      <p className="hero-description">
        Computer Science &amp; Engineering graduate from BRAC University
        with a strong foundation in machine learning research, full-stack
        development, and data-driven problem solving.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="button primary">
          Explore My Work <span>↗</span>
        </a>

        <a href="#research" className="button outline">
          View Research
        </a>
      </div>

      <div className="hero-socials">
        <a
          href="https://github.com/nashita-anjum"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>

        

        <a href="mailto:anjumnashita@gmail.com">
          Email ↗
        </a>
      </div>
    </div>

    {/* RIGHT — SEPARATE PHOTO BOX */}
    <div className="profile-area">

      <div className="profile-label">
        <span>PROFILE</span>
        <span>01 / 01</span>
      </div>

      <div className="profile-card">
        <Image
          src="/profile.jpg"
          alt="Nashita Anjum"
          fill
          priority
          className="profile-image"
        />

        <div className="profile-overlay" />

        <div className="profile-corner top-left" />
        <div className="profile-corner top-right" />
        <div className="profile-corner bottom-left" />
        <div className="profile-corner bottom-right" />
      </div>

      <div className="profile-caption">
        <span>COMPUTER SCIENCE</span>
        <span>&amp; ENGINEERING</span>
      </div>

    </div>

  </div>

  
</section>
      {/* ================= ABOUT ================= */}

      <section id="about" className="section">
        <div className="section-heading">
          <p className="section-number">01</p>
          <p className="section-label">ABOUT ME</p>
        </div>

        <div className="about-content">
          <h2>
            Turning curiosity into
            <span> meaningful work.</span>
          </h2>

          <div className="about-text">
            <p>
              I am a Computer Science &amp; Engineering graduate from BRAC
              University with a CGPA of 3.97/4.00.
            </p>

            <p>
              My interests lie at the intersection of artificial intelligence,
              machine learning, computer vision, software development, and
              robotics. I enjoy exploring real-world problems and transforming
              ideas into practical technological solutions.
            </p>

            <p>
              Alongside technical work, I have developed experience in
              academic mentoring, undergraduate instruction support, and
              teaching computer skills.
            </p>

            <div className="stats">
              <div>
                <strong>3.97</strong>
                <span>CGPA / 4.00</span>
              </div>

              <div>
                <strong>06+</strong>
                <span>Projects</span>
              </div>

              <div>
                <strong>01</strong>
                <span>Research Thesis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RESEARCH ================= */}

      <section id="research" className="section dark-section">
        <div className="section-heading">
          <p className="section-number">02</p>
          <p className="section-label">RESEARCH</p>
        </div>

        <div className="research-intro">
          <h2>
            Exploring AI for
            <span> real-world problems.</span>
          </h2>

          <p>
            My undergraduate research focuses on image-based food adulteration
            detection using machine learning and deep learning approaches.
          </p>
        </div>

        <div className="research-card">
          <div className="research-top">
            <span>UNDERGRADUATE THESIS</span>
            <span>2026</span>
          </div>

          <h3>
            Food Adulteration Detection
            <br />
            Using Machine Learning
          </h3>

          <p>
            Developed an AI-based ensemble model for the detection and
            quantification of sugar adulteration using a self-created image
            dataset. Also explored poppy seed adulteration and meat freshness
            detection through image-based AI models.
          </p>

          <div className="research-tags">
            <span>Machine Learning</span>
            <span>Deep Learning</span>
            <span>Computer Vision</span>
            <span>Image Classification</span>
          </div>

          <div className="research-footer">
            <span>MANUSCRIPT IN PREPARATION</span>
            <span>↗</span>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}

      <section id="projects" className="section">
        <div className="section-heading">
          <p className="section-number">03</p>
          <p className="section-label">SELECTED PROJECTS</p>
        </div>

        <div className="projects-header">
          <h2>
            Things I&apos;ve
            <span> worked with.</span>
          </h2>

          <p>
            A selection of academic, software, AI, and hardware projects.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>

              <p className="project-type">{project.type}</p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tags">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-arrow">↗</div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}

      <section id="experience" className="section dark-section">
        <div className="section-heading">
          <p className="section-number">04</p>
          <p className="section-label">EXPERIENCE</p>
        </div>

        <h2 className="experience-title">
          Learning, teaching,
          <span> mentoring.</span>
        </h2>

        <div className="experience-list">
          <div className="experience-item">
            <div className="experience-date">2025</div>

            <div>
              <h3>Student Tutor</h3>

              <p className="experience-place">
                BRAC University · CSE Department
              </p>

              <p>
                Mentored students in basic programming and related coursework,
                providing academic guidance and support.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-date">2023</div>

            <div>
              <h3>Volunteer Teacher</h3>

              <p className="experience-place">
                BRACU Srijon Programme
              </p>

              <p>
                Taught ICT and basic computer skills to underprivileged
                children, developing engaging and accessible learning
                approaches.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-date">2022—Present</div>

            <div>
              <h3>Private Tutor</h3>

              <p className="experience-place">Independent</p>

              <p>
                Developed strong communication, mentoring, and instructional
                skills through private home tutoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}

      <section className="section">
        <div className="section-heading">
          <p className="section-number">05</p>
          <p className="section-label">EDUCATION</p>
        </div>

        <div className="education-list">
          <div className="education-item">
            <div className="education-year">2026</div>

            <div>
              <h3>B.Sc. in Computer Science &amp; Engineering</h3>
              <p>BRAC University</p>
              <strong>CGPA 3.97 / 4.00</strong>
            </div>
          </div>

          <div className="education-item">
            <div className="education-year">2021</div>

            <div>
              <h3>HSC — Science</h3>
              <p>Adamjee Cantonment College</p>
              <strong>GPA 5.00 / 5.00</strong>
            </div>
          </div>

          <div className="education-item">
            <div className="education-year">2019</div>

            <div>
              <h3>SSC — Science</h3>
              <p>Shaheed Bir Uttam Lt. Anwar Girls&apos; College</p>
              <strong>GPA 5.00 / 5.00</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}

      <section id="skills" className="section skills-section">
        <div className="section-heading">
          <p className="section-number">06</p>
          <p className="section-label">TECHNICAL SKILLS</p>
        </div>

        <h2>
          My technical
          <span> toolkit.</span>
        </h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.category}>
              <h3>{skill.category}</h3>
              <p>{skill.items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}

      <section className="section dark-section">
        <div className="section-heading">
          <p className="section-number">07</p>
          <p className="section-label">ACHIEVEMENTS</p>
        </div>

        <h2>
          Milestones along
          <span> the way.</span>
        </h2>

        <div className="achievement-list">
          <p>01 — BRAC University Merit Scholarship</p>
          <p>02 — One of the Best Website Projects, Spring 2025</p>
          <p>03 — Government Scholarships for JSC, SSC &amp; HSC</p>
          <p>04 — School Captain, Grade X</p>
          <p>
            05 — Consistently strong academic performance in technical courses
          </p>
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact" className="contact-section">
        <p className="section-label">08 — CONTACT</p>

        <h2>
          Let&apos;s
          <br />
          <span>connect.</span>
        </h2>

        <p>
          I&apos;m open to research opportunities, collaborations, academic
          work, and interesting technology projects.
        </p>

        <div className="contact-buttons">
          <a
            href="mailto:anjumnashita@gmail.com"
            className="button primary"
          >
            anjumnashita@gmail.com ↗
          </a>

          <a
            href="https://github.com/nashita-anjum"
            target="_blank"
            rel="noopener noreferrer"
            className="button outline"
          >
            GitHub ↗
          </a>

         
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer>
        <div>
          <strong>NASHITA ANJUM</strong>
          <span>Computer Science &amp; Engineering</span>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/nashita-anjum"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
        </div>

        <p>© 2026 Nashita Anjum</p>
      </footer>
    </main>
  );
}