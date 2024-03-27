import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/Card";

import dateFormatter from "dayjs";

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
  image,
  imageAlt,
}: ForumPreviewCardProps) {
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
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {author ? `Creado por ${author}` : "Creado anonimamente"},{" "}
          {formatDateProperly(timestamp)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {image ? (
          <img src={image} alt={imageAlt} />
        ) : (
          <span>{content.substring(0, 50)}</span>
        )}
      </CardContent>
    </Card>
  );
}
