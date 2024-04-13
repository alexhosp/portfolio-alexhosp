import { fetchCommits } from '@/lib/github';

export const GitHubData = async () => {
  const { totalCommits, monthlyCommits } = await fetchCommits(4);
  return (
    <div>
      <p>Total number of commits is: {totalCommits}</p>
      <ul>
        {monthlyCommits.map((count, index) => {
          const month = new Date(
            new Date().getFullYear(),
            new Date().getMonth() - index,
            1,
          ).toLocaleString('default', { month: 'long' });
          return (
            <li key={index}>
              Number of commits in {month} is {count}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
