import { pb } from "@/lib/pocketbase";
import { Tag } from "@/types";

export type ForumPostFilterCondition = "new" | "trending" | "hot";

// TODO: Make filters affect backend properly
export async function retrievePosts(
  filter: ForumPostFilterCondition,
  tags: Tag[],
  page: number,
) {
  await pb.collection("forum_posts").getList();
}
