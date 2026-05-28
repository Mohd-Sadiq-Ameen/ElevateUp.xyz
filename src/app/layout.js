import { Inter, Playfair_Display, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-geist-sans', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-geist-serif', display: 'swap' });
const poppins = Poppins({ weight: ['400','500','600','700'], subsets: ['latin'], variable: '--font-poppins' });

export const metadata = {
  metadataBase: new URL('https://www.elevateup.xyz'),
  title: {
    default: 'ElevateUp | Growth Agency for Entrepreneurs',
    template: '%s | ElevateUp',
  },
  description: 'Websites • Video Editing • Content • Marketing • AI Automation. Helping businesses get more customers with proven growth strategies. Get your free business growth roadmap.',
  keywords: 'business growth, marketing agency, AI automation, video editing, content marketing, websites for entrepreneurs',
  authors: [{ name: 'ElevateUp' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.elevateup.xyz',
    siteName: 'ElevateUp',
    title: 'ElevateUp - Get More Customers for Your Business',
    description: 'Websites • Video Editing • Content • Marketing • AI Automation.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'ElevateUp Agency' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ElevateUp - Get More Customers for Your Business',
    description: 'Websites • Video Editing • Content • Marketing • AI Automation.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${poppins.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}