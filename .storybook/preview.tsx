import type { Preview, ReactRenderer } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import '../app/globals.css';
import React from 'react';
import {
  Space_Grotesk as displayFont,
  Open_Sans as bodyFont,
} from 'next/font/google';

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

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    (Story) => (
      <div className={`${spaceGrotesk.variable} ${openSans.variable}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
