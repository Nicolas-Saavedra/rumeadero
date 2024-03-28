import { useDialog } from "@/context/dialogContext";
import { useEffect } from "react";
import { Dialog, DialogContent } from "../ui/Dialog";
import { SignUpDialog } from "../login/SignUpDialog";
import { LoginDialog } from "../login/LoginDialog";

export default function DialogManager() {
  const [dialog, setDialog] = useDialog();

  useEffect(() => {
    console.log(dialog);
  }, [dialog]);
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
