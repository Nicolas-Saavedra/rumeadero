import Sidebar from "@/components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Foro from "./routes/Foro";
import Wheels from "./routes/Wheels";
import Grupos from "./routes/Grupos";
import Emprendimientos from "./routes/Emprendimientos";
import Ventas from "./routes/Ventas";
import Tutorias from "./routes/Tutorias";
import DialogManager from "./components/dialog/DialogManager";

function App() {
  return (
    <>
      <div className="flex px-96 bg-stone-50">
        <Sidebar />
        <div className="w-full h-screen bg-gradient-to-r">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/foro" element={<Foro />}></Route>
            <Route path="/wheels" element={<Wheels />}></Route>
            <Route path="/grupos" element={<Grupos />}></Route>
            <Route
              path="/emprendimientos"
              element={<Emprendimientos />}
            ></Route>
            <Route path="/ventas" element={<Ventas />}></Route>
            <Route path="/tutorias" element={<Tutorias />}></Route>
          </Routes>
        </div>
      </div>
      <DialogManager />
    </>
  );
}

export default App;
