import { Octokit } from 'octokit';

const octokit = new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN });

export const fetchCommits = async (months = 4) => {
  // Default to 4 months if no argument is passed
  const today = new Date();
  const monthlyCommits = Array.from({ length: months }, () => 0);

  try {
    // Fetch all repositories for the authenticated user
    const { data: repos } = await octokit.rest.repos.listForAuthenticatedUser();

    let totalCommits = 0;

    // Loop through each repository and fetch commits for each specified month
    for (const repo of repos) {
      console.log(`Fetching commits for ${repo.name}`);
      for (let i = 0; i < months; i++) {
        const startOfMonth = new Date(
          today.getFullYear(),
          today.getMonth() - i,
          1,
        );
        const endOfMonth = new Date(
          today.getFullYear(),
          today.getMonth() - i + 1,
          0,
        );

        try {
          const commits = await octokit.paginate(
            octokit.rest.repos.listCommits,
            {
              owner: repo.owner.login,
              repo: repo.name,
              since: startOfMonth.toISOString(),
              until: endOfMonth.toISOString(),
            },
          );

          monthlyCommits[i] += commits.length;
          totalCommits += commits.length;

          console.log(
            `Fetched ${commits.length} commits for ${repo.name} in ${startOfMonth.toLocaleString('default', { month: 'long' })}`,
          );
        } catch (error) {
          if (error instanceof Error) {
            console.error(
              `Failed to fetch commits for ${repo.name} in ${startOfMonth.toLocaleString('default', { month: 'long' })}: ${error.message}`,
            );
          }
        }
      }
    }

    // Log the total number of commits fetched per month across all repositories
    monthlyCommits.forEach((count, index) => {
      const monthName = new Date(
        today.getFullYear(),
        today.getMonth() - index,
        1,
      ).toLocaleString('default', { month: 'long' });
      console.log(`Total number of commits in ${monthName}: ${count}`);
    });

    // Log the total number of commits fetched across all repositories
    console.log(
      `Total number of commits across all repositories: ${totalCommits}`,
    );
    return { totalCommits, monthlyCommits };
  } catch (error) {
    console.error('Failed to fetch repositories', error);
    return {
      totalCommits: 0,
      monthlyCommits: Array.from({ length: months }, () => 0),
    };
  }
};
