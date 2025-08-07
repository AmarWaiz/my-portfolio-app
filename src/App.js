import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle, ArrowUpRight, ExternalLink, Download, Menu, X, User, Briefcase, Code, Award, Zap, FileText, Palette, Smartphone, ShoppingCart, CreditCard, Wrench, Target, Rocket, Users, Lightbulb, Star, CheckCircle, Clock, GraduationCap, Calendar } from "lucide-react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth <= 768 || ('ontouchstart' in window);
      setIsMobile(isMobileDevice);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Add favicon with code icon
     const favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.href = 'data:image/svg+xml,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m16 18 6-6-6-6"></path>
      <path d="m8 6-6 6 6 6"></path>
    </svg>
  `);
  document.head.appendChild(favicon);

  // Set title
  document.title = "Waiz Ali";
    // Mouse tracking for interactive elements (disable on mobile)
    const handleMouseMove = (e) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };
    
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Progress bar
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      const bar = document.querySelector(".scroll-progress");
      if (bar) bar.style.width = scrolled + "%";

      // Update active section
      const sections = ['home', 'projects', 'skills', 'education', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section === 'home' ? 'top' : section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();

    // Enhanced reveal animation
    let io;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        }),
        { threshold: 0.1 }
      );
      document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    }

    // Enhanced tilt effect (disable on mobile)
    if (!isMobile) {
      const cards = document.querySelectorAll(".tilt");
      const move = (e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        const rx = ((y / r.height) - 0.5) * -20;
        const ry = ((x / r.width) - 0.5) * 25;
        e.currentTarget.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(20px)`;
      };
      const reset = (e) => {
        e.currentTarget.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
      };
      cards.forEach((c) => {
        c.addEventListener("pointermove", move);
        c.addEventListener("pointerleave", reset);
      });

      // Magnetic effect for buttons (disable on mobile)
      const magneticElements = document.querySelectorAll('.magnetic');
      magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        });
        el.addEventListener('mouseleave', () => {
          el.style.transform = 'translate(0px, 0px)';
        });
      });
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener("scroll", onScroll);
      if (io) io.disconnect();
    };
  }, [isMobile]);

  // Update isMobile when it changes
  useEffect(() => {
    const cards = document.querySelectorAll(".tilt");
    const magneticElements = document.querySelectorAll('.magnetic');
    
    if (isMobile) {
      // Remove desktop interactions
      cards.forEach(card => {
        card.style.transform = "none";
      });
      magneticElements.forEach(el => {
        el.style.transform = "none";
      });
    }
  }, [isMobile]);

  const projects = [
    { 
      img: "/imges/project1.PNG", 
      title: "Shopify Store", 
      tags: ["shopify"], 
      live: "https://themadnuts.com/", 
    
      description: "Interactive dashboard with real-time data visualization and AI-powered insights.",
      year: "2024"
    },
    { 
      img: "/imges/project2.png", 
      title: "WordPress Portfolio Website", 
      tags: ["WordPress", "HTML", "CSS"], 
      live: "https://designwithtrinity.com/", 
      case: "#",
      description: "Premium shopping experience with custom WordPress theme and advanced features.",
      year: "2024"
    },
    { 
      img: "/imges/project3.PNG", 
      title: "WordPress Website", 
      tags: ["WordPress", "Elementor", "Custom Javascript"], 
      live: "https://riseon.com.au/", 
      case: "#",
      description: "Award-winning portfolio with cutting-edge animations and 3D interactions.",
      year: "2023"
    },
    { 
      img: "/imges/project4.PNG", 
      title: "WordPress Website", 
      tags: ["WordPress", "Elemento", "Performance"], 
      live: "https://wpc.blinkshift.net/", 
      case: "#",
      description: "Complete store makeover with 40% conversion rate improvement.",
      year: "2023"
    },
  ];

  const skills = [
    {
      category: "Frontend",
      icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
      items: [
        { name: "HTML5", level: 95, icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "CSS3", level: 90, icon: <Palette className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "JavaScript", level: 85, icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Basic React", level: 70, icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" /> }
      ],
      color: "from-blue-400 via-purple-500 to-purple-600"
    },
    {
      category: "CMS & E-commerce",
      icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />, 
      items: [
        { name: "WordPress", level: 90, icon: <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Shopify", level: 85, icon: <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "WooCommerce", level: 80, icon: <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Elementor", level: 85, icon: <Wrench className="w-4 h-4 sm:w-5 sm:h-5" /> }
      ],
      color: "from-emerald-400 via-cyan-500 to-blue-600"
    },
    {
      category: "Tools & Others",
      icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />,
      items: [
        { name: "Basic PHP", level: 65, icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Git", level: 80, icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Figma", level: 75, icon: <Target className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Bootstrap", level: 88, icon: <Palette className="w-4 h-4 sm:w-5 sm:h-5" /> }
      ],
      color: "from-orange-400 via-red-500 to-pink-600"
    }
  ];

  const education = [
    {
      degree: "Advanced Diploma Software Engineering (ADSE)",
      institution: "Aptech, Karachi",
      period: "June 2021 - July 2024",
      type: "Diploma",
      status: "Completed",
      description: "Comprehensive software engineering program covering modern development practices, frameworks, and industry-standard technologies."
    },
    {
      degree: "Intermediate",
      institution: "Jinnah Govt. College, Karachi", 
      period: "2021 - 2022",
      type: "Intermediate",
      status: "Completed",
      description: "Pre-university education with focus on science and mathematics fundamentals."
    },
    {
      degree: "Matriculation",
      institution: "Rasheed Public Secondary School, Karachi",
      period: "2019 - 2020", 
      type: "Secondary",
      status: "Completed",
      description: "Secondary school education with strong foundation in core subjects and analytical thinking."
    }
  ];

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Email Me",
      info: "waizali9876@gmail.com",
      description: "Best for project inquiries and detailed discussions",
      href: "mailto:waizali9876@gmail.com",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <Phone className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Call Me",
      info: "+92 319 205 3367",
      description: "Quick discussions and consultations",
      href: "tel:+923192053367",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "WhatsApp",
      info: "Chat with me",
      description: "Instant messaging and quick updates",
      href: "https://wa.me/923192053367",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "LinkedIn",
      info: "Connect with me",
      description: "Professional networking and opportunities",
      href: "https://www.linkedin.com/in/waiz-ali-b8a2b5235",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: <Github className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "GitHub",
      info: "View my code",
      description: "Open source projects and contributions",
      href: "https://github.com/waizali",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Location",
      info: "Karachi, Pakistan",
      description: "Available worldwide for remote work",
      href: "#",
      color: "from-red-500 to-pink-600"
    }
  ];

  return (
    <>
      {/* Custom cursor - Hide on mobile */}
      {!isMobile && (
        <>
          <div 
            className="custom-cursor"
            style={{ 
              left: mousePosition.x + 'px', 
              top: mousePosition.y + 'px' 
            }}
          />
          
          <div 
            className="cursor-trail"
            style={{ 
              left: mousePosition.x + 'px', 
              top: mousePosition.y + 'px' 
            }}
          />
        </>
      )}

      {/* Scroll progress */}
      <div className="scroll-progress">
        <div className="progress-glow"></div>
      </div>

      {/* Floating particles - Reduce on mobile */}
      <div className="particles">
        {[...Array(isMobile ? 10 : 20)].map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Enhanced Navigation */}
      <header className="site-nav">
        <div className="nav-background"></div>
        <div className="container nav-inner">
          <a href="#top" className={`brand ${!isMobile ? 'magnetic' : ''}`}>
            <div className="brand-icon">
              <Code className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <span className="brand-text">Waiz Ali</span>
          </a>

          <nav className="nav desktop-nav">
            {[
              { href: '#top', label: 'Home', id: 'home' },
              { href: '#projects', label: 'Projects', id: 'projects' },
              { href: '#skills', label: 'Skills', id: 'skills' },
              { href: '#education', label: 'Education', id: 'education' },
              { href: '#about', label: 'About', id: 'about' },
              { href: '#contact', label: 'Contact', id: 'contact' }
            ].map((item) => (
              <a 
                key={item.id}
                href={item.href} 
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                <span>{item.label}</span>
                <div className="nav-indicator"></div>
              </a>
            ))}
          </nav>

        <a
  className={`btn primary desktop-resume ${!isMobile ? 'magnetic' : ''}`}
  href="/Waiz-Ali-Resume.pdf"
  download="Waiz-Ali-Resume.pdf"
>
  <span>Resume</span>
  <Download className="w-3 h-3 sm:w-4 sm:h-4" />
</a>

          <button
            className={`menu-btn ${menuOpen ? "open" : ""} ${!isMobile ? 'magnetic' : ''}`}
            aria-label="Toggle Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </div>

        {/* Creative mobile menu */}
        <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          <div className="mobile-nav-bg"></div>
          <div className="mobile-nav-content">
            {[
              { href: '#top', label: 'Home', icon: <User className="w-4 h-4 sm:w-5 sm:h-5" /> },
              { href: '#projects', label: 'Projects', icon: <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" /> },
              { href: '#skills', label: 'Skills', icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" /> },
              { href: '#education', label: 'Education', icon: <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" /> },
              { href: '#about', label: 'About', icon: <User className="w-4 h-4 sm:w-5 sm:h-5" /> },
              { href: '#contact', label: 'Contact', icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" /> }
            ].map((item, index) => (
              <a 
                key={item.label}
                href={item.href} 
                className="mobile-nav-link"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setMenuOpen(false)}
              >
                <span className="mobile-nav-icon">{item.icon}</span>
                <span className="mobile-nav-text">{item.label}</span>
                <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 mobile-nav-arrow" />
              </a>
            ))}
            <a 
  className="btn primary mobile-resume" 
  href="/resume.pdf"
  download="Waiz-Ali-Resume.pdf"
  onClick={() => setMenuOpen(false)}
>
  <span>Download Resume</span>
  <Download className="w-3 h-3 sm:w-4 sm:h-4" />
</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="top" className="section hero">
        <div className="hero-bg">
          <div className="hero-grid"></div>
          <div className="hero-orb hero-orb-1"></div>
          <div className="hero-orb hero-orb-2"></div>
          <div className="hero-orb hero-orb-3"></div>
        </div>
        
        <div className="container hero-inner">
          <div className="hero-content reveal">
            <div className={`hero-badge ${!isMobile ? 'magnetic' : ''}`}>
              <div className="status-dot"></div>
              <span>Available for freelance</span>
            </div>
            
            <h1 className="hero-title">
              I craft 
              <span className="gradient-text"> beautiful</span>
              <br />
              <span className="highlight-text">
                {"web experiences".split("").map((char, index) => (
                  <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
            </h1>
            
            <p className="hero-description">
              Frontend Developer specializing in React, WordPress & Shopify. 
              I transform ideas into pixel-perfect, user-friendly websites.
            </p>
            
            <div className="hero-cta">
              <a href="#projects" className={`btn primary ${!isMobile ? 'magnetic' : ''}`}>
                <span>View My Work</span>
                <div className="btn-shine"></div>
              </a>
              <a href="#contact" className={`btn secondary ${!isMobile ? 'magnetic' : ''}`}>
                <span>Let's Talk</span>
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-item reveal">
                <div className="stat-number">1.5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item reveal">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Done</div>
              </div>
              <div className="stat-item reveal">
                <div className="stat-number">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className={`avatar-container ${!isMobile ? 'tilt' : ''}`}>
              <div className="avatar-glow"></div>
              <img src="imges/profiles.jpeg" alt="Waiz Ali Khanzada" className="avatar" />
              <div className="avatar-ring"></div>
              <div className="avatar-dots">
                <div className="dot dot-1"></div>
                <div className="dot dot-2"></div>
                <div className="dot dot-3"></div>
              </div>
            </div>
            
            {!isMobile && (
              <div className="floating-elements">
                <div className="float-card card-1">
                  <Code className="w-3 h-3 sm:w-4 sm:h-4 inline mr-2" />
                  React
                </div>
                <div className="float-card card-2">
                  <Smartphone className="w-3 h-3 sm:w-4 sm:h-4 inline mr-2" />
                  WordPress
                </div>
                <div className="float-card card-3">
                  <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 inline mr-2" />
                  Shopify
                </div>
                <div className="float-card card-4">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 inline mr-2" />
                  JavaScript
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Creative Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="section-bg">
          <div className="section-pattern"></div>
        </div>
        
        <div className="container">
          <div className="section-header reveal">
            <div className="section-badge">
              <span className="badge-number">01</span>
              <span className="badge-text">Portfolio</span>
            </div>
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle">
              Crafting digital experiences that make an impact
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article key={project.title} className={`project-card reveal ${!isMobile ? 'tilt' : ''} project-${index + 1}`}>
                <div className="project-image">
                  <img src={project.img} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-year">{project.year}</div>
                    <div className="project-actions">
                      <a href={project.live} className={`action-btn primary ${!isMobile ? 'magnetic' : ''}`}>
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      </a>
                      {/* <a href={project.case} className={`action-btn secondary ${!isMobile ? 'magnetic' : ''}`}>
                        <span>Case Study</span>
                      </a> */}
                    </div>
                  </div>
                </div>
                
                <div className="project-info">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-index">0{index + 1}</div>
                  </div>
                  
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                
                <div className="project-glow"></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-badge">
              <span className="badge-number">02</span>
              <span className="badge-text">Expertise</span>
            </div>
            <h2 className="section-title">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="section-subtitle">
              Technologies I use to bring ideas to life
            </p>
          </div>

          <div className="skills-container">
            {skills.map((skillGroup, groupIndex) => (
              <div key={skillGroup.category} className={`skill-group reveal skill-group-${groupIndex + 1}`}>
                <div className="skill-group-header">
                  <div className="skill-group-icon">{skillGroup.icon}</div>
                  <h3 className="skill-group-title">{skillGroup.category}</h3>
                </div>
                
                <div className="skills-list">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div 
                      key={skill.name} 
                      className={`skill-item ${!isMobile ? 'tilt' : ''}`}
                      style={{ animationDelay: `${(groupIndex * 4 + skillIndex) * 0.1}s` }}
                    >
                      <div className="skill-info">
                        <div className="skill-header">
                          <span className="skill-icon">{skill.icon}</span>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      
                      <div className="skill-bar">
                        <div 
                          className="skill-fill"
                          style={{ 
                            '--target-width': `${skill.level}%`,
                            background: `linear-gradient(90deg, ${skillGroup.color.replace('from-', '').replace('via-', ', ').replace('to-', ', ').replace(/-/g, '')})`,
                            animationDelay: `${(groupIndex * 4 + skillIndex) * 0.2}s`
                          }}
                        >
                          <div className="skill-shine"></div>
                        </div>
                      </div>
                      
                      <div className="skill-glow"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Education Section */}
      <section id="education" className="section education-section">
        <div className="section-bg">
          <div className="section-pattern"></div>
        </div>
        
        <div className="container">
          <div className="section-header reveal">
            <div className="section-badge">
              <span className="badge-number">03</span>
              <span className="badge-text">Education</span>
            </div>
            <h2 className="section-title">
              Academic <span className="gradient-text">Journey</span>
            </h2>
            <p className="section-subtitle">
              Building a strong foundation through continuous learning and growth
            </p>
          </div>

          <div className="education-container">
            <div className="education-timeline">
              <div className="timeline-line-education"></div>
              
              {education.map((edu, index) => (
                <div 
                  key={edu.degree}
                  className={`education-item reveal education-item-${index + 1}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="education-marker">
                    <div className="education-dot">
                      <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                  
                  <div className={`education-card ${!isMobile ? 'tilt' : ''}`}>
                    <div className="education-card-bg"></div>
                    
                    <div className="education-header">
                      <div className="education-type">
                        <span className={`type-badge ${edu.type.toLowerCase()}`}>
                          {edu.type}
                        </span>
                        <span className="status-badge completed">
                          <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                          {edu.status}
                        </span>
                      </div>
                      
                      <div className="education-period">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {edu.period}
                      </div>
                    </div>
                    
                    <div className="education-content">
                      <h3 className="education-degree">{edu.degree}</h3>
                      
                      <div className="education-institution">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        <span>{edu.institution}</span>
                      </div>
                      
                      <p className="education-description">{edu.description}</p>
                    </div>
                    
                    <div className="education-glow"></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Education Stats */}
            <div className="education-stats reveal">
              <div className="education-stat-card">
                <div className="stat-icon">
                  <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="stat-content">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Years of Study</div>
                </div>
              </div>
              
              <div className="education-stat-card">
                <div className="stat-icon">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="stat-content">
                  <div className="stat-number">ADSE</div>
                  <div className="stat-label">Advanced Diploma</div>
                </div>
              </div>
              
              <div className="education-stat-card">
                <div className="stat-icon">
                  <Code className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="stat-content">
                  <div className="stat-number">2024</div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Experience Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content reveal">
              <div className="section-badge">
                <span className="badge-number">04</span>
                <span className="badge-text">About Me</span>
              </div>
              
              <h2 className="section-title">
                Passionate <span className="gradient-text">Developer</span>
              </h2>
              
              <div className="about-text">
                <p>
                  I'm a frontend developer who loves creating beautiful, functional web experiences. 
                  With 3+ years of experience, I specialize in React, WordPress, and Shopify development.
                </p>
                <p>
                  I believe in clean code, user-centered design, and continuous learning. 
                  When I'm not coding, you'll find me exploring new technologies or working on creative projects.
                </p>
              </div>
              
              <div className="about-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="highlight-text">Detail-Oriented</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="highlight-text">Fast Learner</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="highlight-text">Team Player</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="highlight-text">Problem Solver</div>
                </div>
              </div>
            </div>

            <div className="experience-timeline reveal">
              <h3 className="timeline-title">Experience Journey</h3>
              
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-dot"></div>
                    <div className="timeline-line"></div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-date">Oct 2024 - Present</div>
                    <h4 className="timeline-title">Front-End Developer</h4>
                    <p className="timeline-company">Digital Solution</p>
                    <p className="timeline-description">
                      Leading React development and WordPress customization projects, 
                      collaborating with design teams to deliver exceptional user experiences.
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-dot"></div>
                    <div className="timeline-line"></div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-date">May 2024 - Jul 2024</div>
                    <h4 className="timeline-title">WordPress Developer</h4>
                    <p className="timeline-company">Digitizal</p>
                    <p className="timeline-description">
                      Built custom WordPress themes and plugins, optimized site performance, 
                      and implemented responsive designs for various clients.
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-dot"></div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-date">Mar 2022 - 2023</div>
                    <h4 className="timeline-title">Computer Lab Teacher</h4>
                    <p className="timeline-company">Pistion College</p>
                    <p className="timeline-description">
                      Taught web development fundamentals and computer science concepts, 
                      inspiring students to pursue careers in technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Creative Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="contact-bg">
          <div className="contact-pattern"></div>
          <div className="contact-orb"></div>
        </div>
        
        <div className="container">
          <div className="section-header reveal">
            <div className="section-badge">
              <span className="badge-number">05</span>
              <span className="badge-text">Get In Touch</span>
            </div>
            <h2 className="section-title">
              Let's Create <span className="gradient-text">Together</span>
            </h2>
            <p className="section-subtitle">
              Ready to bring your ideas to life? Let's start a conversation.
            </p>
          </div>

          <div className="contact-content">
            {/* Enhanced Contact Grid */}
            <div className="contact-grid">
              {contactMethods.map((method, index) => (
                <div 
                  key={method.title}
                  className={`contact-method reveal ${!isMobile ? 'tilt magnetic' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="contact-method-inner">
                    <div className="contact-method-bg"></div>
                    
                    <div className="contact-icon-wrapper">
                      <div 
                        className="contact-icon-bg"
                        style={{ background: `linear-gradient(135deg, ${method.color.replace('from-', '').replace('to-', ', ')})` }}
                      ></div>
                      <div className="contact-icon">{method.icon}</div>
                    </div>
                    
                    <div className="contact-method-content">
                      <h4 className="contact-method-title">{method.title}</h4>
                      <div className="contact-method-info">
                        {method.href !== '#' ? (
                          <a 
                            href={method.href}
                            target={method.href.startsWith('http') ? '_blank' : undefined}
                            rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="contact-link"
                          >
                            {method.info}
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 contact-link-icon" />
                          </a>
                        ) : (
                          <span className="contact-text">{method.info}</span>
                        )}
                      </div>
                      <p className="contact-method-description">{method.description}</p>
                    </div>
                    
                    <div className="contact-method-glow"></div>
                    <div className="contact-method-shimmer"></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Availability Banner */}
            <div className="availability-banner reveal">
              <div className="availability-inner">
                <div className="availability-bg"></div>
                <div className="availability-content">
                  <div className="availability-status">
                    <div className="status-indicator">
                      <div className="status-pulse"></div>
                      <div className="status-ring"></div>
                    </div>
                    <span className="availability-text">Currently Available for Freelance Projects</span>
                  </div>
                  <p className="availability-description">
                    Let's discuss your next big idea and make it happen! I'm excited to collaborate 
                    on innovative projects that push the boundaries of web development.
                  </p>
                  <div className="availability-cta">    
                    <a href="mailto:waizali9876@gmail.com" className={`btn primary ${!isMobile ? 'magnetic' : ''} cta-primary`}>
                      <span>Start a Project</span>
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                      <div className="btn-shine"></div>
                    </a>
                    <a href="https://wa.me/923192053367" className={`btn secondary ${!isMobile ? 'magnetic' : ''} cta-secondary`}>
                      <span>Quick Chat</span>
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </div>
                  <div className="availability-stats">
                    <div className="availability-stat">
                      <div className="stat-value">
                        <Clock className="w-5 h-5 sm:w-6 sm:h-6 inline mr-1" />
                        24h
                      </div>
                      <div className="stat-label">Response Time</div>
                    </div>
                    <div className="availability-stat">
                      <div className="stat-value">
                        <Star className="w-5 h-5 sm:w-6 sm:h-6 inline mr-1" />
                        100%
                      </div>
                      <div className="stat-label">Client Satisfaction</div>
                    </div>
                    <div className="availability-stat">
                      <div className="stat-value">
                        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 inline mr-1" />
                        50+
                      </div>
                      <div className="stat-label">Projects Completed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="site-footer">
        <div className="footer-bg">
          <div className="footer-grid"></div>
        </div>
        
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <div className="footer-brand">
                <div className="brand-logo">
                  <div className="brand-icon">
                    <Code className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span>Waiz Ali Khanzada</span>
                </div>
                <p>Frontend Developer crafting beautiful web experiences with passion and precision.</p>
                
                <div className="footer-social">
                  <a href="mailto:waizali9876@gmail.com" className={`social-btn ${!isMobile ? 'magnetic' : ''}`} aria-label="Email">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/waiz-ali-b8a2b5235" className={`social-btn ${!isMobile ? 'magnetic' : ''}`} aria-label="LinkedIn">
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a href="https://wa.me/923192053367" className={`social-btn ${!isMobile ? 'magnetic' : ''}`} aria-label="WhatsApp">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>
              
              <div className="footer-links">
                <div className="footer-column">
                  <h4>Navigation</h4>
                  <a href="#top">Home</a>
                  <a href="#projects">Projects</a>
                  <a href="#skills">Skills</a>
                  <a href="#education">Education</a>
                  <a href="#about">About</a>
                  <a href="#contact">Contact</a>
                </div>
                
                <div className="footer-column">
                  <h4>Services</h4>
                  <span>
                    <Code className="w-3 h-3 sm:w-4 sm:h-4 inline mr-2" />
                    React Development
                  </span>
                  <span>
                    <Smartphone className="w-3 h-3 sm:w-4 sm:h-4 inline mr-2" />
                    WordPress Design
                  </span>
                  <span>
                    <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 inline mr-2" />
                    Shopify Stores
                  </span>
                  <span>
                    <Palette className="w-3 h-3 sm:w-4 sm:h-4 inline mr-2" />
                    UI/UX Design
                  </span>
                  <span>
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 inline mr-2" />
                    Performance Optimization
                  </span>
                </div>
              </div>
            </div>
            
            <div className="footer-bottom">
              <div className="footer-copyright">
                <span>© {new Date().getFullYear()} Waiz Ali Khanzada</span>
                <span className="separator">•</span>
                <span>Built with React & Creative Magic ✨</span>
              </div>
              
              <div className="footer-status">
                <div className="status-dot"></div>
                <span>Available for new projects</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons - Better Mobile */}
      <div className="fab-container">
        <a
          href="https://wa.me/923192053367?text=Hi%20Waiz,%20I'm%20interested%20in%20your%20work."
          target="_blank"
          rel="noopener noreferrer"
          className={`fab whatsapp-fab ${!isMobile ? 'magnetic' : ''}`}
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          <div className="fab-ripple"></div>
          <div className="fab-tooltip">WhatsApp</div>
        </a>

        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`fab scroll-top-fab ${!isMobile ? 'magnetic' : ''}`} 
          aria-label="Back to top"
        >
          <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-[-45deg]" />
          <div className="fab-tooltip">Top</div>
        </button>
      </div>
    </>
  );
}