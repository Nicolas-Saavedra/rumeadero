import { Heart } from "lucide-react";

interface ForumDetailCommentProps {
  content: string;
  liked: boolean;
  numberOfLikes: number;
}

export default function ForumDetailComment({
  content,
  liked,
  numberOfLikes,
}: ForumDetailCommentProps) {
  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <img
          src="https://placehold.co/50"
          alt="User icon"
          className="rounded-full"
        />
        <span className="ml-6 text-[0.95rem]">{content}</span>
      </div>
      <div className="flex items-center w-12 justify-between group">
        <Heart className="size-6 text-stone-500" />
        <span className="w-5 px-1 text-center text-sm text-stone-500">
          {numberOfLikes}
        </span>
      </div>
    </div>
  );
}
