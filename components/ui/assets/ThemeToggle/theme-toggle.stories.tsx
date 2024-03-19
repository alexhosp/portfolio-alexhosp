// ModeToggle.stories.jsx
import React from 'react';
import { ModeToggle } from './theme-toggle';
import { ThemeProvider } from 'next-themes';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof ModeToggle> = {
  title: 'Components/ModeToggle',
  component: ModeToggle,
  decorators: [
    (Story) => (
      <ThemeProvider
        enableSystem={true}
        attribute='class'
        defaultTheme='system'
        disableTransitionOnChange
      >
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof ModeToggle>;

export const Default: Story = {};
