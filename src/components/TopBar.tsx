import { Mail, Phone, MapPin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-8 bg-[#060f1e] border-b border-[#c9a84c]/15 hidden lg:flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a
            href="mailto:taspolatova@nietim.com"
            className="flex items-center gap-1.5 text-gray-400 hover:text-[#c9a84c] transition-colors duration-200 text-xs"
          >
            <Mail size={11} className="text-[#c9a84c]" />
            taspolatova@nietim.com
          </a>
          <a
            href="tel:+77272436776"
            className="flex items-center gap-1.5 text-gray-400 hover:text-[#c9a84c] transition-colors duration-200 text-xs"
          >
            <Phone size={11} className="text-[#c9a84c]" />
            +7 (727) 2436776
          </a>
          <span className="flex items-center gap-1.5 text-gray-400 text-xs">
            <MapPin size={11} className="text-[#c9a84c]" />
            No. 120 Gogol Street, Amali, Almaty, Kazakhstan
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-500 text-xs">
          <span className="text-[#c9a84c]/60 font-medium">BIN:</span>
          <span>060940008820</span>
        </div>
      </div>
    </div>
  );
}
