import { useDialog } from "@/context/dialogContext";
import { SignUpDialog } from "../login/SignUpDialog";
import { LoginDialog } from "../login/LoginDialog";

export default function DialogManager() {
  const [dialog, setDialog] = useDialog();
  return (
    <>
      <SignUpDialog
        open={dialog === "signup"}
        setOpen={(value) => setDialog(value ? "signup" : "none")}
      />
      <LoginDialog
        open={dialog === "login"}
        setOpen={(value) => setDialog(value ? "login" : "none")}
      />
    </>
  );
}
