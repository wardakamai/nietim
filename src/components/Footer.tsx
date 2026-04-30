import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060f1e] border-t border-[#c9a84c]/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex mb-6">
              <img
                src="/images/nietim-site-logo.png"
                alt="NIETIM LLP"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              International oil & gas facilitation and mandating company connecting verified buyers and sellers of petroleum products worldwide.
            </p>
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/46764916070"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#25D366]/20 transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#c9a84c]"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Our Services', path: '/services' },
                { label: 'Products', path: '/products' },
                { label: 'How It Works', path: '/how-it-works' },
                { label: 'Compliance', path: '/compliance' },
                { label: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#c9a84c] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight size={12} className="text-[#c9a84c]/40 group-hover:text-[#c9a84c] transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#c9a84c]"></span>
              Products
            </h4>
            <ul className="space-y-3">
              {[
                'EN590 10PPM Diesel',
                'Jet A1 Aviation Fuel',
                'D6 Virgin Fuel Oil',
                'Aviation Gasoline',
                'Base Oil',
                'Crude Oil',
              ].map((product) => (
                <li key={product}>
                  <Link
                    to="/products"
                    className="text-gray-400 hover:text-[#c9a84c] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]/40 group-hover:bg-[#c9a84c] transition-colors flex-shrink-0"></span>
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#c9a84c]"></span>
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#c9a84c] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  No. 120 Gogol Street, Amali,<br />
                  Almaty, Kazakhstan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#c9a84c] flex-shrink-0" />
                <a href="mailto:taspolatova@nietim.com" className="text-gray-400 hover:text-[#c9a84c] text-sm transition-colors">
                  taspolatova@nietim.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#c9a84c] flex-shrink-0" />
                <a href="tel:+77272436776" className="text-gray-400 hover:text-[#c9a84c] text-sm transition-colors">
                  +7 (727) 2436776
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 rounded-xl border border-[#c9a84c]/15 bg-[#c9a84c]/3">
              <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-1">Business Hours</p>
              <p className="text-gray-400 text-sm">Mon – Fri: 8:00 AM – 6:00 PM</p>
              <p className="text-gray-400 text-sm">ALMT / UTC+5</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#c9a84c]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © {currentYear} NIETIM LLP. All rights reserved. | BIN: 060940008820 | Registered in Kazakhstan
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2">
            {['Privacy Policy', 'Terms of Service', 'KYC Policy'].map((item) => (
              <Link
                key={item}
                to="/compliance"
                className="text-gray-500 hover:text-[#c9a84c] text-xs transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
