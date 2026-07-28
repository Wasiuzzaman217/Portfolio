import React from 'react';
import { Mail, FileText, Sparkles, Code2, ExternalLink, CheckCircle, ArrowUpRight } from 'lucide-react';
import { personalInfo, projects, skills } from './data';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">

      {/* ---------------- NAVIGATION BAR ---------------- */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono font-bold text-lg text-indigo-400 flex items-center gap-2">
            <Code2 className="w-5 h-5" />
            &lt;CSE.Dev /&gt;
          </span>
          
          <div className="flex gap-6 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* ---------------- HERO SECTION ---------------- */}
      <section id="about" className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              {personalInfo.status || "Open to Opportunities"}
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-400">
                {personalInfo.name}
              </span>
            </h1>
            <p className="text-xl text-slate-400 font-medium">{personalInfo.role}</p>
            <p className="text-slate-300 leading-relaxed max-w-xl">{personalInfo.bio}</p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              {/* DOWNLOAD CV BUTTON LINKED TO PUBLIC/RESUME.PDF */}
              <a 
                href="/resume.pdf" 
                download="Md_Wasiuzzaman_CV.pdf"
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition shadow-lg shadow-indigo-500/25"
              >
                <FileText className="w-4 h-4" /> Download CV
              </a>

              <a 
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 hover:bg-slate-900 text-slate-200 font-medium transition"
              >
                Contact Me
              </a>
            </div>

            <div className="flex gap-5 pt-4 text-slate-400">
              {/* GitHub Link */}
              {personalInfo.github && (
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
              )}

              {/* LinkedIn Link */}
              {personalInfo.linkedin && (
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              )}

              {/* Facebook Link */}
              {personalInfo.facebook && (
                <a href={personalInfo.facebook} target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              )}

              {/* Email Link */}
              {personalInfo.email && (
                <a href={`mailto:${personalInfo.email}`} className="hover:text-indigo-400 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Profile Picture Box */}
          <div className="relative">
            <div className="w-48 h-48 md:w-60 md:h-60 rounded-2xl border-2 border-indigo-500/30 bg-slate-900 overflow-hidden shadow-2xl shadow-indigo-500/10">
              <img 
                src="/avatar.jpg" 
                alt={personalInfo.name} 
                className="w-full h-full object-cover object-top"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/240?text=Profile'; }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* ---------------- PROJECTS SECTION ---------------- */}
      <section id="projects" className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-800/80">
        <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
        <p className="text-slate-400 mb-8 font-light">A selection of my core engineering and machine learning projects.</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects && projects.map((project, index) => (
            <div 
              key={index} 
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition group flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 text-slate-400">
                    {(project.github || project.githubUrl || project.link) && (
                      <a href={project.github || project.githubUrl || project.link} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                {(project.subtitle || project.tagline) && (
                  <p className="text-xs text-indigo-400 font-mono mb-3">{project.subtitle || project.tagline}</p>
                )}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                {project.tags && project.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="px-2.5 py-1 text-xs rounded-md bg-slate-800/80 text-slate-300 font-mono border border-slate-700/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- SKILLS SECTION ---------------- */}
      <section id="skills" className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-800/80">
        <h2 className="text-3xl font-bold mb-2">Technical Toolkit</h2>
        <p className="text-slate-400 mb-8 font-light">Technologies and frameworks I work with regularly.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills && skills.map((skill, index) => (
            <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-200 hover:border-indigo-500/40 transition">
              <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
              <span className="font-medium text-sm">{typeof skill === 'object' ? skill.name || skill.category : skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- CONTACT SECTION ---------------- */}
      <section id="contact" className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-800/80 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Let's Work Together</h2>
          <p className="text-slate-400 leading-relaxed font-light">
            I am currently open to full-time Software Engineering, AI/ML, or Web Development roles. If you have an opportunity or want to discuss a project, my inbox is always open!
          </p>

          <div className="pt-2">
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition shadow-xl shadow-indigo-500/20"
            >
              <Mail className="w-5 h-5" /> Send Me an Email <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="py-8 border-t border-slate-900 text-center text-slate-500 text-xs font-mono">
        <p>© {new Date().getFullYear()} {personalInfo.name}. Built with React & Tailwind CSS.</p>
      </footer>

    </div>
  );
}