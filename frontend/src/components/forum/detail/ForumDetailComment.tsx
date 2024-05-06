import { Heart } from "lucide-react";
import { useState } from "react";

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
  const [localLiked, setLocalLiked] = useState(liked);
  const [localLikes, setLocalLikes] = useState(numberOfLikes);

  function sendLike() {
    setLocalLikes((state) => state + 1 + +localLiked * -2);
    setLocalLiked((state) => !state);
  }
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
      <button
        className="flex items-center w-12 justify-between group"
        onClick={sendLike}
      >
        <Heart
          className={
            "size-6 text-stone-500 group-hover:scale-90 duration-300 " +
            (localLiked && "text-red-300")
          }
        />
        <span
          className={
            "w-5 px-1 text-center text-sm text-stone-500 " +
            (localLiked && "text-red-300")
          }
        >
          {localLikes}
        </span>
      </button>
    </div>
  );
}
