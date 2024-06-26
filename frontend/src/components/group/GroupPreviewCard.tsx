import { GroupSocialMedia } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/Card";
import SocialMediaLogo from "../ui/SocialMediaLogo";
import { Users } from "lucide-react";

interface GroupPreviewCardProps {
  name: string;
  slogan?: string;
  shortDescription: string;
  numberOfMembers: number;
  primarySocialMedia: GroupSocialMedia;
  smallImage?: string;
}

export default function GroupPreviewCard({
  name,
  slogan,
  shortDescription,
  numberOfMembers,
  primarySocialMedia,
  smallImage,
}: GroupPreviewCardProps) {
  return (
    <Card className="hover:bg-stone-100 cursor-pointer">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{slogan}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row">
          <img
            src={
              smallImage ||
              "https://placehold.co/100?text=" +
              name.split(" ").slice(0, 2).join("+") +
              "&font=montserrat"
            }
            alt={`Group image ${name}`}
          />
          <span className="ml-4">{shortDescription}</span>
        </div>
      </CardContent>
      <CardFooter className="flex flex-row justify-between">
        <div className="flex items-center text-gray-600">
          <Users />
          <span className="text-sm ml-1">{numberOfMembers}</span>
        </div>
        <a href={primarySocialMedia.link}>
          <SocialMediaLogo
            className="w-8"
            media={primarySocialMedia.socialMediaName}
          />
        </a>
      </CardFooter>
    </Card>
  );
}
