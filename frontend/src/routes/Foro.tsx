import ForumHeader from "@/components/forum/ForumHeader";
import ForumBody from "@/components/forum/ForumBody";
import { useState } from "react";
import { ForumPostSimple } from "@/types";

export default function Foro() {
  const [posts, setPosts] = useState<ForumPostSimple[]>([
    {
      id: "1",
      title: "Introduction to JavaScript",
      content:
        "In this comprehensive guide, we delve deep into the world of JavaScript programming. From basic syntax to advanced concepts like closures and prototypes, you'll gain a solid understanding of how JavaScript works.",
      liked: false,
      tags: ["course", "learning"],
      numberOfLikes: 0,
      timestamp: new Date("2024-03-25T12:30:00"),
    },
    {
      id: "2",
      title: "Advanced CSS Techniques",
      content:
        "Take your CSS skills to the next level with this in-depth tutorial. We cover everything from Flexbox and Grid layouts to CSS animations and transitions, equipping you with the tools to create stunning web designs.",
      liked: false,
      tags: ["course", "learning"],
      numberOfLikes: 3,
      timestamp: new Date("2024-03-20T09:45:00"),
    },
    {
      id: "3",
      title: "React Hooks Tutorial",
      content:
        "Discover the power of React Hooks and revolutionize your React development workflow. With step-by-step examples and best practices, this tutorial is perfect for both beginners and experienced React developers.",
      liked: false,
      tags: ["course", "learning"],
      numberOfLikes: 10,
      timestamp: new Date("2024-03-26T15:00:00"),
    },
  ]); // TODO: Fetching logic for the posts in general

  return (
    <div className="py-8 px-3 md:px-6">
      <ForumHeader />
      <ForumBody posts={posts} />
    </div>
  );
}
