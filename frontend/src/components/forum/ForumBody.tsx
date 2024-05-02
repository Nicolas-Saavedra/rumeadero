import { ForumPostSimple } from "@/types";
import ForumPreviewCard from "./ForumPreviewCard";

interface ForumPostsProps {
  posts: ForumPostSimple[];
}

export default function ForumBody({ posts }: ForumPostsProps) {
  return (
    <div className="grid grid-cols-1 mt-8 gap-6">
      {posts.map((post, i) => (
        <ForumPreviewCard key={i} {...post} />
      ))}
    </div>
  );
}
