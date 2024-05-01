import { ImageUrl, Integer, SimpleLocation } from "./primitives";

export type PublicUser = {
  id: string;
  created: string;
  username: string;
  verified: boolean;
  avatar: ImageUrl;
  lastActivity: Date;
};

export type User = PublicUser & {
  settings: UserSettings;
  direction?: SimpleLocation;
  statistics: {
    numberOfLikesThisWeek: Statistic;
    numberOfCommentsThisWeek: Statistic;
    numberOfGroupsPartOf: Integer;
  };
};

export type UserSettings = {
  theme: "light" | "dark";
  providers: Provider[];
};

export type Statistic = {
  value: Integer;
  increase: 1 | 0 | -1; // increase, equal or decrease
};

export type Provider = "google" | "microsoft";
