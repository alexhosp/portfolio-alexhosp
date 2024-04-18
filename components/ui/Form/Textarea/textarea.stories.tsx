import { Textarea } from './textarea';
import { Meta, StoryObj } from '@storybook/react';

import { Open_Sans as opensans } from 'next/font/google';

const openSans = opensans({
  subsets: ['latin'],
  display: 'swap',
});

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: 'Components/Form/Textarea',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const DefaultTextarea: Story = {
  render: () => <Textarea className={openSans.className} />,
};
