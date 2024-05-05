import ForumDetailCard from "@/components/forum/detail/ForumDetailCard";
import ForumDetailComments from "@/components/forum/detail/ForumDetailComments";
import { ForumDetailHeader } from "@/components/forum/detail/ForumDetailHeader";
import { ForumPost } from "@/types";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ForoDetail() {
  const { id } = useParams();
  const [currentPost, setCurrentPost] = useState<ForumPost>({
    id: "1",
    title: "Introduction to JavaScript",
    content:
      "In this comprehensive guide, we delve deep into the world of JavaScript programming. From basic syntax to advanced concepts like closures and prototypes, you'll gain a solid understanding of how JavaScript works.",
    liked: false,
    tags: ["course", "learning"],
    numberOfLikes: 0,
    timestamp: new Date("2024-03-25T12:30:00"),
    comments: [
      {
        id: "1",
        content:
          "This post is high quality and definitely worthy of being here. Praise",
        liked: false,
        numberOfLikes: 10,
      },
      {
        id: "2",
        content:
          "This post is low quality and definitely not worthy of being here. Ew",
        liked: false,
        numberOfLikes: 6,
      },
    ],
  });

  return (
    <div className="py-8 px-4 md:px-8">
      <ForumDetailHeader />
      <ForumDetailCard {...currentPost} />
      <ForumDetailComments />
    </div>
  );
}
