import { User } from "@/types";
import { UserSettings } from "./UserSettings";
import { UserStatistics } from "./UserStatistics";

interface UserBodyProps {
  user: User;
}

export function UserBody({ user }: UserBodyProps) {
  return (
    <div className="flex flex-row mt-8 mb-12 gap-4">
      <UserSettings user={user} />
      <UserStatistics user={user} />
    </div>
  );
}
