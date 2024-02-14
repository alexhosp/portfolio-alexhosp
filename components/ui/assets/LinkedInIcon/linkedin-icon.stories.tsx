import { Meta, StoryObj } from '@storybook/react';
import LinkednIcon from './linkedin-icon';

const meta: Meta<typeof LinkednIcon> = {
  title: 'Components/LinkedIcon',
  component: LinkednIcon,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LinkednIcon>;

export const Default: Story = {
  render: () => <LinkednIcon />,
};
