import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Briefcase, GraduationCap, Award, Coffee } from 'lucide-react';
import profileImg from '@/assets/profile.png';

const highlights = [
  { icon: Briefcase, value: '3+', label: 'Years Experience' },
  { icon: Award, value: '15+', label: 'Projects Done' },
  { icon: GraduationCap, value: 'BSc', label: 'Computer Science' },
  { icon: Coffee, value: '∞', label: 'Cups of Coffee' },
];

const About = () => {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Passionate developer dedicated to creating exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-sm mx-auto">
              <img
                src={profileImg}
                alt="Abdisa Jemal"
                className="w-full h-full object-cover"
                loading="eager"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

              {/* Availability badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-4 left-4 right-4 flex items-center gap-3 bg-card/90 backdrop-blur-md border border-border rounded-2xl px-4 py-3"
              >
                <div className="relative">
                  <span className="w-3 h-3 rounded-full bg-green-500 block" />
                  <span className="w-3 h-3 rounded-full bg-green-500 animate-ping absolute inset-0" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Available for Work</p>
                  <p className="text-xs text-muted-foreground">Open to freelance & full-time</p>
                </div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl border-2 border-primary/20 -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl -z-10" style={{ backgroundImage: 'var(--gradient-primary)', opacity: 0.1 }} />
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-5">
              <span className="text-primary font-medium text-xs tracking-wider uppercase">Who I Am</span>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-2">
              Full-Stack Developer & UI/UX Designer
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm Abdisa Jemal, a passionate Full-Stack Developer based in Ethiopia. I specialize in building modern, responsive web applications that deliver seamless user experiences. With a strong foundation in both frontend and backend technologies, I bring ideas to life with clean code and thoughtful design.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              My journey in software development started with a curiosity for how things work on the web, and has grown into a career building production-ready applications for clients worldwide. I thrive on solving complex problems and continuously learning new technologies.
            </p>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex items-center gap-3 bg-card/60 border border-border rounded-xl p-3 hover:border-primary/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-primary-foreground shrink-0" style={{ backgroundImage: 'var(--gradient-primary)' }}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-sm">{item.value}</p>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary text-sm">
                <ArrowRight size={14} /> View Portfolio
              </a>
              <a href="#contact" className="btn-outline text-sm">
                <MessageCircle size={14} /> Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
