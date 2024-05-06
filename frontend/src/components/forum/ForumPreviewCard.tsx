import { Bookmark, Flag, Heart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/Card";

import { useState } from "react";
import { PublicUser } from "@/types";
import { formatDateShortened } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const WORD_COUNT_PREVIEW_LIMIT = 40;

interface ForumPreviewCardProps {
  id: string;
  author?: PublicUser;
  title: string;
  content: string;
  liked: boolean;
  numberOfLikes: number;
  timestamp: Date;
  image?: string;
}

export default function ForumPreviewCard({
  id,
  author,
  title,
  content,
  liked,
  numberOfLikes,
  timestamp,
}: ForumPreviewCardProps) {
  const [like, setLike] = useState(liked);
  const [localNumberOfLikes, setLocalNumberOfLikes] = useState(numberOfLikes);
  const [bookmark, setBookmark] = useState(false);
  const [report, setReport] = useState(false);
  const navigate = useNavigate();

  function sendLike() {
    setLocalNumberOfLikes((state) => state + 1 + +like * -2); // Do not be afraid, for I am scared as well
    setLike(!like);
  }

  function sendBookmark() {
    setBookmark(!bookmark);
  }

  function sendReport() {
    setReport(!report);
  }

  return (
    <Card className="min-h-64 relative hover:bg-slate-100 hover:cursor-pointer">
      <CardHeader onClick={() => navigate(`/foro/${id}`)}>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>
          {author ? `Creado por ${author.username}` : "Creado anonimamente"},{" "}
          {formatDateShortened(timestamp)}
        </CardDescription>
      </CardHeader>
      <CardContent onClick={() => navigate(`/foro/${id}`)}>
        <span className="text-lg">{formatContentPreview(content)}</span>
      </CardContent>
      <CardFooter>
        <div className="flex flex-row w-full items-center justify-between">
          <div className="flex flex-row">
            <div className="flex flex-row group" onClick={sendLike}>
              <Heart
                className={
                  "text-gray-500 group-hover:scale-90 duration-300 size-7 " +
                  (like && "text-pink-400")
                }
              />
              <span
                className={
                  "text-gray-500 ml-2 duration-300 text-lg " +
                  (like && "text-pink-400")
                }
              >
                {localNumberOfLikes}
              </span>
            </div>
            <Bookmark
              className={
                "text-gray-500 ml-3 hover:scale-90 duration-300 size-7 " +
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
      </CardFooter>
    </Card>
  );
}

function formatContentPreview(content: string) {
  const words = content.split(" ");
  if (words.length > WORD_COUNT_PREVIEW_LIMIT) {
    return (
      words
        .slice(0, WORD_COUNT_PREVIEW_LIMIT)
        .reduce((word, acc) => acc + " " + word) + "..."
    );
  }
  return content;
}
