import { motion } from 'motion/react';
import { Mountain, Instagram, Facebook, Youtube, Mail, Phone, MapPin, Heart, MessageCircle, ExternalLink } from 'lucide-react';

const socialLinks = [
  {
    label: 'YouTube',
    icon: Youtube,
    href: 'https://youtube.com/@excursionsociety',
    color: 'hover:text-[#870000] hover:bg-[#870000]/10',
    bg: 'bg-[#FF0000]',
  },
];

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Our Team', href: '#team' },
  { label: 'Past Events', href: '#events' },
  { label: 'Upcoming Tour', href: '#upcoming' },
  { label: 'Join Society', href: '#apply' },
  { label: 'Contact Us', href: '#contact' },
];

const scrollTo = (href: string) => {
  const id = href.replace('#', '');
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-white pt-16 pb-8">
      {/* Decorative top edge */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#870000]/50 to-transparent mb-16" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-lg shadow-[#870000]/25">
                <img src="/images/logo.jpg" alt="Excursion Society Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-sm font-black tracking-[0.2em] uppercase">Excursion</div>
                <div className="text-[10px] text-[#870000] tracking-[0.35em] uppercase font-medium">Society</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Pakistan's most adventurous university society. We explore mountains, valleys, deserts, and everything in between — together.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map(({ label, icon: Icon, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 transition-all duration-300 hover:scale-110 hover:border-white/20 ${color}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-slate-400 hover:text-[#870000] text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#190A05] group-hover:bg-[#870000] transition-colors" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Profiles */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-widest">Follow Us</h4>
            <div className="space-y-4">
              {socialLinks.map(({ label, icon: Icon, href, bg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm`}>
                    <Icon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium group-hover:text-[#870000] transition-colors">{label}</div>
                    <div className="text-slate-500 text-[11px]">@excursion.society</div>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-600 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-widest">Contact Us</h4>
            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'excursion@university.edu.pk', href: 'mailto:excursion@university.edu.pk' },
                { icon: Phone, label: 'WhatsApp', value: '+92 300 123 4567', href: 'https://wa.me/923001234567' },
                { icon: MapPin, label: 'Location', value: 'Student Activity Center, Block B', href: null },
              ].map(({ icon: Icon, label, value, href }, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#870000]/10 group-hover:border-[#870000]/30 transition-all">
                    <Icon className="w-3.5 h-3.5 text-[#870000]" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-[10px] uppercase tracking-wider mb-0.5">{label}</div>
                    {href ? (
                      <a href={href} className="text-slate-300 text-sm hover:text-[#870000] transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-slate-300 text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Office hours */}
            <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-slate-400 text-xs mb-2 font-semibold uppercase tracking-wider">Office Hours</p>
              <p className="text-slate-300 text-xs">Mon – Fri · 12:00 PM – 3:00 PM</p>
              <p className="text-slate-500 text-xs mt-1">Room 204, Student Activity Center</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
          <div className="flex items-center gap-2">
            <span>© 2025 Excursion Society · Your University</span>
            <span className="text-white/10">|</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-rose-500 inline fill-rose-500" /> for adventurers
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#870000] animate-pulse" />
              Accepting applications for 2025
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
