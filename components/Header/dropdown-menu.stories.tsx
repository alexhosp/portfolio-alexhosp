import NavigationBar from './dropdown-menu';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'next-themes';

const meta: Meta<typeof NavigationBar> = {
  title: 'Components/Navigation/Header',
  component: NavigationBar,
  tags: ['autodocs'],
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
};

export default meta;

type Story = StoryObj<typeof NavigationBar>;

export const Default: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  render: () => <NavigationBar />,
};
