import { logOutCurentUser } from "@/services/localUserService";
import { useCurrentUserSetter } from "@/stores/userSlice";

// Quite interesting how this doesn't require react-query since it's not a query lol
export function useLogout() {
  const setCurrentUser = useCurrentUserSetter();
  return {
    logout: () => {
      logOutCurentUser();
      setCurrentUser(null);
    },
  };
}
