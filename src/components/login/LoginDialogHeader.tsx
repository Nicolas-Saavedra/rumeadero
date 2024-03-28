import { DialogDescription, DialogTitle } from "@/components/ui/Dialog";

export function LoginDialogHeader() {
  return (
    <>
      <DialogTitle className="text-2xl">Login</DialogTitle>
      <DialogDescription>
        Enter your email below to login to your account
      </DialogDescription>
    </>
  );
}
