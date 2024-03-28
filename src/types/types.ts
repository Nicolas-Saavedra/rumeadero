export type ForumPost = {
  author?: string;
  title: string;
  likes: number;
  content: string;
  timestamp: Date;
  image?: string;
  imageAlt?: string;
};

export type Group = {
  owner?: string;
  name: string;
  description: string;
  numberMembers: string;
  tags: string[];
  imageUrl: string;
};
