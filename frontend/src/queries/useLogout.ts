import { logOutCurentUser } from "@/services/localUserService";
import { useCurrentUserSetter } from "@/stores/userSlice";

export function useLogout() {
  const setCurrentUser = useCurrentUserSetter();
  return {
    logout: () => {
      logOutCurentUser();
      setCurrentUser(null);
    },
  };
}
