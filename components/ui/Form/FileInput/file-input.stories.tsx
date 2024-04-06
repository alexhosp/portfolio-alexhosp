import type { Meta, StoryObj } from '@storybook/react';
import { InputFile } from './file-input';
import { Open_Sans as opensans } from 'next/font/google';

const openSans = opensans({
  subsets: ['latin'],
  display: 'swap',
});

const meta: Meta<typeof InputFile> = {
  title: 'Components/Form/File Input',
  component: InputFile,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputFile>;

export const TwoTabs: Story = {
  render: () => <InputFile className={openSans.className} />,
};
