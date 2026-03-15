import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, ExternalLink } from 'lucide-react';
import './App.css';
import Avatar from './Avatar';

const Header = () => (
  <nav className="header">
    <motion.div 
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="logo mono accent-text"
    >
      PORTFOLIO_VER_1.0
    </motion.div>
    <div className="nav-links mono">
      {['About', 'Projects', 'Contact'].map((item, i) => (
        <motion.a 
          key={item}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          href={`#${item.toLowerCase()}`}
        >
          {item}
        </motion.a>
      ))}
    </div>
  </nav>
);

const Hero = () => (
  <section className="hero">
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="hero-content"
    >
      <div className="mono accent-text" style={{ marginBottom: '1rem' }}>MERN Stack Architect //</div>
      <h1 className="hero-title">
        Building <span className="accent-text">Scalable</span> <br /> 
        <span className="glitch" data-text="Solutions">Solutions</span>
      </h1>
      <p className="hero-description">
        Hi, I'm <span className="accent-text">Monish Narain</span>. A passionate Full Stack Developer focused on creating user-focused web applications with clean UI and efficient systems.
      </p>
      <div className="hero-actions">
        <button className="tech-btn" onClick={() => window.location.href='#about'}>Access Biography</button>
        <div className="social-links">
          <a href="https://github.com/MonishNarainN" target="_blank" rel="noopener noreferrer">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/monishnarain" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </motion.div>
    
    <div className="hero-visual">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="glass-card avatar-container"
        style={{ width: '100%', height: '500px', overflow: 'hidden' }}
      >
        <Avatar />
      </motion.div>
    </div>
  </section>
);

const Bio = () => (
  <section id="about" className="bio-section">
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card bio-card"
    >
      <div className="mono accent-text">// BIOGRAPHY_DATA (Monish_Narain)</div>
      <h2 style={{ margin: '1rem 0' }}>The Architect</h2>
      <p>
        I enjoy building scalable, user-focused web applications specializing in the MERN stack. 
        I thrive on problem-solving, participating in hackathons, and building impactful digital solutions.
      </p>
      <div className="skills-grid mono">
        {['MongoDB', 'Express.js', 'React', 'Node.js', 'MERN Stack', 'Tailwind CSS'].map(skill => (
          <div key={skill} className="skill-tag">
            <span className="accent-text">&gt;</span> {skill}
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);


const ProjectCard = ({ title, desc, link }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="glass-card project-card"
  >
    <div className="mono accent-text" style={{ fontSize: '0.7rem' }}>Project: {title}</div>
    <h3>{title}</h3>
    <p>{desc}</p>
    <div className="project-footer">
      <a href={link} target="_blank" rel="noopener noreferrer" className="mono accent-text" style={{ fontSize: '0.7rem', textDecoration: 'none', border: '1px solid var(--accent-color)', padding: '0.2rem 0.5rem', marginTop: '0.5rem', display: 'inline-block' }}>
        VIEW_GITHUB
      </a>
    </div>
  </motion.div>
);

const Projects = () => {
  const projectData = [
    {
      title: "GameSphere",
      desc: "A full-stack gaming platform with reviews and community features. Built with React, Node.js, Express, and MongoDB.",
      link: "https://github.com/MonishNarainN/GameSphere.git"
    },
    {
      title: "Gold Loan Ledger",
      desc: "Digital management system for gold loan records, customer details, and repayment tracking.",
      link: "https://github.com/MonishNarainN/Gold-loan-ledger.git"
    },
    {
      title: "Online Grocery",
      desc: "E-commerce application for browsing groceries, cart management, and online ordering.",
      link: "https://github.com/MonishNarainN/Online-Grocery-Shop.git"
    },
    {
      title: "AI Lead Conversion",
      desc: "AI-powered system predicting lead conversion likelihood to improve sales efficiency.",
      link: "https://github.com/MonishNarainN/AI-lead-coversion-system.git"
    },
    {
      title: "AI vs Human Voice Detector",
      desc: "ML system detecting AI-generated vs human voices to prevent voice fraud.",
      link: "https://github.com/MonishNarainN/AI-Voice-Detector-Human-or-AI-voice-.git"
    },
    {
      title: "Tournament booking app",
      desc: "Platform for users to browse and join tournaments with admin management for registrations, payments, and event details. Built with a modern tech stack for performance and type safety.",
      link: "https://github.com/MonishNarainN/Tournament-app.git"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2 className="mono"><span className="accent-text">//</span> Projects</h2>
      </div>
      <div className="projects-grid">
        {projectData.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};


const HireMe = () => (
  <section id="contact" className="hire-me-section">
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="glass-card hire-card"
    >
      <div className="mono accent-text">// INITIATE_CONTACT</div>
      <h2 style={{ margin: '1rem 0', fontSize: '3.5rem' }}>Ready for a <span className="accent-text">New Mission?</span></h2>
      <p style={{ color: 'var(--muted-color)', marginBottom: '2.5rem', fontSize: '1.2rem', maxWidth: '600px' }}>
        I'm currently available for full-time roles and freelance projects. If you have a challenge for me, let's connect and build something extraordinary.
      </p>
      
      <div className="contact-details">
        <div className="contact-item">
          <Mail className="accent-text" size={24} />
          <div>
            <div className="mono" style={{ fontSize: '0.7rem', opacity: 0.5 }}>EMAIL_PROTOCOL</div>
            <div className="mono">monishnarain2006@gmail.com</div>
          </div>
        </div>
        <div className="contact-item">
          <div className="accent-text" style={{ fontSize: '24px', fontWeight: 'bold' }}>#</div>
          <div>
            <div className="mono" style={{ fontSize: '0.7rem', opacity: 0.5 }}>VOICE_LINE</div>
            <div className="mono">+91 9629407006</div>
          </div>
        </div>
      </div>

      <button 
        className="tech-btn hire-btn" 
        onClick={() => window.location.href = 'mailto:monishnarain2006@gmail.com'}
        style={{ marginTop: '2rem', padding: '1.2rem 3rem', fontSize: '1rem' }}
      >
        Hire Monish Narain
      </button>
    </motion.div>
  </section>
);


function App() {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app-container">
      <div 
        className="grid-background" 
        style={{ 
          backgroundPosition: `${mousePos.x / 50}px ${mousePos.y / 50}px` 
        }}
      ></div>
      <div className="scanline"></div>
      
      <Header />
      <main>
        <Hero />
        <Bio />
        <Projects />
        <HireMe />
      </main>
      
      <footer className="footer mono">
        <div>© 2026 USER_PORTFOLIO</div>
        <div>STAY_TUNED_FOR_UPDATES</div>
      </footer>
    </div>
  );
}

export default App;
