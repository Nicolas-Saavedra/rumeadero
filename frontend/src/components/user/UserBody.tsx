import { PublicUser } from "@/types";
import { UserSettings } from "./UserSettings";
import { UserStatistics } from "./UserStatistics";

interface UserBodyProps {
  user: PublicUser;
}

export function UserBody({ user }: UserBodyProps) {
  return (
    <div className="flex flex-row mt-8 gap-4">
      <UserSettings />
      <UserStatistics />
    </div>
  );
}
