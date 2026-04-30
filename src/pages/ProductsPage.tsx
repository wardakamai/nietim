import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Package, Truck, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import TiltCard from '../components/TiltCard';
import { StaggerSection, FadeUpSection, staggerItem } from '../components/AnimatedSection';
import AnimatedDivider from '../components/AnimatedDivider';

const products = [
  {
    id: 'en590',
    code: 'EN590 10PPM',
    name: 'Ultra-Low Sulphur Diesel',
    badge: 'Highest Demand',
    origin: 'European Refineries (ARA, Rotterdam)',
    quantity: '50,000 MT – 500,000 MT per month',
    delivery: 'FOB / CIF / TTO / CIP',
    payment: 'SBLC / LC / TT (negotiable)',
    inspection: 'SGS / Bureau Veritas / Intertek',
    color: 'from-blue-900/30 to-[#0d1f3c]',
    specs: [
      { param: 'Sulphur Content', value: '10 mg/kg (10 ppm) max' },
      { param: 'Cetane Number', value: '51 min' },
      { param: 'Density at 15°C', value: '820–845 kg/m³' },
      { param: 'Flash Point', value: '55°C min' },
      { param: 'Viscosity at 40°C', value: '2.0–4.5 mm²/s' },
      { param: 'Distillation 95%', value: '360°C max' },
      { param: 'CFPP (temperate)', value: '-15°C max' },
      { param: 'Water Content', value: '200 mg/kg max' },
    ],
  },
  {
    id: 'jeta1',
    code: 'JET A-1',
    name: 'Aviation Turbine Fuel',
    badge: 'Premium Grade',
    origin: 'Multiple Origins – Europe, Middle East',
    quantity: '10,000 MT – 200,000 MT per month',
    delivery: 'FOB / CIF / CIP',
    payment: 'SBLC / LC / BG',
    inspection: 'SGS / Intertek / Saybolt',
    color: 'from-amber-900/20 to-[#0d1f3c]',
    specs: [
      { param: 'Flash Point', value: '38°C min (DEF STAN 91-091)' },
      { param: 'Freezing Point', value: '-47°C max' },
      { param: 'Sulphur Content', value: '0.30% mass max' },
      { param: 'Density at 15°C', value: '775–840 kg/m³' },
      { param: 'Aromatics Content', value: '25% vol max' },
      { param: 'Net Heat of Combustion', value: '42.8 MJ/kg min' },
      { param: 'Smoke Point', value: '25 mm min' },
      { param: 'Thermal Stability', value: 'JFTOT 260°C' },
    ],
  },
  {
    id: 'd6',
    code: 'D6 VIRGIN',
    name: 'Residual Fuel Oil',
    badge: 'Bulk Supply',
    origin: 'Russian Federation',
    quantity: '100,000 MT – 2,000,000 MT per month',
    delivery: 'FOB / TTO',
    payment: 'SBLC / MT760 / MT799',
    inspection: 'SGS / Bureau Veritas',
    color: 'from-gray-800/30 to-[#0d1f3c]',
    specs: [
      { param: 'API Gravity', value: '19–21°' },
      { param: 'Sulphur Content', value: '0.5–3.5% max' },
      { param: 'Viscosity at 50°C', value: 'Max 380 cSt' },
      { param: 'Pour Point', value: '30°C max' },
      { param: 'Flash Point', value: '60°C min' },
      { param: 'Ash Content', value: '0.1% max' },
      { param: 'Water & Sediment', value: '1.0% max' },
      { param: 'Carbon Residue', value: '10% max' },
    ],
  },
];

const deliveryTerms = [
  {
    code: 'FOB',
    name: 'Free on Board',
    desc: 'Product is delivered when loaded onto the vessel at the named port. Buyer arranges and pays for shipping from the loading port.',
  },
  {
    code: 'CIF',
    name: 'Cost, Insurance & Freight',
    desc: 'Seller pays costs, freight, and insurance to bring the goods to the destination port. Risk transfers at loading.',
  },
  {
    code: 'TTO',
    name: 'Tanker-to-Tanker Operation',
    desc: "Product is transferred from seller's vessel to buyer's vessel at sea. Commonly used for large crude and D6 transactions.",
  },
  {
    code: 'CIP',
    name: 'Carriage & Insurance Paid',
    desc: 'Seller delivers goods to a named destination and pays freight and insurance. Risk transfers when goods are handed to the carrier.',
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-28 lg:pt-36">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/products-bg.jpg')" }} />
        <div className="absolute inset-0 bg-[#0a1628]/88" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUpSection>
            <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-full px-4 py-2 mb-6">
              <span className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase">Petroleum Products</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-6">
              Products We Facilitate
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Premium grade petroleum products with full technical specifications, verified origins, and flexible international delivery terms.
            </p>
          </FadeUpSection>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {products.map((product, i) => (
            <FadeUpSection key={product.id} delay={i * 0.1}>
              <div
                id={product.id}
                className={`bg-gradient-to-br ${product.color} rounded-3xl border border-[#c9a84c]/15 overflow-hidden glow-border`}
              >
                {/* Header */}
                <div className="p-8 md:p-10 border-b border-[#c9a84c]/10">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-[#c9a84c]/15 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase">
                          {product.badge}
                        </span>
                      </div>
                      <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">{product.code}</h2>
                      <p className="text-gray-400 text-lg mt-1">{product.name}</p>
                    </div>
                    <div className="flex flex-col gap-2 text-right">
                      <div className="text-[#c9a84c] text-sm font-bold">Available Now</div>
                      <div className="text-gray-400 text-sm">{product.quantity}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    {[
                      { label: 'Origin', value: product.origin, icon: <Package size={14} /> },
                      { label: 'Delivery Terms', value: product.delivery, icon: <Truck size={14} /> },
                      { label: 'Payment', value: product.payment, icon: <FileText size={14} /> },
                      { label: 'Inspection', value: product.inspection, icon: <CheckCircle size={14} /> },
                    ].map((info) => (
                      <div key={info.label} className="bg-[#0a1628]/50 rounded-xl p-4 border border-[#c9a84c]/8">
                        <div className="flex items-center gap-1.5 text-[#c9a84c] mb-2">
                          {info.icon}
                          <span className="text-xs font-bold tracking-wide uppercase">{info.label}</span>
                        </div>
                        <div className="text-white text-sm font-medium">{info.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specs Table */}
                <div className="p-8 md:p-10">
                  <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                    <span className="w-6 h-0.5 bg-[#c9a84c]"></span>
                    Technical Specifications
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full spec-table">
                      <thead>
                        <tr className="border-b border-[#c9a84c]/15">
                          <th className="text-left py-3 px-4 text-[#c9a84c] text-xs font-bold tracking-widest uppercase">Parameter</th>
                          <th className="text-left py-3 px-4 text-[#c9a84c] text-xs font-bold tracking-widest uppercase">Specification / Limit</th>
                          <th className="text-left py-3 px-4 text-[#c9a84c] text-xs font-bold tracking-widest uppercase">Method</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.specs.map((spec) => (
                          <tr key={spec.param} className="border-b border-[#c9a84c]/5 transition-colors">
                            <td className="py-3 px-4 text-gray-300 text-sm font-medium">{spec.param}</td>
                            <td className="py-3 px-4 text-white text-sm">{spec.value}</td>
                            <td className="py-3 px-4 text-gray-500 text-xs">ASTM / EN / IP</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                      <Link to="/contact" className="btn-gold px-8 py-3.5 rounded-xl text-sm font-bold inline-flex items-center gap-2">
                        <span>Request Quote for {product.code}</span>
                        <ArrowRight size={14} />
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                      <Link to="/contact?type=loi" className="btn-outline-gold px-8 py-3.5 rounded-xl text-sm font-bold">
                        Submit LOI / ICPO
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </FadeUpSection>
          ))}
        </div>
      </section>

      {/* Delivery Terms */}
      <section className="py-24 bg-[#0d1f3c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUpSection className="text-center mb-16">
            <AnimatedDivider />
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">Incoterms</p>
            <h2 className="font-serif text-4xl font-bold text-white">Delivery Terms Explained</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              We support all major international delivery terms. Select the arrangement that best suits your logistics and risk tolerance.
            </p>
          </FadeUpSection>

          <StaggerSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryTerms.map((term) => (
              <motion.div key={term.code} variants={staggerItem}>
                <TiltCard className="bg-[#0a1628] rounded-2xl p-8 border border-[#c9a84c]/10 h-full">
                  <div className="w-14 h-14 rounded-xl bg-[#c9a84c] flex items-center justify-center mb-5">
                    <span className="text-[#0a1628] font-black text-sm tracking-wider">{term.code}</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{term.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{term.desc}</p>
                </TiltCard>
              </motion.div>
            ))}
          </StaggerSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a1628] border-t border-[#c9a84c]/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeUpSection>
            <h2 className="font-serif text-4xl font-bold text-white mb-4">
              Interested in Our <span className="gold-text">Products</span>?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Submit your ICPO or Letter of Intent and our team will respond with a Full Corporate Offer (FCO) within 48 hours.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }} className="inline-flex">
              <Link to="/contact" className="btn-gold px-10 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2">
                <span>Submit ICPO / LOI Now</span>
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </FadeUpSection>
        </div>
      </section>
    </div>
  );
}
