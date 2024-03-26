import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Foro() {
  return (
    <div className="p-16">
      <div className="flex flex-row">
        <Input type="text" placeholder="Buscar posts" className="mr-8"/>
        <Button variant={"default"}>Crear Post</Button>
      </div>
    </div>
  )
}
