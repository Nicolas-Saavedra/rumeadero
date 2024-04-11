import { createAvatar } from "@dicebear/core";
import { identicon } from "@dicebear/collection";
import { toFormData } from "@/lib/utils";
import { PublicUser } from "@/types";
import { pb } from "../lib/pocketbase";

async function registerUser(username: string, email: string, password: string) {
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
  return await pb.collection("users").create(formData);
}

async function fetchUser(userId: string) {
  return await pb.collection("users").getOne<PublicUser>(userId);
}

async function requestVerificationUser(email: string) {
  pb.collection("users").requestVerification(email);
}

async function sendVerificationUser(token: string) {
  pb.collection("users").confirmVerification(token);
}

async function notifyUserWasVerified(
  userId: string,
  setter: (verified: boolean) => void,
) {
  pb.collection("users").subscribe<PublicUser>(userId, (data) => {
    setter(data.record.verified);
  });
}

async function loginWithEmailOrName(emailOrName: string, password: string) {
  pb.collection("users").authWithPassword<PublicUser>(emailOrName, password);
}
