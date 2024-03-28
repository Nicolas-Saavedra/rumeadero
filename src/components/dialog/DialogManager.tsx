import { useDialog } from "@/context/dialogContext";
import { useEffect } from "react";
import { Dialog, DialogContent, DialogHeader } from "../ui/Dialog";
import { LoginDialogHeader } from "../login/LoginDialogHeader";
import { SignUpDialogHeader } from "../login/SignUpDialogHeader";
import { SignUpDialogContent } from "../login/SignUpDialogContent";
import { LoginDialogContent } from "../login/LoginDialogBody";

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
        <DialogHeader>
          {dialog === "login" && <LoginDialogHeader />}
          {dialog === "signup" && <SignUpDialogHeader />}
        </DialogHeader>
        <DialogContent>
          {dialog === "login" && <LoginDialogContent />}
          {dialog === "signup" && <SignUpDialogContent />}
        </DialogContent>
      </Dialog>
    </>
  );
}
