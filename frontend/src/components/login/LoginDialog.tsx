import { Link } from "react-router-dom";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { DialogDescription, DialogHeader, DialogTitle } from "../ui/Dialog";
import { useDialogSetter, useDialogSetterWithMeta } from "@/stores/dialogStore";
import { z } from "zod";
import { useRef, useState } from "react";
import { useMutation } from "react-query";
import { loginWithEmailOrName } from "@/services/userService";
import { ClientResponseError } from "pocketbase";

const LoginFormSubmit = z.object({
  email: z.string().email({ message: "El correo puesto no es valido" }),
  password: z
    .string()
    .min(8, { message: "La contraseña que pusiste es demasiado corta" }),
});

export function LoginDialog() {
  const setDialogWithMeta = useDialogSetterWithMeta();
  const emailError = useRef<HTMLSpanElement | null>(null);
  const passwordError = useRef<HTMLSpanElement | null>(null);

  const { mutate } = useMutation(
    async ({ email, password }: { email: string; password: string }) =>
      await loginWithEmailOrName(email, password),
    {
      onSuccess: () => {
        setDialogWithMeta("none", null);
      },
      onError: (error: ClientResponseError) => {
        if (error.response.affectedUser) {
          setDialogWithMeta("email", {
            id: error.response.affectedUser,
            email: formData.email,
            password: formData.password,
          });
        }
      },
    },
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function verifyValues() {
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
    return result.success;
  }
  function sendLoginRequest() {
    if (!verifyValues()) {
      return;
    }
    mutate({ ...formData });
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target!;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
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
