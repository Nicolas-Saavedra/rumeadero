import { Bookmark, Flag, Heart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/Card";

import dateFormatter from "dayjs";
import { useState } from "react";
import { PublicUser } from "@/types";

interface ForumPreviewCardProps {
  author?: PublicUser;
  title: string;
  content: string;
  numberOfLikes: number;
  timestamp: Date;
  image?: string;
}

export default function ForumDetailCard({
  author,
  title,
  content,
  numberOfLikes,
  timestamp,
}: ForumPreviewCardProps) {
  const [like, setLike] = useState(false);
  const [localNumberOfLikes, setLocalNumebrOfLikes] = useState(numberOfLikes);
  const [bookmark, setBookmark] = useState(false);
  const [report, setReport] = useState(false);

  function sendLike() {
    setLocalNumebrOfLikes((state) => state + 1 + +like * -2);
    setLike(!like);
  }

  function sendBookmark() {
    setBookmark(!bookmark);
  }

  function sendReport() {
    setReport(!report);
  }

  return (
    <Card className="min-h-64 relative">
      <CardHeader className="mb-8">
        <CardTitle className="text-3xl mb-1">{title}</CardTitle>
        <CardDescription className="text-lg">
          {author ? `Creado por ${author.username}` : "Creado anonimamente"},{" "}
          {formatDateProperly(timestamp)}
        </CardDescription>
      </CardHeader>
      <CardContent className="mb-8">
        <span className="text-2xl">{content}</span>
      </CardContent>
      <div>
        <hr className="my-3 h-[1px] bg-stone-200 border-none" />
        <div className="flex flex-row w-full items-center justify-between px-6 mb-4">
          <div className="flex flex-row">
            <div
              className="flex flex-row group items-center"
              onClick={sendLike}
            >
              <Heart
                className={
                  "text-gray-500 group-hover:scale-90 duration-300 size-7 " +
                  (like && "text-pink-400")
                }
              />
              <span
                className={
                  "text-gray-500 ml-2 duration-300 text-xl " +
                  (like && "text-pink-400")
                }
              >
                {localNumberOfLikes}
              </span>
            </div>
            <Bookmark
              className={
                "text-gray-500 ml-6 hover:scale-90 duration-300 size-7 " +
                (bookmark && "text-yellow-500")
              }
              onClick={sendBookmark}
            />
          </div>
          <Flag
            className={
              "text-gray-500 ml-3 hover:scale-90 duration-300 size-7 " +
              (report && "text-red-400")
            }
            onClick={sendReport}
          />
        </div>
      </div>
    </Card>
  );
}

function formatDateProperly(dateToFormat: Date) {
  const currentDate = new Date();
  if (
    dateToFormat.getDate() != currentDate.getDate() ||
    dateToFormat.getMonth() != currentDate.getFullYear() ||
    dateToFormat.getFullYear() != currentDate.getFullYear()
  ) {
    return dateFormatter(dateToFormat).format("MMM DD");
  }
  return `Today, ${dateFormatter(dateToFormat).format("HH:mm")}`;
}
