import type { Meta, StoryObj } from '@storybook/react';
import GitHubIcon from './gh-icon';

const meta: Meta<typeof GitHubIcon> = {
  title: 'Components/GitHubIcon',
  component: GitHubIcon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Clicking this icon opens my GitHub profile in a new tab.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof GitHubIcon>;
export const Default: Story = {
  args: {},
};
