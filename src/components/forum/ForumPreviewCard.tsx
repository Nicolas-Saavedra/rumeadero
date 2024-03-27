import { Bookmark, Heart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/Card";

import dateFormatter from "dayjs";
import { useState } from "react";

const WORD_COUNT_PREVIEW_LIMIT = 40;

interface ForumPreviewCardProps {
  author?: string;
  title: string;
  content: string;
  timestamp: Date;
  image?: string;
  imageAlt?: string;
}

export default function ForumPreviewCard({
  author,
  title,
  content,
  timestamp,
}: ForumPreviewCardProps) {
  const [like, setLike] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  return (
    <Card className="min-h-44 relative">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {author ? `Creado por ${author}` : "Creado anonimamente"},{" "}
          {formatDateProperly(timestamp)}
        </CardDescription>
      </CardHeader>
      <CardContent className="mb-12">
        <span>{formatContentPreview(content)}</span>
      </CardContent>
      <div className="absolute bottom-4 left-6">
        <div className="flex flex-row">
          <Heart
            className={
              "text-gray-500 hover:scale-90 duration-300 " +
              (like && "text-red-400")
            }
            onClick={() => setLike(!like)}
          />
          <Bookmark
            className={
              "text-gray-500 ml-3 hover:scale-90 duration-300 " +
              (bookmark && "text-green-400")
            }
            onClick={() => setBookmark(!bookmark)}
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
