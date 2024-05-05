import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { ForumPostComment } from "@/types";
import ForumDetailComment from "./ForumDetailComment";

interface ForumDetailCommentsProps {
  comments: ForumPostComment[];
}

export default function ForumDetailComments({
  comments,
}: ForumDetailCommentsProps) {
  return (
    <div className="mt-4">
      <Card>
        <CardContent>
          <div className="flex items-center mt-4 w-full">
            <img
              src="https://placehold.co/50"
              alt="User icon"
              className="rounded-full"
            />
            <Input
              className="ml-4 border-l-0 botder-r-0 border-t-0 shadow-none"
              placeholder="Ingresa con tu cuenta para dar tu opinion"
              disabled
            />
          </div>
          <hr className="mt-3 mb-6 h-[1px] bg-stone-200 border-none" />
          <div className="flex gap-5 flex-col">
            {comments.map((comment) => (
              <ForumDetailComment {...comment} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
