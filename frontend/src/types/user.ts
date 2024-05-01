import { ImageUrl } from "./primitives";

export type PublicUser = {
  id: string;
  created: string;
  username: string;
  verified: boolean;
  avatar: ImageUrl;
  lastActivity: Date;
};

export type User = PublicUser & {
  settings: {
    theme: "light" | "dark";
    providers: Provider[];
  };
  direction?: {
    lat: number;
    long: number;
  };
  statistics: {
    numberOfLikesPastWeek: Statistic;
    numberOfCommentsPastWeek: Statistic;
    memberOfGroups: number;
  };
};

export type Statistic = {
  value: number;
  increase: 1 | 0 | -1; // increase, equal or decrease
};

export type Provider = "google" | "microsoft";
