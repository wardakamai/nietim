import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUpSection } from '../components/AnimatedSection';

const inquiryTypes = [
  { value: 'quote', label: 'Request a Quote' },
  { value: 'loi', label: 'Submit LOI / ICPO' },
  { value: 'seller', label: 'Register as Seller / Mandate' },
  { value: 'services', label: 'General Service Inquiry' },
  { value: 'compliance', label: 'Compliance / KYC Query' },
  { value: 'other', label: 'Other' },
];

const products = [
  'EN590 10PPM Diesel',
  'Jet A1 Aviation Fuel',
  'D6 Virgin Fuel Oil',
  'Crude Oil',
  'Other / Multiple Products',
];

const quantities = [
  'Under 50,000 MT',
  '50,000 – 200,000 MT',
  '200,000 – 500,000 MT',
  '500,000 MT – 1,000,000 MT',
  'Over 1,000,000 MT',
];

export default function ContactPage() {
  const location = useLocation();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const params = new URLSearchParams(location.search);
  const typeParam = params.get('type') || 'quote';

  const [form, setForm] = useState({
    inquiryType: typeParam,
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    product: '',
    quantity: '',
    deliveryTerms: '',
    message: '',
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    setForm(prev => ({
      ...prev,
      [e.target.name]: target.type === 'checkbox' ? target.checked : e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-28 lg:pt-36">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#102548] to-[#0a1628]" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUpSection>
            <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-full px-4 py-2 mb-6">
              <span className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase">Get In Touch</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-6">
              Contact <span className="gold-text">NIETIM LLP</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              Submit your inquiry, LOI, or ICPO and our team will respond within 24 business hours.
            </p>
          </FadeUpSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <FadeUpSection fromLeft className="space-y-6">
              {/* Contact Info */}
              <div className="bg-[#0d1f3c] rounded-2xl p-7 border border-[#c9a84c]/10">
                <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                  <span className="w-6 h-0.5 bg-[#c9a84c]"></span>
                  Contact Information
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] flex-shrink-0">
                      <Mail size={16} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs mb-1">Email</p>
                      <a href="mailto:taspolatova@nietim.com" className="text-white hover:text-[#c9a84c] text-sm transition-colors font-medium">
                        taspolatova@nietim.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] flex-shrink-0">
                      <Phone size={16} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs mb-1">Phone</p>
                      <a href="tel:+77272436776" className="text-white hover:text-[#c9a84c] text-sm transition-colors font-medium">
                        +7 (727) 2436776
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] flex-shrink-0">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs mb-1">Office</p>
                      <p className="text-white text-sm font-medium leading-relaxed">
                        No. 120 Gogol Street, Amali,<br />
                        Almaty, Kazakhstan
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/46764916070"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#25D366]/8 border border-[#25D366]/25 rounded-2xl p-7 transition-all group"
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(37, 211, 102, 0.12)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-[#25D366]/15 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#25D366]">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">WhatsApp Direct</h4>
                    <p className="text-[#25D366] text-xs">Chat with our team instantly</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  For urgent inquiries, connect with our trading team directly on WhatsApp for immediate assistance.
                </p>
              </motion.a>

              {/* Response Time */}
              <div className="bg-[#0d1f3c] rounded-2xl p-7 border border-[#c9a84c]/10">
                <h4 className="text-[#c9a84c] font-bold text-sm tracking-widest uppercase mb-4">Response Times</h4>
                <div className="space-y-3">
                  {[
                    { type: 'General Inquiries', time: 'Within 24 hours' },
                    { type: 'LOI / ICPO Review', time: 'Within 48 hours' },
                    { type: 'Quote Requests', time: 'Within 24 hours' },
                    { type: 'Urgent / WhatsApp', time: 'Within 2 hours' },
                  ].map((item) => (
                    <div key={item.type} className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">{item.type}</span>
                      <span className="text-[#c9a84c] text-xs font-bold">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUpSection>

            {/* Form */}
            <FadeUpSection fromRight className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="bg-[#0d1f3c] rounded-2xl border border-[#c9a84c]/20 p-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 200, damping: 20 }}
                      className="w-20 h-20 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle size={40} className="text-[#c9a84c]" />
                    </motion.div>
                    <h3 className="font-serif text-3xl font-bold text-white mb-4">Inquiry Received</h3>
                    <p className="text-gray-300 text-lg mb-2">Thank you for contacting NIETIM LLP.</p>
                    <p className="text-gray-400 mb-8">
                      Your inquiry has been received and assigned to our trading team. We will review your submission and respond within the timeframe indicated for your inquiry type.
                    </p>
                    <p className="text-[#c9a84c] text-sm font-semibold">
                      Reference your email address for follow-up communications.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#0d1f3c] rounded-2xl border border-[#c9a84c]/10 p-8 md:p-10"
                  >
                    <h3 className="text-white font-bold text-2xl mb-2">Submit Your Inquiry</h3>
                    <p className="text-gray-400 text-sm mb-8">All fields marked with * are required.</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Inquiry Type */}
                      <div>
                        <label className="block text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-2">Inquiry Type *</label>
                        <select
                          name="inquiryType"
                          value={form.inquiryType}
                          onChange={handleChange}
                          required
                          className="form-input w-full px-4 py-3 rounded-xl text-sm"
                        >
                          {inquiryTypes.map(t => (
                            <option key={t.value} value={t.value}>{t.label}</option>
                          ))}
                        </select>
                      </div>

                      {/* Name Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-2">First Name *</label>
                          <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required placeholder="John" className="form-input w-full px-4 py-3 rounded-xl text-sm" />
                        </div>
                        <div>
                          <label className="block text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-2">Last Name *</label>
                          <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required placeholder="Smith" className="form-input w-full px-4 py-3 rounded-xl text-sm" />
                        </div>
                      </div>

                      {/* Company + Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-2">Company Name *</label>
                          <input type="text" name="company" value={form.company} onChange={handleChange} required placeholder="Your Company Ltd." className="form-input w-full px-4 py-3 rounded-xl text-sm" />
                        </div>
                        <div>
                          <label className="block text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-2">Business Email *</label>
                          <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="john@company.com" className="form-input w-full px-4 py-3 rounded-xl text-sm" />
                        </div>
                      </div>

                      {/* Phone + Country */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-2">Phone / WhatsApp</label>
                          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+44 7XXX XXXXXX" className="form-input w-full px-4 py-3 rounded-xl text-sm" />
                        </div>
                        <div>
                          <label className="block text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-2">Country *</label>
                          <input type="text" name="country" value={form.country} onChange={handleChange} required placeholder="United Kingdom" className="form-input w-full px-4 py-3 rounded-xl text-sm" />
                        </div>
                      </div>

                      {/* Product + Quantity */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-2">Product of Interest</label>
                          <select name="product" value={form.product} onChange={handleChange} className="form-input w-full px-4 py-3 rounded-xl text-sm">
                            <option value="">Select Product</option>
                            {products.map(p => <option key={p} value={p}>{p}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-2">Quantity Required</label>
                          <select name="quantity" value={form.quantity} onChange={handleChange} className="form-input w-full px-4 py-3 rounded-xl text-sm">
                            <option value="">Select Quantity</option>
                            {quantities.map(q => <option key={q} value={q}>{q}</option>)}
                          </select>
                        </div>
                      </div>

                      {/* Delivery Terms */}
                      <div>
                        <label className="block text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-2">Preferred Delivery Terms</label>
                        <input type="text" name="deliveryTerms" value={form.deliveryTerms} onChange={handleChange} placeholder="FOB / CIF / TTO / CIP" className="form-input w-full px-4 py-3 rounded-xl text-sm" />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-2">Message / Details *</label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Please provide details about your requirements, transaction goals, or any other relevant information..."
                          className="form-input w-full px-4 py-3 rounded-xl text-sm resize-none"
                        />
                      </div>

                      {/* Consent */}
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          name="consent"
                          id="consent"
                          checked={form.consent}
                          onChange={handleChange}
                          required
                          className="mt-1 accent-[#c9a84c] w-4 h-4 flex-shrink-0"
                        />
                        <label htmlFor="consent" className="text-gray-400 text-xs leading-relaxed cursor-pointer">
                          I confirm that the information provided is accurate and I consent to NIETIM LLP processing my data to respond to this inquiry. I understand that all data is handled in accordance with applicable data protection regulations.
                        </label>
                      </div>

                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={{ scale: loading ? 1 : 1.02 }}
                        whileTap={{ scale: loading ? 1 : 0.98 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                        className="btn-gold w-full py-4 rounded-xl font-bold text-sm inline-flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-[#0a1628]/30 border-t-[#0a1628] rounded-full animate-spin" />
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Inquiry</span>
                            <Send size={16} />
                          </>
                        )}
                      </motion.button>

                      <p className="text-gray-500 text-xs text-center">
                        Your information is secure and will never be shared with unrelated third parties.
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </FadeUpSection>
          </div>
        </div>
      </section>
    </div>
  );
}
