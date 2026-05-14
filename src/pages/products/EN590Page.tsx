import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Package, Truck, FileText, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUpSection, StaggerSection, staggerItem } from '../../components/AnimatedSection';
import AnimatedDivider from '../../components/AnimatedDivider';
import SEO from '../../components/SEO';

const specs = [
  { param: 'Sulphur Content', value: '10 mg/kg (10 ppm) max', method: 'EN ISO 20846 / 20884' },
  { param: 'Cetane Number', value: '51 min', method: 'EN ISO 5165' },
  { param: 'Density at 15°C', value: '820–845 kg/m³', method: 'EN ISO 3675 / 12185' },
  { param: 'Flash Point', value: '55°C min', method: 'EN ISO 2719' },
  { param: 'Viscosity at 40°C', value: '2.0–4.5 mm²/s', method: 'EN ISO 3104' },
  { param: 'Distillation 95%', value: '360°C max', method: 'EN ISO 3405' },
  { param: 'CFPP (temperate)', value: '-15°C max', method: 'EN 116' },
  { param: 'Water Content', value: '200 mg/kg max', method: 'EN ISO 12937' },
];

const en590Schema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'EN590 10PPM Ultra-Low Sulfur Diesel',
  description:
    'EN590 10PPM ultra-low sulfur diesel (ULSD) from ARA/Rotterdam European refineries. Bulk quantities 50,000–500,000 MT/month. CIF Rotterdam, FOB, TTO, and CIP delivery. Verified by SGS, Bureau Veritas, Intertek.',
  brand: { '@type': 'Brand', name: 'NIETIM LLP' },
  category: 'Petroleum Products',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'USD',
    seller: {
      '@type': 'Organization',
      name: 'NIETIM LLP',
      url: 'https://www.nietim.com',
    },
  },
};

export default function EN590Page() {
  return (
    <div className="min-h-screen pt-28 lg:pt-36">
      <SEO
        title="EN590 Diesel Supplier | Bulk ULSD Rotterdam | NIETIM LLP"
        description="EN590 10PPM ultra-low sulfur diesel supplier. Bulk ULSD from ARA/Rotterdam refineries. CIF Rotterdam available. FOB, CIF, TTO delivery. Verified mandate."
        canonical="/products/en590-diesel"
        schemaJson={en590Schema}
      />

      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/products-bg.jpg')" }} />
        <div className="absolute inset-0 bg-[#0a1628]/90" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUpSection>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8" aria-label="Breadcrumb">
              <Link to="/products" className="hover:text-[#c9a84c] transition-colors">Products</Link>
              <ChevronRight size={12} />
              <span className="text-[#c9a84c]">EN590 Diesel</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-full px-4 py-2 mb-6">
              <span className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase">Highest Demand</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4 max-w-3xl">
              EN590 Diesel Supplier —{' '}
              <span className="gold-text">Ultra-Low Sulfur Diesel</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl leading-relaxed mb-8">
              NIETIM LLP is an authorized EN590 diesel supplier and verified petroleum mandate with direct access to ARA/Rotterdam European refinery sources. We facilitate bulk ULSD transactions — CIF Rotterdam, FOB, TTO — for qualified international buyers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                <Link to="/contact" className="btn-gold px-8 py-3.5 rounded-xl text-sm font-bold inline-flex items-center gap-2">
                  <span>Request EN590 Quote</span>
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                <Link to="/contact?type=loi" className="btn-outline-gold px-8 py-3.5 rounded-xl text-sm font-bold">
                  Submit LOI / ICPO
                </Link>
              </motion.div>
            </div>
          </FadeUpSection>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-12 bg-[#0d1f3c] border-y border-[#c9a84c]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Monthly Volume', value: '50,000 – 500,000 MT' },
              { label: 'Origin', value: 'ARA / Rotterdam Refineries' },
              { label: 'Primary Delivery', value: 'CIF Rotterdam / FOB' },
              { label: 'Inspection', value: 'SGS / Bureau Veritas / Intertek' },
            ].map((fact) => (
              <div key={fact.label} className="text-center">
                <div className="text-[#c9a84c] font-bold text-sm mb-1 tracking-wide">{fact.label}</div>
                <div className="text-white font-medium text-sm">{fact.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeUpSection>
              <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">Product Overview</p>
              <h2 className="font-serif text-4xl font-bold text-white mb-6">
                EN590 10PPM <span className="gold-text">ULSD</span> from Rotterdam
              </h2>
              <div className="space-y-5 text-gray-300 leading-relaxed">
                <p>
                  EN590 is the European standard specification for automotive diesel fuel. The 10PPM grade — also classified as ultra-low sulfur diesel (ULSD) — is the most widely traded diesel specification globally, required by modern Euro VI engines across road transport, agriculture, and industrial applications.
                </p>
                <p>
                  As an established EN590 diesel supplier and diesel fuel mandate, NIETIM LLP facilitates bulk transactions direct from ARA (Amsterdam–Rotterdam–Antwerp) refineries — the primary pricing benchmark for European diesel markets. We support <strong className="text-white">EN590 CIF Rotterdam</strong>, FOB Rotterdam, and TTO delivery for qualified international buyers.
                </p>
                <p>
                  All transactions are underpinned by verifiable supply chain documentation, independent SGS / Bureau Veritas / Intertek inspection at loading, and full compliance with KYC/AML requirements before contract execution.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  'European refinery origin — ARA / Rotterdam',
                  'EN590 CIF Rotterdam — primary delivery term',
                  'Ultra-low sulfur: 10 mg/kg maximum',
                  'SGS / Bureau Veritas / Intertek inspection',
                  'SBLC / LC / TT payment accepted',
                  'Full documentation: FCO, SPA, B/L, Q&Q Certificate',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#c9a84c] mt-0.5 shrink-0" />
                    <span className="text-gray-300 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </FadeUpSection>

            <FadeUpSection delay={0.15}>
              <div className="bg-gradient-to-br from-blue-900/30 to-[#0d1f3c] rounded-3xl border border-[#c9a84c]/15 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-1.5 text-[#c9a84c]">
                    <Package size={14} />
                    <span className="text-xs font-bold tracking-wide uppercase">Transaction Parameters</span>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Product Code', value: 'EN590 10PPM' },
                    { label: 'Grade', value: 'Ultra-Low Sulfur Diesel (ULSD)' },
                    { label: 'Origin', value: 'European Refineries (ARA, Rotterdam)' },
                    { label: 'Monthly Quantity', value: '50,000 MT – 500,000 MT' },
                    { label: 'Delivery Terms', value: 'FOB / CIF / TTO / CIP' },
                    { label: 'Price Reference', value: 'Platts / ICIS ARA Assessments' },
                    { label: 'Payment', value: 'SBLC / LC / TT (negotiable)' },
                    { label: 'Inspection', value: 'SGS / Bureau Veritas / Intertek' },
                    { label: 'Documentation', value: 'FCO, SPA, B/L, Q&Q Certificate' },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-start gap-4 py-2 border-b border-[#c9a84c]/8 last:border-0">
                      <span className="text-gray-400 text-sm shrink-0">{row.label}</span>
                      <span className="text-white text-sm font-medium text-right">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUpSection>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-[#0d1f3c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUpSection className="text-center mb-12">
            <AnimatedDivider />
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">Technical Data</p>
            <h2 className="font-serif text-4xl font-bold text-white">EN590 Technical Specifications</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Specifications per the EN 590 European Standard for automotive diesel. All parameters verified at point of loading by internationally accredited inspectors.
            </p>
          </FadeUpSection>

          <FadeUpSection>
            <div className="bg-gradient-to-br from-blue-900/20 to-[#0a1628] rounded-3xl border border-[#c9a84c]/15 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full spec-table">
                  <thead>
                    <tr className="border-b border-[#c9a84c]/20">
                      <th className="text-left py-4 px-6 text-[#c9a84c] text-xs font-bold tracking-widest uppercase">Parameter</th>
                      <th className="text-left py-4 px-6 text-[#c9a84c] text-xs font-bold tracking-widest uppercase">Specification / Limit</th>
                      <th className="text-left py-4 px-6 text-[#c9a84c] text-xs font-bold tracking-widest uppercase">Test Method</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specs.map((spec) => (
                      <tr key={spec.param} className="border-b border-[#c9a84c]/5 transition-colors hover:bg-[#c9a84c]/3">
                        <td className="py-4 px-6 text-gray-300 text-sm font-medium">{spec.param}</td>
                        <td className="py-4 px-6 text-white text-sm font-semibold">{spec.value}</td>
                        <td className="py-4 px-6 text-gray-500 text-xs">{spec.method}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeUpSection>
        </div>
      </section>

      {/* Delivery */}
      <section className="py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUpSection className="mb-12">
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">Delivery Options</p>
            <h2 className="font-serif text-4xl font-bold text-white mb-4">
              Delivery Terms for <span className="gold-text">EN590 Diesel</span>
            </h2>
            <p className="text-gray-400 max-w-2xl leading-relaxed">
              CIF Rotterdam is the primary delivery arrangement for our EN590 bulk diesel supplier transactions. We also support FOB loading at Rotterdam / ARA terminals, TTO at sea, and CIP to named European inland delivery points.
            </p>
          </FadeUpSection>

          <StaggerSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                code: 'CIF',
                name: 'CIF Rotterdam',
                desc: 'Our primary term for EN590 export. Seller covers cost, insurance, and freight to Rotterdam. Preferred by European buyers and refineries.',
                highlight: true,
              },
              {
                code: 'FOB',
                name: 'FOB Rotterdam / ARA',
                desc: 'Product loaded at ARA refinery terminal. Buyer arranges vessel and insurance from loading port. Competitive for buyers with established freight.',
                highlight: false,
              },
              {
                code: 'TTO',
                name: 'Tanker-to-Tanker',
                desc: 'Transfer at sea from seller vessel to buyer vessel. Available for large-volume EN590 transactions, particularly for off-market deliveries.',
                highlight: false,
              },
              {
                code: 'CIP',
                name: 'CIP — Named Point',
                desc: 'Seller covers carriage and insurance to a named delivery location beyond Rotterdam — suitable for inland European buyers.',
                highlight: false,
              },
            ].map((term) => (
              <motion.div key={term.code} variants={staggerItem}>
                <div className={`rounded-2xl p-8 border h-full ${term.highlight ? 'bg-[#c9a84c]/10 border-[#c9a84c]/30' : 'bg-[#0d1f3c] border-[#c9a84c]/10'}`}>
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${term.highlight ? 'bg-[#c9a84c]' : 'bg-[#c9a84c]/15'}`}>
                    <span className={`font-black text-sm tracking-wider ${term.highlight ? 'text-[#0a1628]' : 'text-[#c9a84c]'}`}>{term.code}</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{term.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{term.desc}</p>
                </div>
              </motion.div>
            ))}
          </StaggerSection>
        </div>
      </section>

      {/* Transaction Process CTA */}
      <section className="py-16 bg-[#0d1f3c] border-y border-[#c9a84c]/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeUpSection>
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-4">Start a Transaction</p>
            <h2 className="font-serif text-4xl font-bold text-white mb-4">
              Ready to Source <span className="gold-text">EN590 Diesel</span>?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Submit your ICPO or Letter of Intent and our EN590 trade team will respond with a Full Corporate Offer within 48 hours. Not sure how the process works?{' '}
              <Link to="/how-it-works" className="text-[#c9a84c] hover:underline">Read our transaction guide.</Link>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                <Link to="/contact" className="btn-gold px-10 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2">
                  <span>Submit ICPO / LOI</span>
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                <Link to="/how-it-works" className="btn-outline-gold px-10 py-4 rounded-xl text-base font-bold">
                  How It Works
                </Link>
              </motion.div>
            </div>
          </FadeUpSection>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUpSection className="text-center mb-12">
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">Also Available</p>
            <h2 className="font-serif text-3xl font-bold text-white">Other Petroleum Products</h2>
          </FadeUpSection>
          <StaggerSection className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              {
                to: '/products/jet-a1',
                code: 'JET A-1',
                name: 'Aviation Turbine Fuel',
                badge: 'Premium Grade',
                desc: 'Aviation-grade Jet A-1 from European and Middle East refineries. 10,000–200,000 MT/month.',
              },
              {
                to: '/products/d6-fuel-oil',
                code: 'D6 VIRGIN',
                name: 'Residual Fuel Oil',
                badge: 'Bulk Supply',
                desc: 'D6 virgin residual fuel oil from Russian Federation refineries. 100,000–2,000,000 MT/month.',
              },
            ].map((p) => (
              <motion.div key={p.to} variants={staggerItem}>
                <Link to={p.to} className="block bg-[#0d1f3c] rounded-2xl border border-[#c9a84c]/10 p-8 hover:border-[#c9a84c]/30 transition-colors group">
                  <span className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-3 block">{p.badge}</span>
                  <h3 className="font-serif text-2xl font-bold text-white mb-1">{p.code}</h3>
                  <p className="text-gray-400 text-sm mb-4">{p.name}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{p.desc}</p>
                  <span className="text-[#c9a84c] text-sm font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Product <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </StaggerSection>
          <div className="text-center mt-8">
            <Link to="/products" className="text-gray-400 hover:text-[#c9a84c] text-sm transition-colors inline-flex items-center gap-2">
              View All Products <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
