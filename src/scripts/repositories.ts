import { fetchRepositories, username, type GitHubRepo } from '../lib/github';

const cacheKey = `github-repositories:v1:${username}`;
const cacheDuration = 60 * 60 * 1000;

interface RepositoryCache {
  savedAt: number;
  repos: GitHubRepo[];
}

function isRepository(value: unknown): value is GitHubRepo {
  if (typeof value !== 'object' || value === null) return false;
  const repo = value as Record<string, unknown>;
  return typeof repo.name === 'string'
    && typeof repo.html_url === 'string'
    && repo.html_url.startsWith('https://github.com/')
    && typeof repo.url === 'string'
    && typeof repo.fork === 'boolean'
    && (repo.description === null || typeof repo.description === 'string')
    && typeof repo.stargazers_count === 'number'
    && Number.isFinite(repo.stargazers_count)
    && (repo.license === null || (
      typeof repo.license === 'object' && repo.license !== null
      && typeof (repo.license as Record<string, unknown>).name === 'string'
      && typeof (repo.license as Record<string, unknown>).key === 'string'
    ));
}

function readCache(): RepositoryCache | null {
  try {
    const raw = localStorage.getItem(cacheKey);
    if (!raw) return null;
    const cache: unknown = JSON.parse(raw);
    if (typeof cache !== 'object' || cache === null) return null;
    const { savedAt, repos } = cache as Record<string, unknown>;
    if (typeof savedAt !== 'number' || !Number.isFinite(savedAt)
      || savedAt <= 0 || savedAt > Date.now()
      || !Array.isArray(repos) || !repos.every(isRepository)) return null;
    return { savedAt, repos };
  } catch {
    return null;
  }
}

async function loadRepositories(): Promise<{ repos: GitHubRepo[]; stale: boolean }> {
  const cache = readCache();
  if (cache && Date.now() - cache.savedAt < cacheDuration) {
    return { repos: cache.repos, stale: false };
  }
  try {
    const repos = await fetchRepositories();
    if (!repos.every(isRepository)) throw new Error('GitHub 專案資料格式不正確');
    try {
      localStorage.setItem(cacheKey, JSON.stringify({ savedAt: Date.now(), repos }));
    } catch {}
    return { repos, stale: false };
  } catch (error) {
    if (cache) return { repos: cache.repos, stale: true };
    throw error;
  }
}

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
    const { repos, stale } = await loadRepositories();
    list.replaceChildren(...repos.map(createRepository));
    status.textContent = repos.length === 0 ? '目前沒有公開專案' : `共 ${repos.length} 個公開專案`;
    if (stale) status.textContent += '（更新失敗，目前顯示先前快取資料）';
  } catch (error: unknown) {
    status.textContent = error instanceof Error && error.name !== 'TimeoutError' && error.name !== 'TypeError'
      ? error.message
      : '無法連線至GitHub';
  } finally {
    list.setAttribute('aria-busy', 'false');
  }
}