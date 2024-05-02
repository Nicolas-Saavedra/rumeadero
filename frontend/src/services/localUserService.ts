import { SimpleLocation, UserSettings } from "@/types";
import { pb } from "@/lib/pocketbase";
import { createAvatar } from "@dicebear/core";
import { identicon } from "@dicebear/collection";
import { toFormData } from "@/lib/utils";

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

interface RegisterUserParams {
  username: string;
  email: string;
  password: string;
}

export async function registerUser({
  username,
  email,
  password,
}: RegisterUserParams) {
  const recordToAdd = {
    username,
    email,
    emailVisibility: false,
    password,
    passwordConfirm: password,
  };
  const avatarSvg = createAvatar(identicon, {
    seed: username + email,
  }).toString();
  const avatarBlob = new Blob([avatarSvg], { type: "image/svg+xml" });
  const formData = toFormData(recordToAdd);
  formData.append("avatar", avatarBlob);
  return await pb.collection("users").create(formData);
}

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
