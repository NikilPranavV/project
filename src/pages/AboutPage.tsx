import { Building2, Image } from 'lucide-react';
import Seo from '../components/Seo';

export default function AboutPage() {
  const keywords = [
    'coconut shell charcoal',
    'coconut shell charcoal manufacturers',
    'coconut shell charcoal briquettes',
    'shisha briquettes',
    'hookah charcoal',
  ];

  const seo = {
    title: 'About Abiman & Company — Coconut Shell Charcoal Manufacturers',
    description:
      'Abiman & Company manufactures premium coconut shell charcoal shisha briquettes for international export — OEM, private-label, and bulk supply options.',
    keywords,
    url: typeof window !== 'undefined' ? `${window.location.origin}/about` : undefined,
  };
  const galleryImages = [
    'WhatsApp Image 2026-04-27 at 10.52.25 PM.jpeg',
    'WhatsApp Image 2026-04-27 at 10.52.26 PM (1).jpeg',
    'WhatsApp Image 2026-04-27 at 10.52.26 PM (2).jpeg',
    'WhatsApp Image 2026-04-27 at 10.52.26 PM.jpeg'
  ];

  return (
    <div className="bg-zinc-950 pt-20">
      <Seo {...seo} />
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <aside className="hidden lg:block sticky top-28 self-start">
              <nav className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 w-56">
                <h4 className="text-sm font-semibold text-amber-500">About Company</h4>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a href="#company-legal" className="text-zinc-300 hover:text-amber-500 block py-1">Company Legal Data</a>
                  </li>
                  <li>
                    <a href="#our-gallery" className="text-zinc-300 hover:text-amber-500 block py-1">Our Gallery</a>
                  </li>
                  <li>
                    <a href="#partner-with-us" className="text-zinc-300 hover:text-amber-500 block py-1">Partner With Us</a>
                  </li>
                </ul>
              </nav>
            </aside>

            <div className="lg:col-span-2">
              {/* Company Introduction */}
              <div className="mb-16 text-left">
                <div className="inline-flex items-center space-x-2 bg-zinc-900/50 border border-amber-900/30 rounded-full px-4 py-2 mb-6">
                  <Building2 className="w-4 h-4 text-amber-600" />
                  <span className="text-amber-600 text-sm font-medium">Abiman & Company</span>
                </div>
                <h1 className="text-4xl font-bold text-white">About Abiman & Company</h1>
                <div className="max-w-2xl mt-3 space-y-3">
                  <p className="text-zinc-400">Abiman & Company is a reliable manufacturer and exporter of premium coconut-shell shisha briquettes, supplying high-quality charcoal products to the global premium shisha market. We specialize in producing export-grade shisha briquettes that provide strong and steady heat, long burning time, low ash content, and a clean, odor-free experience. Our products are ideal for premium shisha lounges, distributors, and international brands.</p>
                  <p className="text-zinc-400">We follow a well-structured production process with strict quality checks at every stage, from raw material selection to final packing. Only carefully sourced coconut shells are used to ensure consistent performance and eco-friendly characteristics. Our manufacturing practices focus on uniform size, high density, and stable burning quality to meet international export standards.</p>
                  <p className="text-zinc-400">In addition, Abiman & Company offers OEM and private-label services, allowing buyers to customize briquette shape, size, packaging, and branding according to their market needs. We believe in building long-term partnerships based on trust, transparency, and reliable supply, supporting our global partners with consistent quality and professional export service.</p>
                </div>
              </div>

              {/* Company Legal Data */}
              <div id="company-legal" className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-8">Company Legal Data</h2>
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <tbody>
                        <tr className="border-b border-zinc-800">
                          <td className="font-medium text-amber-500 py-3 px-6 bg-zinc-950">Company Name</td>
                          <td className="text-zinc-300 py-3 px-6">Abiman & Company</td>
                        </tr>
                        <tr className="border-b border-zinc-800">
                          <td className="font-medium text-amber-500 py-3 px-6 bg-zinc-950">Business Activity</td>
                          <td className="text-zinc-300 py-3 px-6">Manufacturer & Exporter</td>
                        </tr>
                        <tr className="border-b border-zinc-800">
                          <td className="font-medium text-amber-500 py-3 px-6 bg-zinc-950">Year of Establishment</td>
                          <td className="text-zinc-300 py-3 px-6">2019</td>
                        </tr>
                        <tr className="border-b border-zinc-800">
                          <td className="font-medium text-amber-500 py-3 px-6 bg-zinc-950">Owner / Director Name</td>
                          <td className="text-zinc-300 py-3 px-6">Vishnu Sharan P</td>
                        </tr>
                        <tr className="border-b border-zinc-800">
                          <td className="font-medium text-amber-500 py-3 px-6 bg-zinc-950">Executive Director</td>
                          <td className="text-zinc-300 py-3 px-6">Nikil Pranav V</td>
                        </tr>
                        <tr className="border-b border-zinc-800">
                          <td className="font-medium text-amber-500 py-3 px-6 bg-zinc-950">Registered Address</td>
                          <td className="text-zinc-300 py-3 px-6">SF.1358/5, Madakalli, Chinnadharapuram, Karur, India</td>
                        </tr>
                        <tr className="border-b border-zinc-800">
                          <td className="font-medium text-amber-500 py-3 px-6 bg-zinc-950">Products</td>
                          <td className="text-zinc-300 py-3 px-6">Premium Coconut Shell Charcoal Shisha Briquettes</td>
                        </tr>
                        <tr className="border-b border-zinc-800">
                          <td className="font-medium text-amber-500 py-3 px-6 bg-zinc-950">Production Capacity</td>
                          <td className="text-zinc-300 py-3 px-6">100 Tons / Month</td>
                        </tr>
                        <tr className="border-b border-zinc-800">
                          <td className="font-medium text-amber-500 py-3 px-6 bg-zinc-950">Quality Control Process</td>
                          <td className="text-zinc-300 py-3 px-6">Batch-wise inspection & export-grade quality standards</td>
                        </tr>
                        <tr className="border-b border-zinc-800">
                          <td className="font-medium text-amber-500 py-3 px-6 bg-zinc-950">Customization Options</td>
                          <td className="text-zinc-300 py-3 px-6">Shape, Size, Packaging, Branding</td>
                        </tr>
                        <tr className="border-b border-zinc-800">
                          <td className="font-medium text-amber-500 py-3 px-6 bg-zinc-950">Nearest Port</td>
                          <td className="text-zinc-300 py-3 px-6">VOC Port, Chennai Port</td>
                        </tr>
                        <tr>
                          <td className="font-medium text-amber-500 py-3 px-6 bg-zinc-950">Registered Business Number (GST)</td>
                          <td className="text-zinc-300 py-3 px-6">33AWGPV1234P1Z5</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div id="our-gallery" className="mb-16">
                <div className="inline-flex items-center space-x-2 bg-zinc-900/50 border border-amber-900/30 rounded-full px-4 py-2 mb-6">
                  <Image className="w-4 h-4 text-amber-600" />
                  <span className="text-amber-600 text-sm font-medium">Gallery</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-8">Our Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {galleryImages.map((image, index) => (
                    <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-amber-600 transition-all hover:shadow-lg hover:shadow-amber-600/20">
                      <img 
                        src={`/images/gallery/${image}`} 
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Partner With Us Section */}
              <div id="partner-with-us" className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-8">Partner With Us</h2>
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 space-y-6">
                  <p className="text-zinc-300 text-lg">We believe quality should be visible, not just promised.</p>
                  
                  <p className="text-zinc-300">When you place an order with us, production is managed in 100 kg quality-controlled batches. Each batch is monitored separately to help maintain consistency and traceability.</p>

                  <div>
                    <h3 className="text-xl font-semibold text-amber-500 mb-4">What You Receive</h3>
                    <ul className="text-zinc-300 space-y-2 list-disc list-inside">
                      <li>Dedicated customer login portal</li>
                      <li>Live or scheduled updates on production progress</li>
                      <li>Batch-wise quality records</li>
                      <li>Test results for each 100 kg batch</li>
                      <li>Shipment and packing status</li>
                      <li>Full transparency from production to dispatch</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-amber-500 mb-4">Why This Matters</h3>
                    <p className="text-zinc-300 mb-3">By producing in smaller controlled batches, we can ensure:</p>
                    <ul className="text-zinc-300 space-y-2 list-disc list-inside">
                      <li>Better consistency in every order</li>
                      <li>Easier quality verification</li>
                      <li>Clear accountability for each batch</li>
                      <li>Greater confidence for long-term buyers</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-amber-500 mb-3">Our Commitment</h3>
                    <p className="text-zinc-300">We don't just supply products—we build trusted partnerships through transparency, consistency, and communication.</p>
                  </div>

                  <div className="border-t border-zinc-800 pt-6">
                    <h3 className="text-xl font-semibold text-amber-500 mb-3">Ready to Work With Us?</h3>
                    <p className="text-zinc-300">Contact us today to discuss your requirements and receive access to our partner process.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
