import { MotionHeading } from '@/ui/Heading/heading';
import { getServicesContent } from '@/lib/data';
import { sanitizeHTML } from '@/lib/auth';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/ui/Card/card';
import Text from '@/ui/Text/text';
import { SmallCTAButton, CTAButton } from '@/ui/Button/cta-button';
import { Prisma } from '@prisma/client';
import { ServiceModal } from '@/components/Modal/modal';
import { JsonValue } from '@prisma/client/runtime/library';
import Link from 'next/link';
import { CardItemAnimationWrapper } from '@/components/ui/util/animation-wrapper';

interface Service {
  id: number;
  icon?: string | null;
  title: string;
  description?: string | null;
  cta?: string | null;
  additionalInfo?: JsonValue | null;
  imageUrl?: string | null;
  imageAlt?: string | null;
  fullDescription?: string | null;
  ctaLink?: string | null;
}

interface CardStyles {
  color:
    | 'gradientPrimary'
    | 'gradientSecondary'
    | 'gradientGrayPrimary'
    | 'gradientGrayDetail'
    | 'solidPrimary'
    | 'solidBackground'
    | 'solidDetail'
    | undefined;
  border: string | undefined;
  iconColor?: string | undefined;
  gridClass: string;
}

// define types

const ServicesPage = async () => {
  const servicesContent: Service[] = await getServicesContent();

  return (
    <>
      <div className='md:mt-12'>
        <MotionHeading
          as='h2'
          color='default'
          size='h2Small'
          text='Services.'
          spanText='What I Do.'
        ></MotionHeading>
      </div>
      <div className='grid grid-cols-1 gap-y-4 p-6 md:grid-cols-12 mx-auto md:px-8 lg:px-16 md:gap-x-6'>
        {servicesContent
          .filter((service) => service.additionalInfo !== null) // Filter services with additionalInfo
          .sort((a, b) => {
            // Sort these filtered services
            const indexA = (a.additionalInfo as Prisma.JsonObject).index;
            const indexB = (b.additionalInfo as Prisma.JsonObject).index;

            const numIndexA = typeof indexA === 'number' ? indexA : 0;
            const numIndexB = typeof indexB === 'number' ? indexB : 0;
            return numIndexA - numIndexB;
          })
          .map((service) => {
            // Map to render Cards
            const additionalInfo = service.additionalInfo as Prisma.JsonObject;
            const safeIcon =
              typeof service.icon === 'string'
                ? sanitizeHTML(service.icon)
                : undefined;

            let cardStyles: CardStyles = {
              color: 'solidBackground',
              border: 'border-2 border-[var(--color-primary)]',
              iconColor: 'text-[var(--color-foreground)]',
              gridClass: 'col-span-5',
            };

            if (additionalInfo.group === 'main') {
              cardStyles = {
                color: 'gradientPrimary',
                border: 'border-2 border-[var(--color-accent-soft)]',
                iconColor: 'text-[var(--color-accent)]',
                gridClass: 'col-span-7',
              };
            }
            const urlSlug = service.title.toLowerCase().replace(/\s+/g, '_'); // Replace spaces with underscores
            const serviceUrl = `/services/${urlSlug}`;

            return (
              <CardItemAnimationWrapper
                key={service.id}
                className={cardStyles.gridClass}
                animate='scaleUp'
              >
                <Card
                  edge='rounded'
                  color={cardStyles.color}
                  className={`${cardStyles.border} ${cardStyles.gridClass} pt-2 `}
                >
                  <CardHeader>
                    {safeIcon && (
                      <ServiceIcon
                        icon={safeIcon}
                        color={cardStyles.iconColor}
                      />
                    )}
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className='px-0 md:my-1.5'>
                    <Text
                      as='p'
                      size='small'
                      textColor='muted'
                      className='leading-6 md:hidden'
                    >
                      {service.description}
                    </Text>
                    <Text
                      as='p'
                      size='large'
                      textColor='muted'
                      className='hidden md:flex'
                    >
                      {service.description}
                    </Text>
                  </CardContent>
                  <CardFooter>
                    <Link href={serviceUrl}>
                      <SmallCTAButton className='md:hidden'>
                        {service.cta}
                      </SmallCTAButton>
                      <CTAButton className='hidden md:flex !text-lg'>
                        {service.cta}
                      </CTAButton>
                    </Link>
                  </CardFooter>
                </Card>
              </CardItemAnimationWrapper>
            );
          })}
      </div>
    </>
  );
};
export default ServicesPage;

export const ServiceIcon: React.FC<{ icon: string; color?: string }> = ({
  icon,
  color,
}) => {
  return (
    <div
      className={`${color} flex place-content-center`}
      dangerouslySetInnerHTML={{ __html: icon }}
    />
  );
};
