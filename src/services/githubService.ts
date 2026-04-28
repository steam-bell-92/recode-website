import type {
  GitHubDiscussionsResponse,
} from "../types/githubDiscussions";

// GitHub API service for fetching public organization metrics.
// Discussions are fetched through a server-side proxy so no token is exposed client-side.

export interface GitHubOrgStats {
  totalStars: number;
  totalForks: number;
  totalRepositories: number;
  totalContributors: number;
  publicRepositories: number;
  discussionsCount: number | null;
  lastUpdated: number;
}

export interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  stargazers_count: number;
  forks_count: number;
  contributors_url: string;
  archived: boolean;
  private: boolean;
}

export interface GitHubOrganization {
  login: string;
  id: number;
  public_repos: number;
  followers: number;
  following: number;
}

class GitHubService {
  private readonly ORG_NAME = "recodehive";
  private readonly CACHE_KEY = "github_org_stats";
  private readonly CACHE_DURATION = 30 * 60 * 1000; // 30 minutes in milliseconds
  private readonly BASE_URL = "https://api.github.com";
  private readonly DISCUSSIONS_API_URL = "/api/github-discussions";

  // === ADDED: include anonymous contributors configurable (default false)
  private includeAnonymousContributors = false;

  // Get headers for GitHub API requests
  private getHeaders(): Record<string, string> {
    return {
      Accept: "application/vnd.github.v3+json",
      "Content-Type": "application/json",
    };
  }

  // === ADDED: setter to toggle anonymous contributors inclusion
  setIncludeAnonymousContributors(value: boolean) {
    this.includeAnonymousContributors = value;
  }

  // Fetch with error handling and rate limit consideration
  private async fetchWithRetry(url: string, retries = 3): Promise<Response> {
    for (let i = 0; i < retries; i++) {
      try {
        const response = await fetch(url, {
          headers: this.getHeaders(),
        });

        if (response.status === 403) {
          // Rate limited - don't retry, just throw error
          console.warn("GitHub API rate limit exceeded");
          throw new Error("GitHub API rate limit exceeded");
        }

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        return response;
      } catch (error) {
        if (i === retries - 1) throw error;
        await new Promise((resolve) => setTimeout(resolve, 1000 * (i + 1)));
      }
    }
    throw new Error("Failed after retries");
  }

  // Get cached data if valid
  private getCachedData(): GitHubOrgStats | null {
    if (typeof window === "undefined") return null;

    try {
      const cached = localStorage.getItem(this.CACHE_KEY);
      if (!cached) return null;

      const data = JSON.parse(cached) as GitHubOrgStats;
      const now = Date.now();

      if (now - data.lastUpdated < this.CACHE_DURATION) {
        return data;
      }
    } catch (error) {
      console.warn("Error reading GitHub stats cache:", error);
      // Clear invalid cache
      localStorage.removeItem(this.CACHE_KEY);
    }

    return null;
  }

  // Cache data to localStorage
  private setCachedData(data: GitHubOrgStats): void {
    if (typeof window === "undefined") return;

    try {
      localStorage.setItem(
        this.CACHE_KEY,
        JSON.stringify({
          ...data,
          lastUpdated: Date.now(),
        }),
      );
    } catch (error) {
      console.warn("Error caching GitHub stats:", error);
    }
  }

  // Fetch organization basic info
  private async fetchOrganizationInfo(
    signal?: AbortSignal,
  ): Promise<GitHubOrganization> {
    const response = await fetch(`${this.BASE_URL}/orgs/${this.ORG_NAME}`, {
      headers: this.getHeaders(),
      signal,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch organization info: ${response.status}`);
    }

    return response.json();
  }

  // Fetch all public repositories for the organization
  private async fetchAllRepositories(
    signal?: AbortSignal,
  ): Promise<GitHubRepository[]> {
    const repositories: GitHubRepository[] = [];
    let page = 1;
    const perPage = 100;

    while (true) {
      const response = await fetch(
        `${this.BASE_URL}/orgs/${this.ORG_NAME}/repos?type=public&per_page=${perPage}&page=${page}&sort=updated`,
        {
          headers: this.getHeaders(),
          signal,
        },
      );

      if (!response.ok) {
        if (response.status === 403) {
          console.warn(
            "GitHub API rate limit exceeded while fetching repositories",
          );
          throw new Error("GitHub API rate limit exceeded");
        }
        throw new Error(`Failed to fetch repositories: ${response.status}`);
      }

      const repos: GitHubRepository[] = await response.json();

      if (repos.length === 0) break;

      repositories.push(...repos);

      if (repos.length < perPage) break;

      page++;
    }

    return repositories;
  }

  // Estimate contributors count (GitHub API doesn't provide org-wide contributor count)
  private async estimateContributors(
    repositories: GitHubRepository[],
    signal?: AbortSignal,
  ): Promise<number> {
    // For performance, we'll sample top repositories by stars/activity
    const topRepos = repositories
      .filter((repo) => !repo.archived && repo.stargazers_count > 0)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 10); // Sample top 10 repositories

    let totalContributors = 0;

    // Use parallel requests for better performance
    const contributorPromises = topRepos.map(async (repo) => {
      try {
        // === UPDATED: make anon param configurable based on class setting
        const anonParam = this.includeAnonymousContributors ? "true" : "false";
        const response = await fetch(
          `${this.BASE_URL}/repos/${repo.full_name}/contributors?per_page=1&anon=${anonParam}`,
          {
            headers: this.getHeaders(),
            signal,
          },
        );

        if (response.ok) {
          // Get total count from Link header if available
          const linkHeader = response.headers.get("Link");
          if (linkHeader) {
            const match = linkHeader.match(/page=(\d+)>; rel="last"/);
            if (match) {
              return parseInt(match[1], 10);
            }
          }

          // Fallback: count actual contributors
          const contributors = await response.json();
          return Array.isArray(contributors) ? contributors.length : 0;
        }
        return 0;
      } catch (error) {
        console.warn(`Error fetching contributors for ${repo.name}:`, error);
        return 0;
      }
    });

    const contributorCounts = await Promise.all(contributorPromises);

    // Estimate total unique contributors (with some overlap factor)
    const sumContributors = contributorCounts.reduce(
      (sum, count) => sum + count,
      0,
    );

    // Apply estimation factor for unique contributors across repos
    totalContributors = Math.round(sumContributors * 0.7); // Assume 30% overlap

    // NOTE: original code had a floor (e.g., Math.max(..., 140)). I kept behavior simple and returned the estimate.
    return totalContributors;
  }

  // Main method to fetch all organization statistics
  async fetchOrganizationStats(signal?: AbortSignal): Promise<GitHubOrgStats> {
    // Try to get cached data first
    const cached = this.getCachedData();
    if (cached) {
      return cached;
    }

    try {
      const [, repositories] = await Promise.all([
        this.fetchOrganizationInfo(signal),
        this.fetchAllRepositories(signal),
      ]);

      // Filter out archived repositories for active stats
      const activeRepos = repositories.filter((repo) => !repo.archived);

      // Calculate totals
      const totalStars = repositories.reduce(
        (sum, repo) => sum + repo.stargazers_count,
        0,
      );
      const totalForks = repositories.reduce(
        (sum, repo) => sum + repo.forks_count,
        0,
      );

      const totalContributors = await this.estimateContributors(
        activeRepos,
        signal,
      );

      const stats: GitHubOrgStats = {
        totalStars,
        totalForks,
        totalRepositories: repositories.length,
        publicRepositories: activeRepos.length,
        totalContributors,
        discussionsCount: null,
        lastUpdated: Date.now(),
      };

      // Cache the results
      this.setCachedData(stats);

      return stats;
    } catch (error) {
      console.error("Error fetching GitHub organization stats:", error);

      // Return fallback data if API fails
      const fallbackStats: GitHubOrgStats = {
        totalStars: 0,
        totalForks: 0,
        totalRepositories: 0,
        publicRepositories: 0,
        totalContributors: 0,
        discussionsCount: null,
        lastUpdated: Date.now(),
      };

      return fallbackStats;
    }
  }

  // Clear cache (useful for manual refresh)
  clearCache(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem(this.CACHE_KEY);
    }
  }

  // Get cache status
  getCacheStatus(): { cached: boolean; age: number; expiresIn: number } {
    const cached = this.getCachedData();
    if (!cached) {
      return { cached: false, age: 0, expiresIn: 0 };
    }

    const age = Date.now() - cached.lastUpdated;
    const expiresIn = Math.max(0, this.CACHE_DURATION - age);

    return { cached: true, age, expiresIn };
  }

  async fetchDiscussions(
    limit: number = 20,
    signal?: AbortSignal,
  ): Promise<GitHubDiscussionsResponse> {
    const response = await fetch(
      `${this.DISCUSSIONS_API_URL}?limit=${encodeURIComponent(limit)}`,
      {
        headers: {
          Accept: "application/json",
        },
        signal,
      },
    );

    const payload = (await response.json()) as GitHubDiscussionsResponse;

    if (!response.ok) {
      throw new Error(payload.message || "Failed to fetch GitHub discussions.");
    }

    return payload;
  }

  async fetchDiscussionsCount(signal?: AbortSignal): Promise<number | null> {
    try {
      const payload = await this.fetchDiscussions(1, signal);
      return payload.totalCount ?? null;
    } catch (error) {
      console.warn("Error fetching discussions count from proxy:", error);
      return null;
    }
  }
}

export const githubService = new GitHubService();
