import { ImageUrl } from "./primitives";

export type PublicUser = {
  username: string;
  verified: boolean;
  avatar: ImageUrl;
  lastActivity: Date;
};

export type User = PublicUser & {
  direction?: {
    lat: number;
    long: number;
  };
};
