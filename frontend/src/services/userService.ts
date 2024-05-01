import { SimpleLocation, UserSettings } from "@/types";
import { pb } from "@/lib/pocketbase";

type PrivateUserDetail = {
  location?: SimpleLocation;
  settings: UserSettings;
};

type RawUserStatistics = {
  groups: number;
  likes_this_week: number;
  comments_this_week: number;
  likes_comparison_result: 1 | 0 | -1;
  comments_comparison_result: 1 | 0 | -1;
};

export async function fetchUserPrivate(userId: string) {
  return await pb
    .collection("users_private")
    .getFirstListItem<PrivateUserDetail>(`user="${userId}"`);
}

export async function fetchUserStatistics(userId: string) {
  return await pb
    .collection("users_statistics")
    .getOne<RawUserStatistics>(userId);
}
