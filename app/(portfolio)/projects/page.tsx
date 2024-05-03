import { MotionHeading } from '@/ui/Heading/heading';
import { GitHubData } from '@/components/GitHubData/GitHubData';
import { Suspense } from 'react';
import Text from '@/ui/Text/text';
import LoadingSpinner from '@/ui/assets/LoadingSpinner/loading-spinner';

const LoadingPlaceholder = () => {
  return (
    <div className='flex flex-col items-center gap-2 p-4 md:gap-6 md:p-6'>
      <Text as='span' textColor='muted' size='default' className='md:hidden'>
        Loading GitHub Stats...
      </Text>
      <Text
        as='span'
        textColor='muted'
        size='large'
        className='hidden md:block'
      >
        Loading GitHub Stats...
      </Text>
      <LoadingSpinner />
    </div>
  );
};

const ProjectsPage = () => {
  return (
    <>
      <div className='md:mt-12'>
        <div className='hidden md:flex'>
          <MotionHeading
            as='h2'
            color='default'
            size='h2Small'
            text='Projects.'
            spanText='My Work in Progress.'
          ></MotionHeading>
        </div>
        <div className='md:hidden'>
          <MotionHeading
            as='h2'
            color='default'
            size='h2Small'
            text='Projects.'
            spanText='Work in Progress.'
          ></MotionHeading>
        </div>
      </div>
      <Suspense fallback={<LoadingPlaceholder />}>
        <GitHubData />
      </Suspense>
    </>
  );
};
export default ProjectsPage;
