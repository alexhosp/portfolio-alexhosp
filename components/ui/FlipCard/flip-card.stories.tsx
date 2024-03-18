import { FlipCard } from './flip-card';
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
    <div className='flex flex-col gap-4'>
      <FlipCard {...args}></FlipCard>
      <FlipCard {...args}></FlipCard>
      <FlipCard {...args}></FlipCard>
      <FlipCard {...args}></FlipCard>
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
    flipCardColor: 'solidBackground',
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
