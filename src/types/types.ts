export type ForumPost = {
  author?: string;
  title: string;
  likes: number;
  content: string;
  timestamp: Date;
  image?: string;
  imageAlt?: string;
};

export type GroupPreview = {
  owner?: string;
  name: string;
  description: string;
  numberMembers: string;
  tags: string[];
  primarySocialMedia: string;
  socialMedia: string[];
  imageUrl: string;
};
