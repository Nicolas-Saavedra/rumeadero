import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function ForumHeader() {
  return (
    <div className="flex flex-row">
      <Input type="text" placeholder="Buscar posts" className="mr-8"/>
      <Button variant={"default"}>Crear Post</Button>
    </div>
  )
}
