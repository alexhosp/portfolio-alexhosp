import React from 'react';
import { Card } from './card';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Components/Card',
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      defaultValue:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis labore optio, beatae voluptas ab quos, cupiditate tenetur quisquam provident, soluta explicabo assumenda recusandae voluptatibus dolore repellendus laboriosam ducimus porro! Ullam.',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const DefaultCard: Story = {
  render: (args) => (
    <Card color={args.color} edge={args.edge} width={args.width}>
      {args.children}
    </Card>
  ),
  args: {
    color: 'solidBackground',
    edge: 'sharp',
    width: 'full',
    children:
      'Use this card for seamless integration with the UI, for lower-priority content or for prominent content.',
  },
};

export const PrimaryCardSharp: Story = {
  render: (args) => (
    <Card color={args.color} edge={args.edge} width={args.width}>
      {args.children}
    </Card>
  ),
  args: {
    color: 'solidPrimary',
    edge: 'sharp',
    width: 'full',
    children:
      'Use this card for key information and actions and to build a visual hierarchy of content.',
  },
};

export const PrimaryCardRoundedFull: Story = {
  render: (args) => (
    <Card color={args.color} edge={args.edge} width={args.width}>
      {args.children}
    </Card>
  ),
  args: {
    color: 'solidPrimary',
    edge: 'rounded',
    width: 'full',
    children:
      'Use this card for key information and actions and to build a visual hierarchy of content. Make sure to add margins or grid gap in the parent container.',
  },
};

export const PrimaryCardRoundedHalf: Story = {
  render: (args) => (
    <Card color={args.color} edge={args.edge} width={args.width}>
      {args.children}
    </Card>
  ),
  args: {
    color: 'solidPrimary',
    edge: 'rounded',
    width: 'half',
    children:
      'Use this card for key information and actions and to build a visual hierarchy of content. Make sure to add margins or grid gap in the parent container.',
  },
};

export const PrimaryCardRoundedThird: Story = {
  render: (args) => (
    <Card color={args.color} edge={args.edge} width={args.width}>
      {args.children}
    </Card>
  ),
  args: {
    color: 'solidPrimary',
    edge: 'rounded',
    width: 'third',
    children:
      'Use this card for key information and actions and to build a visual hierarchy of content. Make sure to add margins or grid gap in the parent container.',
  },
};

export const LightHighlightCardRoundedFull: Story = {
  render: (args) => (
    <Card color={args.color} edge={args.edge} width={args.width}>
      {args.children}
    </Card>
  ),
  args: {
    color: 'gradientPrimary',
    edge: 'rounded',
    width: 'full',
    children:
      'Use this card for interactive elements and key information, use for data visualizations and as background for forms. Make sure to add a transparent background to elements text elements used with it to ensure legibility.',
  },
};

export const LightHighlightCardRoundedHalf: Story = {
  render: (args) => (
    <Card color={args.color} edge={args.edge} width={args.width}>
      {args.children}
    </Card>
  ),
  args: {
    color: 'gradientPrimary',
    edge: 'rounded',
    width: 'half',
    children:
      'Use this card for key information and actions and to build a visual hierarchy of content. Make sure to add margins or grid gap in the parent container.',
  },
};

export const LightHighlightCardRoundedThird: Story = {
  render: (args) => (
    <Card color={args.color} edge={args.edge} width={args.width}>
      {args.children}
    </Card>
  ),
  args: {
    color: 'gradientPrimary',
    edge: 'rounded',
    width: 'third',
    children:
      'Use this card for interactive elements and key information, use for data visualizations and as background for forms. Make sure to add a transparent background to elements text elements used with it to ensure legibility.',
  },
};

export const LightHighlightCardSharpFull: Story = {
  render: (args) => (
    <Card color={args.color} edge={args.edge} width={args.width}>
      {args.children}
    </Card>
  ),
  args: {
    color: 'gradientPrimary',
    edge: 'sharp',
    width: 'full',
    children:
      'Use this card for interactive elements and key information, use for data visualizations and as background for forms. Make sure to add a transparent background to elements text elements used with it to ensure legibility.',
  },
};

export const DarkHighlightCardRoundedFull: Story = {
  render: (args) => (
    <Card color={args.color} edge={args.edge} width={args.width}>
      {args.children}
    </Card>
  ),
  args: {
    color: 'gradientSecondary',
    edge: 'rounded',
    width: 'full',
    children:
      'Use this card to highlight especially urgent information or to communicate a sense of high quality, can be used for presentation of services, projects or media galleries.',
  },
};

export const DarkHighlightCardRoundedHalf: Story = {
  render: (args) => (
    <Card color={args.color} edge={args.edge} width={args.width}>
      {args.children}
    </Card>
  ),
  args: {
    color: 'gradientSecondary',
    edge: 'rounded',
    width: 'half',
    children:
      'Use this card to highlight especially urgent information or to communicate a sense of high quality, can be used for presentation of services, projects or media galleries.',
  },
};

export const DarkHighlightCardRoundedThird: Story = {
  render: (args) => (
    <Card color={args.color} edge={args.edge} width={args.width}>
      {args.children}
    </Card>
  ),
  args: {
    color: 'gradientSecondary',
    edge: 'rounded',
    width: 'third',
    children:
      'Use this card to highlight especially urgent information or to communicate a sense of high quality, can be used for presentation of services, projects or media galleries.',
  },
};

export const DarkHighlightCardSharpFull: Story = {
  render: (args) => (
    <Card color={args.color} edge={args.edge} width={args.width}>
      {args.children}
    </Card>
  ),
  args: {
    color: 'gradientSecondary',
    edge: 'sharp',
    width: 'full',
    children:
      'Use this card to highlight especially urgent information or to communicate a sense of high quality, can be used for presentation of services, projects or media galleries.',
  },
};
