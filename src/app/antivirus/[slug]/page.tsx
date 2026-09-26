import React from 'react';
import { getBrandBySlug, BRANDS_DATA } from '@/data/brands';
import { notFound } from 'next/navigation';
import { PlanCard } from '@/components/PlanCard';
import { FAQAccordion } from '@/components/FAQAccordion';
import { CallToActionBanner } from '@/components/CallToActionBanner';
import { ShieldCheck, Phone, CheckCircle2, Star, Monitor, Laptop, Smartphone } from 'lucide-react';
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
              <ShieldCheck size={16} /> Official {brand.name} Digital Reseller Partner
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
                <ShieldCheck size={28} className="visual-shield" />
                <div>
                  <span className="visual-title">{brand.name} Protection Suite</span>
                  <span className="visual-subtitle">Instant Activation Included</span>
                </div>
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
                  <CheckCircle2 size={16} className="green-check" /> 100% Genuine Digital License Key
                </div>
                <div className="v-check-item">
                  <CheckCircle2 size={16} className="green-check" /> Direct Publisher Downloads & Updates
                </div>
                <div className="v-check-item">
                  <CheckCircle2 size={16} className="green-check" /> 30-Day Money-Back Guarantee
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
              Engineered with advanced threat intelligence to keep your data, bank credentials, and family safe.
            </p>
          </div>

          <div className="benefits-grid">
            {brand.keyBenefits.map((benefit, i) => (
              <div key={i} className="card benefit-card">
                <div className="benefit-icon-box">
                  <ShieldCheck size={24} className="b-icon" />
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-desc">{benefit.description}</p>
              </div>
            ))}
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
