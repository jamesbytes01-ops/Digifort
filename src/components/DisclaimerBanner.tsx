'use client';

import React from 'react';

export const DisclaimerBanner: React.FC = () => {
  return (
    <section className="disclaimer-standalone-section">
      <div className="container">
        <div className="standalone-disclaimer-card">
          <p className="disclaimer-text">
            GetDigiFort Digital Commerce PH is an independent digital commerce platform operated by DMB Transit Inc. and is not affiliated with, endorsed by, or sponsored by Webroot. Webroot and related names are trademarks of their respective owners and are referenced here for comparison purposes only.
          </p>
        </div>
      </div>

      <style jsx>{`
        .disclaimer-standalone-section {
          background-color: var(--bg-main, #FCFBF9);
          padding: 40px 0 24px 0;
        }

        .standalone-disclaimer-card {
          background-color: #ffffff;
          border: 1px solid #E2E8F0;
          border-left: 4px solid #0F172A;
          border-radius: 8px;
          padding: 22px 28px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
        }

        .disclaimer-text {
          font-size: 0.88rem;
          line-height: 1.6;
          color: #475569;
          margin: 0;
          font-weight: 400;
        }

        @media (max-width: 768px) {
          .disclaimer-standalone-section {
            padding: 24px 0 16px 0;
          }
          .standalone-disclaimer-card {
            padding: 16px 18px;
          }
          .disclaimer-text {
            font-size: 0.84rem;
            line-height: 1.55;
          }
        }
      `}</style>
    </section>
  );
};
