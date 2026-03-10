import { motion, useInView } from 'framer-motion';
import { Download, ArrowRight, Code2, Database, Smartphone, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import profileImg from '@/assets/profile.png';

const useCountUp = (end, duration = 2000, inView) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { 
        setCount(end); 
        clearInterval(timer); 
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, inView]);
  return count;
};

const stats = [
  { value: 15, suffix: '+', label: 'Projects' },
  { value: 3, suffix: '+', label: 'Years' },
  { value: 10, suffix: '+', label: 'Clients' },
];

const StatCounter = ({ stat, inView }) => {
  const count = useCountUp(stat.value, stat.value < 10 ? 1000 : 2000, inView);
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="text-center px-5 py-3 rounded-2xl bg-card/60 border border-border backdrop-blur-sm"
    >
      <p className="text-2xl font-extrabold gradient-text">{count}{stat.suffix}</p>
      <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
    </motion.div>
  );
};

// Floating icons animation
const FloatingIcon = ({ icon: Icon, delay, x, y }) => {
  return (
    <motion.div
      className="absolute text-primary/20"
      style={{ left: x, top: y }}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 10, -10, 0],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <Icon size={32} />
    </motion.div>
  );
};

const Hero = () => {
  const statsRef = useRef(null);
  const inView = useInView(statsRef, { once: true });

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-0 w-[400px] h-[400px] rounded-full bg-primary/8 blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[80px]"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Floating tech icons */}
        <FloatingIcon icon={Code2} delay={0} x="10%" y="20%" />
        <FloatingIcon icon={Database} delay={1} x="85%" y="30%" />
        <FloatingIcon icon={Smartphone} delay={2} x="15%" y="70%" />
        <FloatingIcon icon={Zap} delay={1.5} x="80%" y="65%" />
      </div>

      <div className="section-container w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-1 text-center md:text-left"
          >
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-primary font-medium text-xs tracking-wider uppercase">Available for work</span>
            </motion.div>

            {/* Main heading with character animation */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground leading-tight">
              {['H', 'i', ',', ' ', 'I', "'", 'm', ' '].map((char, index) => (
                <motion.span
                  key={`char-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.5 + index * 0.05,
                    ease: 'easeOut'
                  }}
                  style={{ display: 'inline-block' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
              <span className="gradient-text">
                {['A', 'b', 'd', 'i', 's', 'a', ' ', 'J', 'e', 'm', 'a', 'l'].map((char, index) => (
                  <motion.span
                    key={`name-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.9 + index * 0.05,
                      ease: 'easeOut'
                    }}
                    style={{ display: 'inline-block' }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 1.5,
                  type: 'spring',
                  stiffness: 200
                }}
                style={{ display: 'inline-block', marginLeft: '0.25rem' }}
              >
                👋
              </motion.span>
            </h1>

            {/* Subtitle */}
            <motion.h2 
              className="text-lg sm:text-xl font-medium text-muted-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              Full-Stack Developer & Problem Solver
            </motion.h2>

            {/* Description */}
            <motion.p 
              className="text-muted-foreground max-w-lg mb-8 leading-relaxed text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.0 }}
            >
              Building scalable web applications and management systems with modern technologies. 
              Specialized in React, Node.js, and creating seamless user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.2 }}
            >
              <a href="#contact" className="btn-primary group">
                Contact Me 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/Abdisa_jemal_cv-1.pdf" className="btn-outline group" download>
                <Download size={16} className="group-hover:translate-y-1 transition-transform" /> 
                Download CV
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex gap-4 mt-10 justify-center md:justify-start"
            >
              {stats.map((stat) => (
                <StatCounter key={stat.label} stat={stat} inView={inView} />
              ))}
            </motion.div>
          </motion.div>

          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Animated outer ring */}
              <motion.div
                className="absolute -inset-4 rounded-full z-0"
                style={{
                  background: 'conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--primary) / 0.1) 25%, hsl(var(--primary) / 0.3) 50%, hsl(var(--primary) / 0.1) 75%, hsl(var(--primary)))',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              />
              <div className="absolute -inset-4 rounded-full bg-background/90 z-[1]" style={{ margin: '3px' }} />

              {/* Profile Photo */}
              <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden relative z-10 border-2 border-primary/20 shadow-[0_0_40px_hsl(var(--primary)/0.15)]">
                <img src={profileImg} alt="Abdisa Jemal" className="w-full h-full object-cover" loading="eager" />
              </div>

              {/* Tech stack badges - improved positioning */}
              <motion.div
                className="absolute -top-2 -right-2 z-20 bg-card border border-border rounded-xl px-3 py-1.5 shadow-lg backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <span className="text-xs font-bold text-primary">⚛️ React</span>
              </motion.div>

              <motion.div
                className="absolute top-1/4 -left-6 z-20 bg-card border border-border rounded-xl px-3 py-1.5 shadow-lg backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <span className="text-xs font-bold text-primary">🟦 TypeScript</span>
              </motion.div>

              <motion.div
                className="absolute bottom-8 -right-4 z-20 bg-card border border-border rounded-xl px-3 py-1.5 shadow-lg backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <span className="text-xs font-bold text-primary">🟢 Node.js</span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 z-20 bg-card border border-border rounded-xl px-3 py-1.5 shadow-lg backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <span className="text-xs font-bold text-primary">🗄️ MongoDB</span>
              </motion.div>

              {/* Name badge */}
              <motion.div
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-card/90 backdrop-blur-sm border border-border rounded-full px-4 py-2 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-semibold text-foreground">Abdisa Jemal</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
