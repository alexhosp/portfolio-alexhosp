import type { Metadata } from 'next';
import '@/app/globals.css';
import {
  Space_Grotesk as displayFont,
  Open_Sans as bodyFont,
} from 'next/font/google';
import { RootLayout } from '@/ui/Layout/root-layout';
import NavigationBar from '@/components/Header/dropdown-menu';
import Footer from '@/components/Footer/footer';
import dynamic from 'next/dynamic';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleTagManager } from '@next/third-parties/google';
import { WebVitals } from '@/components/analytics/web-vitals';

const ThemeProvider = dynamic(
  () => import('@/components/ThemeProvider/theme-provider'),
  { ssr: false },
);

// this will be shown on Google!
export const metadata: Metadata = {
  title: 'Alex Hosp - Data Driven Web Development ',
  description:
    'Performant websites, web applications and prototypes that scale.',
};

const spaceGrotesk = displayFont({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const openSans = bodyFont({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='en' className={`${spaceGrotesk.variable} ${openSans.variable}`}>
      <GoogleTagManager gtmId='GTM-KLTDTBZ8' />
      <body className='bg-[var(--color-background)]'>
        <ThemeProvider>
          <RootLayout header={<NavigationBar />} footer={<Footer />}>
            {children}
          </RootLayout>
          <WebVitals />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default Layout;
