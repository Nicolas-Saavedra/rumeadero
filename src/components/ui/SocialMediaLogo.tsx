import { SocialMedia } from "@/types/types";
import { Users } from "lucide-react";

interface SocialMediaLogoProps {
  className?: string;
  media: SocialMedia;
}

export default function SocialMediaLogo({
  className,
  media,
}: SocialMediaLogoProps) {
  return media === "private" ? (
    <Users className={className} />
  ) : (
    <img className={className} src={`./${media}.svg`} alt={`${media} logo`} />
  );
}
