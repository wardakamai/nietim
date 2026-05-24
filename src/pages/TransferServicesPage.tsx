import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Anchor, Layers, Droplets, FileText, Shield, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import TiltCard from '../components/TiltCard';
import { StaggerSection, FadeUpSection, staggerItem } from '../components/AnimatedSection';
import AnimatedDivider from '../components/AnimatedDivider';
import SEO from '../components/SEO';

const transferSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Oil & Gas Product Transfer Services',
  description:
    'NIETIM LLP facilitates petroleum product transfer operations — vessel to oil terminal discharge and tank-to-tank product transfers. Includes oil injection services, independent inspection, and full transaction documentation.',
  provider: {
    '@type': 'Organization',
    name: 'NIETIM LLP',
    url: 'https://www.nietim.com',
  },
  serviceType: [
    'Vessel to Oil Terminal Transfer',
    'Tank to Tank Product Transfer',
    'Oil Injection Services',
    'Marine Petroleum Transfer',
  ],
  areaServed: 'Worldwide',
};

const capabilities = [
  {
    icon: <Anchor size={28} />,
    title: 'Marine Coordination',
    desc: 'Vessel scheduling, berth nomination, port agent liaison, and marine operations oversight from arrival to departure.',
  },
  {
    icon: <Activity size={28} />,
    title: 'Metering & Volume Control',
    desc: 'Independent outturn metering, shore tank ullage reports, and volume reconciliation between ship and shore figures.',
  },
  {
    icon: <Shield size={28} />,
    title: 'Independent Inspection',
    desc: 'SGS, Bureau Veritas, or Intertek inspection at all transfer points — quantity and quality verified before and after transfer.',
  },
  {
    icon: <FileText size={28} />,
    title: 'Full Documentation',
    desc: 'Bill of Lading, Q&Q certificates, delivery orders, outturn reports, shore tank certificates, and customs clearance documents.',
  },
  {
    icon: <Droplets size={28} />,
    title: 'Product Integrity',
    desc: 'Line displacement procedures, product segregation protocols, and contamination prevention throughout the transfer operation.',
  },
  {
    icon: <Layers size={28} />,
    title: 'Regulatory Compliance',
    desc: 'MARPOL compliance, terminal safety rules, customs and excise procedures, and sanctions screening on all counterparties.',
  },
];

const documents = [
  'Notice of Readiness (NOR)',
  'Ship Shore Safety Checklist',
  'Ullage Report (Before & After)',
  'Outturn / Shore Tank Certificate',
  'Quantity & Quality (Q&Q) Certificate',
  'Bill of Lading (B/L)',
  'Delivery Order (DO)',
  'Customs Entry / Clearance Documents',
  'Independent Inspection Report (SGS/BV)',
  'Volume Reconciliation Statement',
];

const clients = [
  { label: 'Oil Terminal Operators', desc: 'Receiving product from import tankers or managing inter-tank movements within the terminal.' },
  { label: 'Petroleum Trading Companies', desc: 'Transferring title and custody of bulk petroleum products at terminals or offshore.' },
  { label: 'Refineries & Blending Plants', desc: 'Receiving crude or blend components via vessel, injecting feedstock into process units.' },
  { label: 'Ship Owners & Charterers', desc: 'Discharging cargo at destination terminals with verified quantity and quality outturn.' },
  { label: 'Storage Facility Operators', desc: 'Managing tank-to-tank movements for stock segregation, blending, or lease storage operations.' },
  { label: 'International Fuel Distributors', desc: 'Coordinating product receipt, transfer, and onward delivery from bonded or customs-cleared terminals.' },
];

export default function TransferServicesPage() {
  return (
    <div className="min-h-screen pt-28 lg:pt-36">
      <SEO
        title="Oil Transfer Services | Vessel to Terminal & Tank | NIETIM"
        description="NIETIM LLP facilitates vessel-to-terminal and tank-to-tank petroleum product transfers. Verified mandate, SGS inspection, full documentation. Global oil transfer services."
        canonical="/transfer-services"
        schemaJson={transferSchema}
      />

      {/* ===== HERO ===== */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628]" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(ellipse at 70% 40%, rgba(201,168,76,0.07) 0%, transparent 65%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUpSection>
            <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-full px-4 py-2 mb-6">
              <span className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase">Petroleum Transfer Services</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight">
              Oil Transfer Services —{' '}
              <span className="gold-text">Vessel to Terminal & Tank to Tank</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl leading-relaxed mb-10">
              NIETIM LLP facilitates petroleum product transfer operations for qualified counterparties — from tanker vessel discharge into oil terminals, to inter-tank product movements and oil injection services. Every operation is independently inspected, fully documented, and compliant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                <Link to="/contact" className="btn-gold px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2">
                  <span>Request Transfer Facilitation</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                <Link to="/how-it-works" className="btn-outline-gold px-8 py-4 rounded-xl font-bold">
                  How It Works
                </Link>
              </motion.div>
            </div>
          </FadeUpSection>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="py-10 bg-[#0d1f3c] border-y border-[#c9a84c]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Transfer Types', value: 'Vessel · Terminal · Tank' },
              { label: 'Inspection', value: 'SGS / Bureau Veritas / Intertek' },
              { label: 'Documentation', value: 'Full Q&Q, B/L, Outturn Reports' },
              { label: 'Coverage', value: 'Global — All Major Ports' },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-[#c9a84c] font-bold text-sm mb-1 tracking-wide">{item.label}</div>
                <div className="text-white font-medium text-sm">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRIMARY SERVICES ===== */}
      <section className="py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUpSection className="text-center mb-16">
            <AnimatedDivider />
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">Core Services</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
              Two Core Transfer <span className="gold-text">Operations</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Whether discharging a tanker at an oil terminal or moving product between storage tanks, NIETIM LLP manages the facilitation, documentation, and compliance for the entire operation.
            </p>
          </FadeUpSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Card 1 — Vessel to Terminal */}
            <FadeUpSection>
              <div className="bg-gradient-to-br from-blue-900/25 to-[#0d1f3c] rounded-3xl border border-[#c9a84c]/15 p-8 md:p-10 h-full flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] mb-6">
                  <Anchor size={32} />
                </div>
                <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-2">Marine Transfer</p>
                <h3 className="font-serif text-3xl font-bold text-white mb-4">
                  Vessel to Oil Terminal Transfer
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  NIETIM LLP facilitates the full discharge operation from a tanker vessel into an onshore oil terminal or floating storage unit. We coordinate between ship owners, terminal operators, port agents, and inspection bodies — ensuring accurate outturn measurement, clean documentation, and on-time execution.
                </p>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Our vessel-to-terminal petroleum transfer service covers crude oil, refined products (EN590, Jet A-1), and residual fuel oil (D6). All discharge operations are conducted under independent third-party inspection with a full outturn report issued at completion.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    'Tanker discharge into onshore storage tanks',
                    'Ship-to-shore metering and ullage measurement',
                    'Independent SGS / BV inspection at discharge',
                    'Notice of Readiness (NOR) and laytime management',
                    'Shore tank certificates and outturn reports',
                    'Port agent coordination and berth nomination',
                    'MARPOL and terminal safety compliance',
                    'Customs clearance and duty documentation',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle size={15} className="text-[#c9a84c] mt-0.5 shrink-0" />
                      <span className="text-gray-300 text-sm">{point}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }} className="inline-flex">
                    <Link to="/contact" className="btn-gold px-7 py-3.5 rounded-xl text-sm font-bold inline-flex items-center gap-2">
                      <span>Inquire — Vessel Transfer</span>
                      <ArrowRight size={14} />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </FadeUpSection>

            {/* Card 2 — Tank to Tank */}
            <FadeUpSection delay={0.12}>
              <div className="bg-gradient-to-br from-amber-900/15 to-[#0d1f3c] rounded-3xl border border-[#c9a84c]/15 p-8 md:p-10 h-full flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] mb-6">
                  <Layers size={32} />
                </div>
                <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-2">Terminal Operations</p>
                <h3 className="font-serif text-3xl font-bold text-white mb-4">
                  Tank to Tank Product Transfer
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  NIETIM LLP facilitates inter-tank product transfer operations within an oil terminal or between adjacent storage facilities. This service supports stock segregation, product blending, lease storage management, and title transfer between trading counterparties.
                </p>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Tank-to-tank transfers are common in trading environments where product ownership changes without physical shipment. We manage the full documentation chain — from delivery order issuance through to final custody transfer confirmation — ensuring both parties have verified, auditable records.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    'Inter-tank product movements within a terminal',
                    'Custody transfer with independent inspection',
                    'Delivery order (DO) issuance and management',
                    'Product segregation and blending coordination',
                    'Lease storage and consignment management',
                    'Volume reconciliation between sending and receiving tanks',
                    'Title transfer documentation and confirmation',
                    'Contamination prevention and line displacement',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle size={15} className="text-[#c9a84c] mt-0.5 shrink-0" />
                      <span className="text-gray-300 text-sm">{point}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }} className="inline-flex">
                    <Link to="/contact" className="btn-gold px-7 py-3.5 rounded-xl text-sm font-bold inline-flex items-center gap-2">
                      <span>Inquire — Tank Transfer</span>
                      <ArrowRight size={14} />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </FadeUpSection>
          </div>
        </div>
      </section>

      {/* ===== OIL INJECTION SERVICES ===== */}
      <section className="py-24 bg-[#0d1f3c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUpSection>
              <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">Additional Service</p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
                Oil Injection <span className="gold-text">Services</span>
              </h2>
              <div className="space-y-5 text-gray-300 leading-relaxed">
                <p>
                  NIETIM LLP facilitates oil injection services for clients requiring the controlled introduction of petroleum products into pipeline networks, process units, or blending systems. This includes crude oil injection into refinery feedstock pipelines, distillate injection for blending operations, and additive or component injection at storage facilities.
                </p>
                <p>
                  Injection operations are coordinated in close alignment with terminal operators, pipeline managers, and the receiving facility — with strict volume scheduling, metering verification, and quality checks at each injection point.
                </p>
                <p>
                  All oil injection facilitation is backed by full transaction documentation, independent inspection at injection, and a final injection confirmation report for both buyer and seller records.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {[
                  'Crude oil injection into refinery feedstock pipelines',
                  'Distillate and blend component injection',
                  'Injection volume scheduling and rate management',
                  'Metering verification at injection point',
                  'Quality sampling and analysis at injection',
                  'Injection confirmation report and documentation',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle size={15} className="text-[#c9a84c] mt-0.5 shrink-0" />
                    <span className="text-gray-300 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </FadeUpSection>

            <FadeUpSection delay={0.15}>
              <div className="bg-[#0a1628] rounded-3xl border border-[#c9a84c]/15 p-8">
                <div className="w-14 h-14 rounded-2xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] mb-6">
                  <Droplets size={28} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-6">Injection Operation Flow</h3>
                <div className="space-y-0">
                  {[
                    { step: '01', title: 'Mandate & KYC Verification', desc: 'All parties verified — sender, receiver, terminal operator — before injection schedule is confirmed.' },
                    { step: '02', title: 'Injection Schedule Agreement', desc: 'Volume, rate, timing, and injection point agreed and documented in the service agreement.' },
                    { step: '03', title: 'Independent Inspection Appointment', desc: 'SGS, Bureau Veritas, or Intertek appointed to witness injection and collect samples.' },
                    { step: '04', title: 'Live Injection & Metering', desc: 'Product injected at agreed rate; independent inspector records opening and closing meter readings.' },
                    { step: '05', title: 'Q&Q Certificate Issued', desc: 'Quality and quantity certificate issued by inspector, confirming volume received and product specification.' },
                    { step: '06', title: 'Injection Confirmation Report', desc: 'Full injection report delivered to both parties, including metering data, samples, and compliance sign-off.' },
                  ].map((item, i, arr) => (
                    <div key={item.step} className={`flex gap-5 ${i < arr.length - 1 ? 'pb-6' : ''}`}>
                      <div className="flex flex-col items-center">
                        <div className="w-9 h-9 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/30 flex items-center justify-center shrink-0">
                          <span className="text-[#c9a84c] text-xs font-black">{item.step}</span>
                        </div>
                        {i < arr.length - 1 && <div className="w-px flex-1 bg-[#c9a84c]/15 my-2" />}
                      </div>
                      <div className="pb-1">
                        <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                        <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUpSection>
          </div>
        </div>
      </section>

      {/* ===== KEY CAPABILITIES ===== */}
      <section className="py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUpSection className="text-center mb-16">
            <AnimatedDivider />
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">What We Deliver</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
              Operational <span className="gold-text">Capabilities</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Every petroleum transfer we facilitate is backed by independent inspection, precise volume measurement, and a complete documentation package.
            </p>
          </FadeUpSection>

          <StaggerSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <motion.div key={cap.title} variants={staggerItem}>
                <TiltCard className="bg-[#0d1f3c] rounded-2xl p-8 border border-[#c9a84c]/10 h-full">
                  <div className="w-14 h-14 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] mb-5">
                    {cap.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{cap.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{cap.desc}</p>
                </TiltCard>
              </motion.div>
            ))}
          </StaggerSection>
        </div>
      </section>

      {/* ===== DOCUMENTATION ===== */}
      <section className="py-24 bg-[#0d1f3c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeUpSection>
              <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">Documentation</p>
              <h2 className="font-serif text-4xl font-bold text-white mb-6">
                Complete Transfer <span className="gold-text">Document Package</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Every transfer operation facilitated by NIETIM LLP generates a complete, auditable document set. These documents are essential for title transfer, customs clearance, payment release, and dispute resolution. We ensure every document is correctly prepared, witnessed where required, and delivered to both parties.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our documentation management covers the full transfer lifecycle — from pre-operation safety checklists through to final outturn confirmation and payment documentation.
              </p>
            </FadeUpSection>

            <FadeUpSection delay={0.12}>
              <div className="bg-[#0a1628] rounded-3xl border border-[#c9a84c]/15 p-8">
                <h3 className="font-serif text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-6 h-0.5 bg-[#c9a84c]"></span>
                  Standard Transfer Documents
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {documents.map((doc) => (
                    <div key={doc} className="flex items-start gap-3 p-3 rounded-xl bg-[#0d1f3c] border border-[#c9a84c]/8">
                      <CheckCircle size={14} className="text-[#c9a84c] mt-0.5 shrink-0" />
                      <span className="text-gray-300 text-sm">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUpSection>
          </div>
        </div>
      </section>

      {/* ===== WHO WE SERVE ===== */}
      <section className="py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUpSection className="text-center mb-16">
            <AnimatedDivider />
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">Client Types</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
              Who We <span className="gold-text">Serve</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our petroleum transfer facilitation services are available to verified operators across the oil and gas value chain.
            </p>
          </FadeUpSection>

          <StaggerSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client) => (
              <motion.div key={client.label} variants={staggerItem}>
                <div className="bg-[#0d1f3c] rounded-2xl border border-[#c9a84c]/10 p-7 h-full card-hover">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#c9a84c] mt-2 shrink-0" />
                    <div>
                      <h3 className="text-white font-bold text-base mb-2">{client.label}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{client.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerSection>
        </div>
      </section>

      {/* ===== RELATED SERVICES ===== */}
      <section className="py-16 bg-[#0d1f3c] border-y border-[#c9a84c]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUpSection className="text-center mb-10">
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">Also Available</p>
            <h2 className="font-serif text-3xl font-bold text-white">Related Services & Products</h2>
          </FadeUpSection>
          <StaggerSection className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                to: '/services',
                badge: 'Full Services',
                title: 'Trade Facilitation',
                desc: 'End-to-end petroleum trade facilitation — from LOI to final delivery. Mandate representation, KYC/AML, and transaction documentation.',
              },
              {
                to: '/products/en590-diesel',
                badge: 'Highest Demand',
                title: 'EN590 Diesel Supply',
                desc: 'Bulk EN590 10PPM ultra-low sulfur diesel from ARA/Rotterdam. CIF Rotterdam and FOB delivery. 50,000–500,000 MT/month.',
              },
              {
                to: '/products/d6-fuel-oil',
                badge: 'Bulk Supply',
                title: 'D6 Virgin Fuel Oil',
                desc: 'High-volume D6 virgin residual fuel oil from Russian Federation refineries. FOB and TTO delivery. 100,000–2,000,000 MT/month.',
              },
            ].map((item) => (
              <motion.div key={item.to} variants={staggerItem}>
                <Link to={item.to} className="block bg-[#0a1628] rounded-2xl border border-[#c9a84c]/10 p-7 hover:border-[#c9a84c]/30 transition-colors group h-full">
                  <span className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-3 block">{item.badge}</span>
                  <h3 className="font-serif text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{item.desc}</p>
                  <span className="text-[#c9a84c] text-sm font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight size={13} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </StaggerSection>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-[#0a1628]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeUpSection>
            <AnimatedDivider />
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4 mt-6">
              Ready to Facilitate Your{' '}
              <span className="gold-text">Transfer Operation?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Submit your transfer inquiry and our team will respond within 24 business hours with a detailed service proposal, including inspection scope, documentation list, and timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                <Link to="/contact" className="btn-gold px-10 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2">
                  <span>Submit Transfer Inquiry</span>
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                <Link to="/compliance" className="btn-outline-gold px-10 py-4 rounded-xl text-base font-bold">
                  Our Compliance Standards
                </Link>
              </motion.div>
            </div>
          </FadeUpSection>
        </div>
      </section>
    </div>
  );
}
