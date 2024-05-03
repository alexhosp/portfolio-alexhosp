import { fetchCommits } from '@/lib/github';
import { Counter } from '../ui/Counter/counter';
import { Heading } from '@/ui/Heading/heading';
import { Card } from '@/ui/Card/card';
import { StaggeredAnimationWrapper } from '@/ui/util/animation-wrapper';
import { MotionButton } from '@/ui/Button/button';
import { CTAButtonAnimation } from '@/ui/util/animation';
import Link from 'next/link';
import { SmallCTAButton } from '../ui/Button/cta-button';
import GitHubIcon from '@/ui/assets/GitHubIcon/gh-icon';
import Text from '@/ui/Text/text';

export const GitHubData = async () => {
  const { repos, totalCommits } = await fetchCommits(4);

  return (
    <StaggeredAnimationWrapper className='mx-auto flex flex-col items-center md:mt-4'>
      <div className='flex items-center flex-col my-4 gap-4 md:grid md:grid-cols-2'>
        <Card
          color='solidDetail'
          edge='rounded'
          className='md:flex md:flex-col md:gap-2'
        >
          <Heading as='h2' color='h1accent' size='h2Small'>
            Quarterly Commits
          </Heading>
          <Heading as='h3' color='h2accentgradient' size='h2Small'>
            <Counter value={totalCommits} />
          </Heading>
        </Card>

        <Card
          color='solidDetail'
          edge='rounded'
          className='md:flex md:flex-col md:gap-2'
        >
          <Heading as='h2' color='h1accent' size='h2Small'>
            Quarterly Projects
          </Heading>
          <StaggeredAnimationWrapper className='w-5/6'>
            <ul>
              {repos?.map((repo, index) => (
                <li key={index}>
                  <Link href={repo.html_url}>
                    <MotionButton {...CTAButtonAnimation}>
                      <Heading
                        as='h3'
                        color='h2accent'
                        size='h2Tiny'
                        className='underline underline-offset-2 md:hidden'
                      >
                        {repo.name}
                      </Heading>
                      <Heading
                        as='h3'
                        color='h2accent'
                        size='h3Small'
                        className='underline underline-offset-2 hidden md:block'
                      >
                        {repo.name}
                      </Heading>
                    </MotionButton>
                  </Link>
                </li>
              ))}
            </ul>
          </StaggeredAnimationWrapper>
        </Card>
        <Card
          color='solidDetail'
          edge='rounded'
          className='md:col-span-2 md:grid md:grid-rows-2 md:gap-4 md:w-4/6 md:mx-auto'
        >
          <Text
            as='span'
            textColor='muted'
            size='large'
            className='hidden md:flex'
          >
            Explore my Code and Projects on GitHub!
          </Text>
          <Link href='https://github.com/alexhosp'>
            <SmallCTAButton>
              <GitHubIcon className='!h-4' />
              Code
            </SmallCTAButton>
          </Link>
        </Card>
      </div>
    </StaggeredAnimationWrapper>
  );
};
