import { getCaseStudyBySlug } from '@/lib/data';
import { MotionHeading, Heading } from '@/ui/Heading/heading';
import { ServiceIcon } from '@/ui/assets/ServiceIcon/service-icon';
import { CardItemAnimationWrapper } from '@/ui/util/animation-wrapper';
import { Card, CardContent } from '@/ui/Card/card';
import {
  Collapsible,
  CollapsibleContentJson,
  CollapsibleTrigger,
} from '@/ui/Collapsible/collapsible';
import { Sparkle } from 'lucide-react';
import Text from '@/ui/Text/text';
import { SmallCTAButton } from '@/ui/Button/cta-button';
import Link from 'next/link';
import Image from 'next/image';

const ProjectCaseStudyPage = async ({
  params,
}: {
  params: { project: string };
}) => {
  // Fetch case study content from database
  const caseStudy = await getCaseStudyBySlug(params.project);

  // Get JSON data from database
  const sections = caseStudy.sections;
  // Identify the last section
  const lastSection = sections?.[sections.length - 1];
  return (
    <div className='overflow-x-hidden'>
      <div className='md:mt-12'>
        <MotionHeading
          as='h2'
          color='h1accent'
          size='h2Default'
          text='Case Study'
        ></MotionHeading>
      </div>
      {caseStudy.icon && (
        <CardItemAnimationWrapper
          animate='scaleUp'
          className='flex place-content-center pb-2 md:mt-6'
        >
          <ServiceIcon icon={caseStudy.icon} className='w-16 h-16' />
        </CardItemAnimationWrapper>
      )}
      <div className='md:hidden'>
        <MotionHeading
          as='h2'
          color='h2accent'
          size='h3Default'
          text={caseStudy.title}
        ></MotionHeading>
      </div>
      <div className='hidden md:flex mt-6 pt-2 mb-6'>
        <MotionHeading
          as='h2'
          color='h2accent'
          size='h2Small'
          text={caseStudy.title}
        ></MotionHeading>
      </div>
      <div className='md:mx-auto md:max-w-screen-lg'>
        <Card className='pb- pt-6'>
          <CardContent className='px-0 py-0 w-screen md:my-1.5'>
            {Array.isArray(sections) &&
              sections.slice(0, -1).map((section, index) => {
                if (
                  typeof section === 'object' &&
                  section !== null &&
                  'title' in section
                ) {
                  const sectionObject = section;

                  return (
                    <Collapsible key={index}>
                      <div className='flex justify-center'>
                        <CollapsibleTrigger
                          triggerTitle={String(sectionObject.title)}
                        />
                      </div>
                      <CollapsibleContentJson className='md:max-w-screen-lg md:mx-auto md:mb-6'>
                        {/* Check for subsections */}
                        {Array.isArray(sectionObject.subsections) &&
                        sectionObject.subsections.length > 0 ? (
                          sectionObject.subsections.map(
                            (subsection, subIndex) => {
                              if (
                                typeof subsection === 'object' &&
                                subsection !== null &&
                                'title' in subsection &&
                                'description' in subsection &&
                                Array.isArray(subsection.description)
                              ) {
                                return (
                                  <div key={subIndex}>
                                    <Heading
                                      as='h3'
                                      size='h2Tiny'
                                      color='h1accent'
                                      className='md:hidden'
                                    >
                                      {String(subsection.title)}
                                    </Heading>
                                    <Heading
                                      as='h3'
                                      size='h3Default'
                                      color='h1accent'
                                      className='hidden md:flex m-2'
                                    >
                                      {String(subsection.title)}
                                    </Heading>
                                    <ul className='pl-0 flex flex-col items-start pr-4 text-xs/[1.2rem] tracking-[0.007em] antialiased text-pretty whitespace-normal text-[var(--color-foreground)] opacity-80 pb-1.5 md:text-lg md:max-w-screen-md md:mx-auto'>
                                      {subsection.description.map(
                                        (desc, descIndex) =>
                                          typeof desc === 'string' ? (
                                            <li
                                              key={descIndex}
                                              className='py-1 flex items-start text-left md:p-2'
                                            >
                                              <Sparkle
                                                size={16}
                                                className='text-[var(--color-accent)] mr-2 flex-shrink-0'
                                              />
                                              <span className='leading-snug'>
                                                {desc}
                                              </span>
                                            </li>
                                          ) : null,
                                      )}
                                    </ul>
                                    {
                                      <div>
                                        {index === 1 && subIndex === 1 ? (
                                          <>
                                            <Image
                                              alt='Image of project progress.'
                                              src={
                                                caseStudy.progressImageUrl
                                                  ? caseStudy.progressImageUrl
                                                  : '/project_fallback.webp'
                                              }
                                              width={500}
                                              height={500}
                                              className='max-w-[80%] mx-auto rounded-md m-2'
                                            />

                                            <Text
                                              as='p'
                                              size='tiny'
                                              textColor='muted'
                                              className='my-2'
                                            >
                                              {caseStudy.progressImageDesc}
                                            </Text>
                                          </>
                                        ) : null}
                                        {index === 1 && subIndex === 2 ? (
                                          <>
                                            <Image
                                              alt='Image of project outcome.'
                                              src={
                                                caseStudy.outcomeImageUrl
                                                  ? caseStudy.outcomeImageUrl
                                                  : '/project_fallback.webp'
                                              }
                                              width={500}
                                              height={500}
                                              className='max-w-[80%] mx-auto rounded-md'
                                            />

                                            <Text
                                              as='p'
                                              size='tiny'
                                              textColor='muted'
                                              className='my-2'
                                            >
                                              {caseStudy.outcomeImageDesc}
                                            </Text>
                                          </>
                                        ) : null}
                                      </div>
                                    }
                                  </div>
                                );
                              }
                              return null;
                            },
                          )
                        ) : // Handle cases where there are no subsections but there is a description array
                        Array.isArray(sectionObject.description) &&
                          sectionObject.description.length > 0 ? (
                          <ul className='pl-0 flex flex-col items-start pr-4 text-xs/[1.2rem] tracking-[0.007em] antialiased text-pretty whitespace-normal text-[var(--color-foreground)] opacity-80 pb-1.5 md:text-lg md:max-w-screen-md md:mx-auto'>
                            {sectionObject.description.map((desc, descIndex) =>
                              typeof desc === 'string' ? (
                                <li
                                  key={descIndex}
                                  className='py-1 flex items-start text-left'
                                >
                                  <Sparkle
                                    size={16}
                                    className='text-[var(--color-accent)] mr-2 flex-shrink-0'
                                  />
                                  <span className='leading-snug'>{desc}</span>
                                </li>
                              ) : null,
                            )}
                          </ul>
                        ) : null}
                      </CollapsibleContentJson>
                    </Collapsible>
                  );
                }
                return null;
              })}
          </CardContent>
        </Card>
      </div>
      {/* Conditionally render the last section as h2 if title is "Stay Connected" */}
      {typeof lastSection === 'object' &&
        lastSection !== null &&
        'title' in lastSection &&
        lastSection.title === 'Stay Connected' && (
          <Card className='pt-0 md:mb-8'>
            <Heading
              as='h2'
              color='h1accent'
              size='h2Tiny'
              className='md:hidden'
            >
              {lastSection.title as string}
            </Heading>
            <Heading
              as='h2'
              color='h1accent'
              size='h2Small'
              className='hidden md:flex'
            >
              {lastSection.title as string}
            </Heading>
            {/* Render bullet points for last section */}
            {Array.isArray(lastSection.description) &&
              lastSection.description.length > 0 && (
                <ul className='pl-0 flex flex-col items-start pr-4 text-xs/[1.2rem] tracking-[0.007em] antialiased text-pretty whitespace-normal text-[var(--color-foreground)] opacity-80 pb-1.5 md:text-lg md:max-w-screen-md md:mx-auto'>
                  {lastSection.description.map((desc, descIndex) =>
                    typeof desc === 'string' ? (
                      <li
                        key={descIndex}
                        className='py-1 flex items-start text-left'
                      >
                        <Text
                          as='p'
                          size='tiny'
                          textColor='default'
                          className='text-center p-2 md:hidden'
                        >
                          {desc}
                        </Text>
                        <div className='md:flex items-center hidden max-w-screen-sm p-4'>
                          <Text
                            as='p'
                            size='large'
                            textColor='default'
                            className='text-center hidden md:flex'
                          >
                            {desc}
                          </Text>
                        </div>
                      </li>
                    ) : null,
                  )}
                </ul>
              )}
            <div className='flex gap-4 mt-4'>
              <Link
                href={
                  caseStudy.gitHubLink
                    ? caseStudy.gitHubLink
                    : 'https://github.com/alexhosp/alexhosp'
                }
              >
                <SmallCTAButton className='text-xs bg-[var(--color-accent-active)] md:text-xl'>
                  Learn more on GitHub
                </SmallCTAButton>
              </Link>
              <a
                href={caseStudy.pdfUrl ? caseStudy.pdfUrl : undefined}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Download the report as a PDF file'
                download='Summary_Report_Keyword_Analysis.pdf'
              >
                <SmallCTAButton className='text-xs md:text-xl'>
                  Download Report
                </SmallCTAButton>
              </a>
            </div>
          </Card>
        )}
    </div>
  );
};
export default ProjectCaseStudyPage;
