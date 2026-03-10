import { motion } from 'framer-motion';

import reactIcon from '@/assets/icons/react.png';
import nodejsIcon from '@/assets/icons/nodejs.png';
import mongodbIcon from '@/assets/icons/mongodb.png';
import gitIcon from '@/assets/icons/git.png';
import mobileIcon from '@/assets/icons/mobile.png';
import webdevIcon from '@/assets/icons/webdev.png';

const skills = [
  { name: 'React', level: 99, icon: reactIcon },
  { name: 'Node.js', level: 93, icon: nodejsIcon },
  { name: 'MongoDB', level: 90, icon: mongodbIcon },
  { name: 'Git / GitHub', level: 94, icon: gitIcon },
  { name: 'Mobile App', level: 90, icon: mobileIcon },
  { name: 'Web Development', level: 95, icon: webdevIcon },
];

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            My Work <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 text-center cursor-default hover:border-primary/50 transition-all duration-500 overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'linear-gradient(135deg, hsl(var(--primary) / 0.08), transparent 60%)' }} />

              {/* Icon */}
              <motion.div
                className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-4 bg-background border border-border shadow-lg relative z-10 p-3 transition-all duration-500 group-hover:shadow-[0_0_25px_hsl(var(--primary)/0.4)] group-hover:border-primary/50"
                whileHover={{ rotate: -10, scale: 1.15 }}
              >
                <img src={skill.icon} alt={skill.name} className="w-14 h-14 object-contain drop-shadow-md transition-all duration-500 group-hover:drop-shadow-[0_0_12px_hsl(var(--primary)/0.5)]" loading="lazy" />
              </motion.div>

              <h3 className="font-bold text-foreground mb-3 relative z-10">{skill.name}</h3>

              {/* Progress bar */}
              <div className="relative mx-auto w-full z-10">
                <div className="h-2 rounded-full bg-muted/50 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundImage: 'var(--gradient-primary)' }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 + idx * 0.05, ease: 'easeOut' }}
                  />
                </div>
                <motion.span
                  className="inline-block mt-2 text-xs font-bold text-primary-foreground px-3 py-0.5 rounded-full"
                  style={{ backgroundImage: 'var(--gradient-primary)' }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + idx * 0.05 }}
                >
                  {skill.level}%
                </motion.span>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ backgroundImage: 'var(--gradient-primary)' }} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
