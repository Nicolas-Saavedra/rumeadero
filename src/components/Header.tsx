import { Link } from "react-router-dom"

export default function Header() {
  
  return (
    <nav className="flex w-full h-20 bg-gray-200">
      <Link to={"/"}>La Cabra Chismosa</Link> 
      <Link to={"/interes"}></Link> 
      <Link to={"/wheels"}></Link> 
      <Link to={"/emprendimientos"}></Link> 
      <Link to={"/ventas"}></Link> 
      <Link to={"/tutorias"}></Link> 
    </nav>
  )
}
