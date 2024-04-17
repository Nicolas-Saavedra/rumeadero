import { ImageUrl } from "./primitives";

export type PublicUser = {
  id: string;
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
