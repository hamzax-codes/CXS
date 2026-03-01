import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { img } from '../../utils/img';
import { Compass, Mountain, MapPin, Star, ChevronDown, Users, Map, Award, Tent, Instagram, Facebook, Bus, Bird, Cloud, Sparkles } from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const socialLinks = [
  { label: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/cusit.excursion.society?igsh=MTh6dzNsdmZ2cG9ybQ%3D%3D&utm_source=qr', color: 'text-pink-500', glow: 'hover:shadow-[0_0_20px_rgba(236,72,153,0.9)] hover:scale-125' },
  { label: 'WhatsApp', icon: WhatsAppIcon, href: 'https://wa.me/923188368361', color: 'text-green-400', glow: 'hover:shadow-[0_0_20px_rgba(34,197,94,0.9)] hover:scale-125' },
];

const HERO_BG = img('/images/image.jpg');

const floatingIcons = [
  { icon: Compass, top: '20%', left: '82%', size: 'w-9 h-9', color: 'text-[#870000]', xFactor: 55, yFactor: 35, delay: 0 },
  { icon: Mountain, top: '35%', left: '8%', size: 'w-7 h-7', color: 'text-slate-300', xFactor: -45, yFactor: 30, delay: 0.1 },
  { icon: MapPin, top: '18%', left: '22%', size: 'w-6 h-6', color: 'text-yellow-300', xFactor: -60, yFactor: -40, delay: 0.2 },
  { icon: Star, top: '55%', left: '78%', size: 'w-5 h-5', color: 'text-amber-300', xFactor: 40, yFactor: -55, delay: 0.3 },
  { icon: Tent, top: '70%', left: '12%', size: 'w-6 h-6', color: 'text-cyan-300', xFactor: -35, yFactor: 25, delay: 0.15 },
];

const stats = [
  { icon: Map, value: '25+', label: 'Tours Done', color: 'text-[#870000]' },
  { icon: Users, value: '300+', label: 'Members', color: 'text-slate-400' },
  { icon: Mountain, value: '18+', label: 'Destinations', color: 'text-amber-400' },
  { icon: Award, value: '3+', label: 'Years', color: 'text-cyan-400' },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMouse({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };
    const hero = heroRef.current;
    hero?.addEventListener('mousemove', handleMouseMove);
    return () => hero?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const springConfig = { type: 'spring' as const, damping: 20, stiffness: 70, mass: 0.8 };

  return (
    <section id="home" ref={heroRef} className="relative h-[100vh] min-h-[600px] overflow-hidden">

      {/* Background image with subtle parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{ backgroundImage: `url('${HERO_BG}')` }}
        animate={{ x: mouse.x * -15, y: mouse.y * -10 }}
        transition={springConfig}
      />

      {/* Sunset Orange & Gigas gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#190A05]/80 via-slate-900/70 to-[#870000]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.4)_100%)]" />

      {/* Ambient glow blobs */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(244,59,71,0.15) 0%, transparent 70%)' }}
        animate={{ x: mouse.x * 30, y: mouse.y * 20 }}
        transition={springConfig}
      />
      <motion.div
        className="absolute bottom-1/3 right-20 w-52 h-52 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)' }}
        animate={{ x: mouse.x * 25, y: mouse.y * 18 }}
        transition={springConfig}
      />
      <motion.div
        className="absolute top-1/3 left-20 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(69,58,148,0.15) 0%, transparent 70%)' }}
        animate={{ x: mouse.x * -22, y: mouse.y * -15 }}
        transition={springConfig}
      />

      {/* Floating Parallax Icons */}
      {floatingIcons.map(({ icon: Icon, top, left, size, color, xFactor, yFactor, delay }, i) => (
        <motion.div
          key={i}
          className="absolute glass rounded-2xl p-3 z-10 hidden sm:block"
          style={{ top, left }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: loaded ? 1 : 0,
            scale: loaded ? 1 : 0,
            x: mouse.x * xFactor,
            y: mouse.y * yFactor,
          }}
          transition={{
            ...springConfig,
            opacity: { delay: delay + 0.8, duration: 0.5 },
            scale: { delay: delay + 0.8, duration: 0.4, type: 'spring' as const },

          }}
          whileHover={{ scale: 1.2, rotate: 8 }}
        >
          <Icon className={`${size} ${color}`} strokeWidth={1.8} />
        </motion.div>
      ))}

      {/* Extra Small Animations */}
      {/* Moving Clouds */}
      <motion.div
        className="absolute top-[15%] left-0 z-10 text-white/10 pointer-events-none"
        initial={{ x: "-10vw" }}
        animate={{ x: "110vw" }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        <Cloud className="w-24 h-24" />
      </motion.div>
      <motion.div
        className="absolute top-[25%] right-0 z-10 text-white/5 pointer-events-none"
        initial={{ x: "110vw" }}
        animate={{ x: "-10vw" }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear", delay: 10 }}
      >
        <Cloud className="w-32 h-32" />
      </motion.div>

      {/* Flying Birds */}
      <motion.div
        className="absolute top-[20%] z-20 pointer-events-none flex gap-4 text-slate-300/40"
        initial={{ left: "-10%", y: 0 }}
        animate={{ left: "110%", y: [0, -10, 0, 10, 0] }}
        transition={{
          left: { duration: 15, repeat: Infinity, ease: "linear", delay: 2 },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <Bird className="w-6 h-6 -scale-x-100" />
        <Bird className="w-4 h-4 -scale-x-100 mt-2" />
      </motion.div>

      {/* Animated Revealing Bus */}
      <motion.div
        className="absolute top-1/2 md:top-[45%] -translate-y-1/2 -ml-16 z-30 pointer-events-none"
        initial={{ left: "-10%" }}
        animate={{ left: "120%" }}
        transition={{ duration: 5, ease: "linear", delay: 0.5 }}
      >
        <div className="relative">
          {/* Sparkles trailing behind the bus */}
          <motion.div
            className="absolute -top-4 -left-6 text-yellow-300"
            animate={{ scale: [0, 1, 0], opacity: [0, 1, 0], y: -20, x: -10 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
          <motion.div
            className="absolute -bottom-2 -left-4 text-[#190A05]"
            animate={{ scale: [0, 1, 0], opacity: [0, 1, 0], y: -10, x: -15 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
          >
            <Sparkles className="w-3 h-3" />
          </motion.div>

          {/* Gradient definition for the Bus */}
          <svg width="0" height="0" className="absolute">
            <defs>
              <linearGradient id="busGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop stopColor="#870000" offset="0%" />
                <stop stopColor="#190A05" offset="100%" />
              </linearGradient>
            </defs>
          </svg>
          <Bus
            className="w-20 h-20 md:w-28 md:h-28 drop-shadow-[0_0_25px_rgba(244,59,71,0.8)]"
            stroke="url(#busGradient)"
            strokeWidth={1.5}
            color="transparent"
          />
          {/* Exhaust/Speed lines */}
          <motion.div
            className="absolute top-[60%] right-[90%] w-10 h-1 bg-gradient-to-l from-[#870000]/80 to-transparent rounded-full"
            animate={{ width: ['0px', '50px', '0px'], opacity: [0, 1, 0], x: [0, -30, -60] }}
            transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>

      {/* Main Content with Clip Path Reveal */}
      <motion.div
        className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6 pt-16"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 5, ease: "linear", delay: 0.5 }}
      >
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-[#870000]/40">
          <span className="w-1.5 h-1.5 rounded-full bg-[#870000] animate-pulse" />
          <span className="text-[#870000] text-[10px] font-semibold tracking-[0.2em] uppercase">
            CUSIT Excursion Society
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#190A05] animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Main Heading with Line Animation */}
        <div className="mb-6 relative">
          <h1 className="text-[clamp(1.8rem,5.5vw,3.8rem)] font-black text-white leading-[0.9] tracking-tight relative z-10">
            <span>EXPLORE.</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#870000] to-[#870000]">DISCOVER.</span>
            <br />
            <span>CONQUER.</span>
          </h1>
          {/* Animated SVG Line Decoration */}
          <svg className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 max-w-[400px] h-3 z-0" viewBox="0 0 200 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M 5 5 Q 50 1 100 5 T 195 5"
              stroke="url(#paint0_linear)"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 2 }}
            />
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="5" x2="200" y2="5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#870000" stopOpacity="0" />
                <stop offset="0.5" stopColor="#870000" />
                <stop offset="1" stopColor="#190A05" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Subtitle */}
        <p className="text-white/65 text-sm md:text-base max-w-xl mb-8 font-light leading-relaxed">
          Most adventurous society of cusit  — turning campus life into
          extraordinary journeys across mountains, valleys, glaciers and beyond.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button
            onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-6 py-3 bg-gradient-to-r from-[#870000] to-[#190A05] text-white text-sm rounded-full font-semibold tracking-wide hover:shadow-2xl hover:shadow-[#870000]/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center"
          >
            <Mountain className="w-3.5 h-3.5 group-hover:translate-y-[-2px] transition-transform" />
            Explore Our Tours
          </button>
          <button
            onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 glass text-white text-sm rounded-full font-semibold border border-white/30 hover:bg-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300 tracking-wide"
          >
            Join the Society →
          </button>
        </div>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-medium">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </motion.button>
      {/* Social Links Bottom Left */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-6 md:left-10 z-20 flex flex-col gap-3"
      >
        {socialLinks.map(({ label, icon: Icon, href, color, glow }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={label}
            className={`group w-10 h-10 rounded-2xl z-20 flex items-center justify-center transition-all duration-300 ${glow}`}
          >
            {/* Self-drawing svg wrap */}
            <motion.div
              initial={{ strokeDasharray: 100, strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 2 }}
            >
              <Icon className={`w-5 h-5 ${color}`} />
            </motion.div>
          </a>
        ))}
        {/* Decorative line to connect */}
        <div className="w-px h-16 bg-gradient-to-t from-transparent to-white/20 mx-auto mt-2" />
      </motion.div>

    </section>
  );
}