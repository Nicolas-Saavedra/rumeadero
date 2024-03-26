import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

export default function ForumHeader() {
  return (
    <div className="flex flex-row">
      <Input type="text" placeholder="Buscar posts" className="mr-8" />
      <Button variant={"default"}>Crear Post</Button>
    </div>
  );
}
