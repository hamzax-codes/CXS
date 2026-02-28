import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Users, Instagram, Linkedin } from 'lucide-react';

const TEAM_PHOTO = '/images/grouppick.jpg';

const teamMembers = [
  {
    id: 1, name: 'Abdur Rehman', position: 'President', dept: 'Computer Science', semester: '7th Sem',
    bio: 'Passionate mountaineer with 5+ years of trekking experience across Pakistan\'s northern ranges.',
    gradient: 'from-teal-400 to-teal-700', initials: 'AR', tag: '🏔️ Mountaineer',
    image: '/images/AbdurRehman.jpg'
  },
  {
    id: 2, name: 'Amar Hussain', position: 'Vice President', dept: 'Business Admin', semester: '6th Sem',
    bio: 'Adventure photographer & logistics expert ensuring every excursion runs flawlessly.',
    gradient: 'from-slate-400 to-rose-600', initials: 'AH', tag: '📸 Photographer',
    image: '/images/AmarHussain.jpg'
  },
  {
    id: 3, name: 'Muqeeb Amir', position: 'General Secretary', dept: 'Electrical Eng.', semester: '5th Sem',
    bio: 'Safety-first advocate & certified first-aid specialist for all society excursions.',
    gradient: 'from-slate-400 to-blue-700', initials: 'MA', tag: '⛑️ Safety Lead',
    image: '/images/MuqeeebAmir.jpg'
  },
  {
    id: 4, name: 'Rizwan Safdar', position: 'Treasurer', dept: 'Economics', semester: '5th Sem',
    bio: 'Budget wizard keeping our adventures affordable for every society member.',
    gradient: 'from-cyan-400 to-purple-700', initials: 'RS', tag: '💰 Finance',
    image: '/images/RizwanSAFDAR.jpg'
  },
  {
    id: 5, name: 'Abbas Bukhari', position: 'Event Coordinator', dept: 'Mechanical Eng.', semester: '6th Sem',
    bio: 'Creative planner with a knack for organizing unique and unforgettable experiences.',
    gradient: 'from-emerald-400 to-green-700', initials: 'AB', tag: '🗓️ Planner',
    image: '/images/abbasBukhari.jpg'
  },
  {
    id: 6, name: 'Fawad Khan', position: 'Media Lead', dept: 'Mass Communication', semester: '4th Sem',
    bio: 'Capturing every moment brilliantly — our social media presence is her canvas.',
    gradient: 'from-pink-400 to-rose-600', initials: 'FK', tag: '🎬 Content',
    image: '/images/fawadkhan.jpg'
  },
  {
    id: 7, name: 'Laiba', position: 'Logistics Head', dept: 'Civil Engineering', semester: '7th Sem',
    bio: 'Transport & route expert, turning complex treks into smooth, well-planned journeys.',
    gradient: 'from-amber-400 to-slate-600', initials: 'LB', tag: '🚐 Logistics',
    image: '/images/laiba.jpg'
  },
  {
    id: 8, name: 'Umar Khan', position: 'Community Manager', dept: 'Psychology', semester: '5th Sem',
    bio: 'Building bonds between members ensuring everyone feels welcomed and included.',
    gradient: 'from-cyan-400 to-teal-600', initials: 'UK', tag: '🤝 Community',
    image: '/images/umarkhan.jpg'
  },
];

function TeamCard({ member, isActive, hasActive, onMouseEnter, onMouseLeave }: { member: typeof teamMembers[0], isActive: boolean, hasActive: boolean, onMouseEnter: () => void, onMouseLeave: () => void }) {
  const scaleClass = isActive ? 'scale-[1.25] z-30 shadow-2xl border-teal-400' : hasActive ? 'scale-90 opacity-50 z-0' : 'scale-100 opacity-100 hover:-translate-y-2 hover:border-teal-200 z-10';

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`group relative flex-shrink-0 w-72 bg-white rounded-3xl p-6 shadow-sm hover:shadow-2xl hover:shadow-teal-500/15 border border-slate-100 transition-all duration-500 cursor-pointer ${scaleClass}`}
    >
      {/* Gradient top strip */}
      <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r ${member.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />

      {/* Avatar & Info */}
      <div className={`flex ${isActive ? 'flex-col items-center text-center' : 'items-start'} gap-4 mb-4 transition-all duration-500`}>
        <div className={`${isActive ? 'w-24 h-24 mb-2' : 'w-14 h-14 group-hover:scale-110 group-hover:rotate-3'} rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center overflow-hidden shadow-lg transition-all duration-500 flex-shrink-0`}>
          {member.image ? (
            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-white font-black text-lg">{member.initials}</span>
          )}
        </div>
        <div className={`flex-1 min-w-0 ${isActive ? 'w-full' : ''}`}>
          <h3 className={`text-slate-900 font-bold ${isActive ? 'text-xl' : 'text-base'} leading-tight transition-colors`}>{member.name}</h3>
          <p className="text-teal-600 text-xs font-semibold tracking-wide mt-0.5">{member.position}</p>
          <span className="inline-block mt-1 text-[10px] bg-slate-50 text-slate-500 px-2 py-0.5 rounded-full border border-slate-200">
            {member.dept}
          </span>
        </div>
      </div>

      {/* Bio */}
      <p className="text-slate-500 text-xs leading-relaxed mb-4">{member.bio}</p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-slate-400">{member.semester}</span>
        <span className="text-xs bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-700 px-3 py-1 rounded-full border border-teal-100 font-medium">
          {member.tag}
        </span>
      </div>
    </div>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full border border-teal-200 mb-4">
      <Users className="w-3.5 h-3.5" />
      <span className="text-xs font-semibold tracking-widest uppercase">{text}</span>
    </div>
  );
}

export default function TeamSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const doubled = [...teamMembers, ...teamMembers];

  // Hover functions
  const handleMouseEnter = (id: number) => setActiveCardId(id);
  const handleMouseLeave = () => setActiveCardId(null);

  return (
    <section id="team" className="reveal-section pt-24 pb-0 overflow-hidden">
      {/* --- Full Team Photo --- */}
      <div ref={ref} className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <SectionLabel text="Meet the Team" />
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2">
            The People Behind the{' '}
            <span className="text-gradient-teal">Adventure</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            A passionate crew of students united by one dream — to explore every corner of
            Pakistan and make memories that last a lifetime.
          </p>
        </motion.div>

        {/* Team Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative rounded-4xl overflow-hidden shadow-2xl shadow-slate-900/20 group"
          style={{ borderRadius: '2rem' }}
        >
          <img
            src={TEAM_PHOTO}
            alt="Excursion Society Full Team"
            className="w-full h-[450px] md:h-[580px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

          {/* Text overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6"
            >
              <div>
                <div className="glass px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-teal-300 text-xs font-semibold tracking-widest uppercase">Session 2024–25</span>
                </div>
                <h3 className="text-white text-3xl md:text-4xl font-black">Excursion Society</h3>
                <p className="text-white/70 mt-1 text-sm font-light">Your University</p>
              </div>
              <div className="flex gap-4">
                {[
                  { label: 'Members', value: '47' },
                  { label: 'Departments', value: '12' },
                  { label: 'Tours/Year', value: '8+' },
                ].map((s, i) => (
                  <div key={i} className="glass px-4 py-3 rounded-2xl text-center">
                    <div className="text-white font-black text-xl">{s.value}</div>
                    <div className="text-white/60 text-xs">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* --- Infinite Team Carousel --- */}
      <div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-slate-50 py-16 border-t border-teal-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-10 px-6"
        >
          <h3 className="text-2xl font-black text-slate-800">
            🌟 Our Team Members
          </h3>
          <p className="text-slate-500 text-sm mt-2">Hover over a card to view</p>
        </motion.div>

        {/* First row - forward */}
        <div className="overflow-hidden py-12 -my-12">
          <div className={`flex gap-8 animate-marquee ${activeCardId ? '[animation-play-state:paused]' : 'hover:[animation-play-state:paused]'}`} style={{ width: 'max-content' }}>
            {doubled.map((m, i) => (
              <TeamCard
                key={`a-${i}`}
                member={m}
                isActive={activeCardId === m.id}
                hasActive={activeCardId !== null}
                onMouseEnter={() => handleMouseEnter(m.id)}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
