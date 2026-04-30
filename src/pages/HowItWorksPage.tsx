import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TiltCard from '../components/TiltCard';
import { StaggerSection, FadeUpSection, staggerItem } from '../components/AnimatedSection';
import AnimatedDivider from '../components/AnimatedDivider';

const buyerSteps = [
  {
    step: '01',
    title: 'Submit LOI or ICPO',
    desc: 'Buyer submits a signed Letter of Intent (LOI) or Irrevocable Corporate Purchase Order (ICPO) specifying product, quantity, delivery terms, and target price.',
    docs: ['LOI / ICPO', 'Company Profile', 'Passport Copy (Authorized Signatory)'],
  },
  {
    step: '02',
    title: 'KYC & Verification',
    desc: 'NIETIM LLP conducts thorough KYC/AML due diligence on the buyer — verifying company registration, signatory authority, and financial capacity.',
    docs: ['Certificate of Incorporation', 'Board Resolution', 'Proof of Funds (POF)'],
  },
  {
    step: '03',
    title: 'Receive Full Corporate Offer',
    desc: 'Upon successful verification, the seller or mandate issues a Full Corporate Offer (FCO) detailing product specs, pricing, and transaction procedures.',
    docs: ['Full Corporate Offer (FCO)', 'Product Specifications', 'Payment Procedures'],
  },
  {
    step: '04',
    title: 'Issue Banking Instrument',
    desc: 'Buyer issues the required banking instrument — typically an SBLC (Standby Letter of Credit) or DLC (Documentary Letter of Credit) via MT760.',
    docs: ['SBLC / DLC via MT760', 'Bank Comfort Letter (BCL)', 'Bank Officer Details'],
  },
  {
    step: '05',
    title: 'Sales & Purchase Agreement',
    desc: 'Both parties execute the Sales and Purchase Agreement (SPA), locking in all terms, conditions, delivery schedule, and payment mechanism.',
    docs: ['Signed SPA', 'Delivery Schedule', 'Inspection Protocol'],
  },
  {
    step: '06',
    title: 'Product Lifting & Delivery',
    desc: 'Product is loaded at the agreed port under independent inspection (SGS / Intertek). Shipping documents and invoice are issued upon successful loading.',
    docs: ['Bill of Lading (B/L)', 'Certificate of Origin', 'SGS Inspection Report', 'Commercial Invoice'],
  },
];

const sellerSteps = [
  {
    step: '01',
    title: 'Submit Seller Profile',
    desc: 'Seller or mandate submits a company profile, mandate authorization, and statement of product availability (SPA).',
    docs: ['Company Profile', 'Mandate Authorization Letter', 'Product Availability Statement'],
  },
  {
    step: '02',
    title: 'Verification & Onboarding',
    desc: "NIETIM LLP verifies the seller's mandate authorization, product origin, and supply capacity through rigorous due diligence.",
    docs: ['Certificate of Incorporation', 'Mandate Letter from Refinery', 'Proof of Product (POP)'],
  },
  {
    step: '03',
    title: 'Buyer Introduction',
    desc: 'NIETIM LLP introduces verified, financially capable buyers who have passed KYC screening and demonstrated genuine purchase intent.',
    docs: ['Buyer LOI / ICPO', 'Buyer Verification Report', 'NDA/NCNDA'],
  },
  {
    step: '04',
    title: 'Issue FCO & Negotiate Terms',
    desc: 'Seller issues Full Corporate Offer. Pricing, quantity, delivery, and payment terms are negotiated and agreed upon by both parties.',
    docs: ['Full Corporate Offer (FCO)', 'Counter-Offer (if applicable)', 'Agreed Term Sheet'],
  },
  {
    step: '05',
    title: 'Execute SPA',
    desc: 'Sales and Purchase Agreement is signed. Banking instruments from buyer are validated before product lifting proceeds.',
    docs: ['Signed SPA', 'Banking Instrument Confirmation', 'Injection Schedule'],
  },
  {
    step: '06',
    title: 'Product Loading & Payment',
    desc: "Product is lifted at the designated port. Payment is released to the seller upon presentation of shipping documents to the buyer's bank.",
    docs: ['Q&Q Certificate', 'Bill of Lading', 'Commercial Invoice', 'Payment Confirmation'],
  },
];

const faqs = [
  {
    q: 'What is the minimum transaction size you facilitate?',
    a: 'We facilitate transactions starting from 50,000 MT per month for diesel (EN590), 10,000 MT per month for Jet A1, and 100,000 MT for D6. Smaller trial shipments may be arranged on a case-by-case basis.',
  },
  {
    q: 'How long does the full transaction process take?',
    a: 'From LOI submission to first delivery, the typical timeline is 21–35 business days, depending on the complexity of the transaction, jurisdiction, and speed of banking instrument issuance.',
  },
  {
    q: 'Do you accept soft probes or BCL before FCO?',
    a: 'Yes. We understand that serious buyers require product verification before committing. We can accommodate a soft probe procedure via MT799 / BCL bank-to-bank before the FCO is issued.',
  },
  {
    q: 'Are your mandates direct or through intermediaries?',
    a: 'NIETIM LLP holds direct mandate authorization from refineries and blending plants. We do not work with chains of unverified intermediaries, which is a common source of fraud in the petroleum trade.',
  },
  {
    q: 'How is the commission structure handled?',
    a: 'All facilitation fees and commission structures are agreed upon in writing before transaction commencement. Commissions are paid from the spread and never from the buyer or seller directly upfront.',
  },
];

export default function HowItWorksPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-28 lg:pt-36">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#102548] to-[#0a1628]" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUpSection>
            <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-full px-4 py-2 mb-6">
              <span className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase">Transaction Process</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-6">
              How It Works
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              A transparent, structured process designed to protect all parties and ensure successful petroleum product transactions.
            </p>
          </FadeUpSection>
        </div>
      </section>

      {/* Buyer Process */}
      <section className="py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUpSection className="text-center mb-16">
            <AnimatedDivider />
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">For Buyers</p>
            <h2 className="font-serif text-4xl font-bold text-white">Buyer Transaction Process</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Six structured steps from initial inquiry to product delivery
            </p>
          </FadeUpSection>

          <StaggerSection className="space-y-6">
            {buyerSteps.map((step) => (
              <motion.div
                key={step.step}
                variants={staggerItem}
                className="card-hover bg-[#0d1f3c] rounded-2xl p-8 border border-[#c9a84c]/10 flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#c9a84c] to-[#a8882e] flex items-center justify-center">
                    <span className="text-[#0a1628] font-black text-xl">{step.step}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-5">{step.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.docs.map((doc) => (
                      <span key={doc} className="bg-[#0a1628] border border-[#c9a84c]/20 text-[#c9a84c] text-xs px-3 py-1.5 rounded-full font-medium">
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerSection>

          <FadeUpSection className="text-center mt-12">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }} className="inline-flex">
              <Link to="/contact?type=loi" className="btn-gold px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2">
                <span>Submit LOI as Buyer</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </FadeUpSection>
        </div>
      </section>

      {/* Seller Process */}
      <section className="py-24 bg-[#0d1f3c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUpSection className="text-center mb-16">
            <AnimatedDivider />
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">For Sellers & Mandates</p>
            <h2 className="font-serif text-4xl font-bold text-white">Seller Onboarding Process</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              How we work with verified sellers and mandate holders to reach qualified buyers
            </p>
          </FadeUpSection>

          <StaggerSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sellerSteps.map((step) => (
              <motion.div key={step.step} variants={staggerItem}>
                <TiltCard className="bg-[#0a1628] rounded-2xl p-8 border border-[#c9a84c]/10 h-full">
                  <div className="w-14 h-14 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center mb-5">
                    <span className="text-[#c9a84c] font-black text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{step.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.docs.map((doc) => (
                      <span key={doc} className="bg-[#0d1f3c] border border-[#c9a84c]/15 text-[#c9a84c] text-xs px-2.5 py-1 rounded-full">
                        {doc}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </StaggerSection>

          <FadeUpSection className="text-center mt-12">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }} className="inline-flex">
              <Link to="/contact?type=seller" className="btn-outline-gold px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2">
                Register as Seller / Mandate
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </FadeUpSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0a1628] grid-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUpSection className="text-center mb-16">
            <AnimatedDivider />
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">FAQ</p>
            <h2 className="font-serif text-4xl font-bold text-white">Common Questions</h2>
          </FadeUpSection>

          <StaggerSection className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className={`bg-[#0d1f3c] rounded-xl border transition-colors duration-300 ${openFaq === i ? 'border-[#c9a84c]/40' : 'border-[#c9a84c]/10'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                >
                  <span className="text-white font-semibold text-sm sm:text-base">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="flex-shrink-0"
                  >
                    <ArrowDown size={18} className="text-[#c9a84c]" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <p className="text-gray-400 leading-relaxed text-sm">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
              Ready to Start Your <span className="gold-text">Transaction</span>?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Our team is ready to guide you through every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                <Link to="/contact" className="btn-gold px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2">
                  <span>Contact Us Now</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                <Link to="/products" className="btn-outline-gold px-8 py-4 rounded-xl font-bold">
                  View Products
                </Link>
              </motion.div>
            </div>
          </FadeUpSection>
        </div>
      </section>
    </div>
  );
}
