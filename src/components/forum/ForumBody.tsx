import ForumPreviewCard from "./ForumPreviewCard";

export default function ForumBody() {
  const forumPosts = [
    {
      title: "Introduction to JavaScript",
      content:
        "In this comprehensive guide, we delve deep into the world of JavaScript programming. From basic syntax to advanced concepts like closures and prototypes, you'll gain a solid understanding of how JavaScript works.",
      timestamp: new Date("2024-03-25T12:30:00"),
    },
    {
      author: "Jane Smith",
      title: "Advanced CSS Techniques",
      content:
        "Take your CSS skills to the next level with this in-depth tutorial. We cover everything from Flexbox and Grid layouts to CSS animations and transitions, equipping you with the tools to create stunning web designs.",
      timestamp: new Date("2024-03-20T09:45:00"),
    },
    {
      title: "React Hooks Tutorial",
      content:
        "Discover the power of React Hooks and revolutionize your React development workflow. With step-by-step examples and best practices, this tutorial is perfect for both beginners and experienced React developers.",
      timestamp: new Date("2024-03-26T15:00:00"),
    },
    {
      author: "Bob Williams",
      title: "Node.js Backend Development",
      content: "Build robust ",
      timestamp: new Date("2024-03-22T18:20:00"),
    },
    {
      author: "Eva Brown",
      title: "MongoDB Basics",
      content: "Get started",
      timestamp: new Date("2024-03-24T11:10:00"),
    },
  ];

  console.log(forumPosts);

  return (
    <div className="grid grid-cols-3 mt-12 gap-6">
      {forumPosts.map((post) => (
        <ForumPreviewCard {...post} />
      ))}
    </div>
  );
}
