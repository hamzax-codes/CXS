import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { MapPin, Calendar, Users, Clock, X, ChevronLeft, ChevronRight, Tag, Map } from 'lucide-react';

const tours = [
  {
    id: 1,
    name: 'Hunza Valley Expedition',
    location: 'Gilgit-Baltistan',
    date: 'October 2024',
    participants: 42,
    duration: '5 Days',
    gradient: 'from-[#f43b47] to-emerald-600',
    tagColor: 'bg-[#f43b47]/10 text-[#453a94]',
    coverImage: 'https://images.unsplash.com/photo-1669006270959-aa7f7f0695d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1669006270959-aa7f7f0695d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1673505413397-0cd0dc4f5854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1715338385682-be15ecc215cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    ],
    description: 'An unforgettable 5-day expedition through the breathtaking Hunza Valley — exploring ancient forts, serene lakes, and the majestic Karakoram Highway. A cultural and natural spectacle unlike any other.',
    highlights: ['Altit & Baltit Forts', 'Eagle\'s Nest Viewpoint', 'Attabad Lake Boat Ride', 'Passu Cones Hike'],
    tags: ['Mountains', 'Culture', 'Heritage'],
  },
  {
    id: 2,
    name: 'Naran–Kaghan Adventure',
    location: 'Khyber Pakhtunkhwa',
    date: 'August 2024',
    participants: 38,
    duration: '4 Days',
    gradient: 'from-slate-500 to-blue-700',
    tagColor: 'bg-slate-100 text-slate-700',
    coverImage: 'https://images.unsplash.com/photo-1658817261180-2940a80fd019?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1658817261180-2940a80fd019?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1770240090579-8131c5c40a98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1592613824285-2cdf3ed61761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    ],
    description: 'From the crystal-clear waters of Lake Saif ul Malook to the towering Babusar Top, this 4-day adventure through Naran and Kaghan was packed with natural wonders and thrilling drives.',
    highlights: ['Lake Saif ul Malook', 'Babusar Top (4,173m)', 'Lulusar Lake', 'Shogran Valley'],
    tags: ['Lakes', 'Trekking', 'Scenic'],
  },
  {
    id: 3,
    name: 'Swat Valley Retreat',
    location: 'Swat, KPK',
    date: 'June 2024',
    participants: 55,
    duration: '3 Days',
    gradient: 'from-emerald-500 to-green-700',
    tagColor: 'bg-emerald-100 text-emerald-700',
    coverImage: 'https://images.unsplash.com/photo-1602599693481-cc4dc8106de5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1602599693481-cc4dc8106de5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1743687034924-77e449e8ba9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1770240090579-8131c5c40a98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    ],
    description: 'Swat — the Switzerland of Pakistan. Three days immersed in lush green valleys, rushing rivers, and historic Buddhist ruins. A perfect blend of nature, history, and refreshment.',
    highlights: ['Malam Jabba Snow Point', 'Mingora Bazaar', 'Butkara Stupa', 'Swat River Crossing'],
    tags: ['Greenery', 'History', 'Relaxing'],
  },
  {
    id: 4,
    name: 'White Water Rafting',
    location: 'Kunhar River, Naran',
    date: 'May 2024',
    participants: 28,
    duration: '2 Days',
    gradient: 'from-slate-500 to-[#453a94]',
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
    gradient: 'from-[#453a94]/100 to-[#453a94]',
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

  const prev = () => setImgIndex((i) => (i - 1 + tour.gallery.length) % tour.gallery.length);
  const next = () => setImgIndex((i) => (i + 1) % tour.gallery.length);

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
          <AnimatePresence mode="wait">
            <motion.img
              key={imgIndex}
              src={tour.gallery[imgIndex]}
              alt={tour.name}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
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
                    onClick={() => setImgIndex(i)}
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
        <div className="flex-1 overflow-y-auto p-7">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-[#f43b47]/10 hover:text-[#f43b47] flex items-center justify-center transition-colors z-10"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 ${tour.tagColor}`}>
            <MapPin className="w-3 h-3" />
            {tour.location}
          </div>

          <h2 className="text-2xl font-black text-slate-900 mb-3">{tour.name}</h2>

          {/* Info pills */}
          <div className="flex flex-wrap gap-3 mb-5">
            {[
              { icon: Calendar, label: tour.date },
              { icon: Clock, label: tour.duration },
              { icon: Users, label: `${tour.participants} Members` },
            ].map(({ icon: Icon, label }, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 text-xs bg-slate-50 text-slate-600 px-3 py-1.5 rounded-full border border-slate-200 font-medium">
                <Icon className="w-3.5 h-3.5 text-[#f43b47]" />
                {label}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-slate-600 text-sm leading-relaxed mb-6">{tour.description}</p>

          {/* Highlights */}
          <div>
            <h4 className="text-slate-900 font-bold text-sm mb-3 flex items-center gap-2">
              <Map className="w-4 h-4 text-[#f43b47]" />
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
      className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-900/15 border border-slate-100 cursor-pointer"
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: 'spring', damping: 20, stiffness: 200 }}
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={tour.coverImage}
          alt={tour.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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
        <h3 className="text-slate-900 font-bold text-base mb-1 group-hover:text-[#453a94] transition-colors">
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
    <section id="events" className="reveal-section py-24 bg-gradient-to-br from-slate-50 via-slate-50/30 to-amber-50/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-slate-50 text-slate-700 px-4 py-2 rounded-full border border-slate-200 mb-4">
              <MapPin className="w-3.5 h-3.5" />
              <span className="text-xs font-semibold tracking-widest uppercase">Past Expeditions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">
              Where We've{' '}
              <span className="text-gradient-warm">Been</span>
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Click on any card to explore photos and stories from our expeditions
            </p>
          </motion.div>
        </div>

        {/* Tour Grid with Collision Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-hidden p-4 -m-4">
          {tours.map((tour, i) => (
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
