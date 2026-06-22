import Seo from '../components/Seo';

export default function TermsOfService() {
  const seo = {
    title: 'Terms of Service - Abiman & Company',
    description: 'Terms of service for Abiman & Company - ordering, payment, and liability.',
  };

  return (
    <div className="bg-zinc-950 pt-24 pb-20 min-h-screen">
      <Seo {...seo} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-6">Terms of Service</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">Acceptance of Terms</h2>
          <p className="text-zinc-400 leading-relaxed">
            By placing an order or using our services, you agree to these Terms of Service.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">Orders & Pricing</h2>
          <p className="text-zinc-400 leading-relaxed">
            Orders are subject to minimum quantities and acceptance by Abiman & Company. Prices are
            confirmed at time of order confirmation. We reserve the right to correct pricing errors.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">Payment & Delivery</h2>
          <p className="text-zinc-400 leading-relaxed">
            Payment terms will be provided on the proforma invoice. Shipping lead times depend on
            order quantity and destination; buyers are responsible for customs, duties, and taxes.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">Warranties & Liability</h2>
          <p className="text-zinc-400 leading-relaxed">
            Products are supplied in accordance with agreed specifications. Liability is limited to
            replacement or refund for proven manufacturing defects. We are not liable for indirect
            or consequential losses.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">Intellectual Property</h2>
          <p className="text-zinc-400 leading-relaxed">
            All content on this site is owned by or licensed to Abiman & Company. Reproduction is
            prohibited without prior written consent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-2">Governing Law</h2>
          <p className="text-zinc-400">These terms are governed by the laws of the Republic of India.</p>
        </section>
      </div>
    </div>
  );
}
