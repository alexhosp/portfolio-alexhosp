import { MotionHeading } from '@/ui/Heading/heading';
import { GitHubData } from '@/components/GitHubData/GitHubData';
import { Suspense } from 'react';

const ProjectsPage = () => {
  return (
    <>
      <div className='md:mt-12'>
        <MotionHeading
          as='h2'
          color='default'
          size='h2Small'
          text='Projects.'
          spanText='My Work in Progress.'
        ></MotionHeading>
      </div>
      <Suspense fallback='loading GitHub data...'>
        <GitHubData />
      </Suspense>
    </>
  );
};
export default ProjectsPage;
