import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './carousel';
import { Card, CardTitle } from '@/ui/Card/card';
import { Meta, StoryObj } from '@storybook/react';
import Autoplay from 'embla-carousel-autoplay';

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  title: 'Components/Carousel',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Carousel>;
const autoplay = Autoplay;

export const DefaultCarousel: Story = {
  render: (args) => (
    <Carousel
      className='max-w-screen m-auto'
      {...args}
      plugins={[
        autoplay({
          playOnInit: true,
          delay: 4000,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem className='basis-10/12'>
          <Card color='solidPrimary'>
            <CardTitle>Web Application Development</CardTitle>
          </Card>
        </CarouselItem>
        <CarouselItem className='basis-10/12'>
          <Card color='solidPrimary'>
            <CardTitle>Website Development</CardTitle>
          </Card>
        </CarouselItem>
        <CarouselItem className='basis-10/12'>
          <Card color='solidPrimary'>
            <CardTitle>Prototype Development</CardTitle>
          </Card>
        </CarouselItem>
        <CarouselItem className='basis-10/12'>
          <Card color='solidPrimary'>
            <CardTitle>Consultation</CardTitle>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
  args: {
    opts: {
      loop: true,
      align: 'center',
      containScroll: 'trimSnaps',
    },
  },
};
