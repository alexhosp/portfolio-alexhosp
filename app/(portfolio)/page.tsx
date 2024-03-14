import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from '@/ui/Card/card';
import { MotionHeading, Heading } from '@/ui/Heading/heading';
import { HeroSVG } from '@/ui/assets/HeroSVG/hero-svg';
import { CTAButton, SmallCTAButton } from '@/ui/Button/cta-button';
import Link from 'next/link';
import {
  getAboutContent,
  getServicesContent,
  getProjectsContent,
} from '@/lib/data';
import { CardItemAnimationWrapper } from '@/ui/util/animation-wrapper';
import Image from 'next/image';
import Text from '@/ui/Text/text';
import {
  AutoplayCarousel,
  CarouselContent,
  CarouselItem,
  /*   CarouselNext,
  CarouselPrevious, */
} from '@/ui/Carousel/carousel';
import { Prisma } from '@prisma/client';
import { ProjectModal, CtaData } from '@/components/Modal/modal';

const HomePage = async () => {
  const aboutContent = await getAboutContent();
  const servicesContent = await getServicesContent();
  const projectsContent = await getProjectsContent();

  console.log('projectsContent: ', typeof projectsContent);

  return (
    <main className='overflow-x-hidden'>
      <Card
        edge='sharp'
        width='full'
        color='solidBackground'
        className='justify-center pt-0 min-h-[80vh] md:mt-12'
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
          <div className='grid gap-3 grid-cols-2 grid-rows-1 mt-12 md:hidden'>
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
            className='pt-0 lg:grid lg:gap-x-5'
          >
            <CardItemAnimationWrapper animate='scaleDown'>
              <Image
                alt='avatar of the developer'
                src={item.imageUrl ?? '/avatar-blue.png'}
                height={512}
                width={512}
                className='md:mt-4'
              />
            </CardItemAnimationWrapper>
            <div className='lg:col-start-2'>
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
          <CarouselContent className='flex'>
            {servicesContent.map((service) => {
              return (
                <CarouselItem
                  key={service.id}
                  className='basis-10/12 flex flex-grow transition-opacity'
                >
                  <Card
                    edge='sharp'
                    color='solidPrimary'
                    className='max-h-[70vh] md:grid md:grid-rows-3 md:grid-cols-[30%_70%] md:max-h-[60vh]'
                  >
                    <CardHeader className='md:row-start-1 md:col-start-2'>
                      <CardItemAnimationWrapper animate='fadeIn'>
                        <CardTitle>{service.title}</CardTitle>
                      </CardItemAnimationWrapper>
                    </CardHeader>

                    <CardContent className='md:row-start-2 md:col-span-2 md:grid md:grid-cols-[30%_70%] md:justify-center md:items-center md:gap-x-4'>
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
                        <div className='md:hidden'>
                          <Text as='p' size='small' textColor='default'>
                            {service.shortDescription}
                          </Text>
                        </div>
                        <div className='hidden md:block p-4'>
                          <Text as='p' size='large' textColor='muted'>
                            {service.shortDescription}
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
        const modalData = additionalInfo.projectModal as Prisma.JsonObject;
        const modalImageData = modalData.modalImage as Prisma.JsonObject;
        const modalImageUrl = modalImageData.imageUrl as string;
        const modalImageAlt = modalImageData.imageAlt as string;
        const modalBulletpoints = modalData.bulletPoints as string[];
        const modalCtaData = modalData.modalCta;
        console.log(modalCtaData);

        return (
          <>
            <div className='w-11/12 mx-auto mt-7 mb-3.5'>
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

            <Card
              color='solidDetail'
              edge='rounded'
              key={project.id}
              className='w-5/6'
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>
                  <Text as='p' size='small' textColor='default'>
                    {project.shortDescription}
                  </Text>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CardItemAnimationWrapper animate='scaleDown'>
                  <Image
                    src={project.imageUrl ?? '/project_fallback.webp'}
                    alt={
                      project.imageAlt ?? 'product resulting from the project'
                    }
                    height={512}
                    width={512}
                    className='max-h-[40vh] w-auto md:max-h-[60vh]'
                  />
                </CardItemAnimationWrapper>
              </CardContent>
              <CardFooter>
                <ProjectModal
                  dialogTitle={project.title}
                  imageUrl={modalImageUrl}
                  imageAlt={modalImageAlt}
                  bulletPoints={modalBulletpoints}
                  ctaName={project.cta}
                  /*  dialogCtaData={modalCtaData} */
                />
              </CardFooter>
            </Card>
          </>
        );
      })}
    </main>
  );
};

export default HomePage;
