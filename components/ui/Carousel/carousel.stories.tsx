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
      {...args}
      plugins={[
        autoplay({
          playOnInit: true,
          delay: 3000,
          stopOnLastSnap: true,
        }),
      ]}
      opts={args.opts}
    >
      <CarouselContent className='flex'>
        <CarouselItem className='basis-10/12 flex flex-grow'>
          <Card color='solidPrimary' className='min-h-[50vh]'>
            <CardTitle>Web Application Development</CardTitle>
            <div className='bg-[var(--color-background)]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              temporibus non hic eos, vero quam quae laboriosam reprehenderit,
              illo esse perspiciatis quo quas. Animi odio laudantium beatae
              molestias dolor dolores.
            </div>
          </Card>
        </CarouselItem>
        <CarouselItem className='basis-10/12 flex flex-grow'>
          <Card color='gradientPrimary'>
            <CardTitle>Website Development</CardTitle>
          </Card>
        </CarouselItem>
        <CarouselItem className='basis-10/12 flex flex-grow'>
          <Card color='solidPrimary'>
            <CardTitle>Prototype Development</CardTitle>
          </Card>
        </CarouselItem>
        <CarouselItem className='basis-10/12 flex flex-grow'>
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
      loop: false,
      align: 'center',
      containScroll: false,
    },
  },
};
