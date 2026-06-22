import Seo from '../components/Seo';

export default function PrivacyPolicy() {
  const seo = {
    title: 'Privacy Policy - Abiman & Company',
    description: 'Privacy policy for Abiman & Company - how we collect and use personal data.',
  };

  return (
    <div className="bg-zinc-950 pt-24 pb-20 min-h-screen">
      <Seo {...seo} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-6">Privacy Policy</h1>
        <p className="text-zinc-400 mb-4">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">1. Purpose</h2>
          <p className="text-zinc-400 leading-relaxed">
            We collect and use personal information to respond to inquiries, process orders, and
            improve our services. This policy explains what data we collect, why, and how we protect it.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">2. Information We Collect</h2>
          <ul className="list-disc list-inside text-zinc-400">
            <li>Contact details (name, email, phone, company)</li>
            <li>Order details and shipping information</li>
            <li>Device and usage data (IP address, analytics, cookies)</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">3. How We Use Your Data</h2>
          <p className="text-zinc-400 leading-relaxed">
            We use data to respond to requests, fulfill orders, provide customer support, send
            transactional messages, and analyze site usage to improve performance and content.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">4. Sharing & Third Parties</h2>
          <p className="text-zinc-400 leading-relaxed">
            We do not sell personal data. We may share data with logistics partners, payment
            processors, or regulatory bodies when required to fulfill contracts or comply with law.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">5. Cookies & Tracking</h2>
          <p className="text-zinc-400 leading-relaxed">
            We use cookies and analytics to understand site usage. You can disable cookies in your
            browser, but some site functionality may be affected.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">6. Your Rights</h2>
          <p className="text-zinc-400 leading-relaxed">
            You may request access, correction, or deletion of your personal data. Contact us at
            info@abimanbriquettes.com to exercise your rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-2">7. Contact</h2>
          <p className="text-zinc-400">Email: info@abimanbriquettes.com</p>
        </section>
      </div>
    </div>
  );
}
