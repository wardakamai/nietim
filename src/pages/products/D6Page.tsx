import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUpSection, StaggerSection, staggerItem } from '../../components/AnimatedSection';
import AnimatedDivider from '../../components/AnimatedDivider';
import SEO from '../../components/SEO';

const specs = [
  { param: 'API Gravity', value: '19–21°', method: 'ASTM D287' },
  { param: 'Sulphur Content', value: '0.5–3.5% max', method: 'ASTM D4294' },
  { param: 'Viscosity at 50°C', value: 'Max 380 cSt', method: 'ASTM D445' },
  { param: 'Pour Point', value: '30°C max', method: 'ASTM D97' },
  { param: 'Flash Point', value: '60°C min', method: 'ASTM D93' },
  { param: 'Ash Content', value: '0.1% max', method: 'ASTM D482' },
  { param: 'Water & Sediment', value: '1.0% max', method: 'ASTM D1796' },
  { param: 'Carbon Residue', value: '10% max', method: 'ASTM D4530' },
];

const d6Schema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'D6 Virgin Residual Fuel Oil',
  description:
    'D6 Virgin residual fuel oil from Russian Federation refineries. Bulk quantities 100,000–2,000,000 MT/month. FOB and TTO delivery. SBLC, MT760, MT799 payment. Verified by SGS and Bureau Veritas.',
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

export default function D6Page() {
  return (
    <div className="min-h-screen pt-28 lg:pt-36">
      <SEO
        title="D6 Virgin Fuel Oil Supplier | Bulk Residual | NIETIM LLP"
        description="Bulk D6 virgin residual fuel oil supplier. Large-volume FOB/TTO delivery from Russian Federation refineries. SBLC/MT760 payment. Verified petroleum mandate."
        canonical="/products/d6-fuel-oil"
        schemaJson={d6Schema}
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
              <span className="text-[#c9a84c]">D6 Virgin Fuel Oil</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-full px-4 py-2 mb-6">
              <span className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase">Bulk Supply</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4 max-w-3xl">
              D6 Virgin Residual Fuel Oil —{' '}
              <span className="gold-text">Bulk Supplier</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl leading-relaxed mb-8">
              NIETIM LLP is an established D6 virgin fuel oil supplier and petroleum mandate, facilitating high-volume residual fuel oil transactions from Russian Federation refineries for power generation, industrial, and international trading buyers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                <Link to="/contact" className="btn-gold px-8 py-3.5 rounded-xl text-sm font-bold inline-flex items-center gap-2">
                  <span>Request D6 Quote</span>
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
              { label: 'Monthly Volume', value: '100,000 – 2,000,000 MT' },
              { label: 'Origin', value: 'Russian Federation Refineries' },
              { label: 'Delivery Terms', value: 'FOB / TTO' },
              { label: 'Inspection', value: 'SGS / Bureau Veritas' },
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
                D6 Virgin <span className="gold-text">Residual Fuel Oil</span>
              </h2>
              <div className="space-y-5 text-gray-300 leading-relaxed">
                <p>
                  D6 Virgin is a residual fuel oil (RFO) classified by API gravity in the 19–21° range. It is widely used as a fuel source for power generation plants, marine bunkering, industrial boilers, and heavy machinery. The "virgin" designation indicates unblended, un-cut product direct from distillation — a key distinction for buyers requiring uncontaminated fuel.
                </p>
                <p>
                  As a wholesale fuel supplier and verified petroleum mandate, NIETIM LLP facilitates large-scale D6 transactions from Russian Federation refineries. Our D6 supply program supports monthly volumes of 100,000–2,000,000 MT — making us a capable partner for buyers with substantial bulk fuel requirements.
                </p>
                <p>
                  All D6 transactions are structured on FOB or TTO delivery terms. Payment is accepted via SBLC, MT760, or MT799 banking instruments. Independent SGS and Bureau Veritas inspection is conducted at loading to confirm product quality and quantity.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  'Russian Federation refinery origin — virgin, unblended product',
                  'High-volume capacity: 100,000–2,000,000 MT/month',
                  'FOB and TTO delivery terms',
                  'SBLC / MT760 / MT799 payment instruments',
                  'SGS / Bureau Veritas inspection at loading',
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
              <div className="bg-gradient-to-br from-gray-800/30 to-[#0d1f3c] rounded-3xl border border-[#c9a84c]/15 p-8">
                <div className="flex items-center gap-1.5 text-[#c9a84c] mb-6">
                  <span className="text-xs font-bold tracking-wide uppercase">Transaction Parameters</span>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Product Code', value: 'D6 VIRGIN' },
                    { label: 'Type', value: 'Residual Fuel Oil (RFO)' },
                    { label: 'Grade', value: 'Virgin — Unblended' },
                    { label: 'Origin', value: 'Russian Federation' },
                    { label: 'Monthly Quantity', value: '100,000 MT – 2,000,000 MT' },
                    { label: 'Delivery Terms', value: 'FOB / TTO' },
                    { label: 'Payment', value: 'SBLC / MT760 / MT799' },
                    { label: 'Inspection', value: 'SGS / Bureau Veritas' },
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
            <h2 className="font-serif text-4xl font-bold text-white">D6 Virgin Fuel Oil Specifications</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Standard D6 residual fuel oil parameters. SGS and Bureau Veritas verify all specifications at loading. Typical values — final specification confirmed in Full Corporate Offer.
            </p>
          </FadeUpSection>

          <FadeUpSection>
            <div className="bg-gradient-to-br from-gray-800/15 to-[#0a1628] rounded-3xl border border-[#c9a84c]/15 overflow-hidden">
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

      {/* CTA */}
      <section className="py-16 bg-[#0a1628] border-t border-[#c9a84c]/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeUpSection>
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-4">Start a Transaction</p>
            <h2 className="font-serif text-4xl font-bold text-white mb-4">
              Ready to Source <span className="gold-text">D6 Fuel Oil</span>?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Submit your ICPO or Letter of Intent for D6 virgin residual fuel oil. Our team responds with a Full Corporate Offer within 48 hours.{' '}
              <Link to="/how-it-works" className="text-[#c9a84c] hover:underline">Learn how the process works.</Link>
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
      <section className="py-20 bg-[#0d1f3c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUpSection className="text-center mb-12">
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">Also Available</p>
            <h2 className="font-serif text-3xl font-bold text-white">Other Petroleum Products</h2>
          </FadeUpSection>
          <StaggerSection className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              {
                to: '/products/en590-diesel',
                code: 'EN590 10PPM',
                name: 'Ultra-Low Sulfur Diesel',
                badge: 'Highest Demand',
                desc: 'Bulk EN590 ULSD from ARA/Rotterdam refineries. 50,000–500,000 MT/month. CIF Rotterdam available.',
              },
              {
                to: '/products/jet-a1',
                code: 'JET A-1',
                name: 'Aviation Turbine Fuel',
                badge: 'Premium Grade',
                desc: 'Aviation-grade Jet A-1 from European and Middle East refineries. 10,000–200,000 MT/month.',
              },
            ].map((p) => (
              <motion.div key={p.to} variants={staggerItem}>
                <Link to={p.to} className="block bg-[#0a1628] rounded-2xl border border-[#c9a84c]/10 p-8 hover:border-[#c9a84c]/30 transition-colors group">
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
