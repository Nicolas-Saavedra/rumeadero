import { Link } from "react-router-dom"

export default function Header() {
  
  return (
    <nav className="flex flex-row w-full bg-gray-200 px-64 py-6 justify-between">
      <Link className="w-36" to={"/"}>La Cabra Chismosa</Link> 
      <div>      
        <Link className="pl-6" to={"/interes"}>Grupos</Link> 
        <Link className="pl-6" to={"/wheels"}>Wheels</Link> 
        <Link className="pl-6" to={"/emprendimientos"}>Emprendimientos</Link> 
        <Link className="pl-6" to={"/ventas"}>Ventas</Link> 
        <Link className="pl-6" to={"/tutorias"}>Tutorias</Link> 
      </div>
    </nav>
  )
}
