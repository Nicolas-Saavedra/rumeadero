import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import {
  Users,
  CarFront,
  GraduationCap,
  HandCoins,
  Store,
  MessageCircleMore,
  Martini,
  CircleUser,
} from "lucide-react";
import { useDialogSet } from "@/context/dialogContext";

export default function Navbar() {
  const setDialog = useDialogSet();
  return (
    <div className="sticky top-0 w-48 md:w-72 h-screen flex text-stone-800 flex-col justify-between px-2">
      <div className="flex flex-col ml-4 md:ml-0">
        <Link
          className="flex text-xl md:text-2xl font-bold justify-center mt-8 mb-4 items-center"
          to={"/"}
        >
          El R<span className="text-yellow-500">u</span>meadero
          <Martini className="ml-2" />
        </Link>
        <Button className="justify-start" asChild variant={"ghost"}>
          <Link className="text-lg py-6 mt-2" to={"/foro"}>
            <MessageCircleMore className="mr-3 ml-2 md:ml-4" />
            Foro
          </Link>
        </Button>
        <Button className="justify-start" asChild variant={"ghost"}>
          <Link className="text-lg py-6" to={"/grupos"}>
            <Users className="mr-3 ml-2 md:ml-4" />
            Grupos
          </Link>
        </Button>
        <Button className="justify-start" asChild variant={"ghost"}>
          <Link className="text-lg py-6 mt-2" to={"/wheels"}>
            <CarFront className="mr-3 ml-2 md:ml-4" />
            Wheels
          </Link>
        </Button>
        <Button className="justify-start" asChild variant={"ghost"}>
          <Link className="text-lg py-6 mt-2" to={"/emprendimientos"}>
            <Store className="mr-3 ml-2 md:ml-4" />
            Emprendimientos
          </Link>
        </Button>
        <Button className="justify-start" asChild variant={"ghost"}>
          <Link className="text-lg py-6 mt-2" to={"/ventas"}>
            <HandCoins className="mr-3 ml-2 md:ml-4" />
            Ventas
          </Link>
        </Button>
        <Button className="justify-start" asChild variant={"ghost"}>
          <Link className="text-lg py-6 mt-2" to={"/tutorias"}>
            <GraduationCap className="mr-3 ml-2 md:ml-4" />
            Tutorias
          </Link>
        </Button>
      </div>
      <div className="flex flex-col">
        <Button
          className="justify-start text-md py-6 my-4"
          onClick={() => setDialog("login")}
          variant={"ghost"}
        >
          <CircleUser className="mr-3 ml-4" />
          Iniciar sesion
        </Button>
      </div>
    </div>
  );
}
