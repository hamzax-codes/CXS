import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Compass, Mountain, MapPin, Star, ChevronDown, Users, Map, Award, Tent, Instagram, Facebook, MessageCircle, Bus, Bird, Cloud, Sparkles } from 'lucide-react';

const socialLinks = [
  { label: 'Instagram', icon: Instagram, href: 'https://instagram.com/excursion.society', color: 'text-white/60 group-hover:text-pink-400', bg: 'hover:border-pink-500/50 hover:bg-pink-500/20 hover:shadow-[0_0_25px_rgba(236,72,153,0.6)]' },
  { label: 'Facebook', icon: Facebook, href: 'https://facebook.com/excursionsociety', color: 'text-white/60 group-hover:text-blue-400', bg: 'hover:border-blue-500/50 hover:bg-blue-500/20 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]' },
  { label: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/923001234567', color: 'text-white/60 group-hover:text-green-400', bg: 'hover:border-green-500/50 hover:bg-green-500/20 hover:shadow-[0_0_25px_rgba(34,197,94,0.6)]' },
];

const HERO_BG = 'https://images.unsplash.com/photo-1673505413397-0cd0dc4f5854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920';

const floatingIcons = [
  { icon: Compass, top: '20%', left: '82%', size: 'w-9 h-9', color: 'text-[#f43b47]', xFactor: 55, yFactor: 35, delay: 0 },
  { icon: Mountain, top: '35%', left: '8%', size: 'w-7 h-7', color: 'text-slate-300', xFactor: -45, yFactor: 30, delay: 0.1 },
  { icon: MapPin, top: '18%', left: '22%', size: 'w-6 h-6', color: 'text-yellow-300', xFactor: -60, yFactor: -40, delay: 0.2 },
  { icon: Star, top: '55%', left: '78%', size: 'w-5 h-5', color: 'text-amber-300', xFactor: 40, yFactor: -55, delay: 0.3 },
  { icon: Tent, top: '70%', left: '12%', size: 'w-6 h-6', color: 'text-cyan-300', xFactor: -35, yFactor: 25, delay: 0.15 },
];

const stats = [
  { icon: Map, value: '25+', label: 'Tours Done', color: 'text-[#f43b47]' },
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
    <section id="home" ref={heroRef} className="relative h-screen min-h-[700px] overflow-hidden">

      {/* Background image with subtle parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{ backgroundImage: `url('${HERO_BG}')` }}
        animate={{ x: mouse.x * -15, y: mouse.y * -10 }}
        transition={springConfig}
      />

      {/* Sunset Orange & Gigas gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#453a94]/80 via-slate-900/70 to-[#f43b47]/30" />
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
          className="absolute glass rounded-2xl p-3 z-10"
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
        transition={{ duration: 5, ease: "linear", delay: 0.5, repeat: Infinity, repeatDelay: 8 }}
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
            className="absolute -bottom-2 -left-4 text-[#453a94]"
            animate={{ scale: [0, 1, 0], opacity: [0, 1, 0], y: -10, x: -15 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
          >
            <Sparkles className="w-3 h-3" />
          </motion.div>

          {/* Gradient definition for the Bus */}
          <svg width="0" height="0" className="absolute">
            <defs>
              <linearGradient id="busGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop stopColor="#f43b47" offset="0%" />
                <stop stopColor="#453a94" offset="100%" />
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
            className="absolute top-[60%] right-[90%] w-10 h-1 bg-gradient-to-l from-[#f43b47]/80 to-transparent rounded-full"
            animate={{ width: ['0px', '50px', '0px'], opacity: [0, 1, 0], x: [0, -30, -60] }}
            transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>

      {/* Main Content with Clip Path Reveal */}
      <motion.div
        className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6 pt-16"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: ["inset(0 100% 0 0)", "inset(0 -10% 0 0)"] }}
        transition={{ duration: 5, ease: "linear", delay: 0.5, repeat: Infinity, repeatDelay: 8 }}
      >

        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 glass px-5 py-2.5 rounded-full mb-8 border border-[#f43b47]/40">
          <span className="w-2 h-2 rounded-full bg-[#f43b47] animate-pulse" />
          <span className="text-[#f43b47] text-xs font-semibold tracking-[0.2em] uppercase">
            University Excursion Society
          </span>
          <span className="w-2 h-2 rounded-full bg-[#453a94] animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Main Heading with Line Animation */}
        <div className="mb-6 relative">
          <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-black text-white leading-[0.9] tracking-tight relative z-10">
            EXPLORE.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f43b47] to-[#453a94]">DISCOVER.</span>
            <br />
            CONQUER.
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
                <stop stopColor="#f43b47" stopOpacity="0" />
                <stop offset="0.5" stopColor="#f43b47" />
                <stop offset="1" stopColor="#453a94" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Subtitle */}
        <p className="text-white/65 text-base md:text-xl max-w-2xl mb-10 font-light leading-relaxed">
          Pakistan's most adventurous university society — turning campus life into
          extraordinary journeys across mountains, valleys, glaciers and beyond.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button
            onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 bg-gradient-to-r from-[#f43b47] to-[#453a94] text-white rounded-full font-semibold tracking-wide hover:shadow-2xl hover:shadow-[#f43b47]/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center"
          >
            <Mountain className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform" />
            Explore Our Tours
          </button>
          <button
            onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 glass text-white rounded-full font-semibold border border-white/30 hover:bg-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300 tracking-wide"
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
        {socialLinks.map(({ label, icon: Icon, href, color, bg }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={label}
            className={`group w-14 h-14 glass rounded-3xl z-20 flex items-center justify-center border border-white/20 transition-all duration-300 hover:scale-125 ${bg}`}
          >
            {/* Self-drawing svg wrap */}
            <motion.div
              initial={{ strokeDasharray: 100, strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 2 }}
            >
              <Icon className={`w-7 h-7 transition-colors duration-300 ${color}`} />
            </motion.div>
          </a>
        ))}
        {/* Decorative line to connect */}
        <div className="w-px h-16 bg-gradient-to-t from-transparent to-white/20 mx-auto mt-2" />
      </motion.div>

    </section>
  );
}