// Adapted from ../about-me/src/App.tsx, without the React dependency.
export interface License {
  key: string;
  name: string;
}

export interface Contributors {
  login: string,
  avatar_url: string,
}

export interface GitHubRepo {
  name: string;
  html_url: string;
  fork: boolean;
  description: string | null;
  url: string;
  stargazers_count: number;
  license: License | null;
  languages: Map<string, number> | null,
  contributors: Contributors,
}

export const username = 'littlecommandcat';

export async function fetchRepositories(request: typeof fetch = fetch): Promise<GitHubRepo[]> {
  const repos: GitHubRepo[] = [];
  for (let page = 1; ; page += 1) {
    const response = await request(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated&page=${page}`,
      { headers: { Accept: 'application/vnd.github+json' }, signal: AbortSignal.timeout(15000) },
    );
    if (!response.ok) {
      if (response.status === 403 || response.status === 429) {
        throw new Error('GitHub API 429');
      }
      throw new Error("Couldn't get repositories from GitHub");
    }
    const data: GitHubRepo[] = await response.json();
    repos.push(...data);
    if (data.length < 100) return repos;
  }
}