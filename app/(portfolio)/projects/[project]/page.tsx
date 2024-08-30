import { getCaseStudyBySlug } from '@/lib/data';
import { MotionHeading } from '@/ui/Heading/heading';
import { ServiceIcon } from '@/ui/assets/ServiceIcon/service-icon';
import { CardItemAnimationWrapper } from '@/ui/util/animation-wrapper';

const ProjectCaseStudyPage = async ({
  params,
}: {
  params: { project: string };
}) => {
  // Fetch case study content from database
  const caseStudy = await getCaseStudyBySlug(params.project);

  // Get JSON data from database
  const sections = caseStudy.sections;
  return (
    <>
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
          className='flex place-content-center pb-2 md:mt-16'
        >
          <ServiceIcon icon={caseStudy.icon} className='w-16 h-16' />
        </CardItemAnimationWrapper>
      )}
      <div className='md:mt-12'>
        <MotionHeading
          as='h2'
          color='h2accent'
          size='h3Small'
          text={caseStudy.title}
        ></MotionHeading>
      </div>
      <div>
        {sections?.map((section, index) => {
          // Ensure section is an object and has a title property
          if (
            typeof section === 'object' &&
            section !== null &&
            'title' in section
          ) {
            return (
              <h3 key={index}>
                Section Title {index + 1} :{section.title as string}
              </h3>
            );
          }
          // Return a meaningful message here.
          return null;
        })}
      </div>
    </>
  );
};
export default ProjectCaseStudyPage;
