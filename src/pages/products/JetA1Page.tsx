import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUpSection, StaggerSection, staggerItem } from '../../components/AnimatedSection';
import AnimatedDivider from '../../components/AnimatedDivider';
import SEO from '../../components/SEO';

const specs = [
  { param: 'Flash Point', value: '38°C min', method: 'DEF STAN 91-091 / ASTM D56' },
  { param: 'Freezing Point', value: '-47°C max', method: 'ASTM D2386' },
  { param: 'Sulphur Content', value: '0.30% mass max', method: 'ASTM D1266 / D2622' },
  { param: 'Density at 15°C', value: '775–840 kg/m³', method: 'ASTM D1298' },
  { param: 'Aromatics Content', value: '25% vol max', method: 'ASTM D1319' },
  { param: 'Net Heat of Combustion', value: '42.8 MJ/kg min', method: 'ASTM D3338' },
  { param: 'Smoke Point', value: '25 mm min', method: 'ASTM D1322' },
  { param: 'Thermal Stability (JFTOT)', value: '260°C', method: 'ASTM D3241' },
];

const jetA1Schema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Jet A-1 Aviation Turbine Fuel',
  description:
    'Jet A-1 aviation turbine fuel from European and Middle East refineries. Bulk quantities 10,000–200,000 MT/month. FOB, CIF, and CIP delivery. DEF STAN 91-091 specification. Verified by SGS, Intertek, Saybolt.',
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

export default function JetA1Page() {
  return (
    <div className="min-h-screen pt-28 lg:pt-36">
      <SEO
        title="Jet A1 Supplier | Aviation Turbine Fuel | NIETIM LLP"
        description="Wholesale Jet A-1 aviation turbine fuel supplier. Bulk quantities from European and Middle East refineries. FOB, CIF, CIP delivery terms. Verified aviation fuel mandate."
        canonical="/products/jet-a1"
        schemaJson={jetA1Schema}
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
              <span className="text-[#c9a84c]">Jet A-1 Aviation Fuel</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-full px-4 py-2 mb-6">
              <span className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase">Premium Grade</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4 max-w-3xl">
              Jet A-1 Aviation Turbine Fuel{' '}
              <span className="gold-text">Supplier</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl leading-relaxed mb-8">
              NIETIM LLP is an authorized Jet A1 supplier and aviation fuel trading company, facilitating large-volume Jet A-1 transactions from verified European and Middle East refinery sources for qualified international aviation buyers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                <Link to="/contact" className="btn-gold px-8 py-3.5 rounded-xl text-sm font-bold inline-flex items-center gap-2">
                  <span>Request Jet A-1 Quote</span>
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
              { label: 'Monthly Volume', value: '10,000 – 200,000 MT' },
              { label: 'Origin', value: 'Europe / Middle East Refineries' },
              { label: 'Delivery Terms', value: 'FOB / CIF / CIP' },
              { label: 'Inspection', value: 'SGS / Intertek / Saybolt' },
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
                Aviation Turbine Fuel — <span className="gold-text">DEF STAN 91-091</span>
              </h2>
              <div className="space-y-5 text-gray-300 leading-relaxed">
                <p>
                  Jet A-1 is the internationally standard aviation turbine fuel used by commercial airlines, cargo operators, and military aviation worldwide. It meets DEF STAN 91-091 and ASTM D1655 specifications, with stringent flash point, freezing point, and thermal stability requirements demanded by modern turbine engines.
                </p>
                <p>
                  NIETIM LLP operates as a Jet A1 trading company and aviation fuel mandate with access to verified refinery supply from Europe and the Middle East. We facilitate wholesale jet fuel transactions for qualified buyers including fuel distributors, charter operators, and international aviation fuel trading companies.
                </p>
                <p>
                  All Jet A-1 transactions are supported by independent inspection from SGS, Intertek, or Saybolt at loading, complete product certification, and full SPA/banking instrument documentation.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  'DEF STAN 91-091 and ASTM D1655 specification',
                  'European and Middle East refinery sourcing',
                  'Independent SGS / Intertek / Saybolt inspection',
                  'SBLC / LC / BG payment instruments accepted',
                  'FOB, CIF, and CIP delivery terms available',
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
              <div className="bg-gradient-to-br from-amber-900/20 to-[#0d1f3c] rounded-3xl border border-[#c9a84c]/15 p-8">
                <div className="flex items-center gap-1.5 text-[#c9a84c] mb-6">
                  <span className="text-xs font-bold tracking-wide uppercase">Transaction Parameters</span>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Product Code', value: 'JET A-1' },
                    { label: 'Grade', value: 'Aviation Turbine Fuel' },
                    { label: 'Specification', value: 'DEF STAN 91-091 / ASTM D1655' },
                    { label: 'Origin', value: 'Europe / Middle East Refineries' },
                    { label: 'Monthly Quantity', value: '10,000 MT – 200,000 MT' },
                    { label: 'Delivery Terms', value: 'FOB / CIF / CIP' },
                    { label: 'Payment', value: 'SBLC / LC / BG' },
                    { label: 'Inspection', value: 'SGS / Intertek / Saybolt' },
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
            <h2 className="font-serif text-4xl font-bold text-white">Jet A-1 Technical Specifications</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Specifications per DEF STAN 91-091 and ASTM D1655. Independent inspection at loading port verifies compliance before every shipment.
            </p>
          </FadeUpSection>

          <FadeUpSection>
            <div className="bg-gradient-to-br from-amber-900/10 to-[#0a1628] rounded-3xl border border-[#c9a84c]/15 overflow-hidden">
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
              Ready to Source <span className="gold-text">Jet A-1</span>?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Submit your ICPO or Letter of Intent for Jet A-1 aviation fuel. Our team will respond with a Full Corporate Offer within 48 hours.{' '}
              <Link to="/how-it-works" className="text-[#c9a84c] hover:underline">See how the process works.</Link>
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
                to: '/products/d6-fuel-oil',
                code: 'D6 VIRGIN',
                name: 'Residual Fuel Oil',
                badge: 'Bulk Supply',
                desc: 'D6 virgin residual fuel oil from Russian Federation refineries. 100,000–2,000,000 MT/month.',
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
