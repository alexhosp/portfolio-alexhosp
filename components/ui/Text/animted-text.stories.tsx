import { AnimatedText } from './animated-text';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AnimatedText> = {
  component: AnimatedText,
  title: 'Components/Typography/Animated Text',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Text>;

export const HeroText: Story = {};
