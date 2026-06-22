import { Package, Flame, Droplet, Wind, Box, FileCheck } from 'lucide-react';
import Seo from '../components/Seo';

export default function ProductsPage() {
  const keywords = [
    'coconut shell charcoal',
    'coconut shell charcoal manufacturers',
    'coconut shell charcoal briquettes',
    'shisha briquettes',
    'hookah charcoal',
  ];

  const seo = {
    title: 'Coconut Shell Charcoal Briquettes — Products',
    description:
      'Export-grade coconut shell charcoal briquettes for shisha and hookah with long burn time and low ash — available in 25mm cubes and bulk packaging.',
    keywords,
    url: typeof window !== 'undefined' ? `${window.location.origin}/products` : undefined,
  };
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Coconut Shell Shisha Briquettes",
    "image": [
      typeof window !== 'undefined' ? `${window.location.origin}/images/gallery/WhatsApp%20Image%202026-04-27%20at%2010.52.25%20PM.jpeg` : 'https://example.com/images/gallery/sample.jpg'
    ],
    "description": seo.description,
    "brand": {
      "@type": "Brand",
      "name": "Abiman & Company"
    },
    "sku": "AB-25CUBE",
    "offers": {
      "@type": "Offer",
      "url": typeof window !== 'undefined' ? `${window.location.origin}/products` : 'https://example.com/products',
      "priceCurrency": "USD",
      "price": "0.00",
      "availability": "https://schema.org/InStock"
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": typeof window !== 'undefined' ? window.location.origin : 'https://example.com'
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": typeof window !== 'undefined' ? `${window.location.origin}/products` : 'https://example.com/products'
      }
    ]
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are common packaging options?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer 1kg retail boxes, 10kg cartons, 20kg master cartons, and container palletization for bulk orders."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer private labeling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we provide white-label manufacturing and custom branding for large orders. Contact sales for MOQ and pricing."
        }
      }
    ]
  };
  return (
    <div className="bg-zinc-950 pt-20">
      <Seo {...seo} jsonLd={[productJsonLd, breadcrumbJsonLd, faqJsonLd]} />
      <section className="py-20 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-zinc-900/50 border border-amber-900/30 rounded-full px-4 py-2 mb-6">
              <Package className="w-4 h-4 text-amber-600" />
              <span className="text-amber-600 text-sm font-medium">Premium Quality</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Coconut Shell Shisha Briquettes
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Export-grade briquettes manufactured from 100% pure coconut shell with unmatched performance characteristics
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-gradient-to-br from-amber-950/30 to-orange-950/30 p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-amber-600 to-orange-700 w-32 h-32 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                    <Flame className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">Premium Grade</h3>
                  <p className="text-amber-500 text-lg">Export Quality Certified</p>
                </div>
              </div>

              <div className="p-12">
                <h2 className="text-3xl font-bold text-white mb-8">Product Overview</h2>
                <p className="text-zinc-400 leading-relaxed mb-8">
                  Our coconut shell shisha briquettes are manufactured using advanced carbonization technology,
                  ensuring consistent quality and superior performance. Each briquette is crafted from sustainably
                  sourced coconut shells, providing an eco-friendly alternative to traditional charcoal.
                </p>
                <div className="space-y-4">
                  {[
                    { label: 'Material', value: '100% Coconut Shell' },
                    { label: 'Burn Time', value: '90-120 Minutes' },
                    { label: 'Ash Content', value: '≤ 2.5%' },
                    { label: 'Moisture', value: '< 5%' },
                    { label : 'Ash Color', value: 'Light Gray & White' },
                    ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-zinc-800 pb-3">
                      <span className="text-zinc-400 font-medium">{item.label}</span>
                      <span className="text-white font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-zinc-400">
              Detailed product characteristics and performance metrics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Flame,
                title: 'Fixed Carbon',
                value: '≥ 75%',
                description: 'High carbon content for optimal heat generation',
              },
              {
                icon: Droplet,
                title: 'Moisture Content',
                value: '< 5%',
                description: 'Low moisture ensures quick ignition',
              },
              {
                icon: Wind,
                title: 'Volatile Matter',
                value: '≤ 15%',
                description: 'Minimal smoke and odor release',
              },
              {
                icon: Package,
                title: 'Ash Content',
                value: '≤ 2.5%',
                description: 'Ultra-low residue for cleaner burns',
              },
            ].map((spec, index) => (
              <div
                key={index}
                className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-amber-900/50 transition-all"
              >
                <div className="bg-gradient-to-br from-amber-600 to-orange-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <spec.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{spec.title}</h3>
                <div className="text-3xl font-bold text-amber-500 mb-3">{spec.value}</div>
                <p className="text-zinc-400 text-sm leading-relaxed">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Available Size
            </h2>
            <p className="text-xl text-zinc-400">
              Only supplied as a 25 mm cube
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <div className="bg-zinc-950 w-16 h-16 rounded-lg flex items-center justify-center mb-6 border border-zinc-800">
                <Box className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cube Shape</h3>
              <p className="text-zinc-400 mb-6">Most popular and only available format – 25 mm</p>
              <div className="space-y-3">
                <div className="bg-zinc-950 rounded-lg p-4">
                  <span className="text-amber-500 font-semibold">25mm × 25mm × 25mm</span>
                  <p className="text-zinc-400 text-sm mt-1">Single standard size</p>
                </div>
                <div className="bg-zinc-950 rounded-lg p-4">
                  <span className="text-amber-500 font-semibold">Premium Quality</span>
                  <p className="text-zinc-400 text-sm mt-1">100% pure coconut shell</p>
                </div>
                <div className="bg-zinc-950 rounded-lg p-4">
                  <span className="text-amber-500 font-semibold">Export Grade</span>
                  <p className="text-zinc-400 text-sm mt-1">Certified performance standards</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <div className="bg-zinc-950 w-16 h-16 rounded-lg flex items-center justify-center mb-6 border border-zinc-800">
                <Package className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Order Quantities</h3>
              <p className="text-zinc-400 mb-6">Flexible container options for bulk orders</p>
              <div className="space-y-3">
                <div className="bg-zinc-950 rounded-lg p-4">
                  <span className="text-amber-500 font-semibold">Minimum Order: 20 Feet Container</span>
                  <p className="text-zinc-400 text-sm mt-1">Standard MOQ requirement</p>
                </div>
                <div className="bg-zinc-950 rounded-lg p-4">
                  <span className="text-amber-500 font-semibold">20 Feet Container</span>
                  <p className="text-zinc-400 text-sm mt-1">Standard container option</p>
                </div>
                <div className="bg-zinc-950 rounded-lg p-4">
                  <span className="text-amber-500 font-semibold">40 Feet Container</span>
                  <p className="text-zinc-400 text-sm mt-1">Large volume orders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Packaging Options
            </h2>
            <p className="text-xl text-zinc-400">
              Flexible packaging solutions for all order sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Standard Packaging</h3>
              <div className="space-y-4">
                {[
                  { size: '1 kg Box', description: 'Retail-ready packaging' },
                  { size: '10 kg Carton', description: 'Small wholesale orders' },
                  { size: '20 kg Master Carton', description: 'Bulk distribution' },
                  { size: 'Custom Palletization', description: 'Container loading optimization' },

                ].map((pkg, index) => (
                  <div key={index} className="flex items-start space-x-4 bg-zinc-900 rounded-lg p-4">
                    <Package className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">{pkg.size}</div>
                      <div className="text-zinc-400 text-sm">{pkg.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Custom Branding</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                Want to sell under your own brand? We offer white-label solutions where we manufacture
                the product and you customize the packaging and branding.
              </p>
              <div className="space-y-4">
                {[
                  { feature: 'Custom brand logo printing', description: 'Your company branding' },
                  { feature: 'Your design packaging', description: 'Personalized box design' },
                  { feature: 'Multiple language support', description: 'Global market ready' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 bg-zinc-900 rounded-lg p-4">
                    <Package className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">{item.feature}</div>
                      <div className="text-zinc-400 text-sm">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-950/20 via-zinc-950 to-orange-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-12">
            <div className="flex items-start space-x-4 mb-8">
              <div className="bg-gradient-to-br from-amber-600 to-orange-700 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-3">Quality Certifications</h2>
                <p className="text-zinc-400 leading-relaxed">
                  All products meet international export standards and comply with regulatory requirements
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'ISO 9001:2015 Quality Management',
                'Export-ready documentation',
                'Laboratory tested batches',
                'Phytosanitary certificates',
                'Certificate of Origin',
                'Safety data sheets (SDS)',
              ].map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 bg-zinc-950 rounded-lg p-4">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-zinc-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Request a Quote
          </h2>
          <p className="text-xl text-zinc-400 mb-10">
            Contact us for bulk pricing, custom orders, and export inquiries
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="mailto:info@abimanbriquettes.com"
              className="bg-gradient-to-r from-amber-600 to-orange-700 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:from-amber-700 hover:to-orange-800 transition-all shadow-lg shadow-orange-900/30"
            >
              Email Us
            </a>
            <a
              href="tel:+15551234567"
              className="bg-zinc-800 border border-zinc-700 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-zinc-700 transition-all"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
