import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GitHubIcon from './gh-icon';

const meta: Meta<typeof GitHubIcon> = {
  title: 'Components/GitHubIcon',
  component: GitHubIcon,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof GitHubIcon>;
export const Default: Story = {
  args: {},
};
