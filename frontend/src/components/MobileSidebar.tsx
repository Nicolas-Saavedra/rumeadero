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
    <div className="sticky w-16 sm:w-24 h-screen flex text-stone-800 flex-col justify-between px-0 md:px-2 top-0">
      <div className="flex flex-col ml-4">
        <Link
          className="flex text-xl md:text-2xl font-bold justify-center mt-9 mb-8 items-center"
          to={"/"}
        >
          <Martini />
        </Link>
        <Button className="justify-center p-0 md:p-4" asChild variant={"ghost"}>
          <Link className="md:text-xl py-4 mt-3" to={"/foro"}>
            <MessageCircleMore />
          </Link>
        </Button>
        <Button className="justify-center p-0 md:p-4" asChild variant={"ghost"}>
          <Link className="md:text-xl py-4 mt-4" to={"/grupos"}>
            <Users />
          </Link>
        </Button>
        <Button className="justify-center p-0 md:p-4" asChild variant={"ghost"}>
          <Link className="md:text-xl py-4 mt-4" to={"/wheels"}>
            <CarFront />
          </Link>
        </Button>
        <Button className="justify-center p-0 md:p-4" asChild variant={"ghost"}>
          <Link className="md:text-xl py-4 mt-4" to={"/emprendimientos"}>
            <Store />
          </Link>
        </Button>
        <Button className="justify-center p-0 md:p-4" asChild variant={"ghost"}>
          <Link className="md:text-xl py-4 mt-4" to={"/ventas"}>
            <HandCoins />
          </Link>
        </Button>
        <Button className="justify-center p-0 md:p-4" asChild variant={"ghost"}>
          <Link className="text-center md:text-xl py-4 mt-4" to={"/tutorias"}>
            <GraduationCap />
          </Link>
        </Button>
      </div>
      <div className="flex flex-col ml-4">
        <Button
          className="justify-center my-4 p-0 md:p-4"
          onClick={() => setDialog("login")}
          variant={"ghost"}
        >
          <CircleUser />
        </Button>
      </div>
    </div>
  );
}
