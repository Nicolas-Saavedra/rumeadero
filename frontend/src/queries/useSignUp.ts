import { registerUser } from "@/services/userService";
import { useDialogSetterWithMeta } from "@/stores/dialogSlice";
import { ClientResponseError } from "pocketbase";
import { useMutation } from "react-query";

type OnErrorFunction = (error: ClientResponseError) => void;

export function useSignUp(
  username: string,
  email: string,
  password: string,
  onError: OnErrorFunction,
) {
  const setDialogAndMeta = useDialogSetterWithMeta();

  const { mutate } = useMutation(registerUser, {
    onSuccess: (model) => {
      setDialogAndMeta("email", {
        id: model.id,
        email: email,
        password: password,
      });
    },
    onError: onError,
  });
  return () => mutate({ username, email, password });
}
