'use client';

import React from 'react';
import { DollarSign, Sliders, Zap, PhoneCall, Layers, ShieldCheck } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const valueProps = [
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'Clear, upfront annual pricing with no hidden checkout fees or deceptive recurring traps.'
    },
    {
      icon: Sliders,
      title: 'Side-by-Side Comparison',
      description: 'Filter and compare features, VPN limits, and ransomware protections across major brands.'
    },
    {
      icon: Zap,
      title: 'Digital Delivery',
      description: 'Receive your authentic product license keys and official installation instructions digitally.'
    },
    {
      icon: PhoneCall,
      title: 'Customer Assistance',
      description: 'Speak directly with our security specialists by phone to resolve questions before licensing.'
    },
    {
      icon: Layers,
      title: 'Multi-Device Coverage',
      description: 'Know exactly whether your plan protects 1 PC, 3 PCs, or up to 5 multi-OS devices.'
    },
    {
      icon: ShieldCheck,
      title: 'Secure Checkout',
      description: 'Shop with full confidence backed by 256-bit SSL encryption and strict privacy safeguards.'
    }
  ];

  return (
    <section className="section-padding trust-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Why Choose Digifort</span>
          <h2 className="section-title">The Independent Marketplace Built for Digital Security</h2>
          <p className="section-subtitle">
            We simplify software selection with clear data, objective brand comparisons, and accessible human phone support.
          </p>
        </div>

        <div className="trust-grid">
          {valueProps.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="card card-hover trust-card">
                <div className="trust-icon-box">
                  <IconComponent size={22} className="trust-icon" />
                </div>
                <h3 className="trust-card-title">{item.title}</h3>
                <p className="trust-card-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .trust-section {
          background-color: var(--bg-surface);
          border-bottom: 1px solid var(--border-color);
        }

        .trust-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        @media (max-width: 992px) {
          .trust-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .trust-grid {
            grid-template-columns: 1fr;
          }
        }

        .trust-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 28px;
        }

        .trust-icon-box {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background-color: var(--bg-alt);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }

        .trust-icon {
          color: var(--navy-primary);
        }

        .trust-card-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }

        .trust-card-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};
