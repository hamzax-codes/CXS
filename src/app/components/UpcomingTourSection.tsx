import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { Calendar, MapPin, Users, DollarSign, CheckCircle, MessageCircle, Clock, ChevronRight } from 'lucide-react';

const UPCOMING_IMAGE = 'https://images.unsplash.com/photo-1658817261180-2940a80fd019?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200';

const upcomingTour = {
  name: 'Naran Kaghan Spring Gala',
  subtitle: 'Most awaited tour of the year',
  location: 'Naran, KPK',
  fullDate: 'March 20–25, 2026',
  deadline: 'March 10, 2026',
  totalSpots: 40,
  spotsLeft: 13,
  price: 'PKR 18,000',
  whatsapp: '+923001234567',
  highlights: [
    'Lake Saif ul Malook Sunrise',
    'Babusar Top (4,173m)',
    'Lulusar & Dudipatsar Lakes',
    'ATV Ride on Snow',
    '3-Star Hotel + Camping Night',
    'Professional Tour Guide',
  ],
  includes: ['Transport (A/C Coach)', 'Accommodation (3N)', 'Meals (3x Daily)', 'Entry Tickets', 'First Aid Kit', 'Society T-Shirt'],
  targetDate: new Date('2026-03-20'),
};

function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <div className="glass rounded-2xl px-4 py-3 mb-2 min-w-[60px]">
        <div className="text-white font-black text-3xl tabular-nums leading-none">
          {String(value).padStart(2, '0')}
        </div>
      </div>
      <div className="text-white/60 text-[10px] tracking-widest uppercase font-medium">{label}</div>
    </div>
  );
}

export default function UpcomingTourSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = upcomingTour.targetDate.getTime() - Date.now();
      if (diff <= 0) return;
      setCountdown({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const spotsFilled = upcomingTour.totalSpots - upcomingTour.spotsLeft;
  const pct = Math.round((spotsFilled / upcomingTour.totalSpots) * 100);

  const whatsappMsg = encodeURIComponent(`Hi! I'm interested in joining the ${upcomingTour.name} tour. Please share more details.`);

  return (
    <section id="upcoming" className="reveal-section relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${UPCOMING_IMAGE}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-teal-950/95 via-slate-950/90 to-slate-950/80" />

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-slate-500/10 blur-[80px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full border border-teal-500/30 mb-4">
            <span className="w-2 h-2 rounded-full bg-slate-400 animate-pulse" />
            <span className="text-slate-300 text-xs font-semibold tracking-widest uppercase">Now Booking Open</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Upcoming{' '}
            <span className="text-gradient-teal">Excursion</span>
          </h2>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-4xl overflow-hidden shadow-2xl shadow-black/50"
          style={{ borderRadius: '2rem' }}
        >
          {/* Left: Tour Info */}
          <div className="lg:col-span-3 glass p-8 md:p-12">
            <div className="inline-flex items-center gap-2 bg-slate-500/20 text-slate-300 px-3 py-1.5 rounded-full text-xs font-bold mb-6 border border-slate-500/30">
              <span className="animate-pulse">●</span> Registration Open · {upcomingTour.spotsLeft} spots left
            </div>

            <h3 className="text-white text-3xl md:text-4xl font-black mb-2 leading-tight">
              {upcomingTour.name}
            </h3>
            <p className="text-teal-300 text-sm font-medium mb-6">{upcomingTour.subtitle}</p>

            {/* Meta info */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: MapPin, label: 'Destination', value: upcomingTour.location, color: 'text-teal-400' },
                { icon: Calendar, label: 'Dates', value: upcomingTour.fullDate, color: 'text-slate-400' },
                { icon: Clock, label: 'Deadline', value: upcomingTour.deadline, color: 'text-amber-400' },
                { icon: DollarSign, label: 'Fee Per Person', value: upcomingTour.price, color: 'text-cyan-400' },
              ].map(({ icon: Icon, label, value, color }, i) => (
                <div key={i} className="glass-dark rounded-2xl p-4">
                  <div className={`flex items-center gap-2 ${color} mb-1`}>
                    <Icon className="w-3.5 h-3.5" />
                    <span className="text-[10px] uppercase tracking-wider font-semibold opacity-70">{label}</span>
                  </div>
                  <p className="text-white font-bold text-sm">{value}</p>
                </div>
              ))}
            </div>

            {/* Spots progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-white/70 text-xs">
                  <Users className="w-3.5 h-3.5 text-teal-400" />
                  <span>{spotsFilled}/{upcomingTour.totalSpots} spots filled</span>
                </div>
                <span className="text-slate-400 font-bold text-xs">{upcomingTour.spotsLeft} remaining!</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-teal-400 via-cyan-400 to-slate-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${pct}%` } : {}}
                  transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                />
              </div>
              <p className="text-white/40 text-[10px] mt-1">{pct}% booked · Hurry up!</p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mb-8">
              {upcomingTour.highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.07 }}
                  className="flex items-center gap-2.5 text-white/80 text-sm"
                >
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  {h}
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${upcomingTour.whatsapp}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full flex items-center justify-center gap-3 py-4 px-8 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-base shadow-xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:scale-[1.02] transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Book Your Spot on WhatsApp
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right: Countdown + Includes */}
          <div className="lg:col-span-2 bg-gradient-to-br from-teal-800/60 to-slate-900/80 p-8 flex flex-col gap-8 backdrop-blur-md border-l border-white/10">
            {/* Countdown */}
            <div>
              <p className="text-white/50 text-xs tracking-widest uppercase font-medium mb-4 text-center">
                Tour Begins In
              </p>
              <div className="flex justify-center gap-4">
                <CountdownBox value={countdown.days} label="Days" />
                <CountdownBox value={countdown.hours} label="Hours" />
                <CountdownBox value={countdown.minutes} label="Mins" />
                <CountdownBox value={countdown.seconds} label="Secs" />
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Includes */}
            <div>
              <p className="text-white/50 text-xs tracking-widest uppercase font-medium mb-5 text-center">
                Package Includes
              </p>
              <div className="space-y-3">
                {upcomingTour.includes.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-white/80 text-sm font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Price highlight */}
            <div className="text-center">
              <p className="text-white/40 text-xs mb-1">All-Inclusive Package</p>
              <p className="text-white font-black text-3xl">{upcomingTour.price}</p>
              <p className="text-teal-300 text-xs mt-1">Per Person · Pay after confirmation</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}