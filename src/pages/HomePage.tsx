import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Globe, Handshake, FileText, ChevronDown, Star, TrendingUp, CheckCircle } from 'lucide-react';
import { motion, useScroll, useTransform, useInView, animate } from 'framer-motion';
import TiltCard from '../components/TiltCard';
import { StaggerSection, FadeUpSection, staggerItem } from '../components/AnimatedSection';
import AnimatedDivider from '../components/AnimatedDivider';
import { staggerContainer, wordReveal, floatingOrb, floatingOrbSlow } from '../utils/animations';

function SpringCounter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, end, {
      duration: 2,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, end]);

  return <span ref={ref}>{display}{suffix}</span>;
}

const services = [
  {
    icon: <Handshake size={28} />,
    title: 'Trade Facilitation',
    desc: 'We bridge verified buyers and sellers of petroleum products, ensuring smooth, compliant, and efficient transactions across global markets.',
  },
  {
    icon: <Globe size={28} />,
    title: 'Mandate Representation',
    desc: 'Authorized mandate representatives for major oil producers and refineries, providing direct access to genuine supply sources.',
  },
  {
    icon: <Shield size={28} />,
    title: 'Counterparty Verification',
    desc: 'Rigorous KYC/AML due diligence and verification protocols to ensure all parties are legitimate, capable, and compliant.',
  },
  {
    icon: <FileText size={28} />,
    title: 'Transaction Support',
    desc: 'End-to-end documentation support including LOI, ICPO, FCO, SPA, and all required transaction paperwork.',
  },
];

const products = [
  { name: 'EN590 10PPM', type: 'Ultra-Low Sulphur Diesel', origin: 'European Refineries', delivery: 'FOB / CIF / TTO' },
  { name: 'Jet A1', type: 'Aviation Turbine Fuel', origin: 'Multiple Origins', delivery: 'FOB / CIF / CIP' },
  { name: 'D6 Virgin', type: 'Residual Fuel Oil', origin: 'Russian Federation', delivery: 'FOB / TTO' },
];

const stats = [
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 42, suffix: '+', label: 'Countries Served' },
  { value: 500, suffix: 'M+', label: 'Barrels Facilitated' },
  { value: 200, suffix: '+', label: 'Verified Partners' },
];

const headlineLines = [
  { text: 'Connecting Global', className: 'text-white' },
  { text: 'Energy Markets', className: 'gold-text' },
  { text: 'with Precision', className: 'text-white text-3xl sm:text-5xl lg:text-6xl' },
];

export default function HomePage() {
  const { scrollY } = useScroll();
  const heroBgY = useTransform(scrollY, [0, 600], [0, 180]);

  return (
    <div className="min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
            y: heroBgY,
            scale: 1.15,
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay" />
        {/* Subtle grid */}
        <div className="absolute inset-0 grid-pattern opacity-40" />

        {/* Floating gold orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 50%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={floatingOrb}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/6 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={floatingOrbSlow}
        />

        {/* Gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 lg:pt-36 pb-20">
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-full px-4 py-2 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse"></span>
              <span className="text-[#c9a84c] text-xs font-bold tracking-[0.08em] sm:tracking-widest uppercase">International Oil & Gas Mandating</span>
            </motion.div>

            {/* Staggered headline */}
            <motion.h1
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              style={{ perspective: 1000 }}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {headlineLines.map((line, li) => (
                <span key={li} className={`block ${line.className}`}>
                  {line.text.split(' ').map((word, wi) => (
                    <motion.span
                      key={wi}
                      variants={wordReveal}
                      className="inline-block mr-[0.25em]"
                      style={{ display: 'inline-block' }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl"
            >
              NIETIM LLP is a trusted international facilitation and mandating company specializing in verified petroleum product transactions — from LOI to final delivery.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                <Link to="/contact" className="btn-gold w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold inline-flex items-center justify-center gap-2">
                  <span>Request a Quote</span>
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                <Link to="/contact?type=loi" className="btn-outline-gold w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold inline-flex items-center justify-center gap-2">
                  Submit LOI / ICPO
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                <Link to="/how-it-works" className="text-gray-300 hover:text-white w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold inline-flex items-center justify-center gap-2 transition-colors">
                  How It Works <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-wrap items-center gap-6 mt-12"
            >
              {['KYC Verified Partners', 'AML Compliant', 'SWIFT/BCL Accepted', 'Global Delivery'].map((tag, i) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.95 + i * 0.1 }}
                  className="flex items-center gap-2 text-gray-400 text-sm"
                >
                  <CheckCircle size={14} className="text-[#c9a84c]" />
                  {tag}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
            <span className="text-xs tracking-widest uppercase block mb-1">Scroll</span>
            <ChevronDown size={18} className="mx-auto" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="bg-[#0d1f3c] border-y border-[#c9a84c]/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerSection className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={staggerItem} className="text-center">
                <div className="font-serif text-4xl sm:text-5xl font-bold gold-text mb-2">
                  <SpringCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-400 text-sm font-medium tracking-wide uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </StaggerSection>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="py-24 bg-[#0a1628] grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUpSection className="text-center mb-16">
            <AnimatedDivider />
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">What We Do</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive facilitation services for the global petroleum trade ecosystem
            </p>
          </FadeUpSection>

          <StaggerSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <motion.div key={service.title} variants={staggerItem}>
                <TiltCard className="bg-[#0d1f3c] rounded-2xl p-8 h-full">
                  <div className="w-14 h-14 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-1 text-[#c9a84c] text-sm font-semibold mt-5 hover:gap-2 transition-all">
                    Learn more <ArrowRight size={14} />
                  </Link>
                </TiltCard>
              </motion.div>
            ))}
          </StaggerSection>

          <FadeUpSection className="text-center mt-12">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }} className="inline-flex">
              <Link to="/services" className="btn-outline-gold px-8 py-3.5 rounded-xl inline-flex items-center gap-2">
                View All Services <ArrowRight size={16} />
              </Link>
            </motion.div>
          </FadeUpSection>
        </div>
      </section>

      {/* ===== PRODUCTS PREVIEW ===== */}
      <section className="py-24 bg-[#0d1f3c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUpSection className="text-center mb-16">
            <AnimatedDivider />
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">Petroleum Products</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
              Available Products
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We facilitate transactions for premium grade petroleum products with global delivery terms
            </p>
          </FadeUpSection>

          <StaggerSection className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <motion.div key={product.name} variants={staggerItem}>
                <TiltCard className="relative bg-gradient-to-br from-[#0a1628] to-[#102548] rounded-2xl p-8 glow-border h-full">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#c9a84c]/5 rounded-full -translate-y-8 translate-x-8 blur-2xl" />
                  <div className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-2">{product.type}</div>
                  <h3 className="font-serif text-3xl font-bold text-white mb-4">{product.name}</h3>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Origin</span>
                      <span className="text-gray-200 font-medium">{product.origin}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Delivery Terms</span>
                      <span className="text-gray-200 font-medium">{product.delivery}</span>
                    </div>
                  </div>
                  <div className="border-t border-[#c9a84c]/10 pt-5 flex items-center justify-between">
                    <Link to="/products" className="text-[#c9a84c] text-sm font-bold hover:text-[#e2c06e] transition-colors">
                      View Specifications →
                    </Link>
                    <Link to="/contact" className="bg-[#c9a84c]/10 text-[#c9a84c] px-4 py-2 rounded-lg text-xs font-bold hover:bg-[#c9a84c]/20 transition-all border border-[#c9a84c]/20">
                      Inquire
                    </Link>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </StaggerSection>

          <FadeUpSection className="text-center mt-12">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }} className="inline-flex">
              <Link to="/products" className="btn-gold px-8 py-3.5 rounded-xl inline-flex items-center gap-2">
                <span>View All Products & Specs</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </FadeUpSection>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-24 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUpSection fromLeft className="">
              <AnimatedDivider align="left" />
              <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3 mt-6">Why NIETIM LLP</p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
                Your Trusted Partner in<br />
                <span className="gold-text">Global Energy Trade</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                With deep expertise in the petroleum trade ecosystem, we provide unmatched credibility, verified networks, and seamless transaction management from first contact to final delivery.
              </p>
              <div className="space-y-4">
                {[
                  'Direct access to verified refineries and blending facilities',
                  'Strict KYC/AML protocols for all counterparties',
                  'Professional mandate documentation — LOI, ICPO, FCO, SPA',
                  'Transparent, commission-based facilitation model',
                  'Multi-jurisdictional legal and compliance support',
                  'Dedicated transaction coordinators for each deal',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#c9a84c] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mt-10">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                  <Link to="/about" className="btn-gold px-7 py-3.5 rounded-xl inline-flex items-center gap-2 text-sm font-bold">
                    <span>Learn About Us</span>
                    <ArrowRight size={15} />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                  <Link to="/contact" className="btn-outline-gold px-7 py-3.5 rounded-xl inline-flex items-center gap-2 text-sm font-bold">
                    Start a Transaction
                  </Link>
                </motion.div>
              </div>
            </FadeUpSection>

            <StaggerSection className="grid grid-cols-2 gap-4">
              {[
                { icon: <Shield size={24} />, title: 'Fully Compliant', desc: 'KYC/AML verified processes aligned with international trade law' },
                { icon: <Globe size={24} />, title: 'Global Network', desc: '200+ verified partners across 42 countries' },
                { icon: <TrendingUp size={24} />, title: 'Proven Track Record', desc: '500M+ barrels facilitated over 15 years' },
                { icon: <Star size={24} />, title: 'Premium Quality', desc: 'Only certified, spec-compliant product facilitation' },
              ].map((item) => (
                <motion.div key={item.title} variants={staggerItem}>
                  <TiltCard className="bg-[#0d1f3c] rounded-2xl p-6 h-full">
                    <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] mb-4">
                      {item.icon}
                    </div>
                    <h4 className="text-white font-bold text-sm mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                  </TiltCard>
                </motion.div>
              ))}
            </StaggerSection>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f3c] via-[#102548] to-[#0d1f3c]" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 70%)'
        }} />

        {/* Animated orbs */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
          animate={floatingOrbSlow}
        />

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <FadeUpSection>
            <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-full px-4 py-2 mb-6">
              <span className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase">Ready to Trade?</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Begin Your Petroleum<br />
              <span className="gold-text">Transaction Today</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              Submit your Letter of Intent (LOI) or ICPO and let our experienced facilitators connect you with verified counterparties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                <Link to="/contact?type=quote" className="btn-gold px-10 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2">
                  <span>Request a Quote</span>
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                <Link to="/contact?type=loi" className="btn-outline-gold px-10 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2">
                  Submit LOI / ICPO
                </Link>
              </motion.div>
            </div>
          </FadeUpSection>
        </div>
      </section>
    </div>
  );
}
