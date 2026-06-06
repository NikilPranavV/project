import { FileCheck, TestTube, Shield, Clock } from 'lucide-react';
import Seo from '../components/Seo';

export default function QualityPage() {
  const keywords = [
    'coconut shell charcoal',
    'coconut shell charcoal manufacturers',
    'coconut shell charcoal briquettes',
    'shisha briquettes',
    'hookah charcoal',
  ];

  const seo = {
    title: 'Quality & Testing — Coconut Shell Charcoal Briquettes',
    description: 'Batch-wise testing, Certificates of Analysis, and strict quality controls for our coconut shell charcoal briquettes.',
    keywords,
    url: typeof window !== 'undefined' ? `${window.location.origin}/quality` : undefined,
  };
  return (
    <div className="bg-zinc-950 pt-20">
      <Seo {...seo} />
      <section className="py-20 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-zinc-900/50 border border-amber-900/30 rounded-full px-4 py-2 mb-6">
            <FileCheck className="w-4 h-4 text-amber-600" />
            <span className="text-amber-600 text-sm font-medium">Certified & Tested</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Quality & Testing</h1>
          <p className="text-zinc-400 mb-8">Every batch is tested to ensure consistent performance and export compliance.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <TestTube className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Lab Testing</h3>
              <p className="text-zinc-400 text-sm">Fixed Carbon, Ash, Moisture, Volatile matter and Calorific value are measured per batch.</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <Shield className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Standards</h3>
              <p className="text-zinc-400 text-sm">We maintain clear specs: ash ≤2.5%, moisture &lt;5%, fixed carbon target ≥75%.</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <Clock className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Traceability</h3>
              <p className="text-zinc-400 text-sm">Batch COAs available on request; QR codes for batch reports planned.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Downloadable Reports</h2>
          <p className="text-zinc-400 mb-6">Access Certificates of Analysis (COA) and sample lab results for each batch.</p>
          <div className="space-x-3">
            <button className="bg-amber-600 text-white px-6 py-3 rounded-lg">Request COA</button>
            <button className="bg-zinc-800 text-white px-6 py-3 rounded-lg">Sample Lab Results</button>
          </div>
        </div>
      </section>
    </div>
  );
}
