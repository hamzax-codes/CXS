import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { Calendar, MapPin, Users, DollarSign, CheckCircle, MessageCircle, Clock, ChevronRight, Compass } from 'lucide-react';

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
  whatsapp: '+923188368361',
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
      <div className="glass rounded-xl px-3 py-2 mb-1.5 min-w-[48px]">
        <div className="text-white font-black text-2xl tabular-nums leading-none">
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
    <section id="upcoming" className="reveal-section relative pt-6 pb-24 overflow-hidden bg-gradient-to-br from-slate-50 via-slate-50/30 to-rose-50/30">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#870000]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-slate-300/20 blur-[100px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <div className="inline-flex items-center gap-2 bg-[#870000]/10 text-[#190A05] px-4 py-2 rounded-full border border-[#870000]/20 mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span className="text-xs font-semibold tracking-widest uppercase">Upcoming Excursion</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-1">
            Next Adventure{' '}
            <span className="text-gradient-strain">Loading...</span>
          </h2>
        </motion.div>

        {/* Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl p-10 md:p-16 text-center flex flex-col items-center gap-6 shadow-xl shadow-slate-200 border border-slate-100"
          style={{ borderRadius: '2rem' }}
        >
          {/* Animated icon */}
          <motion.div
            animate={{
              scale: [1, 1.18, 0.95, 1.12, 1],
              filter: [
                'drop-shadow(0 0 0px #870000)',
                'drop-shadow(0 0 22px #870000)',
                'drop-shadow(0 0 8px #870000)',
                'drop-shadow(0 0 28px #870000)',
                'drop-shadow(0 0 0px #870000)',
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
            className="w-36 h-36"
          >
            <img src="/images/bg_removed_logo.png" alt="Excursion Society" loading="lazy" className="w-full h-full object-contain" />
          </motion.div>

          <div>
            <h3 className="text-slate-900 font-black text-3xl md:text-4xl mb-2 tracking-tight">
              Something Big is Brewing
            </h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
              Our next expedition is being planned. Stay tuned — it's going to be one for the books.
            </p>
          </div>

          {/* Animated dashes */}
          <div className="flex items-center gap-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="h-1 rounded-full bg-[#870000]"
                animate={{ width: ['12px', '32px', '12px'] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
              />
            ))}
          </div>

          <p className="text-slate-400 text-xs tracking-widest uppercase font-semibold">
            Announcement dropping soon — keep your boots ready
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   UPCOMING TOUR FULL CARD — UNCOMMENT WHEN TRIP IS ANNOUNCED
   ============================================================

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-4xl overflow-hidden shadow-2xl shadow-black/50"
          style={{ borderRadius: '2rem' }}
        >
          LEFT PANEL — Tour Info, Meta, Spots, Highlights, WhatsApp CTA
          RIGHT PANEL — Countdown Timer, Package Includes, Price
        </motion.div>

  ============================================================ */