import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Lock, FileText, AlertTriangle, CheckCircle, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import TiltCard from '../components/TiltCard';
import { StaggerSection, FadeUpSection, staggerItem } from '../components/AnimatedSection';
import AnimatedDivider from '../components/AnimatedDivider';

const compliancePillars = [
  {
    icon: <Shield size={28} />,
    title: 'KYC Policy',
    subtitle: 'Know Your Customer',
    points: [
      'All counterparties undergo mandatory KYC screening before any transaction',
      'Government-issued ID for all authorized signatories',
      'Certificate of Incorporation and corporate registration documents',
      'Board resolution or Power of Attorney for transaction authorization',
      'Ultimate Beneficial Owner (UBO) disclosure required',
      'Regular KYC refresh for ongoing relationships',
    ],
  },
  {
    icon: <AlertTriangle size={28} />,
    title: 'AML Framework',
    subtitle: 'Anti-Money Laundering',
    points: [
      'Strict adherence to FATF (Financial Action Task Force) guidelines',
      'All transactions screened against OFAC, UN, and EU sanctions lists',
      'Source of funds verification for payment instruments',
      'Suspicious Activity Reporting (SAR) protocols in place',
      'No cash transactions — only verified banking instruments accepted',
      'Transaction monitoring for unusual patterns and red flags',
    ],
  },
  {
    icon: <Eye size={28} />,
    title: 'Sanctions Screening',
    subtitle: 'Global Compliance Checks',
    points: [
      'Real-time OFAC (Office of Foreign Assets Control) screening',
      'UN Security Council consolidated sanctions list',
      'EU restrictive measures and asset freezes',
      'HM Treasury (UK) financial sanctions list',
      'PEP (Politically Exposed Persons) database screening',
      'Adverse media and reputational screening',
    ],
  },
  {
    icon: <Lock size={28} />,
    title: 'Data Security',
    subtitle: 'Confidentiality & Protection',
    points: [
      'All client data encrypted at rest and in transit (AES-256)',
      'Non-Disclosure Agreements (NDA) signed before document exchange',
      'NCNDA (Non-Circumvention, Non-Disclosure Agreement) protection',
      'Secure document transmission channels only',
      'Strict data retention and deletion policies',
      'GDPR-compliant data handling for EU-related parties',
    ],
  },
];

const fraudWarnings = [
  'Requests for upfront fees before any service is rendered',
  'Unrealistic pricing far below market rates',
  'Pressure to rush the process or bypass due diligence',
  'Requests to deal outside normal banking channels',
  'Unable to provide verifiable company registration documents',
  'No verifiable physical address or office presence',
  'Reluctance to sign NDA/NCNDA before sharing documents',
];

const docs = [
  { title: 'Letter of Intent (LOI)', desc: "Buyer's formal written expression of purchase intent specifying product, quantity, price, and delivery terms." },
  { title: 'ICPO', desc: 'Irrevocable Corporate Purchase Order — a binding commitment from the buyer to purchase under specified terms.' },
  { title: 'Full Corporate Offer (FCO)', desc: "Seller's formal, detailed offer including specs, pricing, payment terms, and transaction procedures." },
  { title: 'SBLC / MT760', desc: 'Standby Letter of Credit issued via SWIFT MT760 — the primary payment instrument for large petroleum transactions.' },
  { title: 'DLC / MT700', desc: 'Documentary Letter of Credit — payment mechanism triggered by presentation of shipping documents.' },
  { title: 'Sales & Purchase Agreement', desc: 'The binding contract executed by both buyer and seller detailing all commercial and legal terms.' },
  { title: 'Bill of Lading', desc: 'Document issued by the carrier confirming receipt of cargo for shipment, serving as title to the goods.' },
  { title: 'Q&Q Certificate', desc: 'Quantity and Quality certificate issued by an independent inspector (SGS/Intertek) at the loading port.' },
];

export default function CompliancePage() {
  return (
    <div className="min-h-screen pt-28 lg:pt-36">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060f1e] via-[#0a1628] to-[#0d1f3c]" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(ellipse at 70% 50%, rgba(201,168,76,0.06) 0%, transparent 60%)'}} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUpSection>
            <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-full px-4 py-2 mb-6">
              <Shield size={14} className="text-[#c9a84c]" />
              <span className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase">Compliance & Security</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-6">
              Our Compliance<br />
              <span className="gold-text">Standards</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              NIETIM LLP is committed to the highest standards of regulatory compliance, anti-fraud protection, and transparent business conduct in all petroleum trade transactions.
            </p>
          </FadeUpSection>
        </div>
      </section>

      {/* Compliance Pillars */}
      <section className="py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUpSection className="text-center mb-16">
            <AnimatedDivider />
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">Our Framework</p>
            <h2 className="font-serif text-4xl font-bold text-white">Compliance Pillars</h2>
          </FadeUpSection>

          <StaggerSection className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {compliancePillars.map((pillar) => (
              <motion.div key={pillar.title} variants={staggerItem}>
                <TiltCard className="bg-[#0d1f3c] rounded-2xl p-8 border border-[#c9a84c]/10 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c]">
                      {pillar.icon}
                    </div>
                    <div>
                      <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase">{pillar.subtitle}</p>
                      <h3 className="text-white font-bold text-xl">{pillar.title}</h3>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm">
                        <CheckCircle size={15} className="text-[#c9a84c] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </motion.div>
            ))}
          </StaggerSection>
        </div>
      </section>

      {/* Fraud Warning */}
      <section className="py-24 bg-[#0d1f3c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUpSection className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-red-950/40 to-[#0d1f3c] rounded-2xl border border-red-500/20 p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                  <AlertTriangle size={28} />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-white">Fraud Warning</h2>
                  <p className="text-red-400 text-sm">Be aware of petroleum trade scams</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                The petroleum industry is unfortunately targeted by fraudsters. NIETIM LLP urges all clients to remain vigilant. Below are common red flags that indicate a counterparty may not be legitimate:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {fraudWarnings.map((warning) => (
                  <div key={warning} className="flex items-start gap-3 bg-red-500/5 border border-red-500/10 rounded-xl p-4">
                    <span className="text-red-400 font-bold text-lg flex-shrink-0 leading-none mt-0.5">⚠</span>
                    <span className="text-gray-300 text-sm leading-relaxed">{warning}</span>
                  </div>
                ))}
              </div>
              <div className="bg-[#c9a84c]/5 border border-[#c9a84c]/20 rounded-xl p-5">
                <p className="text-[#c9a84c] font-bold text-sm mb-2">NIETIM LLP Official Statement:</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  NIETIM LLP will NEVER request upfront fees, advance payments, or ask clients to bypass due diligence. All our transactions follow documented, internationally accepted petroleum trade procedures. If you are unsure about any communication claiming to be from NIETIM LLP, contact us directly via our official channels.
                </p>
              </div>
            </div>
          </FadeUpSection>
        </div>
      </section>

      {/* Document Glossary */}
      <section className="py-24 bg-[#0a1628] grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUpSection className="text-center mb-16">
            <AnimatedDivider />
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">Documentation</p>
            <h2 className="font-serif text-4xl font-bold text-white">Transaction Document Glossary</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm">
              Familiarize yourself with standard petroleum trade documentation
            </p>
          </FadeUpSection>

          <StaggerSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {docs.map((doc) => (
              <motion.div key={doc.title} variants={staggerItem}>
                <TiltCard className="bg-[#0d1f3c] rounded-2xl p-6 border border-[#c9a84c]/10 h-full">
                  <div className="w-10 h-10 rounded-lg bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] mb-4">
                    <FileText size={18} />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2">{doc.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{doc.desc}</p>
                </TiltCard>
              </motion.div>
            ))}
          </StaggerSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0d1f3c] border-t border-[#c9a84c]/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeUpSection>
            <h2 className="font-serif text-4xl font-bold text-white mb-4">
              Trade with <span className="gold-text">Confidence</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Our compliance framework ensures every transaction is secure, transparent, and legally sound.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }} className="inline-flex">
              <Link to="/contact" className="btn-gold px-10 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2">
                <span>Start a Compliant Transaction</span>
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </FadeUpSection>
        </div>
      </section>
    </div>
  );
}
