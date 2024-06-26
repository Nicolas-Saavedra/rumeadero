import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/Card";
import { Button } from "../ui/Button";
import { Switch } from "../ui/Switch";
import { Label } from "../ui/Label";
import { User } from "@/types";
import { useState } from "react";

interface UserSettingsProps {
  user: User;
}

export function UserSettings({ user }: UserSettingsProps) {
  const [localSettings, setLocalSettings] = useState(user.settings);

  function changeSettings(key: keyof typeof user.settings) {
    return (value: any) => {
      setLocalSettings({
        ...localSettings,
        [key]: value,
      });
    };
  }

  return (
    <div className="w-1/2">
      <Card>
        <CardHeader>
          <CardTitle>Preferencia del sistema</CardTitle>
          <CardDescription>Cambiar tema a modo claro/oscuro</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Switch
              id="dark-mode-switch"
              checked={localSettings.theme === "dark"}
              onCheckedChange={(value) =>
                changeSettings("theme")(value ? "dark" : "light")
              }
            />
            <Label htmlFor="dark-mode-switch">Habilitar modo oscuro</Label>
          </div>
        </CardContent>
      </Card>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Enlaza cuentas externas</CardTitle>
          <CardDescription>
            Entra usando otra cuenta que conozcas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center">
            <Button
              variant="outline"
              className="w-full lg:w-4/5 text-sm"
              disabled={localSettings.providers.includes("google")}
            >
              <img className="mr-2 h-5" src="/google.svg" alt="" />
              {!localSettings.providers.includes("google")
                ? "Registrate con Google"
                : "Registrado con Google"}
            </Button>
          </div>
          <div className="flex justify-center mt-4">
            <Button
              variant="outline"
              className="w-full lg:w-4/5 text-sm"
              disabled={localSettings.providers.includes("google")}
            >
              <img className="mr-2 h-5" src="/microsoft.svg" alt="" />
              {!localSettings.providers.includes("google")
                ? "Registrate con Microsoft"
                : "Registrado con Microsoft"}
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Cambio de contraseña</CardTitle>
          <CardDescription>
            Enviaremos una solicitud a tu correo registrado
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center">
            <Button variant={"destructive"} className="w-full lg:w-4/5 text-sm">
              Solicitar cambio de contraseña
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
