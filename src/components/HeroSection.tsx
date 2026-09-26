'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, ArrowRight, Laptop, Smartphone, Monitor, Lock, Shield, Cpu, Eye, Key } from 'lucide-react';
import { BRANDS_DATA } from '@/data/brands';
import { BrandLogo } from './BrandLogo';

export const HeroSection: React.FC = () => {
  const securityModules = [
    {
      id: 'malware',
      title: 'Malware & Ransomware Shield',
      tagline: 'Real-time AI threat detection',
      badge: 'Zero-Day Active',
      icon: Cpu,
      gradient: 'linear-gradient(135deg, #FEF3C7 0%, #FDE047 100%)',
      borderColor: '#FACC15',
      iconColor: '#854D0E',
    },
    {
      id: 'privacy',
      title: 'Encrypted Privacy & VPN',
      tagline: 'Bank-grade Wi-Fi encryption',
      badge: 'No-Log Network',
      icon: Lock,
      gradient: 'linear-gradient(135deg, #E0F2FE 0%, #38BDF8 100%)',
      borderColor: '#38BDF8',
      iconColor: '#0369A1',
    },
    {
      id: 'phishing',
      title: 'Phishing & Web Privacy',
      tagline: 'Blocks malicious URLs & trackers',
      badge: 'Web Shield',
      icon: Eye,
      gradient: 'linear-gradient(135deg, #DCFCE7 0%, #4ADE80 100%)',
      borderColor: '#4ADE80',
      iconColor: '#15803D',
    },
    {
      id: 'identity',
      title: 'Identity & Password Guard',
      tagline: 'Encrypted vault for credentials',
      badge: 'Vault Locked',
      icon: Key,
      gradient: 'linear-gradient(135deg, #F3E8FF 0%, #C084FC 100%)',
      borderColor: '#C084FC',
      iconColor: '#7E22CE',
    },
  ];

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

        {/* RIGHT COLUMN: PURE CYBERSECURITY THREAT MATRIX SHOWCASE (NON-PRICING) */}
        <div className="hero-visual">
          <div className="hero-visual-card">
            {/* TOP COMMAND BAR */}
            <div className="visual-top-bar">
              <div className="engine-status">
                <span className="pulse-green-dot" />
                <span className="engine-status-text">Digifort Cyber Defense Matrix</span>
              </div>
              <div className="encryption-pill">
                <ShieldCheck size={13} /> Active Protection
              </div>
            </div>

            {/* 2X2 SECURITY MODULES GRID */}
            <div className="hero-module-quad-grid">
              {securityModules.map((mod) => {
                const IconComp = mod.icon;
                return (
                  <div key={mod.id} className="quad-module-card">
                    <div className="quad-card-top">
                      <div
                        className="mod-icon-badge"
                        style={{
                          background: mod.gradient,
                          border: `1px solid ${mod.borderColor}`,
                        }}
                      >
                        <IconComp size={20} style={{ color: mod.iconColor }} />
                      </div>
                      <span className="mod-status-badge">{mod.badge}</span>
                    </div>

                    <h4 className="quad-mod-title">{mod.title}</h4>
                    <p className="quad-mod-desc">{mod.tagline}</p>

                    <div className="quad-mod-footer">
                      <span className="status-live-text"><CheckCircle2 size={12} /> Shielded</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* VERIFIED BRAND PARTNERS STRIP */}
            <div className="brand-partners-strip">
              <span className="strip-label">Official Publisher Engines:</span>
              <div className="strip-brand-logos">
                {BRANDS_DATA.map((b) => (
                  <div key={b.id} className="strip-logo-item" title={`${b.name} Security`}>
                    <BrandLogo slug={b.slug} size={26} />
                    <span className="strip-brand-name">{b.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* BOTTOM MULTI-DEVICE COVERAGE BAR */}
            <div className="visual-bottom-bar">
              <span className="os-label">Multi-Device Coverage:</span>
              <div className="os-icons-list">
                <span className="os-chip"><Monitor size={13} /> Windows</span>
                <span className="os-chip"><Laptop size={13} /> macOS</span>
                <span className="os-chip"><Smartphone size={13} /> Android / iOS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          background: linear-gradient(180deg, var(--bg-main) 0%, var(--bg-alt) 100%);
          display: flex;
          align-items: center;
          padding-top: 54px;
          padding-bottom: 64px;
          border-bottom: 1px solid var(--border-color);
          position: relative;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: flex-start;
        }

        .hero-content {
          margin-top: -16px;
        }

        @media (max-width: 992px) {
          .hero-section {
            padding-top: 36px;
            padding-bottom: 48px;
          }
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hero-content {
            margin-top: 0;
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
          margin-bottom: 14px;
        }

        .eyebrow-icon {
          color: var(--accent-gold-dark);
        }

        .hero-headline {
          font-size: 3.25rem;
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: var(--text-primary);
          margin-bottom: 24px;
        }

        .text-highlight {
          color: var(--navy-primary);
        }

        .hero-subtext {
          font-size: 1.15rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 40px;
          max-width: 600px;
        }

        @media (max-width: 768px) {
          .hero-headline {
            font-size: 2.25rem;
          }
          .hero-subtext {
            font-size: 1rem;
            margin-bottom: 32px;
          }
        }

        .hero-ctas {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
          margin-bottom: 44px;
        }

        .hero-trust-row {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          padding-top: 24px;
          border-top: 1px solid var(--border-color);
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .check-icon {
          color: var(--success-green);
        }

        /* HERO VISUAL SHOWCASE CARD */
        .hero-visual {
          position: relative;
        }

        .hero-visual-card {
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          box-shadow: 0 12px 40px rgba(15, 23, 42, 0.08);
          padding: 24px;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .visual-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .engine-status {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .pulse-green-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background-color: #22C55E;
          box-shadow: 0 0 10px #22C55E;
        }

        .engine-status-text {
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--navy-primary);
        }

        .encryption-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--success-green);
          background-color: var(--success-bg);
          padding: 4px 10px;
          border-radius: var(--radius-pill);
          border: 1px solid #A7F3D0;
        }

        .hero-module-quad-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        @media (max-width: 480px) {
          .hero-module-quad-grid {
            grid-template-columns: 1fr;
          }
        }

        .quad-module-card {
          display: flex;
          flex-direction: column;
          background-color: var(--bg-main);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 16px;
          transition: all 0.2s ease;
        }

        .quad-module-card:hover {
          background-color: #ffffff;
          border-color: var(--navy-primary);
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }

        .quad-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .mod-icon-badge {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mod-status-badge {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--navy-primary);
          background-color: #ffffff;
          padding: 2px 8px;
          border-radius: var(--radius-pill);
          border: 1px solid var(--border-subtle);
        }

        .quad-mod-title {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--navy-primary);
          margin-bottom: 4px;
          line-height: 1.25;
        }

        .quad-mod-desc {
          font-size: 0.78rem;
          color: var(--text-secondary);
          margin-bottom: 12px;
          line-height: 1.4;
        }

        .quad-mod-footer {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 8px;
          border-top: 1px solid var(--border-subtle);
        }

        .status-live-text {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--success-green);
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .brand-partners-strip {
          background-color: var(--bg-alt);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 12px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }

        .strip-label {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .strip-brand-logos {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .strip-logo-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .strip-brand-name {
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--navy-primary);
        }

        .visual-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 14px;
          border-top: 1px solid var(--border-subtle);
          flex-wrap: wrap;
          gap: 8px;
        }

        .os-label {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
        }

        .os-icons-list {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .os-chip {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--navy-primary);
          background-color: var(--bg-alt);
          padding: 3px 8px;
          border-radius: var(--radius-sm);
        }
      `}</style>
    </section>
  );
};
