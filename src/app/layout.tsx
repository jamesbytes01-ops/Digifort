import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ToastNotification } from '@/components/ToastNotification';

export const metadata: Metadata = {
  title: 'DIGIFORT | Digital Antivirus & Security Software Marketplace',
  description: 'Compare and license top antivirus protection plans from Norton, McAfee, Bitdefender, and Webroot with transparent pricing and instant digital delivery.',
  keywords: 'antivirus marketplace, compare antivirus plans, Norton, McAfee, Bitdefender, Webroot, digital license keys, device security',
  openGraph: {
    title: 'DIGIFORT | Digital Security Marketplace',
    description: 'Find and compare top antivirus protection for Windows, Mac, iOS & Android.',
    url: 'https://shop.getdigifort.com',
    siteName: 'DIGIFORT',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main style={{ minHeight: '80vh' }}>{children}</main>
          <Footer />
          <ToastNotification />
        </CartProvider>
      </body>
    </html>
  );
}
