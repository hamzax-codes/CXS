import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { User, Mail, Phone, BookOpen, Star, CheckCircle, ChevronDown } from 'lucide-react';

const departments = [
  'Computer Science', 'Software Engineering', 'Electrical Engineering',
  'Mechanical Engineering', 'Civil Engineering', 'Business Administration',
  'Economics', 'Mass Communication', 'Psychology', 'Fine Arts', 'Other',
];

const semesters = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];

const teams = [
  'Media Team',
  'Logistics Team',
  'Security Team',
  'Finance Team',
  'Decor Team',
  'Creative Team',
];

export default function ApplySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedTeams, setSelectedTeams] = useState<string>('');
  const [form, setForm] = useState({
    name: '', email: '', phone: '', department: '', semester: '',
    whyJoin: '', experience: '',
  });

  const toggleTeam = (val: string) => {
    setSelectedTeams((prev) => (prev === val ? '' : val));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const selectedTeamLabels = selectedTeams || 'None';

    const message = [
      `New Membership Application — Excursion Society`,
      ``,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Department: ${form.department}`,
      `Semester: ${form.semester}`,
      `Team Preference: ${selectedTeamLabels}`,
      ``,
      `Why I want to join:`,
      form.whyJoin,
      ``,
      ...(form.experience ? [`Previous Experience:`, form.experience] : []),
    ].join('\n');

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/923188368361?text=${encoded}`, '_blank');

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: '', email: '', phone: '', department: '', semester: '', whyJoin: '', experience: '' });
        setSelectedTeams('');
      }, 5000);
    }, 800);
  };

  return (
    <section id="apply" className="reveal-section pt-6 pb-24 bg-gradient-to-br from-slate-50 via-[#870000]/10 to-emerald-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="text-center mb-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
              <div className="inline-flex items-center gap-2 bg-[#870000]/10 text-[#190A05] px-4 py-2 rounded-full border border-[#870000]/20 mb-2">
              <User className="w-3.5 h-3.5" />
              <span className="text-xs font-semibold tracking-widest uppercase">Join Our Society</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">
              Think You've Got{' '}
              <span className="text-gradient-strain">What It Takes?</span>
            </h2>
            <p className="text-slate-500 mt-1 max-w-lg mx-auto text-xs leading-relaxed">
              We don't just go on trips — we build legends. One form stands between you and your next adventure.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="bg-gradient-to-br from-[#190A05] to-[#870000]/80 rounded-3xl p-7 text-white shadow-xl shadow-[#870000]/20">
              <h3 className="text-xl font-black mb-2 text-white">Why Join Us?</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Be part of Pakistan's most adventurous university society. Explore, connect, and grow with us.
              </p>
              {[
                'Subsidized trip rates for members',
                'Leadership & organizational skills',
                'Photography & media exposure',
                'Lifelong friendships & network',
                'Certificate of participation',
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-center gap-3 mb-3"
                >
                  <div className="w-5 h-5 rounded-full border border-white/50 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-white/90 text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Info box */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
              <h4 className="text-slate-900 font-bold mb-3 flex items-center gap-2">
                <Star className="w-4 h-4 text-slate-500" />
                What We Look For
              </h4>
              {['Enthusiasm for exploration', 'Team player mindset', 'Commitment to attend events', 'Willingness to contribute skills'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 mb-2 text-slate-600 text-sm">
                  <div className="w-4 h-4 rounded-full border border-slate-400 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 12 12" className="w-2.5 h-2.5" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#64748b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/60 backdrop-blur-xl rounded-4xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(13,148,136,0.08)] border border-white transition-shadow duration-500 space-y-6"
              style={{ borderRadius: '2rem' }}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-black text-slate-800">Application Form</h3>
                <p className="text-slate-500 text-sm mt-1">Ready for the adventure of a lifetime?</p>
              </div>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-800 rounded-xl px-4 py-3 text-sm font-medium"
                >
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  Thank you for your submission — we will contact you shortly.
                </motion.div>
              )}

                {/* Name & Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[#870000] transition-colors" />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="w-full pl-11 pr-4 py-3.5 bg-white/50 border border-slate-200/60 rounded-2xl text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#870000] focus:bg-white focus:ring-4 focus:ring-[#870000]/10 transition-all font-medium"
                    />
                  </div>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[#870000] transition-colors" />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email address"
                      required
                      className="w-full pl-11 pr-4 py-3.5 bg-white/50 border border-slate-200/60 rounded-2xl text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#870000] focus:bg-white focus:ring-4 focus:ring-[#870000]/10 transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="relative group">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[#870000] transition-colors" />
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="WhatsApp Number (+92 300 0000000)"
                    required
                    className="w-full pl-11 pr-4 py-3.5 bg-white/50 border border-slate-200/60 rounded-2xl text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#870000] focus:bg-white focus:ring-4 focus:ring-[#870000]/10 transition-all font-medium"
                  />
                </div>

                {/* Dept & Semester row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="relative group">
                    <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none group-focus-within:text-[#870000] transition-colors" />
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    <select
                      name="department"
                      value={form.department}
                      onChange={handleChange}
                      required
                      className="w-full pl-11 pr-10 py-3.5 bg-white/50 border border-slate-200/60 rounded-2xl text-slate-800 text-sm focus:outline-none focus:border-[#870000] focus:bg-white focus:ring-4 focus:ring-[#870000]/10 transition-all appearance-none font-medium cursor-pointer"
                    >
                      <option value="" disabled className="text-slate-400">Select Department</option>
                      {departments.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                  <div className="relative group">
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    <select
                      name="semester"
                      value={form.semester}
                      onChange={handleChange}
                      required
                      className="w-full px-5 pr-10 py-3.5 bg-white/50 border border-slate-200/60 rounded-2xl text-slate-800 text-sm focus:outline-none focus:border-[#870000] focus:bg-white focus:ring-4 focus:ring-[#870000]/10 transition-all appearance-none font-medium cursor-pointer"
                    >
                      <option value="" disabled className="text-slate-400">Current Semester</option>
                      {semesters.map((s) => (
                        <option key={s} value={s}>{s} Semester</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Team Preference */}
                <div>
                  <p className="text-slate-700 text-xs font-semibold mb-1 tracking-wide pl-1">
                    Which team would you like to be part of?
                  </p>
                  <p className="text-slate-400 text-xs pl-1 mb-3">Select one or more that match your interests</p>
                  <div className="flex flex-wrap gap-2">
                    {teams.map((team) => (
                      <button
                        key={team}
                        type="button"
                        onClick={() => toggleTeam(team)}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                          selectedTeams === team
                            ? 'bg-[#870000] text-white border-[#870000] shadow-md shadow-[#870000]/25 -translate-y-0.5'
                            : 'bg-white/60 text-slate-600 border-slate-200/60 hover:border-[#870000] hover:text-[#870000] hover:bg-[#870000]/5'
                        }`}
                      >
                        {team}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Why join */}
                <div className="relative group">
                  <textarea
                    name="whyJoin"
                    value={form.whyJoin}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Why do you want to join Excursion Society?"
                    required
                    className="w-full px-5 py-4 bg-white/50 border border-slate-200/60 rounded-2xl text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#870000] focus:bg-white focus:ring-4 focus:ring-[#870000]/10 transition-all resize-none font-medium"
                  />
                </div>

                {/* Previous experience */}
                <div className="relative group">
                  <textarea
                    name="experience"
                    value={form.experience}
                    onChange={handleChange}
                    rows={2}
                    placeholder="Previous tour / adventure experience (optional)"
                    className="w-full px-5 py-4 bg-white/50 border border-slate-200/60 rounded-2xl text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#870000] focus:bg-white focus:ring-4 focus:ring-[#870000]/10 transition-all resize-none font-medium"
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-[#870000] via-[#190A05] to-[#190A05] text-white rounded-2xl font-black text-sm shadow-[0_0_40px_rgba(20,184,166,0.3)] hover:shadow-[0_0_60px_rgba(20,184,166,0.5)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white group-hover:translate-x-0.5 transition-transform" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.528 5.855L.057 23.882a.75.75 0 0 0 .921.921l6.056-1.485A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.693 9.693 0 0 1-4.964-1.365l-.355-.212-3.683.903.93-3.595-.232-.37A9.693 9.693 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                        </svg>
                        Send via WhatsApp
                      </>
                    )}
                  </button>
                </div>

                <p className="text-slate-400 text-xs text-center font-medium mt-4">
                  Opens WhatsApp · We'll get back to you within 3–5 days
                </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
