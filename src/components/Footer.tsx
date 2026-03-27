'use client';

import Link from 'next/link';
import { FiInstagram, FiLinkedin, FiMail, FiMapPin, FiPhone, FiTwitter } from 'react-icons/fi';
import BrandMark from './BrandMark';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Posts', href: '/posts' },
  { label: 'Contact', href: '/contact' },
];

const serviceLinks = [
  'Idea Validation',
  'Product Development',
  'Brand and Content',
  'Go To Market',
];

const socialLinks = [
  { label: 'Instagram', icon: FiInstagram, href: '#' },
  { label: 'Twitter', icon: FiTwitter, href: '#' },
  { label: 'LinkedIn', icon: FiLinkedin, href: '#' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="mt-16 border-t"
      style={{
        borderColor: 'var(--border)',
        background:
          'linear-gradient(180deg, color-mix(in srgb, var(--surface) 85%, transparent) 0%, color-mix(in srgb, var(--surface-2) 90%, transparent) 100%)',
      }}
    >
      <div className="section-shell py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="mb-4 flex items-center gap-3">
              <BrandMark />
              <div>
                <p className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>
                  LaunchNest
                </p>
                <p className="text-xs uppercase tracking-[0.18em]" style={{ color: 'var(--muted)' }}>
                  Startup Execution
                </p>
              </div>
            </div>
            <p className="max-w-sm text-sm" style={{ color: 'var(--text)' }}>
              We help founders design, build, and launch high quality startup systems with speed and strategic clarity.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--primary)' }}>
              Explore
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors hover:text-[var(--primary)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--primary)' }}>
              Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((item) => (
                <li key={item} className="text-sm" style={{ color: 'var(--text)' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--primary)' }}>
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <FiMail className="mt-0.5" />
                <a href="mailto:trimannjeet@gmail.com" className="transition-colors hover:text-[var(--primary)]">
                  trimannjeet@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <FiPhone className="mt-0.5" />
                <a href="tel:+918727822337" className="transition-colors hover:text-[var(--primary)]">
                  +91 87278 22337
                </a>
              </li>
              <li className="flex items-start gap-2">
                <FiMapPin className="mt-0.5" />
                <span>Moga, Punjab, India</span>
              </li>
            </ul>

            <div className="mt-5 flex gap-2">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="rounded-lg border p-2 transition-all duration-200 hover:scale-105"
                    style={{
                      borderColor: 'var(--border)',
                      backgroundColor: 'color-mix(in srgb, var(--surface-2) 90%, transparent)',
                      color: 'var(--primary)',
                    }}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t pt-6 text-sm sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}>
          <p>(c) {currentYear} LaunchNest. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy" className="transition-colors hover:text-[var(--primary)]">
              Privacy
            </a>
            <a href="/terms" className="transition-colors hover:text-[var(--primary)]">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

