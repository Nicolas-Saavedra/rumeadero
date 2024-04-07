import { useDialog } from "@/context/dialogContext";
import { Dialog, DialogContent } from "../ui/Dialog";
import { SignUpDialog } from "../login/SignUpDialog";
import { LoginDialog } from "../login/LoginDialog";

export default function DialogManager() {
  const [dialog, setDialog] = useDialog();

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
