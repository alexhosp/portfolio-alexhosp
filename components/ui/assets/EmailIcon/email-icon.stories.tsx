import { Meta, StoryObj } from '@storybook/react';
import EmailIcon from './email-icon';

const meta: Meta<typeof EmailIcon> = {
  title: 'Components/EmailIcon',
  component: EmailIcon,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof EmailIcon>;

export const Default: Story = {
  render: () => <EmailIcon />,
};
