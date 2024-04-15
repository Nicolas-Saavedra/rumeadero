import { MailPlus } from "lucide-react";
import { DialogHeader, DialogTitle } from "../ui/Dialog";
import { useDialogMeta } from "@/stores/dialogStore";
import { useEffect, useState } from "react";

interface EmailSentMeta {
  email: string;
}

export default function EmailSentDialog() {
  const [time, setTime] = useState<number>(0);
  const meta = useDialogMeta<EmailSentMeta>();

  function createNewTimer() {
    setTime(15);
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : prevTime));
    }, 1000);
    return () => clearInterval(interval);
  }

  function sendConfirmationMail() {
    setTime(15);
    // Add code to handle confirmation mail
  }

  useEffect(() => {
    const clearFunc = createNewTimer();
    return clearFunc;
  }, []);

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-2xl">Correo de verificacion enviado</DialogTitle>
      </DialogHeader>
      <div className="flex justify-center items-center">
        <MailPlus className="size-24 text-blue-500" />
      </div>
      <p>
        Hemos enviado un correo a <b>{meta?.email || "cargando@placeholder.com"}</b>. Revisa tu bandeja de
        entrada para verificar tu cuenta y luego vuelve a esta pagina
      </p>
      <div className="text-center">
        <span className="text-gray-500 text-sm">No te ha llegado un correo aun? </span>
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
            <span className="text-gray-500 text-sm">Reenvia en {time} segundos</span>
          )}
        </>
      </div>
    </>
  );
}
