import ForumHeader from "@/components/forum/ForumHeader";
import ForumBody from "@/components/forum/ForumBody";

export default function Foro() {
  return (
    <div className="py-8 pl-3 md:pl-6 pr-10 md:pr-16">
      <ForumHeader />
      <ForumBody />
    </div>
  );
}
