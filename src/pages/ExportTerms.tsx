import Seo from '../components/Seo';

export default function ExportTerms() {
  const seo = {
    title: 'Export Terms - Abiman & Company',
    description: 'Export and shipping terms for Abiman & Company products.',
  };

  return (
    <div className="bg-zinc-950 pt-24 pb-20 min-h-screen">
      <Seo {...seo} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-6">Export Terms</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">Export Compliance</h2>
          <p className="text-zinc-400 leading-relaxed">
            Buyers are responsible for ensuring that imported goods comply with local laws and
            regulations. Abiman & Company will provide standard export documentation where required.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">Minimum Order & Packaging</h2>
          <p className="text-zinc-400 leading-relaxed">
            Minimum order quantities apply (20ft container standard). Packaging, labeling, and
            palletization options are available; contact sales for custom requirements.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">Shipping & Insurance</h2>
          <p className="text-zinc-400 leading-relaxed">
            Shipping terms (Incoterms) are agreed at contracting. Buyers are responsible for
            insurance, customs clearance, duties, and taxes unless otherwise agreed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-2">Documentation</h2>
          <p className="text-zinc-400 leading-relaxed">
            We can provide Certificate of Origin, Phytosanitary certificates, SDS, and other export
            documents on request.
          </p>
        </section>
      </div>
    </div>
  );
}
