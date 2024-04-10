import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Info } from "lucide-react";
import { useDialogSetter } from "@/stores/dialogStore";

export default function GroupHeader() {
  const setDialog = useDialogSetter();
  return (
    <div className="flex flex-row">
      <Input type="text" placeholder="Buscar grupos..." className="mr-4" />
      <Button
        onClick={() => setDialog("login")}
        className="mr-4 duration-300 text-sm bg-yellow-400"
        variant={"default"}
      >
        Crear un nuevo grupo
      </Button>
      <button>
        <Info className="text-slate-600 hover:scale-90 duration-300" />
      </button>
    </div>
  );
}
