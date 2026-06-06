import { Leaf, Flame, Package, Box, Droplet, FileCheck, MapPin, Archive } from 'lucide-react';
import Seo from '../components/Seo';

export default function ProductionPage() {
  const keywords = [
    'coconut shell charcoal',
    'coconut shell charcoal manufacturers',
    'coconut shell charcoal briquettes',
    'shisha briquettes',
    'hookah charcoal',
  ];

  const seo = {
    title: 'Production Process — Coconut Shell Charcoal Briquettes',
    description: 'Detailed production process for high-quality coconut shell charcoal shisha briquettes — carbonization, briquetting, drying, testing and packaging.',
    keywords,
    url: typeof window !== 'undefined' ? `${window.location.origin}/production` : undefined,
  };
  const steps = [
    {
      id: 1,
      title: 'Raw Material Selection',
      icon: Leaf,
      text: 'We use only selected, high-quality coconut shells that are clean and fully matured. All materials are carefully inspected to ensure high fixed carbon, low ash, and consistent performance. We select mature, high-density coconut shells from trusted sources for consistent performance and long burn time.',
    },
    {
      id: 2,
      title: 'Carbonization (Shell to Charcoal)',
      icon: Flame,
      text: 'The shells are burned in controlled, low-oxygen kilns to produce charcoal. This process is carefully monitored to achieve the right balance of fixed carbon (≈80%) and ash content (≤2%).',
    },
    {
      id: 3,
      title: 'Crushing & Sieving',
      icon: Package,
      text: 'The charcoal is crushed into powder and sieved into a fine, uniform particle size. This ensures consistency in mixing and results in dense, evenly burning briquettes.',
    },
    {
      id: 4,
      title: 'Mixing with Natural Binder',
      icon: Droplet,
      text: 'The charcoal powder is blended with a food-grade natural binder (commonly tapioca starch) and water. No chemicals are added, ensuring the product is safe, odorless, and tasteless when used for shisha.',
    },
    {
      id: 5,
      title: 'Briquetting / Molding',
      icon: Box,
      text: 'The mixture is pressed under high pressure into cubic shapes - 25 mm cube. The high density allows for longer burn time and consistent heat release.',
    },
    {
      id: 6,
      title: 'Drying & Curing',
      icon: Archive,
      text: 'The freshly pressed briquettes are dried in ovens or under controlled conditions until moisture levels drop below 5%. Proper drying prevents cracking and ensures durability during transport.',
    },
    {
      id: 7,
      title: 'Quality Control & Lab Testing',
      icon: FileCheck,
      text: 'Each batch is tested for ash content, moisture, volatile matter, fixed carbon, calorific value, and burning duration. Briquettes must pass the standards.',
    },
    {
      id: 8,
      title: 'Packaging Process',
      icon: Box,
      text: 'Briquettes are sealed in inner plastic bags to protect against moisture, then placed in branded or private labeled. Packaging options can be customized for shisha brands worldwide.',
    },
    {
      id: 9,
      title: 'Storage & Export',
      icon: MapPin,
      text: 'Finished products are stored in a clean, dry warehouse before being shipped via international ports in Chennai port or VOC port in tuticorin. Export documents and Certificates of Analysis (COA) are provided for transparency.',
    },
  ];

  return (
    <div className="bg-zinc-950 pt-20">
      <Seo {...seo} />
      <section className="py-20 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-zinc-900/50 border border-amber-900/30 rounded-full px-4 py-2 mb-6">
              <Leaf className="w-4 h-4 text-amber-600" />
              <span className="text-amber-600 text-sm font-medium">How We Craft Quality Charcoal for Global Markets</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Production Process</h1>
            <p className="text-zinc-400 max-w-3xl mx-auto">Below is our step-by-step production process — factual content adapted from our reference production info (icons used instead of images).</p>
          </div>

          <div className="space-y-6">
            {steps.map((s) => (
              <div key={s.id} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-gradient-to-br from-amber-600 to-orange-700 w-14 h-14 rounded-lg flex items-center justify-center">
                    <s.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-amber-400 font-semibold mb-1">Step {s.id}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                    <p className="text-zinc-400 leading-relaxed">{s.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Typical Specifications</h2>
          <p className="text-zinc-400 mb-8">Common target metrics achieved through our process</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
              <div className="text-3xl font-bold text-amber-500 mb-2">≤ 2.5%</div>
              <div className="text-zinc-400">Ash Content</div>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
              <div className="text-3xl font-bold text-amber-500 mb-2">&lt; 5%</div>
              <div className="text-zinc-400">Moisture</div>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
              <div className="text-3xl font-bold text-amber-500 mb-2">≈ 75%</div>
              <div className="text-zinc-400">Fixed Carbon (target)</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

