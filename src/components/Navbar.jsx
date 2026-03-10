import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import logo from '@/assets/logo.png';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Me', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map(item => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <motion.img
            src={logo}
            alt="AJ Logo"
            className="h-10 w-auto"
            animate={{
              filter: [
                'drop-shadow(0 0 0px hsl(28 95% 55% / 0))',
                'drop-shadow(0 0 10px hsl(28 95% 55% / 0.5))',
                'drop-shadow(0 0 0px hsl(28 95% 55% / 0))',
              ],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.15 }}
          />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors duration-200 font-medium ${
                activeSection === item.href ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
          <a href="#contact" className="btn-primary text-sm !px-5 !py-2.5">
            Let's Talk
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 pb-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-primary text-sm mt-3 inline-flex">
            Let's Talk <ArrowRight size={14} />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
