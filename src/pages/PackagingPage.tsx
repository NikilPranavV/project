import { Package, Box, Archive } from 'lucide-react';
import Seo from '../components/Seo';

export default function PackagingPage() {
  const keywords = [
    'coconut shell charcoal',
    'coconut shell charcoal manufacturers',
    'coconut shell charcoal briquettes',
    'shisha briquettes',
    'hookah charcoal',
  ];

  const seo = {
    title: 'Packaging Options — Coconut Shell Charcoal Briquettes',
    description: 'Retail and bulk packaging, private label and OEM options for coconut shell charcoal briquettes.',
    keywords,
    url: typeof window !== 'undefined' ? `${window.location.origin}/packaging` : undefined,
  };
  return (
    <div className="bg-zinc-950 pt-20">
      <Seo {...seo} />
      <section className="py-20 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-zinc-900/50 border border-amber-900/30 rounded-full px-4 py-2 mb-6">
            <Package className="w-4 h-4 text-amber-600" />
            <span className="text-amber-600 text-sm font-medium">Flexible & Secure</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Packaging Options</h1>
          <p className="text-zinc-400 mb-8">Retail, bulk, OEM and custom packaging to meet market needs and protect product during export.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <Box className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Retail Boxes</h3>
              <p className="text-zinc-400 text-sm">250g, 500g and 1kg retail-ready boxes with branded design options.</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <Archive className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Master Cartons</h3>
              <p className="text-zinc-400 text-sm">10kg and 20kg inner packs with moisture barrier and pallet optimization.</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <Package className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Woven Bag / Bulk</h3>
              <p className="text-zinc-400 text-sm">Woven polypropylene bags for large volume buyers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Private Label & OEM</h2>
          <p className="text-zinc-400 mb-6">We offer full private label services including artwork, multi-language printing, and low MOQ options for new brands.</p>
          <button className="bg-amber-600 text-white px-6 py-3 rounded-lg">Request OEM Info</button>
        </div>
      </section>
    </div>
  );
}
