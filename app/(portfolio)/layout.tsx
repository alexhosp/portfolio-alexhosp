import type { Metadata } from 'next';
import '@/app/globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Exo_2 as displayFont, Open_Sans as bodyFont } from 'next/font/google';
import { RootLayout } from '@/ui/Layout/root-layout';
import NavigationBar from '@/components/Header/dropdown-menu';
import Footer from '@/components/Footer/footer';

export const metadata: Metadata = {
  title: 'Alex Hosp Portfolio',
  description: 'developer portfolio website',
};

const exo2 = displayFont({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-exo2',
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
    <html lang='en' className={`${exo2.variable} ${openSans.variable}`}>
      <body className='bg-[var(--color-background)]'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <RootLayout header={<NavigationBar />} footer={<Footer />}>
            {children}
          </RootLayout>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default Layout;
