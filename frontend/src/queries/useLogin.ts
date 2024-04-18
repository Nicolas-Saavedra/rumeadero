import { loginWithEmailOrName } from "@/services/userService";
import { useDialogSetterWithMeta } from "@/stores/dialogSlice";
import { useCurrentUserSetter } from "@/stores/userSlice";
import { ClientResponseError } from "pocketbase";
import { useMutation } from "react-query";

export function useLogin(email: string, password: string) {
  const setDialogWithMeta = useDialogSetterWithMeta();
  const setCurrentUser = useCurrentUserSetter();
  const { mutate } = useMutation(
    async ({ email, password }: { email: string; password: string }) =>
      await loginWithEmailOrName(email, password),
    {
      onSuccess: (response) => {
        setDialogWithMeta("none", null);
        setCurrentUser(response.record);
      },
      onError: (error: ClientResponseError) => {
        if (error.response.affectedUser) {
          setDialogWithMeta("email", {
            id: error.response.affectedUser,
            email: email,
            password: password,
          });
        }
      },
    },
  );
  return () => mutate({ email, password });
}
