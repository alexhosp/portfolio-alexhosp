import { Heading } from './heading';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Heading> = {
  component: Heading,
  title: 'Components/Heading',
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'Heading',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Heading>;

export const DefaultH1: Story = {
  render: (args) => (
    <Heading as={args.as} size={args.size} color={args.color}>
      {args.children}
    </Heading>
  ),
  args: {
    as: 'h1',
    size: 'h1Default',
    color: 'default',
    children: 'Default H1',
  },
};

export const HeroH1: Story = {
  render: (args) => (
    <Heading as={args.as} size={args.size} color={args.color}>
      {args.children}
    </Heading>
  ),
  args: {
    as: 'h1',
    size: 'h1Accent',
    color: 'h1accent',
    children: 'Accent H1',
  },
};

export const DefaultH2: Story = {
  render: (args) => (
    <Heading as={args.as} size={args.size} color={args.color}>
      {args.children}
    </Heading>
  ),
  args: {
    as: 'h2',
    size: 'h2Default',
    color: 'default',
    children: 'Default H2',
  },
};

export const BigH2: Story = {
  render: (args) => (
    <Heading as={args.as} size={args.size} color={args.color}>
      {args.children}
    </Heading>
  ),
  args: {
    as: 'h2',
    size: 'h2Big',
    color: 'default',
    children: 'Big H2, only for pages without H1!',
  },
};

export const AccentH2Big: Story = {
  render: (args) => (
    <Heading as={args.as} size={args.size} color={args.color}>
      {args.children}
    </Heading>
  ),
  args: {
    as: 'h2',
    size: 'h2Big',
    color: 'h2accent',
    children: 'Big H2, only for pages without H1!',
  },
};

export const AccentH2Default: Story = {
  render: (args) => (
    <Heading as={args.as} size={args.size} color={args.color}>
      {args.children}
    </Heading>
  ),
  args: {
    as: 'h2',
    size: 'h2Default',
    color: 'h2accent',
    children: 'Accent H2',
  },
};

export const AccentH2Small: Story = {
  render: (args) => (
    <Heading as={args.as} size={args.size} color={args.color}>
      {args.children}
    </Heading>
  ),
  args: {
    as: 'h2',
    size: 'h2Small',
    color: 'h2accent',
    children: 'Small Accent H2',
  },
};

export const GradientAccentH2Default: Story = {
  render: (args) => (
    <Heading as={args.as} size={args.size} color={args.color}>
      {args.children}
    </Heading>
  ),
  args: {
    as: 'h2',
    size: 'h2Default',
    color: 'h2accentgradient',
    children: 'Gradient Accent H2',
  },
};

export const DefaultH3: Story = {
  render: (args) => (
    <Heading as={args.as} size={args.size} color={args.color}>
      {args.children}
    </Heading>
  ),
  args: {
    as: 'h3',
    size: 'h3Default',
    color: 'lighter',
    children: 'Default H3',
  },
};

export const AccentH3: Story = {
  render: (args) => (
    <Heading as={args.as} size={args.size} color={args.color}>
      {args.children}
    </Heading>
  ),
  args: {
    as: 'h3',
    size: 'h3Default',
    color: 'default',
    children: 'Accent H3',
  },
};
