// frontend/src/types/api.ts
export interface PostSummary {
    id: string;
    slug: string;
    title: string;
    excerpt: string | null;
    published_at: string;
    tags: string[];
}

export interface PostDetail extends PostSummary {
    content: string;        // HTML string
    updated_at: string;
    next: { slug: string; title: string } | null;
    prev: { slug: string; title: string } | null;
}

export interface ListPostsResponse {
    posts: PostSummary[];
    total: number;
}

export interface TagsResponse {
    tags: Array<{ name: string; count: number }>;
}