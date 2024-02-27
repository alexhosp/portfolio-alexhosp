import { Meta, StoryObj } from '@storybook/react';
import { HeroSVG } from './hero-svg';

const meta: Meta<typeof HeroSVG> = {
  title: 'Components/HeroSVG',
  component: HeroSVG,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof HeroSVG>;

export const DefaultSVG: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
