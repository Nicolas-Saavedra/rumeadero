import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { useDialogSet } from "@/context/dialogContext";
import { DialogDescription, DialogHeader, DialogTitle } from "../ui/Dialog";

export function SignUpDialog() {
  const setDialog = useDialogSet();
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-2xl">Registrate</DialogTitle>
        <DialogDescription>
          Rellena los campos a continuacion para crear tu cuenta
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="first-name">Nombre de usuario</Label>
          <Input id="first-name" placeholder="Ernesto" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Contraseña</Label>
          <Input id="password" type="password" placeholder="**********" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Confirmar contraseña</Label>
          <Input id="password" type="password" placeholder="**********" />
        </div>
        <Button type="submit" className="w-full">
          Crea tu cuenta
        </Button>
      </div>
      <div className="mt-4 text-center text-sm">
        ¿Ya tienes una cuenta?{" "}
        <Link onClick={() => setDialog("login")} to="#" className="underline">
          Ingresa aqui
        </Link>
      </div>
    </>
  );
}
