import { ImageUrl, Integer, Tag } from "./primitives";
import { PublicUser } from "./user";

// Represents a forum post identifier
export type ForumPostId = string;

export type ForumPostSimple = {
  id: ForumPostId;
  author?: PublicUser;
  title: string;
  content: string;
  liked: boolean;
  numberOfLikes: Integer;
  tags: Tag[];
  timestamp: Date;
  image?: ImageUrl;
};

export type ForumPost = ForumPostSimple & {
  comments: ForumPostComment[];
};

export type ForumPostComment = {
  id: ForumPostId;
  author?: PublicUser;
  content: string;
  liked: boolean;
  numberOfLikes: Integer;
};
