import { Dialog, DialogContent } from "../ui/Dialog";
import { SignUpDialog } from "../login/SignUpDialog";
import { LoginDialog } from "../login/LoginDialog";
import { useDialogSetter, useDialogValue } from "@/stores/dialogSlice";
import EmailSentDialog from "../login/EmailSentDialog";

export default function DialogManager() {
  const dialog = useDialogValue();
  const setDialog = useDialogSetter();

  return (
    <>
      <Dialog
        open={dialog !== "none"}
        onOpenChange={(open) => !open && setDialog("none")}
      >
        <DialogContent
          onInteractOutside={(e) => {
            if (dialog === "email") {
              e.preventDefault();
            }
          }}
          onEscapeKeyDown={(e) => {
            if (dialog === "email") {
              e.preventDefault();
            }
          }}
        >
          {dialog === "login" && <LoginDialog />}
          {dialog === "signup" && <SignUpDialog />}
          {dialog === "email" && <EmailSentDialog />}
        </DialogContent>
      </Dialog>
    </>
  );
}
