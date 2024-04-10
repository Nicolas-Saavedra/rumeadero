import Pocketbase from "pocketbase";
import { createAvatar } from "@dicebear/core";
import { identicon } from "@dicebear/collection";
import { toFormData } from "@/lib/utils";
import { PublicUser } from "@/types";

type RegisterUserParams = {
  username: string;
  email: string;
  password: string;
};

async function registerUser(
  pb: Pocketbase,
  { username, email, password }: RegisterUserParams,
) {
  const recordToAdd = {
    username,
    email,
    emailVisibility: true,
    password,
    passwordConfirm: password,
  };
  const avatarSvg = createAvatar(identicon, {
    seed: username + email,
  }).toString();
  const avatarBlob = new Blob([avatarSvg], { type: "image/svg+xml" });
  const formData = toFormData(recordToAdd);
  formData.append("avatar", avatarBlob);
  await pb.collection("users").create(formData);
}

async function fetchUser(pb: Pocketbase, userId: string): Promise<PublicUser> {
  return await pb.collection("users").getOne(userId);
}
