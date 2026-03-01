import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { img } from '../../utils/img';
import { MapPin, Calendar, Users, Clock, X, ChevronLeft, ChevronRight, Tag, Map } from 'lucide-react';

const tours = [
  {
    id: 1,
    name: 'Capital Chronicles',
    location: 'Islamabad, Pakistan',
    date: '21 Nov 2025',
    participants: 100,
    duration: '1 Day',
    gradient: 'from-[#870000] to-[#190A05]',
    tagColor: 'bg-[#870000]/10 text-[#190A05]',
    coverImage: 'https://images.unsplash.com/photo-1646514323937-e49758815da7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    gallery: [
      img('/images/T1/trip1/media/WhatsApp%20Image%202026-03-01%20at%207.11.03%20AM.jpeg'),
      img('/images/T1/trip1/media/WhatsApp%20Image%202026-03-01%20at%207.11.03%20AM%20(1).jpeg'),
      img('/images/T1/trip1/media/WhatsApp%20Image%202026-03-01%20at%207.11.03%20AM%20(2).jpeg'),
      img('/images/T1/trip1/media/WhatsApp%20Image%202026-03-01%20at%207.11.03%20AM%20(3).jpeg'),
    ],
    description: 'The Excursion Society successfully organized a trip for female members to Islamabad, featuring visits to Trail 5, Lake View Park, and Centaurus. The outing provided a refreshing break and opportunities for networking in a scenic setting — participants enjoyed the natural beauty and engaging activities, making it a truly memorable experience.',
    highlights: ['Trail 5 Hike', 'Lake View Park', 'Centaurus Mall', 'Networking & Bonding'],
    tags: ['Female Trip', 'City', 'Nature'],
  },
  {
    id: 2,
    name: 'Miranjani Ascent',
    location: 'Nathiagali, KPK',
    date: '14 Dec 2025',
    participants: 90,
    duration: '1 Day',
    gradient: 'from-slate-600 to-emerald-800',
    tagColor: 'bg-emerald-100 text-emerald-800',
    coverImage: img('/images/T2/cover%20pic.jpg'),
    gallery: [
      img('/images/T2/trip2/IMG_6857.JPG.jpeg'),
      img('/images/T2/trip2/IMG_9023.jpeg'),
      img('/images/T2/trip2/WhatsApp%20Image%202026-03-01%20at%207.18.39%20AM.jpeg'),
      img('/images/T2/trip2/WhatsApp%20Image%202026-03-01%20at%207.19.06%20AM.jpeg'),
    ],
    description: 'The Excursion Society organized a trek for male members to Miranjani — the highest peak in Nathiagali. Participants pushed their limits, soaked in breathtaking panoramic views, and forged strong bonds in one of KPK\'s most iconic alpine settings.',
    highlights: ['Miranjani Summit Trek', 'Nathiagali Pine Trails', 'Panoramic Peak Views', 'Team Bonding'],
    tags: ['Male Trip', 'Trekking', 'Summit'],
  },
  {
    id: 3,
    name: 'Pipeline Chronicles',
    location: 'Nathiagali & Donga Gali, KPK',
    date: '21 Dec 2025',
    participants: 120,
    duration: '1 Day',
    gradient: 'from-green-700 to-emerald-900',
    tagColor: 'bg-emerald-100 text-emerald-800',
    coverImage: img('/images/T3/cover%20image.jpg'),
    gallery: [
      img('/images/T3/trip3/WhatsApp%20Image%202026-03-01%20at%207.27.52%20AM.jpeg'),
      img('/images/T3/trip3/WhatsApp%20Image%202026-03-01%20at%207.28.01%20AM.jpeg'),
      img('/images/T3/trip3/WhatsApp%20Image%202026-03-01%20at%207.28.10%20AM.jpeg'),
    ],
    description: 'The Excursion Society organized a departmental trip for pharmacy students through the scenic pine forests of Nathiagali and Donga Gali — a perfect blend of outdoor adventure and academic enrichment. Students explored the lush highland trails, soaked in the crisp mountain air, and built lasting bonds amidst one of KPK\'s most beautiful hill station routes.',
    highlights: ['Nathiagali Pine Trails', 'Donga Gali View Point', 'Flora & Fauna Exploration', 'Departmental Bonding'],
    tags: ['Departmental', 'Trekking', 'Nature'],
  },
  {
    id: 4,
    name: 'White Water Rafting',
    location: 'Kunhar River, Naran',
    date: 'May 2024',
    participants: 28,
    duration: '2 Days',
    gradient: 'from-slate-500 to-[#190A05]',
    tagColor: 'bg-slate-100 text-slate-700',
    coverImage: 'https://images.unsplash.com/photo-1699950856282-8a3922a224a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1699950856282-8a3922a224a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1592613824285-2cdf3ed61761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    ],
    description: 'An adrenaline-pumping white water rafting adventure on the wild Kunhar River. Members conquered Grade III rapids, faced their fears, and came out stronger — and soaked!',
    highlights: ['Grade III Rapids', 'Safety Training', 'River Camping', 'Evening Bonfire'],
    tags: ['Extreme', 'Water Sports', 'Adrenaline'],
  },
  {
    id: 5,
    name: 'Desert Night Camping',
    location: 'Cholistan Desert',
    date: 'February 2024',
    participants: 32,
    duration: '2 Days',
    gradient: 'from-amber-500 to-yellow-600',
    tagColor: 'bg-amber-100 text-amber-700',
    coverImage: 'https://images.unsplash.com/photo-1731010623742-25d10570848b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1731010623742-25d10570848b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1670090817756-7d4d26dc2e61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    ],
    description: 'Two nights under a slate full of stars in the magical Cholistan Desert. Camel rides, bonfire storytelling, stargazing sessions, and sunrise over the sand dunes — pure magic.',
    highlights: ['Camel Safari', 'Bonfire & BBQ', 'Stargazing Night', 'Derawar Fort Visit'],
    tags: ['Desert', 'Camping', 'Stars'],
  },
  {
    id: 6,
    name: 'Skardu Glacier Trek',
    location: 'Baltistan, GB',
    date: 'September 2024',
    participants: 22,
    duration: '6 Days',
    gradient: 'from-[#190A05]/100 to-[#190A05]',
    tagColor: 'bg-cyan-100 text-cyan-700',
    coverImage: 'https://images.unsplash.com/photo-1715338385682-be15ecc215cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1715338385682-be15ecc215cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1669006270959-aa7f7f0695d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1673505413397-0cd0dc4f5854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    ],
    description: 'A 6-day glacial trek through Skardu, visiting the famous Satpara Lake, Upper Kachura, and trekking on the ancient Baltoro Glacier approach routes. A bucket-list expedition.',
    highlights: ['Satpara Lake', 'Deosai Plains', 'Kachura Lake', 'Cold Desert'],
    tags: ['Glacier', 'Trek', 'Extreme'],
  },
];

type Tour = typeof tours[0];

function TourModal({ tour, onClose }: { tour: Tour; onClose: () => void }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);

  const prev = () => { setImgIndex((i) => (i - 1 + tour.gallery.length) % tour.gallery.length); setImgLoaded(false); };
  const next = () => { setImgIndex((i) => (i + 1) % tour.gallery.length); setImgLoaded(false); };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" />

      <motion.div
        className="relative bg-white rounded-4xl overflow-hidden shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row z-10"
        style={{ borderRadius: '2rem' }}
        initial={{ scale: 0.85, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.85, opacity: 0, y: 40 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Gallery */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto flex-shrink-0 bg-slate-900">
          {/* Loading skeleton */}
          {!imgLoaded && (
            <div className="absolute inset-0 bg-slate-800 animate-pulse z-10" />
          )}
          <AnimatePresence mode="sync">
            <motion.img
              key={imgIndex}
              src={tour.gallery[imgIndex]}
              alt={tour.name}
              onLoad={() => setImgLoaded(true)}
              className="w-full h-full object-cover absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: imgLoaded ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            />
          </AnimatePresence>
          {/* Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent`} />

          {/* Gallery nav */}
          {tour.gallery.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-dark flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-dark flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
                {tour.gallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setImgIndex(i); setImgLoaded(false); }}
                    className={`h-1.5 rounded-full transition-all ${i === imgIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/50'}`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Tags overlay */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {tour.tags.map((tag) => (
              <span key={tag} className="glass text-white text-[10px] px-3 py-1 rounded-full font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-7">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-[#870000]/10 hover:text-[#870000] flex items-center justify-center transition-colors z-10"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 ${tour.tagColor}`}>
            <MapPin className="w-3 h-3" />
            {tour.location}
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">{tour.name}</h2>

          {/* Info pills */}
          <div className="flex flex-wrap gap-3 mb-5">
            {[
              { icon: Calendar, label: tour.date },
              { icon: Clock, label: tour.duration },
              { icon: Users, label: `${tour.participants} Members` },
            ].map(({ icon: Icon, label }, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 text-xs bg-slate-50 text-slate-600 px-3 py-1.5 rounded-full border border-slate-200 font-medium">
                <Icon className="w-3.5 h-3.5 text-[#870000]" />
                {label}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-slate-600 text-sm leading-relaxed mb-6">{tour.description}</p>

          {/* Highlights */}
          <div>
            <h4 className="text-slate-900 font-bold text-sm mb-3 flex items-center gap-2">
              <Map className="w-4 h-4 text-[#870000]" />
              Trip Highlights
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {tour.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-600">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tour.gradient} flex-shrink-0`} />
                  {h}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function TourCard({ tour, onClick }: { tour: Tour; onClick: () => void }) {
  return (
    <motion.div
      className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#870000]/30 border border-slate-100 cursor-pointer"
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: 'spring', damping: 20, stiffness: 200 }}
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={tour.coverImage}
          alt={tour.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Tags */}
        <div className="absolute top-4 left-4 flex gap-2">
          {tour.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="glass text-white text-[10px] px-2.5 py-1 rounded-full font-semibold">
              {tag}
            </span>
          ))}
        </div>

        {/* Duration badge */}
        <div className={`absolute top-4 right-4 bg-gradient-to-r ${tour.gradient} text-white text-[10px] px-3 py-1.5 rounded-full font-bold shadow-lg`}>
          {tour.duration}
        </div>

        {/* Bottom overlay */}
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center gap-1.5 text-white/80 text-xs">
            <MapPin className="w-3 h-3" />
            {tour.location}
          </div>
        </div>

        {/* Click hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="glass px-4 py-2 rounded-full text-white text-xs font-semibold flex items-center gap-2">
            <Tag className="w-3 h-3" />
            View Gallery
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-slate-900 font-bold text-base mb-1 group-hover:text-[#190A05] transition-colors">
          {tour.name}
        </h3>
        <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" /> {tour.date}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-3 h-3" /> {tour.participants} went
          </span>
        </div>
        <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
          {tour.description}
        </p>

        {/* Bottom bar */}
        <div className={`mt-4 h-0.5 rounded-full bg-gradient-to-r ${tour.gradient} opacity-30 group-hover:opacity-100 transition-opacity`} />
      </div>
    </motion.div>
  );
}

export default function EventsSection() {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="events" className="reveal-section pt-6 pb-24 bg-gradient-to-br from-slate-50 via-slate-50/30 to-amber-50/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="text-center mb-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#870000]/10 text-[#190A05] px-4 py-2 rounded-full border border-[#870000]/20 mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span className="text-xs font-semibold tracking-widest uppercase">Past Expeditions</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-1">
              Trails We've{' '}
              <span className="text-gradient-warm">Conquered</span>
            </h2>
            <p className="text-slate-500 mt-1 max-w-xl mx-auto text-xs leading-relaxed">
              Every expedition, a story. Click a card to relive the journey.
            </p>
          </motion.div>
        </div>

        {/* Tour Grid with Collision Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-hidden p-4 -m-4">
          {tours.slice(0, 3).map((tour, i) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -150 : 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: (Math.floor(i / 3) * 0.2) }}
            >
              <TourCard tour={tour} onClick={() => setSelectedTour(tour)} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedTour && (
          <TourModal tour={selectedTour} onClose={() => setSelectedTour(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
