'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ExternalLink, Download, Terminal, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const experiences = [
    {
      role: "Machine Learning Engineer Intern",
      company: "Shopify",
      logo: "/shopify_glyph.svg",
      location: "Toronto, ON",
      period: "May 2025 – August 2025",
      startDate: new Date('2025-05-01'),
      endDate: new Date('2025-08-31'),
      color: "#00ff88",
      highlights: [
        "Optimized training pipeline for generative recommender transformer model, achieving 5% reduction in training time from 24 hours, resulting in significant cost savings on 128 A100 GPU cluster infrastructure.",
        "Developed and deployed uplift modeling system to personalize upgrade plan recommendations, improving paid-plan conversion rates by 2% with estimated revenue impact of $1M+ before year-end.",
        "Implemented causal inference techniques and A/B testing frameworks to validate model performance and measure incremental lift across diverse user segments."
      ]
    },
    {
      role: "Software Engineering Intern - Machine Learning",
      company: "Evertz Microsystems",
      logo: "/evertz.logo.svg",
      location: "Burlington, ON",
      period: "May 2024 – April 2025",
      startDate: new Date('2024-05-01'),
      endDate: new Date('2025-04-30'),
      color: "#00bfff",
      highlights: [
        "Developed and trained Faster R-CNN and YOLO object detection models using PyTorch, achieving 75% improvement in real-time inference for broadcasting environments.",
        "Integrated computer vision models with OpenCV for precise 2D to 3D camera calibration, enabling real-time tracking of moving objects in dynamic sports broadcasting.",
        "Product demoed as key feature at International Broadcasting Convention (IBC) 2024 and National Association of Broadcasters (NAB) 2025."
      ]
    },
    {
      role: "Software Team Lead / Vice President",
      company: "McMaster Exoskeleton",
      logo: "/exo_logo_gold_black.png",
      location: "Hamilton, ON",
      period: "November 2024 – Present",
      startDate: new Date('2024-11-01'),
      endDate: new Date(),
      color: "#ff00ff",
      website: "macexo.com",
      highlights: [
        "Leading team of 15 developers building a robotic lower limb exoskeleton with embedded control systems and real-time safety mechanisms.",
        "Designing and training gait prediction models using sensor fusion and time-series analysis to predict and assist human movement patterns.",
        "Implementing CI/CD pipelines and automated testing frameworks to ensure robust code quality and streamlined development."
      ]
    },
    {
      role: "Software Engineering Intern - Full Stack",
      company: "Evertz Microsystems",
      logo: "/evertz.logo.svg",
      location: "Burlington, ON",
      period: "May 2023 – August 2023",
      startDate: new Date('2023-05-01'),
      endDate: new Date('2023-08-31'),
      color: "#ffaa00",
      highlights: [
        "Built front-end web applications using React and Redux, improving client productivity by up to 50% through real-time feature deployment.",
        "Increased end-to-end testing speeds by 80% using Cypress and CucumberJS, and created a no-code GUI tool for non-developers to author automated tests, reducing validation time by 50%."
      ]
    }
  ];

  // Calculate timeline positions
  const timelineStart = new Date('2023-05-01');
  const timelineEnd = new Date('2026-01-31');
  const totalDuration = timelineEnd.getTime() - timelineStart.getTime();

  const getTimelinePosition = (date: Date) => {
    return ((date.getTime() - timelineStart.getTime()) / totalDuration) * 100;
  };

  const projects = [
    {
      name: "Sanskrit Cipher",
      description: "AI-powered tool for researchers to reassemble ancient Sanskrit text fragments using advanced NLP and pattern recognition.",
      tech: ["TypeScript", "Python", "NLP", "AI"],
      github: "https://github.com/DylanG5/sanskrit-cipher",
      stars: 1
    },
    {
      name: "Hush - Secure Messaging App",
      description: "End-to-end encrypted messaging app with AES-256 encryption, React Native UI, and Flask server handling asynchronous encryption/decryption for concurrent sessions.",
      tech: ["Flask", "React Native", "Firebase", "AES-256"],
      github: "https://github.com/DylanG5/Hush"
    },
    {
      name: "McMaster Exoskeleton Platform",
      description: "Embedded software and ML systems for a robotic lower limb exoskeleton with real-time gait prediction and safety controls.",
      tech: ["C", "Python", "Embedded Systems", "ML"],
      github: "https://github.com/DylanG5/Exoskeleton-Embedded",
      website: "https://macexo.com"
    },
    {
      name: "Avenue to Google Calendar Sync",
      description: "Automation tool to sync McMaster's Avenue LMS deadlines with Google Calendar for students.",
      tech: ["Python", "Google Calendar API"],
      github: "https://github.com/DylanG5/avenue2googleDH9",
      stars: 2
    }
  ];

  const skills = {
    "Languages": ["Python", "Java", "C/C++", "SQL", "JavaScript/TypeScript", "Bash", "Go"],
    "ML & AI": ["PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "NumPy", "Pandas", "Transformers", "YOLO"],
    "MLOps": ["A/B Testing", "Model Training Optimization", "GPU Computing", "Uplift Modeling", "CUDA"],
    "Web Dev": ["React", "Redux", "Node.js", "Flask", "Next.js", "Tailwind", "HTML/CSS"],
    "Tools": ["Git", "Docker", "Jenkins", "Linux", "Firebase", "Cypress", "Selenium", "CI/CD"]
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">
          <motion.div
            className="font-mono text-lg tracking-tight"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Dylan<span className="text-[#00ff88]">_</span>Garner
          </motion.div>
          <div className="hidden md:flex gap-8 font-mono text-sm tracking-wide">
            {['about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="hover:text-[#00ff88] transition-colors uppercase relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00ff88] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Text Content - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="mb-6 font-mono text-[#00ff88] text-sm tracking-widest uppercase">
                Portfolio 2026
              </div>
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 leading-[0.9]">
                Dylan
                <br />
                <span className="text-transparent" style={{
                  WebkitTextStroke: '2px white',
                  textStroke: '2px white'
                }}>Garner</span>
              </h1>
              <div className="text-2xl lg:text-3xl font-light mb-8 text-white/60 tracking-tight">
                Machine Learning Engineer
              </div>
              <p className="text-lg text-white/70 mb-10 leading-relaxed">
                Final year Software Engineering student at McMaster University (graduating April 2026) specializing in ML/AI, computer vision,
                and full-stack development. Building scalable systems that leverage cutting-edge AI.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-[#00ff88] text-black font-mono uppercase text-sm tracking-wider hover:bg-white transition-all hover:scale-105 font-bold"
                >
                  Get In Touch
                </a>
                <a
                  href="/Dylan_Garner_Resume.pdf"
                  download
                  className="px-8 py-4 border-2 border-white/20 font-mono uppercase text-sm tracking-wider hover:border-[#00ff88] hover:text-[#00ff88] transition-all flex items-center gap-2"
                >
                  <Download size={18} />
                  Resume
                </a>
              </div>
              <div className="flex gap-6">
                {[
                  { icon: Github, href: "https://github.com/DylanG5" },
                  { icon: Linkedin, href: "https://linkedin.com/in/dylan-garner03" },
                  { icon: Mail, href: "mailto:dylan.garner@gmail.com" }
                ].map(({ icon: Icon, href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target={href.startsWith('http') ? "_blank" : undefined}
                    rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="p-3 border border-white/20 hover:border-[#00ff88] hover:text-[#00ff88] transition-all"
                    whileHover={{ y: -4 }}
                  >
                    <Icon size={22} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Image - Right Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative order-1 lg:order-2 flex items-start justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-sm lg:max-w-md aspect-square">
                {/* Decorative corner brackets */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#00ff88]"></div>
                <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#00ff88]"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#00ff88]"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#00ff88]"></div>

                <Image
                  src="/dylan_headshot.png"
                  alt="Dylan Garner"
                  width={500}
                  height={500}
                  className="relative p-8 hover:grayscale transition-all duration-500"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              About Me
            </h2>
            <div className="h-1 w-24 bg-[#00ff88]"></div>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg text-white/70 leading-relaxed"
            >
              <p>
                I'm in my final year of Software Engineering at <span className="text-white font-semibold">McMaster University</span> with
                a 3.93 GPA, graduating in April 2026. My journey in tech has been driven by a passion for
                machine learning and building systems that make an impact.
              </p>
              <p>
                At <span className="text-[#00ff88] font-semibold">Shopify</span>, I optimized transformer models on 128 A100 GPUs
                and built uplift modeling systems that drove $1M+ in revenue. At <span className="text-[#00ff88] font-semibold">Evertz</span>,
                I developed computer vision models for sports broadcasting, showcased at major international conventions.
              </p>
              <p>
                Currently, I'm leading a team of 15 developers at <span className="text-[#00ff88] font-semibold">McMaster Exoskeleton</span>,
                building ML-powered robotic systems with real-time gait prediction.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { label: "Machine Learning", desc: "& AI" },
                { label: "Computer", desc: "Vision" },
                { label: "MLOps", desc: "& Scale" },
                { label: "Full-Stack", desc: "Development" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="border-2 border-white/10 p-8 hover:border-[#00ff88] transition-all group"
                >
                  <div className="font-mono text-sm tracking-wide uppercase">
                    {item.label}
                    <br />
                    {item.desc}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section - Vertical Timeline */}
      <section id="experience" className="py-32 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Experience
            </h2>
            <div className="h-1 w-24 bg-[#00ff88]"></div>
          </motion.div>

          {/* Vertical Timeline with Duration Bars */}
          <div className="relative max-w-5xl mx-auto">
            {/* Calculate total timeline height based on date range */}
            {(() => {
              const timelineHeightPx = 1200; // Total height in pixels
              const sortedExps = [...experiences].sort((a, b) => a.startDate.getTime() - b.startDate.getTime());

              return (
                <div className="relative" style={{ height: `${timelineHeightPx}px` }}>
                  {/* Center vertical line */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2"></div>

                  {/* Year markers on the timeline */}
                  {['2023', '2024', '2025', '2026'].map((year) => {
                    const yearDate = new Date(`${year}-01-01`);
                    const position = ((yearDate.getTime() - timelineStart.getTime()) / totalDuration) * 100;
                    const topPx = (position / 100) * timelineHeightPx;

                    return (
                      <div
                        key={year}
                        className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4"
                        style={{ top: `${topPx}px` }}
                      >
                        <div className="w-16 h-px bg-white/20"></div>
                        <div className="font-mono text-sm text-white/40 bg-black px-2">{year}</div>
                        <div className="w-16 h-px bg-white/20"></div>
                      </div>
                    );
                  })}

                  {/* Experience entries */}
                  {sortedExps.map((exp, index) => {
                    const startPos = ((exp.startDate.getTime() - timelineStart.getTime()) / totalDuration) * 100;
                    const endPos = ((exp.endDate.getTime() - timelineStart.getTime()) / totalDuration) * 100;
                    const topPx = (startPos / 100) * timelineHeightPx;
                    const heightPx = ((endPos - startPos) / 100) * timelineHeightPx;
                    const isLeft = index % 2 === 0;

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="absolute w-1/2"
                        style={{
                          top: `${topPx}px`,
                          height: `${heightPx}px`,
                          [isLeft ? 'right' : 'left']: '50%',
                          [isLeft ? 'paddingRight' : 'paddingLeft']: '3rem'
                        }}
                      >
                        {/* Duration bar */}
                        <div
                          className="absolute top-0 w-1 rounded-full"
                          style={{
                            backgroundColor: exp.color,
                            height: `${heightPx}px`,
                            [isLeft ? 'right' : 'left']: isLeft ? 'calc(3rem - 2px)' : 'calc(3rem - 2px)'
                          }}
                        >
                          {/* Start point */}
                          <div
                            className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-black"
                            style={{ backgroundColor: exp.color }}
                          ></div>
                          {/* End point */}
                          <div
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-black"
                            style={{ backgroundColor: exp.color }}
                          ></div>
                        </div>

                        {/* Company logo at midpoint */}
                        <div
                          className="absolute w-12 h-12 bg-black rounded-full p-2 border-2 flex items-center justify-center"
                          style={{
                            borderColor: exp.color,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            [isLeft ? 'right' : 'left']: 'calc(3rem - 24px)'
                          }}
                        >
                          <Image
                            src={exp.logo}
                            alt={exp.company}
                            width={48}
                            height={48}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        {/* Experience card */}
                        <motion.div
                          whileHover={{ scale: 1.02, x: isLeft ? -5 : 5 }}
                          className={`border-2 p-6 bg-black/40 rounded-lg ${isLeft ? 'mr-auto' : 'ml-auto'}`}
                          style={{ borderColor: `${exp.color}40` }}
                        >
                          <div className="mb-3">
                            <h3 className="text-lg font-bold mb-1" style={{ color: exp.color }}>
                              {exp.role}
                            </h3>
                            <div className="text-base font-semibold text-white/60 flex items-center gap-2">
                              {exp.company}
                              {exp.website && (
                                <a href={`https://${exp.website}`} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink size={12} className="hover:text-white transition-colors" />
                                </a>
                              )}
                            </div>
                            <div className="text-xs text-white/40 mt-1">{exp.location}</div>
                            <div className="font-mono text-xs text-white/50 mt-2">{exp.period}</div>
                          </div>
                          <ul className="space-y-1.5 text-sm text-white/70">
                            {exp.highlights.map((highlight, i) => (
                              <li key={i} className="flex gap-2">
                                <span className="mt-1 flex-shrink-0 text-xs" style={{ color: exp.color }}>▸</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Featured Projects
            </h2>
            <div className="h-1 w-24 bg-[#00ff88]"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="border-2 border-white/10 p-8 hover:border-[#00ff88] transition-all group bg-black/40"
              >
                <div className="flex justify-between items-start mb-6">
                  <Terminal className="text-[#00ff88]" size={36} />
                  <div className="flex gap-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#00ff88] transition-colors">
                        <Github size={22} />
                      </a>
                    )}
                    {project.website && (
                      <a href={project.website} target="_blank" rel="noopener noreferrer" className="hover:text-[#00ff88] transition-colors">
                        <ArrowUpRight size={22} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#00ff88] transition-colors">{project.name}</h3>
                <p className="text-white/70 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="font-mono text-xs px-3 py-1 border border-white/20 text-white/60 uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.stars !== undefined && (
                  <div className="mt-6 flex items-center gap-2 text-sm text-white/40 font-mono">
                    <Github size={14} />
                    <span>{project.stars} stars</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Skills & Technologies
            </h2>
            <div className="h-1 w-24 bg-[#00ff88]"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-2 border-white/10 p-8"
              >
                <h3 className="text-xl font-bold mb-6 text-[#00ff88] font-mono uppercase tracking-wider">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 255, 136, 0.1)' }}
                      className="px-3 py-2 bg-white/5 text-sm text-white/70 hover:text-white transition-all cursor-default border border-white/10"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Get In Touch
            </h2>
            <div className="h-1 w-24 bg-[#00ff88] mx-auto mb-12"></div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            I'm currently open to new opportunities and interesting projects. Whether you have a question
            or just want to say hi, feel free to reach out!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a
              href="mailto:dylan.garner@gmail.com"
              className="px-8 py-4 bg-[#00ff88] text-black font-mono uppercase text-sm tracking-wider hover:bg-white transition-all hover:scale-105 font-bold flex items-center gap-3"
            >
              <Mail size={20} />
              dylan.garner@gmail.com
            </a>
            <a
              href="tel:416-294-0435"
              className="px-8 py-4 border-2 border-white/20 font-mono uppercase text-sm tracking-wider hover:border-[#00ff88] hover:text-[#00ff88] transition-all flex items-center gap-3"
            >
              <Phone size={20} />
              416-294-0435
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-6 justify-center mt-16"
          >
            {[
              { icon: Github, href: "https://github.com/DylanG5" },
              { icon: Linkedin, href: "https://linkedin.com/in/dylan-garner03" }
            ].map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border-2 border-white/20 hover:border-[#00ff88] hover:text-[#00ff88] transition-all"
                whileHover={{ y: -4 }}
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-white/40 border-t border-white/10 font-mono text-sm">
        <p className="mb-2">Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion</p>
        <p>© 2026 Dylan Garner. All rights reserved.</p>
      </footer>
    </div>
  );
}
