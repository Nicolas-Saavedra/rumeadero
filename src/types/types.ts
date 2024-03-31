// Must follow firebase UId rules. Represents a forum post identifier
export type ForumPostId = string;
// Must follow firebase UId rules. Represents a group identifier
export type GroupId = string;
// Must always be a whole number
export type Integer = number;
// Must be a single word. Represents a tag for a post
export type Tag = string;
// Must be a valid image file url.
export type ImageUrl = string;
// Must be a valid url.
export type ResourceUrl = string;
// Represents a primary social media source
export type SocialMedia =
  | "discord"
  | "whatsapp"
  | "telegram"
  | "facebook"
  | "private";

export type ForumPost = {
  id: ForumPostId;
  author?: string;
  title: string;
  content: string;
  likes: Integer;
  tags: Tag[];
  timestamp: Date;
  image?: ImageUrl;
};

export type GroupPreview = {
  id: GroupId;
  name: string;
  shortDescription: string;
  numberMembers: Integer;
  primarySocialMedia: GroupSocialMedia;
  socialMedia: GroupSocialMedia[];
  smallImage?: ImageUrl;
};

export type Group = GroupPreview & {
  owner: string;
  creationDate: Date;
  fullDescription: string;
  imageBanner: string;
  lastFivePublicPosts: GroupPost[];
};

export type GroupPost = {
  id: ForumPostId;
  author?: string;
  title: string;
  content: string;
  timestamp: Date;
  image?: ImageUrl;
};

export type GroupSocialMedia = {
  socialMediaName: SocialMedia;
  link: ResourceUrl;
};

export type PublicUser = {
  username: string;
  profilePicture: ImageUrl;
  publicGroups: GroupId[];
  lastActivity: Date;
};

export type User = PublicUser & {
  privateGroups: GroupId[];
  statistics: {
    numberOfLikesObtained: Integer;
    numberOfPostsWeek: Integer;
    numberLikesGiven: Integer;
  };
};
