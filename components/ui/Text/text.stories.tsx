import Text from './text';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'Components/Typography/Text',
  tags: ['autodocs'],
  argTypes: {
    as: {
      options: ['p', 'span'],
      control: { type: 'radio' },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Text>;

export const DefaultBodyText: Story = {
  render: (args) => (
    <Text as={args.as} size={args.size} textColor={args.textColor}>
      {args.children}
    </Text>
  ),
  args: {
    as: 'p',
    size: 'default',
    textColor: 'default',
    children: 'This is a default body paragraph, use for article text.',
  },
};

export const DefaultFeaturedText: Story = {
  render: (args) => (
    <Text as={args.as} size={args.size} textColor={args.textColor}>
      {args.children}
    </Text>
  ),
  args: {
    as: 'p',
    size: 'large',
    textColor: 'default',
    children:
      'This is a featured body paragraph, use for section text and for highlighing important article text.',
  },
};

export const HighlightFeaturedText: Story = {
  render: (args) => (
    <Text as={args.as} size={args.size} textColor={args.textColor}>
      {args.children}
    </Text>
  ),
  args: {
    as: 'p',
    size: 'large',
    textColor: 'accent',
    children:
      'This is a featured body paragraph, use for section text and for highlighing important article text.',
  },
};

export const DefaultMarkedText: Story = {
  render: (args) => (
    <Text as={args.as} size={args.size} textColor={args.textColor}>
      {args.children}
    </Text>
  ),
  args: {
    as: 'span',
    size: 'default',
    textColor: 'highlight',
    children: 'Keyword',
  },
};

export const FeaturedMarkedText: Story = {
  render: (args) => (
    <Text as={args.as} size={args.size} textColor={args.textColor}>
      {args.children}
    </Text>
  ),
  args: {
    as: 'span',
    size: 'large',
    textColor: 'highlight',
    children: 'Keyword',
  },
};
