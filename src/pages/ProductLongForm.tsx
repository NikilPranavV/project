import Seo from '../components/Seo';

export default function ProductLongForm() {
  const keywords = [
    'coconut shell charcoal briquettes',
    'coconut shell charcoal manufacturers',
    'shisha briquettes',
    'hookah charcoal',
  ];

  const seo = {
    title: 'Coconut Shell Charcoal Briquettes — 25mm Cube | Abiman & Company',
    description:
      'In-depth product specifications, ordering, packaging, COA, and shipping information for our 25mm coconut shell charcoal briquettes. OEM and private-label available.',
    keywords,
    url: typeof window !== 'undefined' ? `${window.location.origin}/products/25mm-cube` : undefined,
  };

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: '25mm Coconut Shell Shisha Briquettes',
    image: [
      typeof window !== 'undefined' ? `${window.location.origin}/images/gallery/WhatsApp%20Image%202026-04-27%20at%2010.52.25%20PM.jpeg` : 'https://example.com/images/sample.jpg'
    ],
    description: seo.description,
    sku: 'AB-25CUBE',
    brand: { '@type': 'Brand', name: 'Abiman & Company' },
    offers: {
      '@type': 'Offer',
      url: typeof window !== 'undefined' ? `${window.location.origin}/products/25mm-cube` : 'https://example.com/products/25mm-cube',
      priceCurrency: 'USD',
      price: '0.00',
      availability: 'https://schema.org/InStock'
    }
  };

  return (
    <div className="bg-zinc-950 pt-24 pb-24">
      <Seo {...seo} jsonLd={productJsonLd} />
      <section className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-4">25mm Coconut Shell Charcoal Briquettes</h1>
        <p className="text-zinc-400 mb-6">Premium, export-grade coconut shell briquettes engineered for shisha and hookah usage. Key specs below:</p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-3">Technical Specifications</h2>
          <ul className="text-zinc-400 list-disc list-inside space-y-2">
            <li>Ash Content: ≤ 2.5%</li>
            <li>Burn Time: 90–120 minutes</li>
            <li>Moisture: &lt; 5%</li>
            <li>Fixed Carbon: ≈ 75%</li>
            <li>Shape: 25mm cube</li>
            <li>Binder: Food-grade tapioca starch (no chemicals)</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-white mb-3">Ordering & Packaging</h2>
        <p className="text-zinc-400 mb-4">Available in retail boxes (1kg), cartons (10kg, 20kg), and bulk woven bags. Minimum order quantity typically 1 x 20' container. OEM/private-label available.</p>

        <h2 className="text-2xl font-semibold text-white mb-3">Certificates & Testing</h2>
        <p className="text-zinc-400 mb-4">Batch-wise Certificates of Analysis (COA) available on request — includes ash, moisture, fixed carbon, and calorific value.</p>

        <h2 className="text-2xl font-semibold text-white mb-3">Shipping & Export</h2>
        <p className="text-zinc-400 mb-4">We ship FOB Chennai or VOC port. Lead times depend on order size and export documentation. Contact for a formal quotation.</p>

        <h2 className="text-2xl font-semibold text-white mb-3">FAQs</h2>
        <div className="space-y-4 text-zinc-400">
          <div>
            <strong>Q:</strong> Are samples available? <br />
            <strong>A:</strong> Yes — sample packs can be provided for evaluation (shipping charges may apply).
          </div>
          <div>
            <strong>Q:</strong> Can you change briquette size? <br />
            <strong>A:</strong> Yes — custom sizes and shapes available subject to MOQ and tooling.
          </div>
        </div>
      </section>
    </div>
  );
}
