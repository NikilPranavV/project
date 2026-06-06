import Seo from '../components/Seo';

export default function FAQPage() {
  const keywords = [
    'coconut shell charcoal',
    'coconut shell charcoal manufacturers',
    'coconut shell charcoal briquettes',
    'shisha briquettes',
    'hookah charcoal',
  ];

  const seo = {
    title: 'FAQ — Coconut Shell Charcoal Briquettes',
    description: 'Answers to common questions about ordering, samples, specifications and shipping for coconut shell charcoal briquettes.',
    keywords,
    url: typeof window !== 'undefined' ? `${window.location.origin}/faq` : undefined,
  };
  return (
    <div className="bg-zinc-950 pt-20">
      <Seo {...seo} />
      <section className="py-20 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
            <p className="text-zinc-400">Common questions about our products, production and shipping.</p>
          </div>

          <div className="space-y-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-white font-bold mb-2">Can I order custom sizes?</h3>
              <p className="text-zinc-400">Yes — we offer custom sizes and shapes. Contact us with your requirements and MOQ preferences.</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-white font-bold mb-2">What are your typical specs?</h3>
              <p className="text-zinc-400">Typical targets: ash ≤2.5%, moisture &lt;5%, fixed carbon ≥75%. Exact values provided per batch COA.</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-white font-bold mb-2">Do you provide samples?</h3>
              <p className="text-zinc-400">Yes — sample packs are available for evaluation. Request via the Contact page or email.</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-white font-bold mb-2">What are your MOQs?</h3>
              <p className="text-zinc-400">Standard MOQ is 20 foot container load. Smaller orders are available on request.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
