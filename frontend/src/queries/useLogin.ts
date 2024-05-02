import { loginWithEmailOrName } from "@/services/localUserService";
import {
  fetchUserPrivate,
  fetchUserStatistics,
} from "@/services/localUserService";
import { useDialogSetterWithMeta } from "@/stores/dialogSlice";
import { useCurrentUserSetter } from "@/stores/userSlice";
import { User } from "@/types";
import { ClientResponseError } from "pocketbase";
import { useQuery } from "react-query";

export function useLogin(email: string, password: string) {
  const setDialogWithMeta = useDialogSetterWithMeta();
  const setCurrentUser = useCurrentUserSetter();

  const { isLoading, error, data, refetch } = useQuery(
    ["login", email, password],
    async () => {
      try {
        const publicUserResponse = await loginWithEmailOrName(email, password);
        const [privateUserResponse, statisticsUserResponse] = await Promise.all(
          [
            await fetchUserPrivate(publicUserResponse.record.id),
            await fetchUserStatistics(publicUserResponse.record.id),
          ],
        );

        const currentUser: Partial<User> = publicUserResponse.record;

        currentUser.statistics = {
          numberOfLikesThisWeek: {
            value: statisticsUserResponse.likes_this_week,
            increase: statisticsUserResponse.likes_comparison_result,
          },
          numberOfCommentsThisWeek: {
            value: statisticsUserResponse.comments_this_week,
            increase: statisticsUserResponse.comments_comparison_result,
          },
          numberOfGroupsPartOf: statisticsUserResponse.groups,
        };

        currentUser.settings = privateUserResponse.settings;
        currentUser.direction = privateUserResponse.location;

        setDialogWithMeta("none", null);
        setCurrentUser(currentUser as User);
      } catch (error) {
        if ((error as ClientResponseError).response?.affectedUser) {
          setDialogWithMeta("email", {
            id: (error as ClientResponseError).response.affectedUser,
            email: email,
            password: password,
          });
        }
        throw error;
      }
    },
    {
      enabled: false, // Disable initial fetch
    },
  );

  const login = () => refetch();

  return { isLoading, error, data, login };
}
