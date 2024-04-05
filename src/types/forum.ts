import { ImageUrl, Integer, Tag } from "./primitives";

// Represents a forum post identifier
export type ForumPostId = string;

export type ForumPostPreview = {
  id: ForumPostId;
  author?: string;
  title: string;
  content: string;
  likes: Integer;
  tags: Tag[];
  timestamp: Date;
  image?: ImageUrl;
};

export type ForumPost = ForumPostPreview & {
  comments: ForumPostComment[];
};

export type ForumPostComment = {};
