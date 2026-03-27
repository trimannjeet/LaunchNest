export default function PrivacyPage() {
  return (
    <section className="section-shell py-20">
      <div className="panel mx-auto max-w-4xl rounded-3xl p-8 sm:p-10">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em]" style={{ color: 'var(--primary)' }}>
          Privacy Policy
        </p>
        <h1 className="mb-6 text-4xl font-black" style={{ color: 'var(--foreground)' }}>
          Your data, handled responsibly
        </h1>
        <div className="space-y-4" style={{ color: 'var(--text)' }}>
          <p>LaunchNest uses contact and usage data only to deliver services, respond to queries, and improve experience.</p>
          <p>We do not sell your personal information. Access is limited to authorized team members and trusted tools needed to operate the platform.</p>
          <p>You may request updates or deletion of your data by contacting trimannjeet@gmail.com.</p>
          <p>Last updated: March 27, 2026.</p>
        </div>
      </div>
    </section>
  );
}
