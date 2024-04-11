import { MailPlus } from "lucide-react";
import { DialogContent, DialogHeader, DialogTitle } from "../ui/Dialog";
import { useDialogValueWithMeta } from "@/stores/dialogStore";
import { useEffect, useState } from "react";

interface EmailSentMeta {
  email: string;
}

export default function EmailSentDialog() {
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [time, setTime] = useState(30);
  const [_, meta] = useDialogValueWithMeta<EmailSentMeta>();

  function createNewTimer() {
    setTime(30);
    setTimer(
      setInterval(() => {
        if (time == 0) {
          clearInterval(timer!);
          setTimer(null);
        }
        setTime((val) => val - 1);
      }, 1000),
    );
  }

  function sendConfirmationMail() {
    createNewTimer();
    // Add code to handle confirmation mail
  }

  useEffect(createNewTimer, []);

  return (
    <>
      <DialogHeader>
        <DialogTitle>Correo de verificacion enviado</DialogTitle>
      </DialogHeader>
      <DialogContent>
        <div className="flex items-center">
          <MailPlus className="w-32" />
        </div>
        <p>
          Hemos enviado un correo a <b>{meta?.email}</b>. Revisa tu bandeja de
          entrada para verificar tu cuenta y luego vuelve a esta pagina
        </p>
        <span>No te ha llegado un correo aun?</span>
        <>
          {time == 0 ? (
            <a
              href="#"
              onClick={() => {
                if (!timer) sendConfirmationMail();
              }}
            >
              Haz click aqui para reenviar
            </a>
          ) : (
            <span>Reenvia en {time} segundos</span>
          )}
        </>
      </DialogContent>
    </>
  );
}
