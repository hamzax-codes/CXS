import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { User, Mail, Phone, BookOpen, Star, Send, CheckCircle, ChevronDown, Mountain } from 'lucide-react';

const departments = [
  'Computer Science', 'Software Engineering', 'Electrical Engineering',
  'Mechanical Engineering', 'Civil Engineering', 'Business Administration',
  'Economics', 'Mass Communication', 'Psychology', 'Fine Arts', 'Other',
];

const semesters = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];

const skills = [
  { value: 'photography', label: '📸 Photography' },
  { value: 'first-aid', label: '⛑️ First Aid' },
  { value: 'social-media', label: '📱 Social Media' },
  { value: 'navigation', label: '🧭 Navigation' },
  { value: 'cooking', label: '🍳 Cooking' },
  { value: 'driving', label: '🚗 Driving' },
  { value: 'hiking', label: '🥾 Hiking/Trekking' },
  { value: 'video-editing', label: '🎬 Video Editing' },
];

export default function ApplySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', department: '', semester: '',
    whyJoin: '', experience: '',
  });

  const toggleSkill = (val: string) => {
    setSelectedSkills((prev) =>
      prev.includes(val) ? prev.filter((s) => s !== val) : [...prev, val]
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="apply" className="reveal-section py-24 bg-gradient-to-br from-slate-50 via-[#f43b47]/10 to-emerald-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#f43b47]/10 text-[#453a94] px-4 py-2 rounded-full border border-[#f43b47]/20 mb-4">
              <User className="w-3.5 h-3.5" />
              <span className="text-xs font-semibold tracking-widest uppercase">Join Our Society</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">
              Become a{' '}
              <span className="text-gradient-sunset">Member</span>
            </h2>
            <p className="text-slate-500 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
              Fill out this form and we'll review your application. We welcome students from all departments who share a passion for adventure and exploration.
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
            <div className="bg-gradient-to-br from-[#453a94] to-[#453a94] rounded-3xl p-7 text-white shadow-xl shadow-[#f43b47]/20">
              <Mountain className="w-10 h-10 mb-4 text-[#f43b47]/20" />
              <h3 className="text-xl font-black mb-2">Why Join Us?</h3>
              <p className="text-[#f43b47]/10 text-sm leading-relaxed mb-6">
                Be part of Pakistan's most adventurous university society. Explore, connect, and grow with us.
              </p>
              {[
                'Access to 8+ yearly tours',
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
                  <CheckCircle className="w-4 h-4 text-[#f43b47] flex-shrink-0" />
                  <span className="text-[#f43b47]/10 text-sm">{benefit}</span>
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
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  {item}
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
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-white rounded-4xl p-12 shadow-2xl text-center h-full flex flex-col items-center justify-center border border-[#f43b47]/20"
                style={{ borderRadius: '2rem' }}
              >
                <div className="w-24 h-24 rounded-[2rem] bg-gradient-to-br from-[#f43b47] to-[#453a94] flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-[#f43b47]/40 rotate-12">
                  <CheckCircle className="w-12 h-12 text-white -rotate-12" />
                </div>
                <h3 className="text-slate-900 text-3xl font-black mb-4">Application Received! 🎉</h3>
                <p className="text-slate-500 text-base leading-relaxed max-w-sm">
                  Thank you for applying! Our team will review your application and get back to you within <strong>3-5 business days</strong> via WhatsApp or email.
                </p>
                <div className="mt-8 text-4xl">🏔️ 🌟 🗺️</div>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/60 backdrop-blur-xl rounded-4xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(13,148,136,0.08)] border border-white transition-shadow duration-500 space-y-6"
                style={{ borderRadius: '2rem' }}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-black text-slate-800">Application Form</h3>
                  <p className="text-slate-500 text-sm mt-1">Ready for the adventure of a lifetime?</p>
                </div>

                {/* Name & Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[#f43b47] transition-colors" />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="w-full pl-11 pr-4 py-3.5 bg-white/50 border border-slate-200/60 rounded-2xl text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#f43b47] focus:bg-white focus:ring-4 focus:ring-[#f43b47]/10 transition-all font-medium"
                    />
                  </div>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[#f43b47] transition-colors" />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email address"
                      required
                      className="w-full pl-11 pr-4 py-3.5 bg-white/50 border border-slate-200/60 rounded-2xl text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#f43b47] focus:bg-white focus:ring-4 focus:ring-[#f43b47]/10 transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="relative group">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[#f43b47] transition-colors" />
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="WhatsApp Number (+92 300 0000000)"
                    required
                    className="w-full pl-11 pr-4 py-3.5 bg-white/50 border border-slate-200/60 rounded-2xl text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#f43b47] focus:bg-white focus:ring-4 focus:ring-[#f43b47]/10 transition-all font-medium"
                  />
                </div>

                {/* Dept & Semester row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="relative group">
                    <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none group-focus-within:text-[#f43b47] transition-colors" />
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    <select
                      name="department"
                      value={form.department}
                      onChange={handleChange}
                      required
                      className="w-full pl-11 pr-10 py-3.5 bg-white/50 border border-slate-200/60 rounded-2xl text-slate-800 text-sm focus:outline-none focus:border-[#f43b47] focus:bg-white focus:ring-4 focus:ring-[#f43b47]/10 transition-all appearance-none font-medium cursor-pointer"
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
                      className="w-full px-5 pr-10 py-3.5 bg-white/50 border border-slate-200/60 rounded-2xl text-slate-800 text-sm focus:outline-none focus:border-[#f43b47] focus:bg-white focus:ring-4 focus:ring-[#f43b47]/10 transition-all appearance-none font-medium cursor-pointer"
                    >
                      <option value="" disabled className="text-slate-400">Current Semester</option>
                      {semesters.map((s) => (
                        <option key={s} value={s}>{s} Semester</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <p className="text-slate-600 text-xs font-semibold mb-2.5 tracking-wide pl-1">
                    Select Your Skills <span className="font-normal opacity-70">(Optional)</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skills.map(({ value, label }) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => toggleSkill(value)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-300 border ${selectedSkills.includes(value)
                            ? 'bg-gradient-to-tr from-[#f43b47] to-[#f43b47] text-white border-transparent shadow-md shadow-[#f43b47]/30 -translate-y-0.5'
                            : 'bg-white/60 text-slate-600 border-slate-200/60 hover:border-[#f43b47] hover:bg-[#f43b47]/10 hover:text-[#453a94] hover:-translate-y-0.5'
                          }`}
                      >
                        {label}
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
                    className="w-full px-5 py-4 bg-white/50 border border-slate-200/60 rounded-2xl text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#f43b47] focus:bg-white focus:ring-4 focus:ring-[#f43b47]/10 transition-all resize-none font-medium"
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
                    className="w-full px-5 py-4 bg-white/50 border border-slate-200/60 rounded-2xl text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#f43b47] focus:bg-white focus:ring-4 focus:ring-[#f43b47]/10 transition-all resize-none font-medium"
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-[#f43b47] via-[#453a94] to-[#453a94] text-white rounded-2xl font-black text-sm shadow-[0_0_40px_rgba(20,184,166,0.3)] hover:shadow-[0_0_60px_rgba(20,184,166,0.5)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        Submit Application
                      </>
                    )}
                  </button>
                </div>

                <p className="text-slate-400 text-xs text-center font-medium mt-4">
                  We'll reach out within 3–5 days · No spam, ever 🤝
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
