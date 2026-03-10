import { ArrowUp, Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border pt-14 pb-6 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="AJ Logo" className="h-10 w-auto mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full-Stack Developer crafting digital solutions with modern technologies and clean design.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center gap-1">
                    <span className="text-primary">›</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone size={14} className="text-primary" /> +251 966083236
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail size={14} className="text-primary" /> abdisaj12@gmail.com
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin size={14} className="text-primary" /> Haramaya, Ethiopia
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Get the latest information</h4>
            <p className="text-muted-foreground text-sm mb-3">Stay updated with my latest projects and articles.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-secondary border border-border rounded-l-full px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
              <button
                className="px-4 py-2 rounded-r-full text-primary-foreground"
                style={{ backgroundImage: 'var(--gradient-primary)' }}
              >
                <Mail size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            Copyright © {new Date().getFullYear()} Abdisa Jemal. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3">
            {[Github, Twitter, Linkedin].map((Icon, i) => {
              const links = [
                'https://github.com/Abdisaj112',
                'https://twitter.com/abdisaj112', 
                'https://linkedin.com/in/abdisa-jemal'
              ];
              return (
                <a key={i} href={links[i]} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                  <Icon size={14} />
                </a>
              );
            })}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-8 h-8 rounded-full flex items-center justify-center text-primary-foreground ml-2"
              style={{ backgroundImage: 'var(--gradient-primary)' }}
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
