import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const timelineItems = [
  {
    type: 'education',
    title: 'B.Sc. in Computer Science',
    org: 'Haramaya University',
    period: '2023 – 2027 (Expected)',
    description:
      'Third-year Computer Science student with strong foundations in software development, database systems, algorithms, and web technologies.',
  },
  {
    type: 'education',
    title: 'Web Development Certification',
    org: 'Udacity',
    period: '2025',
    description:
      'Completed training in modern web development including HTML, CSS, JavaScript, and responsive website design.',
  },
  {
    type: 'education',
    title: 'Programming & Software Training',
    org: 'EthioCoders',
    period: '2025',
    description:
      'Participated in programming and technology training focused on coding fundamentals, logical thinking, and problem solving.',
  },
  {
    type: 'education',
    title: 'Artificial Intelligence Fundamentals',
    org: 'Udacity Online Learning',
    period: '2026',
    description:
      'Completed training covering the fundamentals of artificial intelligence, including machine learning concepts, data analysis, and AI applications.',
  },
  {
    type: 'education',
    title: 'Python Programming',
    org: 'Udemy Online Learning',
    period: '2026',
    description:
      'Completed a comprehensive Python programming course covering core programming concepts, problem solving, and practical development skills.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Education & <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            My academic journey and professional development
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

            {timelineItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Icon */}
                <div className="absolute left-0 w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-lg">
                  {item.type === 'education' ? (
                    <GraduationCap className="text-primary" size={24} />
                  ) : (
                    <Briefcase className="text-primary" size={24} />
                  )}
                </div>

                {/* Content */}
                <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {item.title}
                    </h3>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-primary font-semibold mb-3">{item.org}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
