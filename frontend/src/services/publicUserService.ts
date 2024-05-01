import { createAvatar } from "@dicebear/core";
import { identicon } from "@dicebear/collection";
import { toFormData } from "@/lib/utils";
import { PublicUser } from "@/types";
import { pb } from "../lib/pocketbase";

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

export async function fetchUser(userId: string) {
  return await pb.collection("users").getOne<PublicUser>(userId);
}

export function getAuthStoreUser() {
  if (pb.authStore.isValid) {
    return pb.authStore.model as PublicUser;
  }
  return null;
}

export async function requestVerificationUser(email: string) {
  await pb.collection("users").requestVerification(email);
}

export async function sendVerificationUser(token: string) {
  await pb.collection("users").confirmVerification(token);
}

export async function notifyUserWasVerified(
  userId: string,
  setter: (verified: boolean) => void,
) {
  await pb.collection("users").subscribe<PublicUser>(userId, (data) => {
    setter(data.record.verified);
  });
}

export async function removeVerificationListener(userId: string) {
  await pb.collection("users").unsubscribe(userId);
}

export async function loginWithEmailOrName(
  emailOrName: string,
  password: string,
) {
  return await pb
    .collection("users")
    .authWithPassword<PublicUser>(emailOrName, password);
}

export function logOutCurentUser() {
  pb.authStore.clear();
}
