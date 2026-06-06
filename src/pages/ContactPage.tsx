import Seo from '../components/Seo';

export default function ContactPage() {
  const keywords = [
    'coconut shell charcoal',
    'coconut shell charcoal manufacturers',
    'coconut shell charcoal briquettes',
    'shisha briquettes',
    'hookah charcoal',
  ];

  const seo = {
    title: 'Contact Abiman & Company — Coconut Shell Charcoal Suppliers',
    description: 'Contact Abiman & Company for samples, bulk quotations, OEM and export inquiries for coconut shell charcoal briquettes.',
    keywords,
    url: typeof window !== 'undefined' ? `${window.location.origin}/contact` : undefined,
  };
  return (
    <div className="bg-zinc-950 pt-20">
      <Seo {...seo} />
      <section className="py-20 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-zinc-400">Reach out for samples, quotes, OEM info or general inquiries.</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-white font-bold mb-2">Email</h3>
                <p className="text-zinc-400 mb-4">info@abimanbriquettes.com</p>

                <h3 className="text-white font-bold mb-2">Phone</h3>
                <p className="text-zinc-400 mb-4">+91 8300596735</p>

                <h3 className="text-white font-bold mb-2">Address</h3>
                <p className="text-zinc-400">SF No 1358/5, Madakkalli<br />Periyamadhiyagudalore (PO), Chinnadharapuram (Via)<br />Aravakurichi (TK), Karur - 639202<br />Tamil Nadu, India</p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-2">Request a Sample</h3>
                <p className="text-zinc-400 mb-4">Use this placeholder form to request sample packs — backend integration will be added later.</p>
                <form className="space-y-3">
                  <input className="w-full p-3 rounded-lg bg-zinc-950 border border-zinc-800 text-white" placeholder="Your name" />
                  <input className="w-full p-3 rounded-lg bg-zinc-950 border border-zinc-800 text-white" placeholder="Company / Organization" />
                  <input className="w-full p-3 rounded-lg bg-zinc-950 border border-zinc-800 text-white" placeholder="Email" />
                  <input className="w-full p-3 rounded-lg bg-zinc-950 border border-zinc-800 text-white" placeholder="Phone" />
                  <textarea className="w-full p-3 rounded-lg bg-zinc-950 border border-zinc-800 text-white" placeholder="Message" />
                  <button type="button" className="bg-amber-600 text-white px-6 py-3 rounded-lg">Send Request</button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
