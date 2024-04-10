import { Dialog, DialogContent } from "../ui/Dialog";
import { SignUpDialog } from "../login/SignUpDialog";
import { LoginDialog } from "../login/LoginDialog";
import { useDialogSetter, useDialogValue } from "@/stores/dialogStore";

export default function DialogManager() {
  const dialog = useDialogValue();
  const setDialog = useDialogSetter();

  return (
    <>
      <Dialog
        open={dialog !== "none"}
        onOpenChange={(open) => !open && setDialog("none")}
      >
        <DialogContent>
          {dialog === "login" && <LoginDialog />}
          {dialog === "signup" && <SignUpDialog />}
        </DialogContent>
      </Dialog>
    </>
  );
}
