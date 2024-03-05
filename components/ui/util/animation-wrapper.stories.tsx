import { CardItemAnimationWrapper } from './animation-wrapper';
import { Meta, StoryObj } from '@storybook/react';
import { GradientCTAButton, CTAButton } from '../Button/cta-button';

const meta: Meta<typeof CardItemAnimationWrapper> = {
  component: CardItemAnimationWrapper,
  title: 'Components/Layout/Motion',
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'select' },
  },
};
export default meta;

type Story = StoryObj<typeof CardItemAnimationWrapper>;

export const FadeInHeading: Story = {
  render: (args) => (
    <>
      <div className='h-screen'>Scroll down to see the animation.</div>
      <CardItemAnimationWrapper {...args}>
        {args.children}
      </CardItemAnimationWrapper>
    </>
  ),
  args: {
    animate: 'fadeIn',
    children: (
      <h1 className='font-display font-black text-[var(--color-accent)]'>
        Hello World
      </h1>
    ),
  },
};

export const ScaleDownMedia: Story = {
  render: (args) => (
    <>
      <div className='h-screen'>Scroll down to see the animation.</div>
      <CardItemAnimationWrapper {...args}>
        {args.children}
      </CardItemAnimationWrapper>
    </>
  ),
  args: {
    animate: 'scaleDown',
    children: <img src='/avatar-blue-circle.png' alt='avatar' />,
  },
};

export const FloatUpText: Story = {
  render: (args) => (
    <>
      <div className='h-screen'>Scroll down to see the animation.</div>
      <CardItemAnimationWrapper {...args}>
        {args.children}
      </CardItemAnimationWrapper>
    </>
  ),
  args: {
    animate: 'floatUp',
    children: (
      <div className='bg-[var(--color-background)] p-4'>
        <p className='text-body tracking-wide text-semibold text-[var(--color-foreground)]'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
          ullam aliquid corrupti neque unde sequi obcaecati reprehenderit,
          excepturi suscipit iusto maxime eveniet perferendis. Dignissimos,
          saepe. Laboriosam voluptas hic obcaecati vel.
        </p>
      </div>
    ),
  },
};

export const ScaleUpTextButton: Story = {
  render: (args) => (
    <>
      <div className='h-screen'>Scroll down to see the animation.</div>
      <CardItemAnimationWrapper {...args}>
        {args.children}
      </CardItemAnimationWrapper>
    </>
  ),
  args: {
    animate: 'scaleUp',
    children: <GradientCTAButton>Learn More</GradientCTAButton>,
  },
};

export const ScaleUpButton: Story = {
  render: (args) => (
    <>
      <div className='h-screen'>Scroll down to see the animation.</div>
      <CardItemAnimationWrapper {...args}>
        {args.children}
      </CardItemAnimationWrapper>
    </>
  ),
  args: {
    animate: 'scaleUp',
    children: <CTAButton>About Me</CTAButton>,
  },
};
