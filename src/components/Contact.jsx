import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Github, Linkedin, Twitter, Phone, CheckCircle, AlertCircle } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'abdisaj12@gmail.com', href: 'mailto:abdisaj12@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+251 966083236', href: 'tel:+251966083236' },
  { icon: MapPin, label: 'Location', value: 'Haramaya, Ethiopia', href: '#' },
];

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/Abdisaj112' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/abdisa-jemal' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/abdisaj112' },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simple mailto fallback - opens email client
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:abdisaj12@gmail.com?subject=${subject}&body=${body}`;
    
    // Show success message
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Have a project in mind? Let's work together to build something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Left - Contact info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Card */}
            <div className="rounded-2xl p-6 text-primary-foreground relative overflow-hidden" style={{ backgroundImage: 'var(--gradient-primary)' }}>
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/10 translate-y-1/2 -translate-x-1/2" />
              
              <h3 className="font-bold text-xl mb-2 relative z-10">Let's talk!</h3>
              <p className="text-sm opacity-90 mb-6 relative z-10 leading-relaxed">
                I'm open to freelance opportunities and exciting collaborations. Drop me a message!
              </p>

              <div className="space-y-4 relative z-10">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a key={item.label} href={item.href} className="flex items-center gap-3 group">
                      <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <Icon size={16} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-wider opacity-70">{item.label}</p>
                        <p className="text-sm font-medium">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="flex gap-3 mt-8 relative z-10">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 md:p-8 space-y-5">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground text-sm">Thank you for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : status === 'error' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <AlertCircle size={48} className="text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Oops! Something went wrong</h3>
                  <p className="text-muted-foreground text-sm mb-4">Please try again or email me directly at abdisaj12@gmail.com</p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="btn-outline text-sm"
                  >
                    Try Again
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Full Name</label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        disabled={status === 'sending'}
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Email Address</label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        disabled={status === 'sending'}
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all disabled:opacity-50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Subject</label>
                    <input
                      type="text"
                      placeholder="Project Discussion"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      disabled={status === 'sending'}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Message</label>
                    <textarea
                      placeholder="Tell me about your project..."
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      disabled={status === 'sending'}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all resize-none disabled:opacity-50"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full justify-center text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={status !== 'sending' ? { scale: 1.01 } : {}}
                    whileTap={status !== 'sending' ? { scale: 0.98 } : {}}
                  >
                    {status === 'sending' ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </motion.button>
                </>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
