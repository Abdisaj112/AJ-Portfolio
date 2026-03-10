import { motion } from 'framer-motion';
import {
  Code2, Smartphone, PenTool, Database,
  Rocket, ShieldCheck, Server, ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Application Development',
    description: 'Building scalable, high-performance web apps with React, Next.js, and modern frameworks that deliver exceptional user experiences.',
    features: ['Single Page Apps', 'Progressive Web Apps', 'Real-time Features'],
  },
  {
    icon: PenTool,
    title: 'UI/UX Design & Prototyping',
    description: 'Crafting intuitive, pixel-perfect interfaces with user-centered design principles. From wireframes to polished prototypes.',
    features: ['Wireframing', 'Interactive Prototypes', 'Design Systems'],
  },
  {
    icon: Database,
    title: 'Backend & API Development',
    description: 'Engineering robust server-side solutions with Node.js, Express, and PostgreSQL. RESTful and GraphQL APIs built to scale.',
    features: ['REST & GraphQL', 'Database Design', 'Microservices'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Creating cross-platform mobile applications using React Native that feel native on both iOS and Android.',
    features: ['React Native', 'Cross-Platform', 'App Store Ready'],
  },
  {
    icon: ShieldCheck,
    title: 'DevOps & Cloud Infrastructure',
    description: 'Setting up CI/CD pipelines, Docker containers, and cloud deployment on AWS for seamless delivery and monitoring.',
    features: ['Docker & K8s', 'CI/CD Pipelines', 'Cloud Hosting'],
  },
  {
    icon: Server,
    title: 'Backend Solutions',
    description: 'Designing and deploying scalable backend architectures with Node.js, Express, Django, and cloud services for robust data management.',
    features: ['Server Architecture', 'Authentication', 'Cloud Deployment'],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          What I <span className="gradient-text">Offer</span>
        </h2>
        <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
          End-to-end digital solutions to transform your vision into reality
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 hover:border-primary/50 transition-all duration-500 overflow-hidden cursor-default"
            >
              {/* Hover gradient bg */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'linear-gradient(135deg, hsl(var(--primary) / 0.06), transparent 60%)' }} />

              {/* Number watermark */}
              <span className="absolute top-4 right-5 text-5xl font-extrabold text-border/40 group-hover:text-primary/10 transition-colors select-none">
                {String(idx + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <motion.div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-primary-foreground shadow-lg relative z-10"
                style={{ backgroundImage: 'var(--gradient-primary)' }}
                whileHover={{ rotate: -10, scale: 1.1 }}
              >
                <Icon size={26} />
              </motion.div>

              <h3 className="font-bold text-foreground text-lg mb-2 relative z-10">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 relative z-10">{service.description}</p>

              {/* Feature tags */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {service.features.map((f) => (
                  <span key={f} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {f}
                  </span>
                ))}
              </div>

              {/* Bottom line accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ backgroundImage: 'var(--gradient-primary)' }} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
