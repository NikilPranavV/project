import { ArrowRight, Leaf, Flame, Clock, Sparkles, Globe, Package, Shield } from 'lucide-react';
import Seo from '../components/Seo';
import { useState } from 'react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const keywords = [
    'coconut shell charcoal',
    'coconut shell charcoal manufacturers',
    'coconut shell charcoal briquettes',
    'shisha briquettes',
    'hookah charcoal',
  ];

  const seo = {
    title: 'Coconut Shell Shisha Briquettes — Abiman & Company',
    description:
      'Premium coconut shell charcoal briquettes for shisha and hookah — long burn time, low ash, export-grade. OEM and private label available.',
    keywords,
    url: typeof window !== 'undefined' ? window.location.origin : undefined,
  };
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Abiman & Company",
    "url": typeof window !== 'undefined' ? window.location.origin : 'https://example.com',
    "logo": typeof window !== 'undefined' ? `${window.location.origin}/images/logo/logo.png` : 'https://example.com/images/logo/logo.png',
    "sameAs": [
      "https://www.facebook.com/",
      "https://www.linkedin.com/",
      "https://www.instagram.com/"
    ],
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+91 8300596735",
      "email": "info@abimanbriquettes.com",
      "contactType": "customer service",
      "areaServed": "IN"
    }]
  };
  const [waOpen, setWaOpen] = useState(false);
  const WHATSAPP_NUMBER = '+91 8300596735'; // replace with your WhatsApp number in international format
  const waDigits = WHATSAPP_NUMBER.replace(/\D/g, '');
  const openWhatsAppLink = (message: string) => {
    const url = `https://wa.me/${waDigits}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-zinc-950">
      <Seo {...seo} jsonLd={orgJsonLd} />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNGgtMnYyaDJ2LTJ6bTAtOGgydi0yaC0ydjJ6bS0yLTJoLTJ2Mmgydi0yem00LTRoMnYtMmgtMnYyem0wIDhoLTJ2Mmgydi0yem0wLTRoMnYtMmgtMnYyem0tNiAwaDJ2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center space-x-2 bg-zinc-900/50 border border-amber-900/30 rounded-full px-4 py-2 mb-8">
            <Leaf className="w-4 h-4 text-amber-600" />
            <span className="text-amber-600 text-sm font-medium">100% Eco-Friendly • Export Quality</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            100% Pure Coconut Shell
            <span className="block bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent mt-2">
              Shisha Briquettes
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Clean burn, high heat, long lasting — Premium quality briquettes for wholesalers, distributors, and shisha lounges worldwide
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => onNavigate('products')}
              className="group bg-gradient-to-r from-amber-600 to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-amber-700 hover:to-orange-800 transition-all shadow-lg shadow-orange-900/30 flex items-center space-x-2"
            >
              <span>View Products</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="bg-zinc-800 border border-zinc-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-zinc-700 transition-all"
            >
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            {[
              { value: '≤ 2.5%', label: 'Ash Content' },
              { value: '90-120', label: 'Burn Time (min)' },
              { value: '100%', label: 'Coconut Shell' },
              { value: 'Zero', label: 'Odor & Smoke' },
            ].map((stat, index) => (
              <div key={index} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                <div className="text-3xl font-bold text-amber-500 mb-2">{stat.value}</div>
                <div className="text-zinc-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Why Choose Our Briquettes?
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Premium quality standards that exceed industry expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sparkles,
                title: 'Ultra Low Ash',
                description: 'Less than 2.5% ash content ensures cleaner burns and minimal residue for premium shisha experience',
              },
              {
                icon: Clock,
                title: 'Extended Burn Time',
                description: '90-120 minutes of consistent heat output, reducing the need for frequent coal changes',
              },
              {
                icon: Leaf,
                title: 'Eco-Friendly',
                description: '100% natural coconut shell material. Sustainable, renewable, and environmentally responsible',
              },
              {
                icon: Flame,
                title: 'Odorless & Smokeless',
                description: 'No unpleasant odors or excess smoke, allowing pure flavor profiles for the best shisha sessions',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-amber-900/50 transition-all group"
              >
                <div className="bg-gradient-to-br from-amber-600 to-orange-700 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Trusted Applications
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Serving diverse markets across the globe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Flame,
                title: 'Shisha Lounges',
                description: 'Premium briquettes for high-end shisha bars and lounges demanding consistent quality and long burn times',
              },
              {
                icon: Globe,
                title: 'International Export',
                description: 'Export-grade packaging and documentation. Shipping to distributors and importers worldwide',
              },
              {
                icon: Package,
                title: 'Wholesale Distribution',
                description: 'Bulk orders with competitive pricing. OEM and private labeling options available for large orders',
              },
            ].map((application, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:bg-zinc-800 transition-all"
              >
                <div className="bg-zinc-950 w-16 h-16 rounded-lg flex items-center justify-center mb-6 border border-zinc-800">
                  <application.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{application.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{application.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-950/20 via-zinc-900 to-orange-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Quality Assurance
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Every batch meets our stringent quality standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, text: 'ISO Certified Manufacturing' },
              { icon: Leaf, text: '100% Natural Materials' },
              { icon: Sparkles, text: 'Consistent Quality Control' },
              { icon: Globe, text: 'Export-Ready Packaging' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-6 flex items-center space-x-4"
              >
                <div className="bg-gradient-to-br from-amber-600 to-orange-700 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Place Your Order?
          </h2>
          <p className="text-xl text-zinc-400 mb-10">
            Contact us today for bulk pricing and export quotations
          </p>
          <button
            onClick={() => onNavigate('products')}
            className="group bg-gradient-to-r from-amber-600 to-orange-700 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:from-amber-700 hover:to-orange-800 transition-all shadow-lg shadow-orange-900/30 inline-flex items-center space-x-2"
          >
            <span>View Our Products</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* WhatsApp floating widget - replace WHATSAPP_NUMBER above with your number */}
      <div className="fixed right-6 bottom-6 z-50">
        <div className="relative">
          <button
            onClick={() => setWaOpen(!waOpen)}
            aria-label="Open WhatsApp chat"
            className="group bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-full shadow-xl flex items-center justify-center transform hover:scale-105 transition-transform"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M20.52 3.48A11.84 11.84 0 0012 0C5.37 0 0 5.37 0 12a11.5 11.5 0 001.61 5.79L0 24l6.28-1.63A11.84 11.84 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.16-3.48-8.52zM12 21.5a9.2 9.2 0 01-4.7-1.23l-.34-.2-3.73.97.99-3.63-.22-.37A9.2 9.2 0 012.5 12 9.5 9.5 0 1112 21.5zm4.47-6.22c-.25-.12-1.45-.72-1.67-.8-.22-.08-.38-.12-.54.12-.16.25-.62.8-.76.96-.14.16-.28.18-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.38-1.73-.14-.25-.01-.38.11-.5.11-.11.25-.28.37-.42.12-.14.16-.25.25-.41.08-.16.04-.3-.02-.41-.06-.12-.54-1.31-.74-1.8-.19-.47-.39-.41-.54-.41-.14 0-.31-.02-.48-.02-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.19.86 2.34.98 2.5.11.16 1.69 2.7 4.1 3.78 2.41 1.08 2.41.72 2.84.67.43-.05 1.45-.59 1.65-1.16.2-.57.2-1.05.14-1.16-.06-.11-.24-.16-.49-.28z" />
            </svg>
            <span className="sr-only">WhatsApp</span>
          </button>

          <div className="absolute -right-2 -top-2 w-3 h-3 bg-green-400 rounded-full animate-pulse" />

          {waOpen && (
            <div className="mt-3 w-72 bg-zinc-900 border border-zinc-800 rounded-xl p-4 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">WA</div>
                  <div>
                    <div className="text-white font-semibold">Chat on WhatsApp</div>
                    <div className="text-zinc-400 text-sm">Quick actions — sample, quote, OEM</div>
                  </div>
                </div>
                <button onClick={() => setWaOpen(false)} className="text-zinc-400 hover:text-white">✕</button>
              </div>

              <div className="space-y-2">
                <button onClick={() => openWhatsAppLink('Hello, please send product specifications and a sample pack for evaluation. Thank you.')} className="w-full text-left bg-zinc-950 border border-zinc-800 px-3 py-2 rounded-lg text-white">Request Specs & Sample</button>
                <button onClick={() => openWhatsAppLink('Hello, please send me a quotation for 1 container of 25mm cubes (25×25×25mm). Please include pricing and lead time.')} className="w-full text-left bg-zinc-950 border border-zinc-800 px-3 py-2 rounded-lg text-white">Request Quotation</button>
                <button onClick={() => openWhatsAppLink('Hello, please send product specifications, a sample pack, and a quotation for 1 container of 25mm cubes. Thank you.')} className="w-full text-left bg-zinc-950 border border-zinc-800 px-3 py-2 rounded-lg text-white">Request Specs + Quotation</button>
                <div className="pt-2 border-t border-zinc-800 mt-2">
                  <a href={`https://wa.me/${waDigits}`} target="_blank" rel="noreferrer" className="block text-center text-green-400 font-semibold">Open WhatsApp App</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
