import { DialogDescription, DialogTitle } from "@/components/ui/Dialog";

export function SignUpDialogHeader() {
  return (
    <>
      <DialogTitle className="text-xl">Sign Up</DialogTitle>
      <DialogDescription>
        Enter your information to create an account
      </DialogDescription>
    </>
  );
}
