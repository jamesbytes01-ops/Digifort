'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Phone, CheckCircle2, ArrowRight, Laptop, Smartphone, Monitor, Lock } from 'lucide-react';
import { BRANDS_DATA } from '@/data/brands';

export const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        {/* LEFT COLUMN: HEADLINE & CTAS */}
        <div className="hero-content">
          <div className="hero-eyebrow-pill">
            <ShieldCheck size={16} className="eyebrow-icon" />
            <span>Digital Security Marketplace</span>
          </div>

          <h1 className="hero-headline">
            Find the right protection for <span className="text-highlight">every device.</span>
          </h1>

          <p className="hero-subtext">
            Compare trusted antivirus & security plans side-by-side. Understand device limits, feature coverage, and transparent annual pricing before licensing with instant digital delivery.
          </p>

          <div className="hero-ctas">
            <Link href="/compare/antivirus" className="btn btn-primary btn-lg">
              Compare Antivirus Plans <ArrowRight size={18} />
            </Link>
            <Link href="/antivirus" className="btn btn-secondary btn-lg">
              Browse All Products
            </Link>
          </div>

          {/* QUICK HERO TRUST BADGES */}
          <div className="hero-trust-row">
            <div className="trust-item">
              <CheckCircle2 size={16} className="check-icon" />
              <span>Verified Genuine Digital Licenses</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={16} className="check-icon" />
              <span>Transparent Pricing</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={16} className="check-icon" />
              <span>24/7 Digital Helpdesk</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: SOPHISTICATED COMPARISON WIDGET ILLUSTRATION */}
        <div className="hero-visual">
          <div className="widget-card-stack">
            <div className="widget-header-bar">
              <div className="widget-header-title">
                <Lock size={14} className="widget-lock" />
                <span>Security Plan Comparison Engine</span>
              </div>
              <div className="widget-device-icons">
                <Monitor size={14} title="Windows PC" />
                <Laptop size={14} title="macOS" />
                <Smartphone size={14} title="Mobile" />
              </div>
            </div>

            <div className="widget-brands-list">
              {BRANDS_DATA.map((brand, idx) => (
                <div key={brand.id} className={`widget-brand-row ${idx === 1 ? 'featured' : ''}`}>
                  <div className="widget-brand-info">
                    <span className="widget-brand-name">{brand.name}</span>
                    <span className="widget-brand-device">{brand.products[0]?.plans[0]?.deviceLabel || 'Multi-Device'}</span>
                  </div>

                  <div className="widget-brand-features">
                    <span className="feat-chip">Real-time Shield</span>
                    <span className="feat-chip">VPN</span>
                  </div>

                  <div className="widget-brand-pricing">
                    <span className="widget-price">${brand.startingPrice.toFixed(2)}</span>
                    <span className="widget-period">/yr</span>
                  </div>

                  <Link href={`/antivirus/${brand.slug}`} className="widget-view-btn">
                    View
                  </Link>
                </div>
              ))}
            </div>

            <div className="widget-footer-bar">
              <span className="widget-footer-text">Showing 4 major antivirus brands • Updated 2026</span>
              <Link href="/compare/antivirus" className="widget-footer-link">
                Full Comparison Table →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          background-color: var(--bg-main);
          padding-top: 64px;
          padding-bottom: 72px;
          border-bottom: 1px solid var(--border-subtle);
          position: relative;
          overflow: hidden;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 48px;
          align-items: center;
        }

        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .hero-eyebrow-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background-color: var(--accent-gold-light);
          border: 1px solid var(--accent-gold-border);
          border-radius: var(--radius-pill);
          color: var(--accent-gold-dark);
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 20px;
        }

        .eyebrow-icon {
          color: var(--accent-gold-dark);
        }

        .hero-headline {
          font-size: 3.1rem;
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: var(--text-primary);
          margin-bottom: 18px;
        }

        .text-highlight {
          color: var(--navy-primary);
          position: relative;
        }

        .hero-subtext {
          font-size: 1.15rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 32px;
          max-width: 620px;
        }

        @media (max-width: 768px) {
          .hero-headline {
            font-size: 2.2rem;
          }
          .hero-subtext {
            font-size: 1rem;
          }
        }

        .hero-ctas {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }

        .hero-phone-btn {
          border-color: var(--border-color);
        }

        .phone-icon-gold {
          color: var(--accent-gold);
        }

        .hero-trust-row {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          padding-top: 20px;
          border-top: 1px solid var(--border-color);
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .check-icon {
          color: var(--success-green);
        }

        /* Hero Visual Widget Card Stack */
        .hero-visual {
          position: relative;
        }

        .widget-card-stack {
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          padding: 20px;
          position: relative;
        }

        .widget-header-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 16px;
        }

        .widget-header-title {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--navy-primary);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .widget-lock {
          color: var(--accent-gold);
        }

        .widget-device-icons {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-muted);
        }

        .widget-brands-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .widget-brand-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 14px;
          border-radius: var(--radius-md);
          background-color: var(--bg-alt);
          border: 1px solid var(--border-subtle);
          transition: border-color 0.2s;
        }

        .widget-brand-row.featured {
          background-color: #ffffff;
          border: 1.5px solid var(--navy-primary);
          box-shadow: var(--shadow-sm);
        }

        .widget-brand-info {
          display: flex;
          flex-direction: column;
        }

        .widget-brand-name {
          font-weight: 800;
          font-size: 0.95rem;
          color: var(--navy-primary);
        }

        .widget-brand-device {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .widget-brand-features {
          display: flex;
          gap: 6px;
        }

        @media (max-width: 480px) {
          .widget-brand-features {
            display: none;
          }
        }

        .feat-chip {
          font-size: 0.7rem;
          font-weight: 600;
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          padding: 2px 8px;
          border-radius: var(--radius-pill);
          color: var(--text-secondary);
        }

        .widget-brand-pricing {
          text-align: right;
        }

        .widget-price {
          font-weight: 700;
          font-size: 1rem;
          color: var(--navy-primary);
        }

        .widget-period {
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        .widget-view-btn {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--navy-primary);
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          transition: all 0.15s;
        }

        .widget-view-btn:hover {
          background-color: var(--navy-primary);
          color: #ffffff;
        }

        .widget-footer-bar {
          margin-top: 16px;
          padding-top: 12px;
          border-top: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.78rem;
        }

        .widget-footer-text {
          color: var(--text-muted);
        }

        .widget-footer-link {
          color: var(--accent-gold-dark);
          font-weight: 700;
        }
      `}</style>
    </section>
  );
};
