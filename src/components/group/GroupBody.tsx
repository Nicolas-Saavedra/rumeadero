import { GroupPreview } from "@/types";
import GroupPreviewCard from "./GroupPreviewCard";

export default function GroupBody() {
  const groups: GroupPreview[] = [
    {
      id: "1",
      name: "Programming Club",
      shortDescription:
        "A community for programmers to collaborate and learn together.",
      numberMembers: 150,
      primarySocialMedia: {
        socialMediaName: "discord",
        link: "https://discord.gg/programmingclub",
      },
      socialMedia: [
        {
          socialMediaName: "whatsapp",
          link: "https://chat.whatsapp.com/programmingclub",
        },
        {
          socialMediaName: "telegram",
          link: "https://t.me/programmingclub",
        },
      ],
    },
    {
      id: "2",
      name: "Art Enthusiasts",
      shortDescription:
        "A group for artists to share their work and discuss techniques.",
      numberMembers: 80,
      primarySocialMedia: {
        socialMediaName: "telegram",
        link: "https://t.me/artenthusiasts",
      },
      socialMedia: [],
    },
  ];
  return (
    <div className="grid grid-cols-2 mt-12 gap-6">
      {groups.map((group, i) => (
        <GroupPreviewCard key={i} {...group} />
      ))}
    </div>
  );
}
