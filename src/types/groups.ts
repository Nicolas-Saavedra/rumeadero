import { ImageUrl, Integer, SocialMedia, ResourceUrl } from "./primitives";

// Represents a forum post identifier
export type GroupPostId = string;
// Represents a group identifier
export type GroupId = string;

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
  id: GroupPostId;
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
