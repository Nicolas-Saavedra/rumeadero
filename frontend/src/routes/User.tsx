import { UserBody } from "@/components/user/UserBody";
import { UserHeader } from "@/components/user/UserHeader";
import { useCurrentUser } from "@/stores/userSlice";

export function User() {
  const user = useCurrentUser(); // TODO: Force route to fetch user by id, unless self user, in which case, we might be able to cache
  return (
    <div className="flex w-full flex-col">
      <UserHeader user={user!} />
      <UserBody user={user!} />
    </div>
  );
}
