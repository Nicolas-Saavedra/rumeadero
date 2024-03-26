import Header from "@/components/Header"
import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import Foro from "./routes/Foro"
import Wheels from "./routes/Wheels"
import Grupos from "./routes/Grupos"
import Emprendimientos from "./routes/Emprendimientos"
import Ventas from "./routes/Ventas"
import Tutorias from "./routes/Tutorias"

function App() {

  return (
    <>
      <div className="flex">
      <Header />
        <div className="w-full h-screen bg-gradient-to-r bg-neutral-50">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/foro" element={<Foro/>}></Route>
            <Route path="/wheels" element={<Wheels/>}></Route>
            <Route path="/grupos" element={<Grupos/>}></Route>
            <Route path="/emprendimientos" element={<Emprendimientos/>}></Route>
            <Route path="/ventas" element={<Ventas/>}></Route>
            <Route path="/tutorias" element={<Tutorias/>}></Route>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
