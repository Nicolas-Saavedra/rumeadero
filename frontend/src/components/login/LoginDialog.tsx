import { Link } from "react-router-dom";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { DialogDescription, DialogHeader, DialogTitle } from "../ui/Dialog";
import { useDialogSetter } from "@/stores/dialogStore";

export function LoginDialog() {
  const setDialog = useDialogSetter();
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-2xl">Iniciar sesión</DialogTitle>
        <DialogDescription>
          Inserte su direccion de correo electronico para acceder a su cuenta
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Contraseña</Label>
            <Link to="#" className="ml-auto inline-block text-sm underline">
              Olvidaste tu contraseña?
            </Link>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Iniciar Session
        </Button>
        <Button variant="outline" className="w-full">
          <img className="mr-2 h-5" src="./google.svg" alt="" />
          Iniciar Session con Google
        </Button>
        <Button variant="outline" className="w-full">
          <img className="mr-2 h-5" src="./microsoft.svg" alt="" />
          Iniciar Session con Microsoft
        </Button>
      </div>
      <div className="mt-4 text-center text-sm">
        ¿No tienes una cuenta?{" "}
        <Link onClick={() => setDialog("signup")} to="#" className="underline">
          Inscribete aqui
        </Link>
      </div>
    </>
  );
}
