import { FlipCard } from './flip-card';
import { StaggeredAnimationWrapper } from '@/ui/util/animation-wrapper';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FlipCard> = {
  component: FlipCard,
  title: 'Components/Card/Flip Card',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof FlipCard>;

export const FAQCard: Story = {
  render: (args) => <FlipCard {...args}></FlipCard>,
  args: {
    frontContent: {
      title: 'Why should I invest in a custom website?',
    },
    backContent: {
      title:
        'Because your brand is as unique as your users and your website needs to adapt to their evolving needs.',
      description:
        'A custom website stands out from the competition and can easily be transformed into an entire platform evolving with user and business needs. It’s more cost-effective in the long term, as adding additional features remains easy and intuitive rather than adding complexity to a system initially designed to be generic.',
      cta: 'Learn More',
      ctaLink: '/services',
    },
    flipCardColor: 'solidBackground',
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export const SetOfFAQCards: Story = {
  render: (args) => (
    <div className='grid grid-cols-1 grid-rows-4 gap-y-4 md:grid-cols-2 md:grid-rows-2'>
      <FlipCard flipCardColor='gradientPrimary' {...args}></FlipCard>
      <FlipCard flipCardColor='solidDetail' {...args}></FlipCard>
      <FlipCard flipCardColor='gradientSecondary' {...args}></FlipCard>
      <FlipCard flipCardColor='solidPrimary' {...args}></FlipCard>
    </div>
  ),

  args: {
    frontContent: {
      title: 'Why should I invest in a custom website?',
    },
    backContent: {
      title:
        'Because your brand is as unique as your users and your website needs to adapt to their evolving needs.',
      description:
        'A custom website stands out from the competition and can easily be transformed into an entire platform evolving with user and business needs. It’s more cost-effective in the long term, as adding additional features remains easy and intuitive rather than adding complexity to a system initially designed to be generic.',
      cta: 'Learn More',
      ctaLink: '/services',
    },
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export const AnimatedSetOfFlipCards: Story = {
  render: (args) => (
    <>
      <div className='h-[100vh]'>Scroll down to see the animation... </div>
      <StaggeredAnimationWrapper className='grid grid-cols-1 grid-rows-4 gap-y-4 md:grid-cols-2 md:grid-rows-2'>
        <FlipCard flipCardColor='gradientSecondary' {...args}></FlipCard>
        <FlipCard flipCardColor='solidPrimary' {...args}></FlipCard>
      </StaggeredAnimationWrapper>
    </>
  ),
  args: {
    frontContent: {
      title: 'Why should I invest in a custom website?',
    },
    backContent: {
      title:
        'Because your brand is as unique as your users and your website needs to adapt to their evolving needs.',
      description:
        'A custom website stands out from the competition and can easily be transformed into an entire platform evolving with user and business needs. It’s more cost-effective in the long term, as adding additional features remains easy and intuitive rather than adding complexity to a system initially designed to be generic.',
      cta: 'Learn More',
      ctaLink: '/services',
    },
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
