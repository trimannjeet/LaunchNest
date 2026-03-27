'use client';

import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { useState } from 'react';

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'trimannjeet@gmail.com',
    href: 'mailto:trimannjeet@gmail.com',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+91 87278 22337',
    href: 'tel:+918727822337',
  },
  {
    icon: FiMapPin,
    label: 'Address',
    value: 'Moga, Punjab, India',
    href: 'https://maps.google.com/?q=Moga,+Punjab,+India',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('Thank you. Your message was sent successfully.');
        setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
      } else {
        setSubmitMessage('Could not send your message. Please try again.');
      }
    } catch {
      setSubmitMessage('Could not send your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pb-16">
      <section className="section-shell py-14 sm:py-18">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em]" style={{ color: 'var(--primary)' }}>
            Contact LaunchNest
          </p>
          <h1 className="text-5xl font-black sm:text-6xl" style={{ color: 'var(--foreground)' }}>
            Let&apos;s Build Something Real
          </h1>
          <p className="mt-4 text-lg" style={{ color: 'var(--muted)' }}>
            Share your startup stage and goals. You&apos;ll get a practical next-step plan.
          </p>
        </motion.div>
      </section>

      <section className="section-shell">
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.aside
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === 'Address' ? '_blank' : undefined}
                  rel={item.label === 'Address' ? 'noreferrer' : undefined}
                  className="panel block rounded-2xl p-5 transition-all duration-300 hover:translate-y-[-2px]"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl p-3 panel-muted">
                      <Icon style={{ color: 'var(--primary)' }} size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: 'var(--muted)' }}>
                        {item.label}
                      </p>
                      <p className="mt-1 text-xl font-semibold" style={{ color: 'var(--foreground)' }}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}

            <div className="panel rounded-2xl p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: 'var(--muted)' }}>
                Availability
              </p>
              <p className="mt-2 text-base" style={{ color: 'var(--text)' }}>
                Monday to Saturday, 10:00 AM to 7:00 PM IST.
              </p>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="panel rounded-3xl p-6 sm:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold" style={{ color: 'var(--foreground)' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border px-4 py-3 text-sm"
                  style={{
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)',
                    backgroundColor: 'color-mix(in srgb, var(--surface-2) 92%, transparent)',
                  }}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold" style={{ color: 'var(--foreground)' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border px-4 py-3 text-sm"
                    style={{
                      borderColor: 'var(--border)',
                      color: 'var(--foreground)',
                      backgroundColor: 'color-mix(in srgb, var(--surface-2) 92%, transparent)',
                    }}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold" style={{ color: 'var(--foreground)' }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91"
                    className="w-full rounded-xl border px-4 py-3 text-sm"
                    style={{
                      borderColor: 'var(--border)',
                      color: 'var(--foreground)',
                      backgroundColor: 'color-mix(in srgb, var(--surface-2) 92%, transparent)',
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold" style={{ color: 'var(--foreground)' }}>
                    Company / Startup
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Startup name"
                    className="w-full rounded-xl border px-4 py-3 text-sm"
                    style={{
                      borderColor: 'var(--border)',
                      color: 'var(--foreground)',
                      backgroundColor: 'color-mix(in srgb, var(--surface-2) 92%, transparent)',
                    }}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold" style={{ color: 'var(--foreground)' }}>
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border px-4 py-3 text-sm"
                    style={{
                      borderColor: 'var(--border)',
                      color: 'var(--foreground)',
                      backgroundColor: 'color-mix(in srgb, var(--surface-2) 92%, transparent)',
                    }}
                  >
                    <option value="">Select a subject</option>
                    <option value="launch-plan">Launch Plan</option>
                    <option value="website">Website / Product Build</option>
                    <option value="branding">Branding / Content</option>
                    <option value="growth">Growth / Marketing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold" style={{ color: 'var(--foreground)' }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us what you are building and where you need help."
                  className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                  style={{
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)',
                    backgroundColor: 'color-mix(in srgb, var(--surface-2) 92%, transparent)',
                  }}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full justify-center py-3 disabled:opacity-60"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <FiSend />
              </motion.button>

              {submitMessage && (
                <p className="rounded-xl border p-3 text-sm" style={{ borderColor: 'var(--border)', color: 'var(--text)' }}>
                  {submitMessage}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
