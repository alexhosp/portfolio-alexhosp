import { fetchCommits } from '@/lib/github';
import { CommitsPerMonthLineChart } from '@/components/LineChart/line-chart';

// chart is not displayed!
export const GitHubData = async () => {
  const { repos, totalCommits, monthlyCommits } = await fetchCommits(4);

  return (
    <div>
      <p>Total number of commits is: {totalCommits}</p>
      <div className='h-full w-96'>
        <CommitsPerMonthLineChart monthlyCommits={monthlyCommits} />
      </div>

      <ul>
        {repos?.map((repo, index) => (
          <li key={index}>{`All repos by name: ${repo.name}`}</li>
        ))}
      </ul>
      <p>{`Total number of repos: ${repos?.length}`}</p>
    </div>
  );
};
