import { RootLayout } from './root-layout';
import Footer from '@/components/Footer/footer';
import NavigationBar from '@/components/Header/dropdown-menu';
import { Meta, StoryObj } from '@storybook/react';
import { Card } from '@/ui/Card/card';

const meta: Meta<typeof RootLayout> = {
  title: 'Components/Layout/Root Layout',
  component: RootLayout,
  tags: ['autodocs'],
  argTypes: {
    header: { control: 'select' },
    footer: { control: 'select' },
    children: { control: 'select' },
  },
};

export default meta;

type Story = StoryObj<typeof RootLayout>;

export const Default: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  render: (args) => <RootLayout {...args}>{args.children}</RootLayout>,
  args: {
    header: <NavigationBar />,
    footer: <Footer />,
    children: (
      <Card color='solidPrimary' edge='sharp' width='full'>
        <div className='h-screen'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
          dignissimos iure molestiae laudantium nihil illum qui quibusdam ad
          dolores, unde inventore veniam, praesentium tempora sed eaque aperiam
          dolorum quos explicabo? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Porro corrupti quisquam deleniti nostrum, vel
          mollitia nam praesentium minima ex, in deserunt fuga necessitatibus
          architecto ratione eligendi harum, doloribus aliquid reiciendis. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Ipsam quod
          molestiae magni quos molestias earum maxime excepturi quo, libero
          natus velit qui voluptates rem ratione sint facere dolores expedita
          explicabo! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatum, voluptatem! Doloremque quidem repellat cumque quasi fugit
          deserunt sapiente quae magni, neque perferendis ad, aperiam possimus
          perspiciatis vitae animi excepturi eligendi!
        </div>
      </Card>
    ),
  },
};
