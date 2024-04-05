import { GroupId } from "./groups";
import { ImageUrl, Integer } from "./primitives";

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
