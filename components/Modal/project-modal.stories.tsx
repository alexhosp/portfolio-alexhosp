import { ProjectModal } from './modal';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProjectModal> = {
  component: ProjectModal,
  title: 'Components/Dialog/ProjectModal',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof ProjectModal>;

export const DefaultProjectModal: Story = {
  render: (args) => <ProjectModal {...args} />,
  args: {
    dialogTitle: 'Project Name',
    bulletPoints: [
      'gateway to my work',
      'focus on robust design system and branding',
      'modular architecture for scalability',
      'optimized for mobile and screen readers',
      'built to evolve based on user data ',
    ],
    ctaName: 'Open Quick Insights',

    imageUrl: '',
    imageAlt: 'product image of the project',
    dialogCtaData: [
      {
        name: 'Open Quick Insights',
        link: '',
      },
    ],
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
