import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mountain, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Our Team', href: '#team' },
  { label: 'Events', href: '#events' },
  { label: 'Upcoming', href: '#upcoming' },
  { label: 'Apply', href: '#apply' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = ['home', 'team', 'events', 'upcoming', 'apply', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY + 100 >= el.offsetTop) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'glass-white shadow-xl shadow-[#190A05]/10 py-2'
          : 'bg-transparent py-4'
        }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo('#home')} className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl overflow-hidden shadow-lg shadow-[#870000]/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            <img src="/images/logo.jpg" alt="Excursion Society Logo" className="w-full h-full object-cover" />
          </div>
          <div className="text-left leading-tight">
            <div className={`text-sm font-black tracking-[0.2em] uppercase transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              Excursion
            </div>
            <div className={`text-[10px] font-medium tracking-[0.35em] uppercase transition-colors ${scrolled ? 'text-[#190A05]' : 'text-[#870000]'}`}>
              Society
            </div>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = active === id;
            return (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className={`text-sm tracking-wide relative group font-medium transition-colors ${scrolled
                    ? isActive ? 'text-[#190A05]' : 'text-slate-700 hover:text-[#190A05]'
                    : isActive ? 'text-[#870000]' : 'text-white/80 hover:text-white'
                  }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#870000] to-slate-400 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                />
              </button>
            );
          })}
          <button
            onClick={() => scrollTo('#apply')}
            className="px-5 py-2.5 bg-gradient-to-r from-[#870000] to-[#190A05] text-white text-sm rounded-full font-semibold hover:shadow-xl hover:shadow-[#870000]/40 hover:scale-105 transition-all duration-300"
          >
            Join Us ✦
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-white border-t border-white/20 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left text-slate-800 py-3 px-4 rounded-xl hover:bg-[#870000]/10 hover:text-[#190A05] transition-all font-medium text-sm"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.05 }}
                onClick={() => scrollTo('#apply')}
                className="w-full mt-2 py-3 px-4 bg-gradient-to-r from-[#870000] to-[#190A05] text-white rounded-xl font-semibold text-sm"
              >
                Join the Society ✦
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
