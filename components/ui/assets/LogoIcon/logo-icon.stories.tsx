import { Meta, StoryObj } from '@storybook/react';
import LogoIcon from './logo-icon';

const meta: Meta<typeof LogoIcon> = {
  component: LogoIcon,
  title: 'Components/LogoIcon',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof LogoIcon>;

export const Basic: Story = {
  args: {},
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export const ScrollToTop: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  render: () => (
    <div style={{ height: '80vh', padding: '20px' }}>
      <p>Scroll down to see the Scroll-to-Top button</p>
      <div style={{ marginTop: '50vh' }}>
        <LogoIcon />
      </div>
    </div>
  ),
};
