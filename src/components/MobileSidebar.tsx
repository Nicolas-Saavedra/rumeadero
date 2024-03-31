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

export default function MobileSidebar() {
  const setDialog = useDialogSet();
  return (
    <div className="sticky w-24 h-screen flex text-stone-800 flex-col justify-between px-2">
      <div className="flex flex-col ml-4">
        <Link
          className="flex text-xl md:text-2xl font-bold justify-center mt-4 mb-8 items-center"
          to={"/"}
        >
          <Martini />
        </Link>
        <Button className="justify-center" asChild variant={"ghost"}>
          <Link className="text-lg md:text-xl py-6 mt-2" to={"/foro"}>
            <MessageCircleMore />
          </Link>
        </Button>
        <Button className="justify-center" asChild variant={"ghost"}>
          <Link className="text-lg md:text-xl py-6" to={"/grupos"}>
            <Users />
          </Link>
        </Button>
        <Button className="justify-center" asChild variant={"ghost"}>
          <Link className="text-lg md:text-xl py-6 mt-2" to={"/wheels"}>
            <CarFront />
          </Link>
        </Button>
        <Button className="justify-center" asChild variant={"ghost"}>
          <Link
            className="text-lg md:text-xl py-6 mt-2"
            to={"/emprendimientos"}
          >
            <Store />
          </Link>
        </Button>
        <Button className="justify-center" asChild variant={"ghost"}>
          <Link className="text-lg md:text-xl py-6 mt-2" to={"/ventas"}>
            <HandCoins />
          </Link>
        </Button>
        <Button className="justify-center" asChild variant={"ghost"}>
          <Link
            className="text-lg text-center md:text-xl py-6 mt-2"
            to={"/tutorias"}
          >
            <GraduationCap />
          </Link>
        </Button>
      </div>
      <div className="flex flex-col">
        <Button
          className="justify-center text-md py-6 my-4"
          onClick={() => setDialog("login")}
          variant={"ghost"}
        >
          <CircleUser className="ml-4" />
        </Button>
      </div>
    </div>
  );
}
