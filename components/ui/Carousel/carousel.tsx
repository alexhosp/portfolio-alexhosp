'use client';

import * as React from 'react';
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/ui/Button/button';

const TWEEN_FACTOR = 0.84;

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

interface CarouselProps {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: CarouselApi) => void;
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
}

// dot button hook
interface useDotButtonType {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
}

export const useDotButton = (api: CarouselApi): useDotButtonType => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const onDotButtonClick = React.useCallback(
    (index: number) => {
      if (!api) return;
      api.scrollTo(index);
      // turn the autoplay off here
    },
    [api],
  );

  const onInit = React.useCallback((api: CarouselApi) => {
    if (api) {
      setScrollSnaps(api.scrollSnapList());
    }
  }, []);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (api) {
      setSelectedIndex(api.selectedScrollSnap());
    }
  }, []);

  React.useEffect(() => {
    if (!api) return;

    onInit(api);
    onSelect(api);
    api.on('reInit', onInit);
    api.on('reInit', onSelect);
    api.on('select', onSelect);
  }, [api, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = 'horizontal',
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === 'horizontal' ? 'x' : 'y',
      },
      plugins,
    );

    // Use the hook to get data for dot buttons
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);

    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext],
    );

    const adjustSlideOpacity = React.useCallback(() => {
      if (!api) return;
      const slides = api.slideNodes();
      const scrollProgress = api.scrollProgress();

      slides.forEach((slide, index) => {
        const slideCenterPosition = api.scrollSnapList()[index];
        const distanceFromCenter = Math.abs(
          scrollProgress - slideCenterPosition,
        );

        const opacity = 1 - distanceFromCenter * TWEEN_FACTOR;
        if (slideCenterPosition) {
          slide.style.opacity = '1';
        }

        slide.style.opacity = opacity.toString();
      });
    }, [api]);

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on('reInit', onSelect);
      api.on('select', onSelect);

      return () => {
        api.off('select', onSelect);
      };
    }, [api, onSelect]);

    // adjust opacity of slides based on their position

    React.useEffect(() => {
      if (api) {
        adjustSlideOpacity();

        api.on('reInit', adjustSlideOpacity);
        api.on('select', adjustSlideOpacity);
        api.on('scroll', adjustSlideOpacity);

        return () => {
          api.off('reInit', adjustSlideOpacity);
          api.off('select', adjustSlideOpacity);
          api.off('scroll', adjustSlideOpacity);
        };
      }
    }, [api, adjustSlideOpacity]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation: opts?.axis === 'y' ? 'vertical' : 'horizontal',
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn('relative', className)}
          role='region'
          aria-roledescription='carousel'
          {...props}
        >
          {children}
          <div className='flex justify-center items-center mt-4 space-x-2'>
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                isSelected={index === selectedIndex}
                onClick={() => {
                  onDotButtonClick(index);
                }}
              >
                {/*  {index + 1} */}
              </DotButton>
            ))}
          </div>
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = 'Carousel';

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className='overflow-hidden'>
      <div
        ref={ref}
        className={cn(
          'flex',
          orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
          className,
        )}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = 'CarouselContent';

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role='group'
      aria-roledescription='slide'
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full cursor-pointer min-h-fit',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className,
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = 'CarouselItem';

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = 'ghost', size = 'icon', ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        'absolute top-1/2 left-4 z-10 translate-y-1/2 h-8 w-8 rounded-full',
        orientation === 'horizontal'
          ? '-left-3 top-1/2 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ChevronLeft className='h-11 w-11 text-[var(--color-foreground)]' />
      <span className='sr-only'>Previous slide</span>
    </Button>
  );
});
CarouselPrevious.displayName = 'CarouselPrevious';

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = 'ghost', size = 'icon', ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        'absolute z-10 h-8 w-8 rounded-full',
        orientation === 'horizontal'
          ? '-right-3 top-1/2 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ChevronRight className='h-11 w-11 text-[var(--color-foreground)]' />
      <span className='sr-only'>Next slide</span>
    </Button>
  );
});
CarouselNext.displayName = 'CarouselNext';

// dot button component

const DotButton: React.FC<{
  onClick: () => void;
  isSelected: boolean;
}> = ({ onClick, isSelected, ...props }) => {
  return (
    <div className='flex flex-row flex-wrap justify-center items-center'>
      <Button
        className={` p-0 my-8 rounded-full bg-[var(--color-detail)] h-4 w-4 ${
          isSelected ? 'bg-[var(--color-accent)]' : ''
        }`}
        type='button'
        onClick={onClick}
        {...props}
      ></Button>
    </div>
  );
};

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};

export const AutoplayCarousel: React.FC<{
  children: React.ReactNode;
  opts?: CarouselOptions;
  className?: string;
}> = ({ children, opts, className }) => {
  const autoplay = Autoplay;
  return (
    <Carousel
      plugins={[
        autoplay({
          playOnInit: true,
          delay: 4000,
          stopOnLastSnap: false,
        }),
      ]}
      opts={opts}
      className={className}
    >
      {children}
    </Carousel>
  );
};
