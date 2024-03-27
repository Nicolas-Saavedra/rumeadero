import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Info } from "lucide-react";

export default function ForumHeader() {
  return (
    <div className="flex flex-row">
      <Input type="text" placeholder="Buscar posts..." className="mr-4" />
      <Button className="mr-4 duration-300" variant={"default"}>
        Crear Post
      </Button>
      <button>
        <Info className="text-slate-600 hover:scale-90 duration-300" />
      </button>
    </div>
  );
}
