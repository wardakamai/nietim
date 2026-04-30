import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Users, Award, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import TiltCard from '../components/TiltCard';
import { StaggerSection, FadeUpSection, staggerItem } from '../components/AnimatedSection';
import AnimatedDivider from '../components/AnimatedDivider';

const values = [
  { icon: <Shield />, title: 'Integrity', desc: 'We operate with absolute transparency and honesty in every transaction, never compromising on ethical standards.' },
  { icon: <Award />, title: 'Excellence', desc: 'Every facilitation is executed with meticulous attention to detail, ensuring the highest standards of professional service.' },
  { icon: <Users />, title: 'Partnership', desc: 'We view every client relationship as a long-term partnership built on mutual trust, respect, and shared success.' },
  { icon: <Globe />, title: 'Global Reach', desc: 'Our network spans 42+ countries, enabling us to connect buyers and sellers across all major petroleum trade corridors.' },
];

function Shield() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}

const team = [
  { name: 'Executive Director', role: 'Chief Executive Officer', region: 'London, UK' },
  { name: 'Director of Operations', role: 'Global Trade Operations', region: 'Rotterdam, NL' },
  { name: 'Head of Compliance', role: 'KYC/AML & Legal Affairs', region: 'Geneva, CH' },
  { name: 'Senior Mandate Officer', role: 'Mandate & Facilitation', region: 'Dubai, UAE' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 lg:pt-36">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/about-bg.jpg')" }} />
        <div className="absolute inset-0 bg-[#0a1628]/88" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUpSection>
            <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-full px-4 py-2 mb-6">
              <span className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase">About NIETIM LLP</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-6">
              Who We Are
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              A premier international oil & gas facilitation company built on trust, expertise, and a global network of verified energy trade partners.
            </p>
          </FadeUpSection>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUpSection fromLeft>
              <AnimatedDivider align="left" />
              <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3 mt-6">Company Overview</p>
              <h2 className="font-serif text-4xl font-bold text-white mb-6">
                Bridging Global<br />
                <span className="gold-text">Energy Markets</span>
              </h2>
              <div className="space-y-5 text-gray-300 leading-relaxed">
                <p>
                  NIETIM LLP is a Limited Liability Partnership registered and operating as an international oil & gas facilitation and mandating company. We specialize in connecting verified buyers and sellers of petroleum products in a secure, transparent, and legally compliant environment.
                </p>
                <p>
                  Founded by seasoned energy trade professionals, NIETIM LLP brings together deep market knowledge, established refinery relationships, and rigorous compliance standards to facilitate petroleum product transactions on a global scale.
                </p>
                <p>
                  Our mandate representation services provide direct access to genuine supply sources across major oil-producing regions including Russia, the Middle East, Europe, and West Africa — ensuring our clients receive authentic products at competitive market prices.
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="inline-flex mt-8"
              >
                <Link to="/services" className="btn-gold px-7 py-3.5 rounded-xl inline-flex items-center gap-2 text-sm font-bold">
                  <span>Our Services</span>
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
            </FadeUpSection>

            <FadeUpSection fromRight>
              <div className="grid grid-cols-1 gap-6">
                <TiltCard className="bg-[#0d1f3c] rounded-2xl p-8 border border-[#c9a84c]/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c]">
                      <Target size={22} />
                    </div>
                    <h3 className="text-white font-bold text-xl">Our Mission</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    To facilitate transparent, compliant, and efficient petroleum product transactions by connecting verified global buyers and sellers through professional mandate representation and trade facilitation services.
                  </p>
                </TiltCard>

                <TiltCard className="bg-[#0d1f3c] rounded-2xl p-8 border border-[#c9a84c]/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c]">
                      <Eye size={22} />
                    </div>
                    <h3 className="text-white font-bold text-xl">Our Vision</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    To be the world's most trusted petroleum trade facilitation company — recognized for our integrity, expertise, and ability to unlock value for buyers and sellers across the global energy ecosystem.
                  </p>
                </TiltCard>
              </div>
            </FadeUpSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#0d1f3c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUpSection className="text-center mb-16">
            <AnimatedDivider />
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">Core Values</p>
            <h2 className="font-serif text-4xl font-bold text-white">
              Principles That Guide Us
            </h2>
          </FadeUpSection>

          <StaggerSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <motion.div key={value.title} variants={staggerItem}>
                <TiltCard className="bg-[#0a1628] rounded-2xl p-8 text-center h-full">
                  <div className="w-16 h-16 rounded-2xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] mx-auto mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
                </TiltCard>
              </motion.div>
            ))}
          </StaggerSection>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-[#0a1628] grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUpSection className="text-center mb-16">
            <AnimatedDivider />
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">Leadership</p>
            <h2 className="font-serif text-4xl font-bold text-white">
              Our Senior Team
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Experienced professionals with decades of combined expertise in global petroleum trade, compliance, and international finance.
            </p>
          </FadeUpSection>

          <StaggerSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <motion.div key={member.name} variants={staggerItem}>
                <TiltCard className="bg-[#0d1f3c] rounded-2xl p-8 text-center h-full">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#c9a84c]/20 to-[#c9a84c]/5 border border-[#c9a84c]/20 flex items-center justify-center mx-auto mb-5">
                    <Users size={32} className="text-[#c9a84c]" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-1">{member.name}</h3>
                  <p className="text-[#c9a84c] text-xs font-semibold tracking-wide mb-2">{member.role}</p>
                  <p className="text-gray-500 text-xs">{member.region}</p>
                </TiltCard>
              </motion.div>
            ))}
          </StaggerSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0d1f3c] to-[#102548] border-t border-[#c9a84c]/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeUpSection>
            <h2 className="font-serif text-4xl font-bold text-white mb-4">
              Ready to Work with <span className="gold-text">NIETIM LLP</span>?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Contact our team to discuss your petroleum product needs.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }} className="inline-flex">
              <Link to="/contact" className="btn-gold px-10 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2">
                <span>Get in Touch</span>
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </FadeUpSection>
        </div>
      </section>
    </div>
  );
}
