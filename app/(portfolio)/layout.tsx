import type { Metadata } from 'next';
import '@/app/globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Exo_2 as displayFont, Open_Sans as bodyFont } from 'next/font/google';

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

const RootLayout = ({
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
