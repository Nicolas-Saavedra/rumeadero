import { Link } from "react-router-dom";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { DialogDescription, DialogHeader, DialogTitle } from "../ui/Dialog";
import { z } from "zod";
import { useRef, useState } from "react";
import { useLogin } from "@/queries/useLogin";
import { useDialogSetter } from "@/stores/dialogSlice";
import { useEnterPress } from "@/hooks/useEnterPress";

const LoginFormSubmit = z.object({
  email: z.string().email({ message: "El correo puesto no es valido" }),
  password: z
    .string()
    .min(8, { message: "La contraseña que pusiste es demasiado corta" }),
});

export function LoginDialog() {
  const emailError = useRef<HTMLSpanElement | null>(null);
  const passwordError = useRef<HTMLSpanElement | null>(null);

  const setDialog = useDialogSetter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, error } = useLogin(formData.email, formData.password);

  function verifyValues() {
    return LoginFormSubmit.safeParse(formData).success;
  }

  function updateErrorMessages() {
    const errorSpans = [emailError, passwordError];
    errorSpans.forEach((errorSpan) => (errorSpan.current!.textContent = ""));
    const result = LoginFormSubmit.safeParse(formData);
    if (!result.success) {
      result.error.errors.forEach((error) => {
        switch (error.path[0]) {
          case "email":
            emailError.current!.textContent = error.message;
            return;
          case "password":
            passwordError.current!.textContent = error.message;
            return;
        }
      });
    }
  }

  // Yes, this parses twice. Unless this is a perf issue, not changing it
  function sendLoginRequest() {
    if (!verifyValues()) {
      updateErrorMessages();
      return;
    }
    login();
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target!;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  useEnterPress(sendLoginRequest);

  // TODO: Login submit error message might not be pretty, clean up
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
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="m@example.com"
            onChange={handleChange}
            required
          />
          <span
            id="emailError"
            className="text-red-400 text-sm"
            ref={emailError}
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Contraseña</Label>
            <Link to="#" className="ml-auto inline-block text-sm underline">
              Olvidaste tu contraseña?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            name="password"
            onChange={handleChange}
            required
          />
          <span
            id="passwordError"
            className="text-red-400 text-sm"
            ref={passwordError}
          />
        </div>
        <Button type="submit" className="w-full" onClick={sendLoginRequest}>
          Iniciar Session
        </Button>
        <Button variant="outline" className="w-full">
          <img className="mr-2 h-5" src="/google.svg" alt="" />
          Iniciar Session con Google
        </Button>
        <Button variant="outline" className="w-full">
          <img className="mr-2 h-5" src="/microsoft.svg" alt="" />
          Iniciar Session con Microsoft
        </Button>
        <span id="submitError" className="text-red-400 text-sm">
          {error?.message}
        </span>
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
