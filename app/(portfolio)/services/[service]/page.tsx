import { getServicesContent } from '@/lib/data';
import { MotionHeading } from '@/ui/Heading/heading';
import { Card, CardContent } from '@/ui/Card/card';
import { ServiceIcon } from '@/ui/assets/ServiceIcon/service-icon';
import { Prisma } from '@prisma/client';
import { CardItemAnimationWrapper } from '@/ui/util/animation-wrapper';
import Text from '@/ui/Text/text';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/ui/Collapsible/collapsible';

const ServicePage = async ({ params }: { params: { service: string } }) => {
  const services = await getServicesContent();

  // Normalize the URL parameter to match the title format expected in the services data
  const normalizedParam = params.service.replace(/_/g, ' ');

  const normalizedParamCapitalized = normalizedParam
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' '); // Capitalize first letter of each word

  // Find the service with a matching title
  const serviceToDisplay = services.find(
    (service) => service.title === normalizedParamCapitalized,
  );

  const additionalInfo = serviceToDisplay?.additionalInfo as Prisma.JsonObject;

  const descriptionArray = serviceToDisplay?.fullDescription?.split('|');

  // Check if a service was found
  if (!serviceToDisplay) {
    return <div>Service not found.</div>; // Display this if no matching service is found
  }

  return (
    <>
      <CardItemAnimationWrapper
        animate='scaleUp'
        className='flex place-content-center pb-2 md:mt-16'
      >
        <ServiceIcon
          icon={serviceToDisplay.icon ? serviceToDisplay.icon : undefined}
        />
      </CardItemAnimationWrapper>
      <div className='md:mt-12'>
        <MotionHeading
          as='h2'
          color='h1accent'
          size='h2Small'
          text={serviceToDisplay.title}
        ></MotionHeading>
      </div>
      <div className='md:mx-auto md:max-w-screen-lg'>
        <Card className='pb-1 py-1'>
          <CardContent className='md:my-1.5 pb-0 w-screen'>
            <CardItemAnimationWrapper animate='floatUp'>
              <Text
                as='p'
                size='small'
                textColor='muted'
                className='leading-6 md:hidden mb-2'
              >
                {descriptionArray?.[0] && descriptionArray[0]}
              </Text>
              <Text
                as='p'
                size='large'
                textColor='muted'
                className='hidden md:flex md:mb-8 md:mt-7 lg:max-w-[60%] lg:mx-auto'
              >
                {descriptionArray?.[0] && descriptionArray[0]}
              </Text>
            </CardItemAnimationWrapper>
          </CardContent>
        </Card>
        <Card className='py-1 lg:m-4'>
          <CardContent className='w-screen'>
            <CardItemAnimationWrapper
              animate='fadeIn'
              className='lg:flex lg:items-center'
            >
              <Collapsible className='lg:w-[150rem] lg:mx-auto'>
                <div className='flex justify-center lg:mb-2'>
                  <CollapsibleTrigger
                    triggerTitle={descriptionArray?.[1] && descriptionArray[1]}
                  />
                </div>
                <CollapsibleContent
                  listItems={additionalInfo.examples as string[]}
                  className='lg:max-w-[60%] lg:mx-auto'
                />
              </Collapsible>
            </CardItemAnimationWrapper>
          </CardContent>
        </Card>
        <Card className='py-1 lg:m-4'>
          <CardContent className='w-screen'>
            <CardItemAnimationWrapper
              animate='fadeIn'
              className='lg:flex lg:items-center'
            >
              <Collapsible className='lg:w-[150rem] lg:mx-auto'>
                <div className='flex justify-center lg:mb-2'>
                  <CollapsibleTrigger
                    triggerTitle={descriptionArray?.[2] && descriptionArray[2]}
                  />
                </div>
                <CollapsibleContent
                  listItems={additionalInfo.technologies as string[]}
                  className='lg:max-w-[60%] lg:mx-auto'
                />
              </Collapsible>
            </CardItemAnimationWrapper>
          </CardContent>
        </Card>
        {additionalInfo.features && (
          <Card className='pt-0 lg:m-4'>
            <CardContent className='px-0 md:my-1.5'>
              <CardItemAnimationWrapper
                animate='fadeIn'
                className='lg:flex lg:items-center'
              >
                <Collapsible className='lg:w-[150rem] lg:mx-auto'>
                  <div className='flex justify-center lg:mb-2'>
                    <CollapsibleTrigger
                      triggerTitle={
                        descriptionArray?.[3] && descriptionArray[3]
                      }
                    />
                  </div>
                  <CollapsibleContent
                    listItems={additionalInfo.features as string[]}
                    className='lg:max-w-[60%] lg:mx-auto'
                  />
                </Collapsible>
              </CardItemAnimationWrapper>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
};

export default ServicePage;
