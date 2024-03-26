import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Users, CarFront, GraduationCap, HandCoins, Store, MessageCircleMore, Martini } from "lucide-react"

export default function Header() {
  
  return (
    <nav className="sticky w-64 h-screen flex text-stone-800 flex-col bg-stone-50 px-2 border-stone-100 border-r-2">
      <Link className="flex text-xl font-bold justify-center mt-4 mb-8" to={"/"}>El R<span className="text-yellow-500">u</span>meadero<Martini className="ml-2"/></Link> 
      <Button className="justify-start" asChild variant={"ghost"}>
        <Link className=" text-lg py-6 mt-2 " to={"/foro"}><MessageCircleMore className="mr-2 ml-4"/>Foro</Link> 
      </Button>
      <Button className="justify-start" asChild variant={"ghost"}>
        <Link className=" text-lg py-6 " to={"/grupos"}><Users className="mr-2 ml-4"/>Grupos</Link> 
      </Button>
      <Button className="justify-start" asChild variant={"ghost"}>
        <Link className=" text-lg py-6 mt-2 " to={"/wheels"}><CarFront className="mr-2 ml-4"/>Wheels</Link> 
      </Button>
      <Button className="justify-start" asChild variant={"ghost"}>
        <Link className=" text-md py-6 mt-2 " to={"/emprendimientos"}><Store className="mr-2 ml-4"/>Emprendimientos</Link> 
      </Button>
      <Button className="justify-start" asChild variant={"ghost"}>
        <Link className=" text-lg py-6 mt-2 " to={"/ventas"}><HandCoins className="mr-2 ml-4"/>Ventas</Link> 
      </Button>
      <Button className="justify-start" asChild variant={"ghost"}>
        <Link className=" text-lg py-6 mt-2 " to={"/tutorias"}><GraduationCap className="mr-2 ml-4"/>Tutorias</Link> 
      </Button>
    </nav>
  )
}
