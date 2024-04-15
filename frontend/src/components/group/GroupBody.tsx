import { GroupSimple } from "@/types";
import GroupPreviewCard from "./GroupPreviewCard";

export default function GroupBody() {
  const groups: GroupSimple[] = [
    {
      id: "1",
      name: "Programming Club",
      shortDescription:
        "A community for programmers to collaborate and learn together.",
      fullDescription: "",
      imageBanner: "https://placehold.co/800x400",
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
      isMember: false,
      numberOfMembers: 30,
    },
    {
      id: "2",
      name: "Art Enthusiasts",
      shortDescription:
        "A group for artists to share their work and discuss techniques.",
      fullDescription: "A group for artists to share their work and discuss techniques.",
      imageBanner: "https://placehold.co/800x400",
      primarySocialMedia: {
        socialMediaName: "telegram",
        link: "https://t.me/artenthusiasts",
      },
      socialMedia: [],
      isMember: true,
      numberOfMembers: 30,
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
