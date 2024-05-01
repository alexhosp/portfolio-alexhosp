import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/ui/Collapsible/collapsible';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Collapsible> = {
  component: Collapsible,
  title: 'Components/Collapsible',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Collapsible>;

const servicesList = [
  'SaaS: An online tool providing your users with functionality, usually subscription-based',
  'Customer Portal: An application allowing your users to make bookings and access other interactive resources',
  ' E-Commerce: An online shop that makes it easy for your users to purchase your products or services',
  'Dashboard: A dashboard for you and your team that helps you access data and automate common tasks in your business',
];

export const ServicesCollapsible: Story = {
  render: () => (
    <Collapsible>
      <CollapsibleTrigger triggerTitle='Solutions I Build' />
      <CollapsibleContent listItems={servicesList}></CollapsibleContent>
    </Collapsible>
  ),
};
