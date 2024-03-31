import ForumHeader from "@/components/forum/ForumHeader";
import ForumBody from "@/components/forum/ForumBody";

export default function Foro() {
  return (
    <div className="py-8 pl-4 md:pl-8 pr-12 md:pr-24">
      <ForumHeader />
      <ForumBody />
    </div>
  );
}
