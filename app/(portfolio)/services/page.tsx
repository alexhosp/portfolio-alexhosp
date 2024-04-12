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
import { SmallCTAButton } from '@/ui/Button/cta-button';
import { Prisma } from '@prisma/client';
import { ServiceModal } from '@/components/Modal/modal';

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
}

// define types

const ServicesPage = async () => {
  const servicesContent = await getServicesContent();

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
      <div className='grid grid-cols-1 gap-y-4 p-6'>
        {servicesContent
          .filter((service) => service.additionalInfo !== null) // Filter services with additionalInfo
          .sort((a, b) => {
            // Sort these filtered services
            const indexA = a.additionalInfo?.index || 0;
            const indexB = b.additionalInfo?.index || 0;
            return indexA - indexB;
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
            };

            if (additionalInfo.group === 'main') {
              cardStyles = {
                color: 'gradientPrimary',
                border: 'border-2 border-[var(--color-accent-soft)]',
                iconColor: 'text-[var(--color-accent)]',
              };
            }
            return (
              <Card
                key={service.id}
                edge='rounded'
                color={cardStyles.color}
                className={`${cardStyles.border} pt-2 `}
              >
                <CardHeader>
                  {safeIcon && (
                    <ServiceIcon icon={safeIcon} color={cardStyles.iconColor} />
                  )}
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className='px-0'>
                  <Text
                    as='p'
                    size='small'
                    textColor='muted'
                    className='leading-6'
                  >
                    {service.description}
                  </Text>
                </CardContent>
                <CardFooter>
                  {additionalInfo.group === 'main' ? (
                    <SmallCTAButton>{service.cta}</SmallCTAButton>
                  ) : (
                    <ServiceModal cta={service.cta} />
                  )}
                </CardFooter>
              </Card>
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
