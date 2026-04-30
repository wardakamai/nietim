import { Link } from 'react-router-dom';
import { ArrowRight, Handshake, Globe, Shield, FileText, CheckCircle, BarChart2, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { StaggerSection, FadeUpSection, staggerItem } from '../components/AnimatedSection';
import AnimatedDivider from '../components/AnimatedDivider';

const services = [
  {
    icon: <Handshake size={32} />,
    title: 'Trade Facilitation',
    tagline: 'Connecting Global Buyers & Sellers',
    desc: 'NIETIM LLP acts as a professional intermediary, connecting verified buyers and sellers of petroleum products in a secure, transparent, and legally structured environment. We ensure all parties are properly vetted before introduction.',
    features: [
      'Buyer/seller introduction and matching services',
      'Product verification and specification confirmation',
      'Price negotiation and deal structure advisory',
      'Transaction timeline management',
      'Escrow and payment facilitation coordination',
    ],
  },
  {
    icon: <Globe size={32} />,
    title: 'Mandate Representation',
    tagline: 'Direct Access to Genuine Supply',
    desc: 'As authorized mandates for major refineries and petroleum producers, we provide verified buyers with direct access to genuine supply sources — eliminating layers of unverified intermediaries that often delay or derail transactions.',
    features: [
      'Verified refinery and blending plant connections',
      'Direct mandate authorization documentation',
      'Supply capacity confirmation letters (SCL)',
      'Full Corporate Offer (FCO) issuance',
      'Product lifting schedule coordination',
    ],
  },
  {
    icon: <Shield size={32} />,
    title: 'Counterparty Verification',
    tagline: 'Rigorous Due Diligence',
    desc: "Our comprehensive verification process ensures every party in a transaction is legitimate, financially capable, and compliant with international trade regulations. We eliminate bad actors and time-wasters from day one.",
    features: [
      'KYC (Know Your Customer) documentation review',
      'AML (Anti-Money Laundering) screening',
      'Company registration and authority verification',
      'Proof of product / proof of funds validation',
      'Sanctions and PEP screening',
    ],
  },
  {
    icon: <FileText size={32} />,
    title: 'Transaction Documentation',
    tagline: 'End-to-End Document Management',
    desc: 'We provide professional guidance and support for all transaction documentation, from initial expressions of interest through to final delivery. Our team ensures every document meets international trade standards.',
    features: [
      'Letter of Intent (LOI) drafting and review',
      'ICPO (Irrevocable Corporate Purchase Order)',
      'Sales and Purchase Agreement (SPA) coordination',
      'Banking instruments — SBLC, LC, DLC, BG',
      'Shipping, inspection, and customs documentation',
    ],
  },
  {
    icon: <BarChart2 size={32} />,
    title: 'Market Intelligence',
    tagline: 'Informed Trading Decisions',
    desc: 'Our market intelligence services provide clients with up-to-date pricing data, supply/demand analysis, and strategic insights to help make informed trading decisions in the global petroleum market.',
    features: [
      'Daily and weekly market price reports',
      'Supply/demand analysis by product and region',
      'Freight and logistics cost benchmarking',
      'Regulatory update alerts',
      'Competitor and market positioning analysis',
    ],
  },
  {
    icon: <Lock size={32} />,
    title: 'Compliance & Legal Support',
    tagline: 'Safe, Compliant Transactions',
    desc: 'Our compliance services ensure all transactions conform to applicable international law, OFAC/UN sanctions regimes, and industry best practices — protecting all parties from legal and reputational risk.',
    features: [
      'OFAC, UN, EU sanctions compliance checks',
      'Trade law and regulatory guidance',
      'Contract review and legal advisory referrals',
      'AML/CTF compliance frameworks',
      'Dispute resolution facilitation',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-28 lg:pt-36">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#102548] to-[#0a1628]" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)'}} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUpSection>
            <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-full px-4 py-2 mb-6">
              <span className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase">Our Services</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-6">
              Comprehensive<br />
              <span className="gold-text">Facilitation Services</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              From mandate representation to transaction documentation, NIETIM LLP provides the full spectrum of professional oil & gas trade facilitation services.
            </p>
          </FadeUpSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerSection className="space-y-8">
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={staggerItem}
                className="card-hover bg-[#0d1f3c] rounded-2xl p-8 md:p-10 border border-[#c9a84c]/10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                  <div className="lg:col-span-2">
                    <div className="w-16 h-16 rounded-2xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] mb-5">
                      {service.icon}
                    </div>
                    <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-2">{service.tagline}</p>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{service.desc}</p>
                  </div>
                  <div className="lg:col-span-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3 p-4 rounded-xl bg-[#0a1628] border border-[#c9a84c]/8">
                          <CheckCircle size={16} className="text-[#c9a84c] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }} className="inline-flex">
                        <Link to="/contact" className="btn-gold px-6 py-3 rounded-xl text-sm font-bold inline-flex items-center gap-2">
                          <span>Inquire About This Service</span>
                          <ArrowRight size={14} />
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerSection>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-[#0d1f3c] border-t border-b border-[#c9a84c]/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeUpSection>
            <AnimatedDivider />
            <h2 className="font-serif text-4xl font-bold text-white mb-4">Ready to Engage?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Contact us to discuss your requirements. Our team will respond within 24 business hours with a customized service proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                <Link to="/contact" className="btn-gold px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2">
                  <span>Contact Our Team</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                <Link to="/how-it-works" className="btn-outline-gold px-8 py-4 rounded-xl font-bold">
                  See How It Works
                </Link>
              </motion.div>
            </div>
          </FadeUpSection>
        </div>
      </section>
    </div>
  );
}
