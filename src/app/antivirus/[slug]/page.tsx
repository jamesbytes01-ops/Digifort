import React from 'react';
import { getBrandBySlug, BRANDS_DATA } from '@/data/brands';
import { notFound } from 'next/navigation';
import { PlanCard } from '@/components/PlanCard';
import { FAQAccordion } from '@/components/FAQAccordion';
import { CallToActionBanner } from '@/components/CallToActionBanner';
import { BrandLogo } from '@/components/BrandLogo';
import { ShieldCheck, Phone, CheckCircle2, Star, Monitor, Laptop, Smartphone, Lock, Key, Cloud, Eye, Zap, Cpu, Award } from 'lucide-react';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BRANDS_DATA.map((brand) => ({
    slug: brand.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) return { title: 'Brand Not Found | DIGIFORT' };

  return {
    title: `${brand.name} Antivirus & Security Plans | DIGIFORT Marketplace`,
    description: `Compare official ${brand.name} security software plans. Real-time malware protection, VPN, cloud backup, and multi-device coverage with instant digital delivery.`,
  };
}

const getBenefitIcon = (iconName?: string, title?: string) => {
  const lowerTitle = (title || '').toLowerCase();
  if (iconName === 'Lock' || lowerTitle.includes('vpn') || lowerTitle.includes('privacy')) return Lock;
  if (iconName === 'Key' || lowerTitle.includes('password') || lowerTitle.includes('vault') || lowerTitle.includes('identity')) return Key;
  if (iconName === 'Cloud' || lowerTitle.includes('backup') || lowerTitle.includes('storage')) return Cloud;
  if (iconName === 'Eye' || lowerTitle.includes('phishing') || lowerTitle.includes('web') || lowerTitle.includes('cam')) return Eye;
  if (iconName === 'Zap' || lowerTitle.includes('performance') || lowerTitle.includes('speed') || lowerTitle.includes('optimization')) return Zap;
  if (iconName === 'Cpu' || lowerTitle.includes('ai') || lowerTitle.includes('malware') || lowerTitle.includes('threat')) return Cpu;
  return ShieldCheck;
};

const getBenefitColorClass = (idx: number) => {
  const classes = ['gold', 'blue', 'purple', 'green'];
  return classes[idx % classes.length];
};

export default async function BrandPage({ params }: PageProps) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) {
    notFound();
  }

  return (
    <div className="brand-landing-page">
      {/* BRAND HERO */}
      <section className="brand-hero">
        <div className="container brand-hero-grid">
          <div className="brand-hero-content">
            <div className="brand-pill">
              <BrandLogo slug={brand.slug} size={20} /> Official {brand.name} Digital Partner
            </div>
            <h1 className="brand-hero-title">{brand.heroHeadline}</h1>
            <p className="brand-hero-subheadline">{brand.heroSubheadline}</p>

            <div className="brand-hero-meta">
              <div className="meta-rating">
                <Star size={16} className="star-gold" />
                <span>{brand.rating} / 5.0</span>
                <span className="meta-count">({brand.reviewCount.toLocaleString()} Customer Reviews)</span>
              </div>
              <div className="meta-price">
                <span>Plans starting at <strong>${brand.startingPrice.toFixed(2)} / yr</strong></span>
              </div>
            </div>

            <div className="brand-hero-actions">
              <a href="#plans-section" className="btn btn-primary btn-lg">
                View {brand.name} Plans
              </a>
              <Link href="/contact" className="btn btn-secondary btn-lg">
                Contact Support Desk
              </Link>
            </div>
          </div>

          <div className="brand-hero-visual">
            <div className="card brand-visual-card">
              <div className="visual-badge-header">
                <BrandLogo slug={brand.slug} size={42} />
                <div>
                  <span className="visual-title">{brand.name} Cyber Security Suite</span>
                  <span className="visual-subtitle"><span className="pulse-dot" /> Live Active Shield</span>
                </div>
              </div>

              {/* RELATABLE SECURITY MODULE QUAD MATRIX */}
              <div className="brand-module-quad">
                {brand.keyBenefits.slice(0, 4).map((b, idx) => {
                  const BenefitIcon = getBenefitIcon(b.icon, b.title);
                  return (
                    <div key={idx} className="brand-module-item">
                      <div className="b-mod-header">
                        <div className={`b-mod-icon b-icon-${idx}`}>
                          <BenefitIcon size={16} />
                        </div>
                        <span className="b-mod-chip">Protected</span>
                      </div>
                      <span className="b-mod-title">{b.title}</span>
                    </div>
                  );
                })}
              </div>

              <div className="supported-os-box">
                <span className="os-box-label">Supported Operating Systems:</span>
                <div className="os-chips">
                  <span className="chip"><Monitor size={14} /> Windows 11/10</span>
                  <span className="chip"><Laptop size={14} /> macOS</span>
                  <span className="chip"><Smartphone size={14} /> Android</span>
                  <span className="chip"><Smartphone size={14} /> iOS</span>
                </div>
              </div>

              <div className="visual-checklist">
                <div className="v-check-item">
                  <CheckCircle2 size={16} className="green-check" /> 100% Genuine Publisher License Key
                </div>
                <div className="v-check-item">
                  <CheckCircle2 size={16} className="green-check" /> Direct Publisher Downloads & Auto-Updates
                </div>
                <div className="v-check-item">
                  <CheckCircle2 size={16} className="green-check" /> Instant Activation & Phone Setup Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE THIS BRAND / KEY BENEFITS */}
      <section className="section-padding benefits-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Key Advantages</span>
            <h2 className="section-title">Why Choose {brand.name} Protection?</h2>
            <p className="section-subtitle">
              Engineered with multi-layered threat intelligence to keep your data, bank credentials, and family safe.
            </p>
          </div>

          <div className="benefits-grid">
            {brand.keyBenefits.map((benefit, i) => {
              const BenefitIcon = getBenefitIcon(benefit.icon, benefit.title);
              const colorTheme = getBenefitColorClass(i);
              return (
                <div key={i} className="card benefit-card">
                  <div className="benefit-card-top">
                    <div className={`benefit-icon-box b-icon-${colorTheme}`}>
                      <BenefitIcon size={24} />
                    </div>
                    <span className={`benefit-chip chip-${colorTheme}`}>
                      {colorTheme === 'gold' ? 'Active Shield' : colorTheme === 'blue' ? 'Encrypted' : colorTheme === 'purple' ? 'Vault Protected' : 'Optimized'}
                    </span>
                  </div>
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-desc">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PLANS & PRICING */}
      <section id="plans-section" className="section-padding plans-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Plans & Pricing</span>
            <h2 className="section-title">Select Your {brand.name} License</h2>
            <p className="section-subtitle">
              Choose the coverage tier that matches your device count and security preferences.
            </p>
          </div>

          <div className="brand-plans-grid">
            {brand.products.flatMap((prod) =>
              prod.plans.map((plan) => (
                <PlanCard key={`${prod.id}-${plan.id}`} product={prod} plan={plan} />
              ))
            )}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="section-padding cta-section">
        <div className="container">
          <CallToActionBanner />
        </div>
      </section>

      {/* BRAND FAQ */}
      <section className="section-padding faq-section">
        <div className="container">
          <FAQAccordion
            items={brand.faqs}
            title={`${brand.name} Frequently Asked Questions`}
            subtitle={`Common questions regarding ${brand.name} licensing, installation, and renewals.`}
          />
        </div>
      </section>
    </div>
  );
}
