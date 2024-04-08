import { ImageUrl, SocialMedia, ResourceUrl, Integer } from "./primitives";
import { PublicUser } from "./user";

// Represents a forum post identifier
export type GroupPostId = string;
// Represents a group identifier
export type GroupId = string;

export type GroupSimple = {
  id: GroupId;
  name: string;
  owner?: PublicUser;
  shortDescription: string;
  smallImage?: ImageUrl;
  primarySocialMedia: GroupSocialMedia;
  socialMedia: GroupSocialMedia[];
  isMember: boolean;
  numberOfMembers: Integer;
  fullDescription: string;
  imageBanner: string;
};

export type Group = GroupSimple & {
  posts: GroupPost[];
};

export type GroupPost = {
  id: GroupPostId;
  created: Date;
  owner: PublicUser;
  title: string;
  content: string;
  image?: ImageUrl;
};

export type GroupSocialMedia = {
  socialMediaName: SocialMedia;
  link: ResourceUrl;
};
