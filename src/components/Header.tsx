import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Users, CarFront, GraduationCap, HandCoins, Store, Rat } from "lucide-react"

export default function Header() {
  
  return (
    <nav className="sticky w-56 h-screen flex text-orange-900 flex-col bg-yellow-500 px-2">
      <Link className="flex text-xl font-bold justify-center mt-4 mb-8" to={"/"}>El Raton<Rat className="ml-2"/></Link> 
      <Button className="justify-start" asChild>
        <Link className="rounded text-lg py-6 hover:bg-yellow-400" to={"/grupos"}><Users className="mr-2 ml-4"/>Grupos</Link> 
      </Button>
      <Button className="justify-start" asChild>
        <Link className="rounded text-lg py-6 mt-2 hover:bg-yellow-400" to={"/wheels"}><CarFront className="mr-2 ml-4"/>Wheels</Link> 
      </Button>
      <Button className="justify-start" asChild>
        <Link className="rounded text-md py-6 mt-2 hover:bg-yellow-400" to={"/emprendimientos"}><Store className="mr-2 ml-4"/>Emprendimientos</Link> 
      </Button>
      <Button className="justify-start" asChild>
        <Link className="rounded text-lg py-6 mt-2 hover:bg-yellow-400" to={"/ventas"}><HandCoins className="mr-2 ml-4"/>Ventas</Link> 
      </Button>
      <Button className="justify-start" asChild>
        <Link className="rounded text-lg py-6 mt-2 hover:bg-yellow-400" to={"/tutorias"}><GraduationCap className="mr-2 ml-4"/>Tutorias</Link> 
      </Button>
    </nav>
  )
}
