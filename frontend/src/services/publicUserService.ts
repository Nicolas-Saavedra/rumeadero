import { PublicUser } from "@/types";
import { pb } from "../lib/pocketbase";

export async function retrievePublicUser(userId: string) {
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
