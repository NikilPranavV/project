import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Abiman & Company</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Premium manufacturer of 100% pure coconut shell shisha briquettes. Export-quality products for wholesalers, distributors, and shisha lounges worldwide.
            </p>
            <p className="text-zinc-500 text-xs">Eco-friendly • High Performance • Trusted Quality</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('home')} className="text-zinc-400 hover:text-amber-500 text-sm transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="text-zinc-400 hover:text-amber-500 text-sm transition-colors">Products</button>
              </li>
              <li>
                <button onClick={() => onNavigate('production')} className="text-zinc-400 hover:text-amber-500 text-sm transition-colors">Production</button>
              </li>
              <li>
                <button onClick={() => onNavigate('packaging')} className="text-zinc-400 hover:text-amber-500 text-sm transition-colors">Packaging</button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-zinc-400 text-sm">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                <a href="mailto:info@abimanbriquettes.com" className="text-zinc-300 hover:text-amber-500 text-sm">info@abimanbriquettes.com</a>
              </li>
              <li className="flex items-start space-x-3 text-zinc-400 text-sm">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                <span>+91 8300596735</span>
              </li>
              <li className="flex items-start space-x-3 text-zinc-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                <span>Karur, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} Abiman & Company. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button onClick={() => onNavigate('privacy')} className="text-zinc-500 hover:text-amber-500 text-sm transition-colors">Privacy Policy</button>
            <button onClick={() => onNavigate('terms')} className="text-zinc-500 hover:text-amber-500 text-sm transition-colors">Terms of Service</button>
            <button onClick={() => onNavigate('export-terms')} className="text-zinc-500 hover:text-amber-500 text-sm transition-colors">Export Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
