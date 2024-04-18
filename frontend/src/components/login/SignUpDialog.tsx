import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { DialogDescription, DialogHeader, DialogTitle } from "../ui/Dialog";
import { useDialogSetter } from "@/stores/dialogSlice";
import { useRef, useState } from "react";
import { z } from "zod";
import { useSignUp } from "@/queries/useSignUp";
import { useEnterPress } from "@/hooks/useEnterPress";

const SignupFormSubmit = z
  .object({
    username: z.string().min(3, {
      message: "El nombre de usuario debe tener por lo menos 3 caracteres",
    }),
    email: z.string().email({ message: "Correo electronico invalido" }),
    password: z.string().min(8, {
      message: "Tu contraseña debe tener por lo menos 8 caracteres",
    }),
    passwordConfirm: z.string(),
  })
  .superRefine(({ password, passwordConfirm }, ctx) => {
    if (password !== passwordConfirm) {
      ctx.addIssue({
        code: "custom",
        message: "Las contraseñas deberian ser iguales",
        path: ["passwordConfirm"],
      });
    }
  });

export function SignUpDialog() {
  const usernameError = useRef<HTMLSpanElement | null>(null);
  const emailError = useRef<HTMLSpanElement | null>(null);
  const passwordError = useRef<HTMLSpanElement | null>(null);
  const passwordConfirmError = useRef<HTMLSpanElement | null>(null);
  const submitError = useRef<HTMLSpanElement | null>(null);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const signUp = useSignUp(
    formData.username,
    formData.email,
    formData.password,
    (err) => {
      submitError.current!.textContent = err.message;
    },
  );

  const setDialog = useDialogSetter();

  function verifyValues() {
    return SignupFormSubmit.safeParse(formData).success;
  }

  function updateErrorMessages() {
    const errorSpans = [
      usernameError,
      emailError,
      passwordError,
      passwordConfirmError,
    ];
    errorSpans.forEach((errorSpan) => (errorSpan.current!.textContent = ""));
    const result = SignupFormSubmit.safeParse(formData);
    if (!result.success) {
      result.error.errors.forEach((error) => {
        const nameKey = error.path[0];
        switch (nameKey) {
          case "username":
            usernameError.current!.textContent = error.message;
            return;
          case "email":
            emailError.current!.textContent = error.message;
            return;
          case "password":
            passwordError.current!.textContent = error.message;
            return;
          case "passwordConfirm":
            passwordConfirmError.current!.textContent = error.message;
            return;
        }
      });
    }
  }

  function sendSignupRequest() {
    if (!verifyValues()) {
      updateErrorMessages();
      return;
    }
    signUp();
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target!;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  useEnterPress(sendSignupRequest);
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
          <Input
            id="username"
            name="username"
            placeholder="ernest01_p"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <span
            id="usernameError"
            className="text-red-400 text-sm"
            ref={usernameError}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="mail@example.com"
            value={formData.email}
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
          <Label htmlFor="password">Contraseña</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="**********"
          />
          <span
            id="passwordError"
            className="text-red-400 text-sm"
            ref={passwordError}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Confirmar contraseña</Label>
          <Input
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            value={formData.passwordConfirm}
            onChange={handleChange}
            placeholder="**********"
          />
          <span
            id="passwordConfirmError"
            className="text-red-400 text-sm"
            ref={passwordConfirmError}
          />
        </div>
        <div>
          <Button type="submit" className="w-full" onClick={sendSignupRequest}>
            Crea tu cuenta
          </Button>
          <span
            id="submitError"
            className="text-red-400 text-sm"
            ref={submitError}
          />
        </div>
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
