import { fetchRepositories, type GitHubRepo } from '../lib/github';

function createRepository(repo: GitHubRepo): HTMLLIElement {
  const item = document.createElement('li');
  const heading = document.createElement('h3');
  const link = document.createElement('a');
  link.href = repo.html_url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = repo.name;
  link.setAttribute('aria-label', `${repo.name}`);
  heading.append(link);
  if (repo.fork) {
    const badge = document.createElement('span');
    badge.className = 'fork';
    badge.textContent = 'Fork';
    heading.append(badge);
  }
  const description = document.createElement('p');
  description.textContent = repo.description || '沒有描述';
  if (description.textContent.length > 100) {
    description.textContent = description.textContent.slice(0, 100) + "...";
  }
  const info = document.createElement('p');
  info.className = 'repo-info';
  info.textContent = `☆ ${repo.stargazers_count} · ${repo.license?.name || '未標示授權'}`;
  item.append(heading, description, info);
  return item;
}

export async function initializeRepositories(): Promise<void> {
  const list = document.querySelector<HTMLUListElement>('#repo-list');
  const status = document.querySelector<HTMLParagraphElement>('#repo-status');
  if (!list || !status) return;
  try {
    const repos = await fetchRepositories();
    list.replaceChildren(...repos.map(createRepository));
    status.textContent = repos.length === 0 ? '目前沒有公開專案' : `共 ${repos.length} 個公開專案`;
  } catch (error: unknown) {
    status.textContent = error instanceof Error && error.name !== 'TimeoutError' && error.name !== 'TypeError'
      ? error.message
      : '無法連線至GitHub';
  } finally {
    list.setAttribute('aria-busy', 'false');
  }
}