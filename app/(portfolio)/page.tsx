import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/ui/Card/card';
import { MotionHeading, Heading } from '@/ui/Heading/heading';
import { HeroSVG } from '@/ui/assets/HeroSVG/hero-svg';
import { CTAButton, SmallCTAButton } from '@/ui/Button/cta-button';
import Link from 'next/link';
import {
  getAboutContent,
  getServicesContent,
  getProjectsContent,
  getFaqContent,
} from '@/lib/data';
import { CardItemAnimationWrapper } from '@/ui/util/animation-wrapper';
import Image from 'next/image';
import Text from '@/ui/Text/text';
import {
  Carousel,
  AutoplayCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/ui/Carousel/carousel';
import { Prisma } from '@prisma/client';
import { ProjectModal, CtaData } from '@/components/Modal/modal';
import { FlipCard, FlipCardProps } from '@/ui/FlipCard/flip-card';

const HomePage = async () => {
  const aboutContent = await getAboutContent();
  const servicesContent = await getServicesContent();
  const projectsContent = await getProjectsContent();
  const faqContent = await getFaqContent();
  const flipCardColors: FlipCardProps['flipCardColor'][] = [
    'gradientPrimary',
    'gradientGrayPrimary',
    'gradientPrimary',
    'gradientGrayDetail',
  ];

  const formatBoldText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong className='text-[var(--color-background)]' key={index}>
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <main className='overflow-x-hidden'>
      <Card
        edge='sharp'
        width='full'
        color='solidBackground'
        className='justify-center pt-0 min-h-[75vh] md:mt-12'
      >
        <div>
          <MotionHeading
            text='let&#x27;s make'
            as='h1'
            color='h2accent'
            size='h2Big'
          ></MotionHeading>
          <div>
            <HeroSVG />
          </div>
          <div>
            <MotionHeading
              text='great ideas grow'
              as='h1'
              color='h2accentgradient'
              size='h1Default'
            ></MotionHeading>
          </div>
          <div className='grid gap-5 grid-cols-2 grid-rows-1 mt-12 mx-auto max-w-xs md:max-w-full md:hidden'>
            <SmallCTAButton>
              <Link href='/about'>My Focus</Link>
            </SmallCTAButton>
            <SmallCTAButton>
              <Link href='/services'>My Services</Link>
            </SmallCTAButton>
          </div>
          <div className='hidden md:grid gap-12 grid-cols-2 grid-rows-1 mt-12 md:mt-20 lg:max-w-sm lg:m-auto lg:mt-12 lg:mb-6'>
            <CTAButton className='!font-bold'>
              <Link href='/about'>My Focus</Link>
            </CTAButton>
            <CTAButton className='!font-bold'>
              <Link href='/services'>My Services</Link>
            </CTAButton>
          </div>
        </div>
      </Card>
      {aboutContent.map((item) => {
        return (
          <Card
            key={item.id}
            edge='sharp'
            width='full'
            color='solidDetail'
            className='pt-0 lg:grid lg:gap-x-5 md:max-w-[90%] md:mx-auto md:mb-8 md:mt-24'
          >
            <CardItemAnimationWrapper
              animate='scaleDown'
              className='lg:col-start-1'
            >
              <Image
                alt='avatar of the developer'
                src={item.imageUrl ?? '/avatar-blue.png'}
                height={512}
                width={512}
                className='md:mt-4'
              />
            </CardItemAnimationWrapper>
            <div className='lg:col-start-2 md:grid md:gap-2'>
              <CardItemAnimationWrapper animate='fadeIn'>
                <CardTitle>{item.title}</CardTitle>
              </CardItemAnimationWrapper>
              <CardItemAnimationWrapper animate='floatUp'>
                <Text
                  as='p'
                  size='large'
                  textColor='default'
                  style={{ whiteSpace: 'pre-wrap' }}
                  className='pt-4 md:text-xl/8 tracking-wide lg:pt-12'
                >
                  {item.shortDescription.replace(/\. /g, '.\n\n')}
                </Text>
              </CardItemAnimationWrapper>
              <CardItemAnimationWrapper animate='scaleUp'>
                <div className='md:hidden pt-5'>
                  <SmallCTAButton>
                    <Link href='/about'>{item.cta}</Link>
                  </SmallCTAButton>
                </div>
                <div className='hidden md:block md:mt-16'>
                  <CTAButton className='!text-lg'>
                    <Link href='/about'>{item.cta}</Link>
                  </CTAButton>
                </div>
              </CardItemAnimationWrapper>
            </div>
          </Card>
        );
      })}
      <div className='max-w-[90vw] mx-auto my-4 md:max-w-[95vw]'>
        <AutoplayCarousel
          opts={{
            loop: true,
            align: 'center',
            containScroll: 'trimSnaps',
          }}
        >
          <CarouselContent>
            {[...servicesContent]
              .sort((a, b) => a.id - b.id)
              .map((service) => {
                return (
                  <CarouselItem
                    key={service.id}
                    className='basis-10/12 flex flex-grow transition-opacity min-h-max'
                  >
                    <Card
                      edge='sharp'
                      color='solidPrimary'
                      className='pb-0 pt-0 md:p-6 md:grid md:grid-rows-3 md:grid-cols-[30%_70%] md:max-h-[60vh]'
                    >
                      <CardHeader className='md:row-start-1 md:col-start-2'>
                        <CardItemAnimationWrapper animate='fadeIn'>
                          <CardTitle>{service.title}</CardTitle>
                        </CardItemAnimationWrapper>
                      </CardHeader>

                      <CardContent className='p-1 md:row-start-2 md:col-span-2 md:grid md:grid-cols-[30%_70%] md:justify-center md:items-center md:gap-x-4'>
                        <CardItemAnimationWrapper animate='scaleDown'>
                          <Image
                            src={service.imageUrl ?? '/service_fallback.webp'}
                            alt={
                              service.imageAlt ??
                              'geometric shape associated with service'
                            }
                            height={512}
                            width={512}
                          />
                        </CardItemAnimationWrapper>

                        <CardItemAnimationWrapper animate='floatUp'>
                          <div className='md:hidden pt-1'>
                            <Text as='p' size='small' textColor='default'>
                              {formatBoldText(service.shortDescription)}
                            </Text>
                          </div>
                          <div className='hidden md:block p-4'>
                            <Text as='p' size='large' textColor='muted'>
                              {formatBoldText(service.shortDescription)}
                            </Text>
                          </div>
                        </CardItemAnimationWrapper>
                      </CardContent>

                      <CardFooter className='md:row-start-3 md:col-start-2 md:justify-center'>
                        <CardItemAnimationWrapper animate='scaleUp'>
                          <div className='md:hidden pt-5'>
                            <SmallCTAButton>
                              <Link href={service.ctaLink ?? '/services'}>
                                {service.cta}
                              </Link>
                            </SmallCTAButton>
                          </div>
                          <div className='hidden md:block md:mt-16'>
                            <CTAButton className='!text-lg'>
                              <Link href={service.ctaLink ?? '/services'}>
                                {service.cta}
                              </Link>
                            </CTAButton>
                          </div>
                        </CardItemAnimationWrapper>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                );
              })}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </AutoplayCarousel>
      </div>
      {projectsContent.map((project) => {
        const additionalInfo = project.additionalInfo as Prisma.JsonObject;
        const sectionTitles = additionalInfo.sectionTitle as string[];
        return (
          <div key={project.id} className='w-11/12 mx-auto mt-7 mb-3.5'>
            <Heading
              as='h2'
              color='default'
              size='h2Small'
              className='inline !text-left'
            >
              {Array.isArray(sectionTitles) ? sectionTitles[0] : undefined}
              <span className='text-[var(--color-primary)] ml-2'>
                {Array.isArray(sectionTitles) ? sectionTitles[1] : undefined}
              </span>
            </Heading>
          </div>
        );
      })}
      <Carousel className='p-0'>
        <CarouselContent className='m-auto flex justify-start'>
          {projectsContent
            .slice() // Create a shallow copy to avoid mutating the original array
            .map((project) => {
              const additionalInfo =
                project.additionalInfo as Prisma.JsonObject;
              const modalData =
                additionalInfo.projectModal as Prisma.JsonObject;
              const modalImageData = modalData.modalImage as Prisma.JsonObject;
              const modalImageUrl = modalImageData.imageUrl as string;
              const modalImageAlt = modalImageData.imageAlt as string;
              const modalBulletpoints = modalData.bulletPoints as string[];
              const modalCtaData = modalData.modalCta as unknown as CtaData;

              return (
                <CarouselItem
                  key={project.id}
                  className='basis-full flextransition-opacity min-h-max p-0'
                >
                  <Card
                    color='solidDetail'
                    edge='rounded'
                    className='mx-auto w-4/5 p-2 md:grid md:grid-cols-[60%_40%] md:grid-rows-[80%_20%] lg:min-h-full'
                  >
                    <CardHeader className='md:col-start-1 md:row-start-1 gap-y-4'>
                      <CardTitle>{project.title}</CardTitle>

                      <Text
                        as='p'
                        size='small'
                        textColor='default'
                        className='md:hidden'
                      >
                        {project.shortDescription}
                      </Text>
                      <Text
                        as='p'
                        size='large'
                        textColor='muted'
                        className='hidden md:block text-xl !mt-8'
                        style={{ whiteSpace: 'pre-wrap' }}
                      >
                        {project.description?.replace(/([!?]) /g, '$1\n\n')}
                      </Text>
                    </CardHeader>
                    <CardContent className='md:col-star-2 row-span-2'>
                      <CardItemAnimationWrapper animate='scaleDown'>
                        <Image
                          src={project.imageUrl ?? '/project_fallback.webp'}
                          alt={
                            project.imageAlt ??
                            'product resulting from the project'
                          }
                          height={512}
                          width={512}
                          className='max-h-[40vh] w-auto md:max-h-[60vh] rounded-sm'
                          priority
                        />
                      </CardItemAnimationWrapper>
                    </CardContent>
                    <CardFooter className='md:col-start-1 md:row-start-2'>
                      <ProjectModal
                        dialogTitle={project.title}
                        imageUrl={modalImageUrl}
                        imageAlt={modalImageAlt}
                        bulletPoints={modalBulletpoints}
                        ctaName={project.cta}
                        dialogCtaData={
                          Array.isArray(modalCtaData) ? modalCtaData : undefined
                        }
                      />
                    </CardFooter>
                  </Card>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselNext className='right-3' />
        <CarouselPrevious className='left-3' />
      </Carousel>

      <div className='w-11/12 mx-auto mt-14 mb-3.5'>
        <Heading
          as='h2'
          color='default'
          size='h2Small'
          className='inline !text-left'
        >
          FAQ
        </Heading>
      </div>
      <Card color='solidPrimary' edge='rounded' className='mx-auto max-w[90vw]'>
        <div className='w-full grid grid-cols-1 grid-rows-4 gap-y-4 md:gap-x-7 md:gap-y-7 md:grid-cols-2 md:grid-rows-2'>
          {[...faqContent]
            .sort((a, b) => a.id - b.id)
            .map((item, index) => {
              const frontContent = {
                title: item.title,
              };
              const backContent = {
                title: item.shortDescription,
                description: item.description,
                cta: item.cta,
                ctaLink: item.ctaLink,
              };

              const colorIndex = index % flipCardColors.length;
              const flipCardColor = flipCardColors[colorIndex];
              return (
                <CardItemAnimationWrapper animate='floatUp' key={item.id}>
                  <FlipCard
                    frontContent={frontContent}
                    backContent={backContent}
                    flipCardColor={flipCardColor}
                  />
                </CardItemAnimationWrapper>
              );
            })}
        </div>
      </Card>
    </main>
  );
};

export default HomePage;
