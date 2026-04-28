export interface GitHubDiscussion {
  id: string;
  title: string;
  body: string;
  author: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
  category: {
    name: string;
    emoji: string;
  };
  created_at: string;
  updated_at: string;
  comments: number;
  reactions: {
    total_count: number;
  };
  html_url: string;
  labels: Array<{
    name: string;
    color: string;
  }>;
}

export interface GitHubDiscussionsResponse {
  available: boolean;
  message: string | null;
  totalCount: number | null;
  discussions: GitHubDiscussion[];
  fetchedAt: string | null;
}
