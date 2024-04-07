import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Flame, Info, Sparkles, TrendingUp } from "lucide-react";
import { useDialogSet } from "@/context/dialogContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/DropdownMenu";
import { useState } from "react";

type FilterState = "hot" | "trending" | "new";

export default function ForumHeader() {
  const setDialog = useDialogSet();
  const [filterState, setFilterState] = useState<FilterState>("new");

  let triggerDisplayTag;

  switch (filterState) {
    case "hot":
      triggerDisplayTag = hotDisplayTag;
      break;
    case "trending":
      triggerDisplayTag = trendingDisplayTag;
      break;
    case "new":
      triggerDisplayTag = newDisplayTag;
      break;
  }

  return (
    <div className="flex flex-row">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="w-36 mr-4 text-sm" variant={"outline"}>
            {triggerDisplayTag}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
          <DropdownMenuLabel>Mostrar por</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={filterState}
            onValueChange={setFilterState as (value: string) => void}
          >
            <DropdownMenuRadioItem value="hot">
              {hotDisplayTag}
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="trending">
              {trendingDisplayTag}
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="new">
              {newDisplayTag}
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <Input
        type="text"
        placeholder="Filtrar posts por tag..."
        className="mr-4"
      />
      <Button
        onClick={() => setDialog("login")}
        className="mr-4 duration-300 text-sm"
        variant={"default"}
      >
        Crear Post
      </Button>
      <button>
        <Info className="text-slate-600 hover:scale-90 duration-300" />
      </button>
    </div>
  );
}
const hotDisplayTag = (
  <div className="text-red-400 flex flex-row items-center">
    <Flame className="mr-2" /> <span>Caliente</span>
  </div>
);

const trendingDisplayTag = (
  <div className="text-yellow-400 flex flex-row items-center">
    <TrendingUp className="mr-2" /> <span>Tendencia</span>
  </div>
);

const newDisplayTag = (
  <div className="text-blue-400 flex flex-row items-center">
    <Sparkles className="mr-2" /> <span>Nuevo</span>
  </div>
);
