import { Flame } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'production', label: 'Production' },
    { id: 'packaging', label: 'Packaging' },
    { id: 'quality', label: 'Quality' },
    { id: 'faq', label: 'FAQ' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-zinc-950 border-b border-zinc-800 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center space-x-1 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div
              className="p-1 rounded-lg group-hover:scale-110 transition-transform"
              style={{
                backgroundImage: "url('/images/logo/mosaic-pattern.svg')",
                backgroundSize: '64px 64px',
                backgroundRepeat: 'repeat',
                padding: 6,
                borderRadius: 8,
              }}
            >
              {!logoLoaded && (
                <div className="bg-gradient-to-br from-amber-600 to-orange-700 p-2.5 rounded-lg">
                  <Flame className="w-12 h-12 text-white" />
                </div>
              )}
              <img
                src="/images/logo/Logo%20-%20Abiman_page-0001.svg"
                alt="ABIMAN AND COMPANY"
                className={logoLoaded ? 'w-28 h-28 sm:w-32 sm:h-32 object-contain block' : 'w-28 h-28 sm:w-32 sm:h-32 object-contain hidden'}
                onLoad={() => setLogoLoaded(true)}
                onError={() => setLogoLoaded(false)}
              />
            </div>
            <div className="ml-1">
              <div className="text-white font-bold text-xl tracking-tight uppercase">ABIMAN AND COMPANY</div>
              <div className="text-zinc-400 text-xs tracking-wider uppercase">PREMIUM BRIQUETTES</div>
            </div>
          </div>

          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  currentPage === item.id
                    ? 'bg-zinc-800 text-white'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => onNavigate('products')}
            className="hidden md:block bg-gradient-to-r from-amber-600 to-orange-700 text-white px-6 py-2.5 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-800 transition-all shadow-lg shadow-orange-900/30"
          >
            View Products
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-zinc-400 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
                  currentPage === item.id
                    ? 'bg-zinc-800 text-white'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate('products');
                setMobileMenuOpen(false);
              }}
              className="block w-full bg-gradient-to-r from-amber-600 to-orange-700 text-white px-4 py-3 rounded-lg font-semibold"
            >
              View Products
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
