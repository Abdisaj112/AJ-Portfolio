import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

import imgEcommerce from '@/assets/project-ecommerce.jpg';
import imgTaskApp from '@/assets/project-taskapp.jpg';
import imgAiChat from '@/assets/project-aichat.jpg';
import imgDevops from '@/assets/project-devops.jpg';
import imgApi from '@/assets/project-api.jpg';
import imgPortfolio from '@/assets/project-portfolio.jpg';
import imgFleet from '@/assets/project-fleet.jpg';
import imgLib from '@/assets/lib.jpg';
import imgClin from '@/assets/clin.jpg';

const projects = [
  {
    title: 'HU Fleet Management System',
    description: 'A comprehensive fleet management solution for Haramaya University with real-time vehicle tracking, maintenance scheduling, fuel monitoring, and driver management dashboard.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Google Maps API'],
    github: '#',
    live: '#',
    image: imgFleet,
  },
  {
    title: 'Library Management System',
    description: 'A complete library management solution with book cataloging, member management, borrowing/return tracking, fine calculation, and automated notifications.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: '#',
    live: '#',
    image: imgLib,
  },
  {
    title: 'Clinical Management System',
    description: 'Healthcare management platform with patient records, appointment scheduling, prescription management, billing, and medical history tracking.',
    tech: ['React', 'TypeScript', 'PostgreSQL', 'Node.js'],
    github: '#',
    live: '#',
    image: imgClin,
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with cart, checkout, payment integration, and admin dashboard built for optimal performance.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: '#',
    live: '#',
    image: imgEcommerce,
  },
  {
    title: 'Task Management App',
    description: 'Real-time collaborative task manager with drag-and-drop kanban boards, team workspaces, and activity tracking.',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io'],
    github: '#',
    live: '#',
    image: imgTaskApp,
  },
  {
    title: 'AI Chat Interface',
    description: 'A modern chat application powered by AI with real-time streaming responses, conversation history, and custom prompts.',
    tech: ['React', 'OpenAI API', 'Tailwind', 'Express'],
    github: '#',
    live: '#',
    image: imgAiChat,
  },
  {
    title: 'Social Media API',
    description: 'RESTful API with authentication, posts, comments, likes, and follow system. Comprehensive docs included.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    github: '#',
    live: '#',
    image: imgPortfolio,
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            A selection of recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative rounded-2xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all duration-500"
              >
                {/* Hero-style image */}
                <div className="relative overflow-hidden h-52">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                  {/* Hover overlay with links */}
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href={project.github} className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors shadow-lg">
                      <Github size={18} />
                    </a>
                    <a href={project.live} className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors shadow-lg">
                      <ExternalLink size={18} />
                    </a>
                  </div>

                  {/* Arrow badge */}
                  <motion.div
                    className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-primary-foreground shadow-lg z-10"
                    style={{ backgroundImage: 'var(--gradient-primary)' }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <ArrowUpRight size={16} />
                  </motion.div>

                  {/* Project title overlay on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <h3 className="text-foreground font-bold text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 pt-2">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Toggle button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn-primary"
          >
            {showAll ? 'Show Less' : `See All (${projects.length})`} →
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
