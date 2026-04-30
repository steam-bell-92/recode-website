const ORG_NAME = "recodehive";
const DISCUSSIONS_REPO = "recode-website";
const DEFAULT_LIMIT = 20;
const UNAVAILABLE_MESSAGE =
  "GitHub Discussions are available only when a server-side GITHUB_TOKEN or DOCUSAURUS_GIT_TOKEN is configured.";

function getToken() {
  return process.env.GITHUB_TOKEN?.trim() || process.env.DOCUSAURUS_GIT_TOKEN?.trim() || "";
}

function parseLimit(limitParam) {
  const parsed = Number.parseInt(limitParam, 10);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return DEFAULT_LIMIT;
  }

  return Math.min(parsed, 50);
}

function mapDiscussion(discussion) {
  return {
    id: discussion.id,
    title: discussion.title || "Untitled discussion",
    body: discussion.body || "",
    author: {
      login: discussion.author?.login || "Unknown",
      avatar_url: discussion.author?.avatarUrl || "",
      html_url: discussion.author?.url || "",
    },
    category: {
      name: discussion.category?.name || "General",
      emoji: discussion.category?.emoji || "",
    },
    created_at: discussion.createdAt,
    updated_at: discussion.updatedAt,
    comments: discussion.comments?.totalCount || 0,
    reactions: {
      total_count: discussion.reactions?.totalCount || 0,
    },
    html_url: discussion.url,
    labels:
      discussion.labels?.nodes?.map((label) => ({
        name: label.name,
        color: label.color,
      })) || [],
  };
}

async function fetchGitHubDiscussions(token, limit) {
  const query = `
    query GetDiscussions($owner: String!, $name: String!, $first: Int!) {
      repository(owner: $owner, name: $name) {
        discussions(first: $first, orderBy: { field: UPDATED_AT, direction: DESC }) {
          totalCount
          nodes {
            id
            title
            body
            createdAt
            updatedAt
            url
            author {
              login
              avatarUrl
              url
            }
            category {
              name
              emoji
            }
            comments {
              totalCount
            }
            reactions {
              totalCount
            }
            labels(first: 10) {
              nodes {
                name
                color
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Accept: "application/vnd.github.v3+json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        owner: ORG_NAME,
        name: DISCUSSIONS_REPO,
        first: limit,
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`GitHub discussions request failed: ${response.status}`);
  }

  const payload = await response.json();

  if (payload.errors?.length) {
    const message = payload.errors.map((error) => error.message).join(", ");
    throw new Error(message || "GitHub discussions GraphQL query failed");
  }

  const discussions = payload.data?.repository?.discussions;

  return {
    available: true,
    message: null,
    totalCount: discussions?.totalCount ?? 0,
    discussions: (discussions?.nodes || []).map(mapDiscussion),
    fetchedAt: new Date().toISOString(),
  };
}

async function handler(req, res) {
  const token = getToken();

  if (!token) {
    res.setHeader("Cache-Control", "no-store");
    res.status(503).json({
      available: false,
      message: UNAVAILABLE_MESSAGE,
      totalCount: null,
      discussions: [],
      fetchedAt: null,
    });
    return;
  }

  try {
    const limit = parseLimit(req.query.limit);
    const data = await fetchGitHubDiscussions(token, limit);
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=300, stale-while-revalidate=600",
    );
    res.status(200).json(data);
  } catch (error) {
    res.setHeader("Cache-Control", "no-store");
    res.status(502).json({
      available: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to fetch GitHub discussions.",
      totalCount: null,
      discussions: [],
      fetchedAt: null,
    });
  }
}

module.exports = handler;
