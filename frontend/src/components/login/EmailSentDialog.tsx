import { MailPlus } from "lucide-react";
import { DialogHeader, DialogTitle } from "../ui/Dialog";
import { useDialogMeta } from "@/stores/dialogSlice";
import { useEffect, useState } from "react";
import {
  loginWithEmailOrName,
  notifyUserWasVerified,
  removeVerificationListener,
  requestVerificationUser,
} from "@/services/publicUserService";
import { useDialogSetter } from "@/stores/dialogSlice";
import { ClientResponseError } from "pocketbase";
import { useCurrentUserSetter } from "@/stores/userSlice";

interface EmailSentMeta {
  id: string;
  email: string;
  password: string;
}

export default function EmailSentDialog() {
  const [time, setTime] = useState<number>(0);
  const setDialog = useDialogSetter();
  const setCurrentUser = useCurrentUserSetter();
  const meta = useDialogMeta<EmailSentMeta>();

  function createNewTimer() {
    setTime(15);
    try {
      requestVerificationUser(meta!.email);
    } catch (e) {
      const err = e as ClientResponseError;
      if (err.isAbort) {
        console.warn(
          "auto cancelled a client request, is this running as dev server?",
        );
      }
    }
    notifyUserWasVerified(meta!.id, recieveVerificationConfirmation);
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : prevTime));
    }, 1000);
    return () => {
      clearInterval(interval);
      removeVerificationListener(meta!.id);
    };
  }

  function sendConfirmationMail() {
    requestVerificationUser(meta!.email);
    setTime(15);
  }

  async function recieveVerificationConfirmation(verified: boolean) {
    if (verified) {
      const user = await loginWithEmailOrName(meta!.email, meta!.password);
      setCurrentUser(user.record);
      setDialog("none");
    }
  }

  useEffect(() => {
    if (!meta) {
      throw new Error(
        "This dialog was shown without any metadata having been provided. Please make sure to only \
        render this component with the dialog metadata supplied",
      );
    }
    const clearFunc = createNewTimer();
    return clearFunc;
  }, []);

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-2xl">
          Correo de verificacion enviado
        </DialogTitle>
      </DialogHeader>
      <div className="flex justify-center items-center">
        <MailPlus className="size-24 text-blue-500" />
      </div>
      <p>
        Hemos enviado un correo a{" "}
        <b>{meta?.email || "cargando@placeholder.com"}</b>. Revisa tu bandeja de
        entrada para verificar tu cuenta y luego vuelve a esta pagina
      </p>
      <div className="text-center">
        <span className="text-gray-500 text-sm">
          No te ha llegado un correo aun?{" "}
        </span>
        <>
          {time == 0 ? (
            <a
              href="#"
              className="text-gray-500 text-sm underline"
              onClick={() => {
                if (!time) sendConfirmationMail();
              }}
            >
              Haz click aqui para reenviar
            </a>
          ) : (
            <span className="text-gray-500 text-sm">
              Reenvia en {time} segundos
            </span>
          )}
        </>
      </div>
    </>
  );
}
