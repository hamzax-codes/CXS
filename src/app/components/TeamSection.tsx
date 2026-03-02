import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { img } from '../../utils/img';
import { Users, Instagram, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';

const TEAM_PHOTOS = [
  img('/images/grouppick.jpg'),
  img('/images/grouppick2.jpg'),
  img('/images/grouppick3.jpg'),
  img('/images/grouppick4.jpg'),
  img('/images/grouppick5.jpg')
];

// Preload only the first photo immediately (rest load when section is visible)
const _preload = new Image();
_preload.src = TEAM_PHOTOS[0];

const teamMembers = [
  {
    id: 1, name: 'Abdur Rehman', position: 'Male Head', dept: 'Civil Engineering', semester: '4th Sem',
    bio: 'Oversees all operations and leads the society with years of trekking experience across northern ranges.',
    gradient: 'from-[#870000] to-[#190A05]', initials: 'AR', tag: '👑 Leadership',
    image: img('/images/AbdurRehman.jpg')
  },
  {
    id: 2, name: 'Ahmar Hussain', position: 'General Secretary', dept: 'Pharmacy', semester: '10th Sem',
    bio: 'Manages official records, operations, and logistics ensuring every excursion runs flawlessly.',
    gradient: 'from-slate-400 to-rose-600', initials: 'AH', tag: '♦️ Administration',
    image: img('/images/AmarHussain.jpg')
  },
  {
    id: 3, name: 'Muqeeb Amir', position: 'President', dept: 'Software Engineering', semester: '6th Sem',
    bio: 'Visionary leader driving the society towards new heights and unforgettable adventures.',
    gradient: 'from-slate-400 to-blue-700', initials: 'MA', tag: '⭐ Presidency',
    image: img('/images/MuqeeebAmir.jpg')
  },
  {
    id: 4, name: 'Rizwan Safdar', position: 'Mentor', dept: 'English', semester: 'Mentor',
    bio: 'Provides invaluable guidance and experienced insights for organizing successful adventures.',
    gradient: 'from-cyan-400 to-purple-700', initials: 'RS', tag: '🧠 Guidance',
    image: img('/images/RizwanSAFDAR.jpg')
  },
  {
    id: 5, name: 'Abbas Bukhari', position: 'Finance Head', dept: 'English', semester: '6th Sem',
    bio: 'Budget wizard keeping our adventures affordable, transparent, and financially sound.',
    gradient: 'from-emerald-400 to-green-700', initials: 'AB', tag: '💰 Finance',
    image: img('/images/abbasBukhari.jpg')
  },
  {
    id: 6, name: 'Fawad Khan', position: 'Vice President', dept: 'English', semester: '6th Sem',
    bio: 'Assists the President in all matters and acts as a bridge between management and members.',
    gradient: 'from-pink-400 to-rose-600', initials: 'FK', tag: '✨ Management',
    image: img('/images/fawadkhan.jpg')
  },
  {
    id: 7, name: 'Umar Khan', position: 'Media Head', dept: 'Pharmacy', semester: '10th Sem',
    bio: 'Capturing every moment brilliantly — responsible for photography and our digital presence.',
    gradient: 'from-cyan-400 to-[#190A05]', initials: 'UK', tag: '📸 Media',
    image: img('/images/umarkhan.jpg')
  },
];

function TeamCard({ member, isActive, hasActive, onMouseEnter, onMouseLeave }: { member: typeof teamMembers[0], isActive: boolean, hasActive: boolean, onMouseEnter: () => void, onMouseLeave: () => void }) {
  const scaleClass = isActive ? 'scale-[1.25] z-30 shadow-2xl border-[#870000]' : hasActive ? 'scale-90 opacity-50 z-0' : 'scale-100 opacity-100 hover:-translate-y-2 hover:border-[#870000]/20 z-10';

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`group relative flex-shrink-0 w-52 h-64 bg-white rounded-2xl p-4 shadow-sm hover:shadow-2xl hover:shadow-[#870000]/15 border border-slate-100 transition-all duration-500 cursor-pointer flex flex-col justify-between ${scaleClass}`}
    >
      {/* Gradient top strip */}
      <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r ${member.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />

      {/* Avatar & Info */}
      <div className={`flex ${isActive ? 'flex-col items-center text-center' : 'items-start'} gap-3 mb-3 transition-all duration-500`}>
        <div className={`${isActive ? 'w-16 h-16 mb-1' : 'w-10 h-10 group-hover:scale-110 group-hover:rotate-3'} rounded-xl bg-gradient-to-br ${member.gradient} flex items-center justify-center overflow-hidden shadow-md transition-all duration-500 flex-shrink-0`}>
          {member.image ? (
            <img src={member.image} alt={member.name} loading="lazy" className="w-full h-full object-cover" />
          ) : (
            <span className="text-white font-black text-sm">{member.initials}</span>
          )}
        </div>
        <div className={`flex-1 min-w-0 ${isActive ? 'w-full' : ''}`}>
          <h3 className={`text-slate-900 font-bold ${isActive ? 'text-base' : 'text-sm'} leading-tight transition-colors`}>{member.name}</h3>
          <p className="text-[#190A05] text-xs font-semibold tracking-wide mt-0.5">{member.position}</p>
          <span className="inline-block mt-1 text-[10px] bg-slate-50 text-slate-500 px-2 py-0.5 rounded-full border border-slate-200">
            {member.dept}
          </span>
        </div>
      </div>

      {/* Bio */}
      <p className="text-slate-500 text-[11px] leading-relaxed mb-3">{member.bio}</p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-slate-400">{member.semester}</span>
        <span className="text-xs bg-gradient-to-r from-[#870000]/10 to-[#190A05]/10 text-[#190A05] px-3 py-1 rounded-full border border-[#870000]/10 font-medium">
          {member.tag}
        </span>
      </div>
    </div>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 bg-[#870000]/10 text-[#190A05] px-4 py-2 rounded-full border border-[#870000]/20 mb-2">
      <Users className="w-3.5 h-3.5" />
      <span className="text-xs font-semibold tracking-widest uppercase">{text}</span>
    </div>
  );
}

export default function TeamSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [imgIndex, setImgIndex] = useState(0);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Preload remaining photos only when section comes into view
  useEffect(() => {
    if (!inView) return;
    TEAM_PHOTOS.slice(1).forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [inView]);

  return (
    <section id="team" className="reveal-section pt-6 pb-0 overflow-hidden">
      {/* --- Full Team Photo --- */}
      <div ref={ref} className="max-w-7xl mx-auto px-6 mb-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-4"
        >
          <SectionLabel text="Meet the Team" />
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-1">
            The People Behind the{' '}
            <span className="text-gradient-strain">Adventure</span>
          </h2>
          <p className="text-slate-500 mt-1 max-w-xl mx-auto text-xs leading-relaxed">
            A passionate crew of students united by one dream — to explore every corner of
            Pakistan and make memories that last a lifetime.
          </p>
        </motion.div>

        {/* Team Photo Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/20 group w-full max-w-5xl mx-auto h-[380px] md:h-[480px] select-none"
          style={{ borderRadius: '2rem' }}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={imgIndex}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Blurred background fill */}
              <img
                src={TEAM_PHOTOS[imgIndex]}
                aria-hidden="true"
                loading={imgIndex === 0 ? 'eager' : 'lazy'}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: 'blur(8px) brightness(0.75)', transform: 'scale(1.05)' }}
              />
              {/* Sharp main image */}
              <img
                src={TEAM_PHOTOS[imgIndex]}
                alt={`Excursion Society Full Team ${imgIndex + 1}`}
                loading={imgIndex === 0 ? 'eager' : 'lazy'}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          {TEAM_PHOTOS.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); setImgIndex((i) => (i - 1 + TEAM_PHOTOS.length) % TEAM_PHOTOS.length); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-white z-20 hover:bg-white/20 transition-all duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:translate-x-4 sm:group-hover:translate-x-0"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setImgIndex((i) => (i + 1) % TEAM_PHOTOS.length); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-white z-20 hover:bg-white/20 transition-all duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:-translate-x-4 sm:group-hover:translate-x-0"
              >
                <ChevronRight className="w-7 h-7" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute top-4 left-0 right-0 flex justify-center gap-2 z-30">
                {TEAM_PHOTOS.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setImgIndex(i); }}
                    className={`h-1.5 rounded-full shadow-md transition-all duration-300 ${i === imgIndex ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'}`}
                  />
                ))}
              </div>
            </>
          )}
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />

          {/* Text overlay — mobile: title only; desktop: title + stats */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4"
            >
              <div>
                <div className="bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full inline-flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#870000] animate-pulse" />
                  <span className="text-[#870000] text-[10px] font-semibold tracking-widest uppercase">Session 2025–26</span>
                </div>
                <h3 className="text-white text-xl md:text-3xl font-black">Excursion Society</h3>
                <p className="text-white/70 mt-0.5 text-xs md:text-sm font-light">CUSIT — Peshawar</p>
              </div>
              {/* Stats: hidden on mobile, shown on desktop inside image */}
              <div className="hidden md:flex gap-3">
                {[
                  { label: 'Members', value: '30+' },
                  { label: 'Tours Done', value: '3+' },
                  { label: 'Years Active', value: '1+' },
                ].map((s, i) => (
                  <div key={i} className="glass px-3 py-2 rounded-xl text-center">
                    <div className="text-white font-black text-lg">{s.value}</div>
                    <div className="text-white/60 text-[10px]">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
        {/* Mobile-only stats strip below carousel */}
        <div className="flex md:hidden justify-center gap-3 mt-4">
          {[
            { label: 'Members', value: '30+' },
            { label: 'Tours Done', value: '3+' },
            { label: 'Years Active', value: '1+' },
          ].map((s, i) => (
            <div key={i} className="bg-[#870000]/10 border border-[#870000]/20 px-4 py-2 rounded-xl text-center">
              <div className="text-[#870000] font-black text-base">{s.value}</div>
              <div className="text-slate-500 text-[10px]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Infinite Marquee Team Section --- */}
      <div className="bg-gradient-to-br from-[#870000]/10 via-[#190A05]/10 to-slate-50 py-10 border-t border-[#870000]/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-8 px-6"
        >
          <h3 className="text-xl font-black text-slate-800">
            ⛰️ The Crew Behind Every Summit
          </h3>
          <p className="text-slate-500 text-sm mt-2">Hover over a card to spotlight</p>
        </motion.div>

        {/* Marquee row */}
        <div className="overflow-hidden py-14 -my-14">
          <div
            className="flex gap-6 animate-marquee"
            style={{
              width: 'max-content',
              animationPlayState: hoveredId !== null ? 'paused' : 'running',
            }}
          >
            {[...teamMembers, ...teamMembers].map((member, i) => {
              const isHovered = hoveredId === member.id;
              const anyHovered = hoveredId !== null;
              return (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredId(member.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="flex-shrink-0 cursor-pointer"
                  style={{
                    transition: 'transform 0.3s ease, opacity 0.3s ease, filter 0.3s ease',
                    transform: isHovered ? 'scale(1.15) translateY(-8px)' : anyHovered ? 'scale(0.88)' : 'scale(1)',
                    opacity: isHovered ? 1 : anyHovered ? 0.45 : 1,
                    filter: isHovered ? 'blur(0px)' : anyHovered ? 'blur(2px)' : 'blur(0px)',
                  }}
                >
                  {/* --- Profile Card --- */}
                  <div className={`w-56 h-[340px] bg-white rounded-2xl shadow-md border-2 overflow-hidden flex flex-col transition-colors duration-300 ${
                    isHovered ? 'border-[#870000] shadow-[#870000]/30 shadow-xl' : 'border-slate-100'
                  }`}>

                    {/* Blurred banner */}
                    <div className="relative h-24 overflow-hidden flex-shrink-0">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt=""
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover scale-105 blur-[3px]"
                        />
                      ) : (
                        <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient}`} />
                      )}
                      {/* dark overlay for readability */}
                      <div className="absolute inset-0 bg-black/20" />
                    </div>

                    {/* Avatar — overlaps the banner / white split */}
                    <div className="flex justify-center -mt-12 relative z-10 px-4">
                      <div className={`w-[88px] h-[88px] rounded-xl border-2 border-white shadow-lg overflow-hidden bg-gradient-to-br ${member.gradient} flex items-center justify-center flex-shrink-0`}>
                        {member.image ? (
                          <img src={member.image} alt={member.name} loading="lazy" className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-white font-black text-xl">{member.initials}</span>
                        )}
                      </div>
                    </div>

                    {/* White content area */}
                    <div className="flex flex-col items-center text-center px-4 pb-4 pt-2 gap-1 flex-1">
                      <h3 className="text-slate-900 font-bold text-sm leading-tight">{member.name}</h3>
                      <p className="text-[#870000] text-xs font-semibold">{member.position}</p>
                      <span className="text-[10px] bg-slate-50 text-slate-500 px-2 py-0.5 rounded-full border border-slate-200">{member.dept}</span>
                      <p className="text-slate-500 text-[11px] leading-relaxed mt-1 flex-1 line-clamp-3">{member.bio}</p>
                      <div className="flex items-center justify-between w-full pt-2 border-t border-slate-100 mt-1">
                        <span className="text-[10px] text-slate-400">{member.semester}</span>
                        <span className="text-[10px] bg-gradient-to-r from-[#870000]/10 to-[#190A05]/10 text-[#190A05] px-2 py-0.5 rounded-full border border-[#870000]/10 font-medium">{member.tag}</span>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
