'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Phone, Mail, MapPin, Lock, CheckCircle2 } from 'lucide-react';
import { BRANDS_DATA } from '@/data/brands';
import { DigifortLogo } from './DigifortLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* COLUMN 1: BRAND INFO */}
          <div className="footer-col footer-brand-col">
            <Link href="/" className="footer-logo-link" aria-label="Digifort Home">
              <DigifortLogo size="md" variant="light" showSubtitle={true} />
            </Link>

            <p className="footer-desc">
              DIGIFORT is an independent digital security software marketplace. We help consumers compare, select, and acquire authentic antivirus and multi-device protection plans with guaranteed digital delivery and expert customer assistance.
            </p>

            <div className="footer-contact-list">
              <a href="mailto:support@getdigifort.com" className="footer-contact-item">
                <Mail size={16} className="contact-icon" />
                <span>support@getdigifort.com</span>
              </a>
              <div className="footer-contact-item">
                <MapPin size={16} className="contact-icon" />
                <span>100 Enterprise Way, Suite 400, Austin, TX 78701</span>
              </div>
            </div>
          </div>

          {/* COLUMN 2: ANTIVIRUS BRANDS */}
          <div className="footer-col">
            <h4 className="footer-col-title">Antivirus Brands</h4>
            <ul className="footer-links">
              {BRANDS_DATA.map((brand) => (
                <li key={brand.id}>
                  <Link href={`/antivirus/${brand.slug}`}>{brand.name} Security</Link>
                </li>
              ))}
              <li>
                <Link href="/antivirus">All Antivirus Products</Link>
              </li>
              <li>
                <Link href="/compare/antivirus">Side-by-Side Comparison</Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: COMPANY */}
          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links">
              <li>
                <Link href="/about">About Digifort</Link>
              </li>
              <li>
                <Link href="/contact">Contact Support</Link>
              </li>
              <li>
                <Link href="/faq">Frequently Asked Questions</Link>
              </li>
              <li>
                <Link href="/compare/antivirus">Compare Security Plans</Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: POLICIES & TRUST */}
          <div className="footer-col">
            <h4 className="footer-col-title">Policies & Trust</h4>
            <ul className="footer-links">
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link href="/refund-policy">Refund & Cancellation Policy</Link>
              </li>
              <li>
                <Link href="/disclaimer">Reseller & Brand Disclaimer</Link>
              </li>
            </ul>

            <div className="footer-trust-box">
              <div className="trust-box-header">
                <Lock size={15} className="trust-icon" />
                <span>256-Bit SSL Encryption</span>
              </div>
              <p className="trust-box-text">All transactions and digital key deliveries are processed over encrypted security protocols.</p>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">
          <div className="copyright-text">
            © {new Date().getFullYear()} DIGIFORT. All rights reserved.
          </div>

          <div className="payment-badges">
            <span className="payment-badge">Visa</span>
            <span className="payment-badge">Mastercard</span>
            <span className="payment-badge">Amex</span>
            <span className="payment-badge">PayPal</span>
            <span className="payment-badge">Apple Pay</span>
            <span className="payment-badge ssl-badge">
              <CheckCircle2 size={12} /> SSL Verified
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          background-color: var(--navy-primary);
          color: #94A3B8;
          padding-top: 64px;
          padding-bottom: 32px;
          border-top: 1px solid #1E293B;
          margin-top: auto;
        }

        .footer-top-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.25fr;
          gap: 40px;
          margin-bottom: 48px;
        }

        @media (max-width: 992px) {
          .footer-top-grid {
            grid-template-columns: 1fr 1fr;
          }
          .footer-brand-col {
            grid-column: span 2;
          }
        }

        @media (max-width: 600px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
          }
          .footer-brand-col {
            grid-column: span 1;
          }
        }

        .footer-logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }

        .footer-logo-icon {
          width: 36px;
          height: 36px;
          background-color: var(--accent-gold);
          color: #ffffff;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-logo-title {
          display: block;
          font-size: 1.2rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.01em;
          line-height: 1;
        }

        .footer-logo-subtitle {
          display: block;
          font-size: 0.62rem;
          font-weight: 700;
          color: var(--accent-gold);
          letter-spacing: 0.08em;
          margin-top: 2px;
        }

        .footer-desc {
          font-size: 0.9rem;
          line-height: 1.6;
          color: #CBD5E1;
          margin-bottom: 20px;
          max-width: 440px;
        }

        .footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.88rem;
          color: #E2E8F0;
          transition: color 0.2s;
        }

        a.footer-contact-item:hover {
          color: var(--accent-gold);
        }

        .contact-icon {
          color: var(--accent-gold);
          flex-shrink: 0;
        }

        .footer-col-title {
          color: #ffffff;
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 18px;
          letter-spacing: -0.01em;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-links a {
          font-size: 0.9rem;
          color: #CBD5E1;
          transition: color 0.2s;
        }

        .footer-links a:hover {
          color: #ffffff;
        }

        .footer-trust-box {
          margin-top: 24px;
          background-color: #1E293B;
          border: 1px solid #334155;
          border-radius: var(--radius-md);
          padding: 14px;
        }

        .trust-box-header {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .trust-icon {
          color: var(--success-green);
        }

        .trust-box-text {
          font-size: 0.78rem;
          color: #94A3B8;
          line-height: 1.4;
        }

        .footer-bottom {
          padding-top: 24px;
          border-top: 1px solid #1E293B;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        .copyright-text {
          font-size: 0.85rem;
          color: #94A3B8;
        }

        .payment-badges {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .payment-badge {
          background-color: #1E293B;
          border: 1px solid #334155;
          color: #E2E8F0;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .ssl-badge {
          background-color: rgba(16, 185, 129, 0.1);
          color: var(--success-green);
          border-color: rgba(16, 185, 129, 0.3);
        }
      `}</style>
    </footer>
  );
};
