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
import useScreenSize from "./hooks/useScreenSize";
import MobileSidebar from "./components/MobileSidebar";
import ForoDetail from "./routes/ForoDetail";
import { useEffect, useRef, useState } from "react";

function App() {
  const [sidebarHeight, setSidebarHeight] = useState(0);
  const mainContentRef = useRef<HTMLDivElement>(null);

  const { width } = useScreenSize();
  useEffect(() => {
    if (mainContentRef.current) {
      setSidebarHeight(mainContentRef.current.clientHeight);
      new ResizeObserver((entries) =>
        setSidebarHeight(entries[0].target.clientHeight),
      ).observe(mainContentRef.current);
    }
  }, []);
  return (
    <>
      <div className="flex lg:px-32 xl:px-96 bg-stone-50 h-full">
        <div
          style={{ height: sidebarHeight }}
          className="min-h-screen h-full flex-grow"
        >
          {width < 768 ? <MobileSidebar /> : <Sidebar />}
        </div>
        <div
          ref={mainContentRef}
          className="w-full min-h-screen h-full bg-gradient-to-r"
        >
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/foro" element={<Foro />}></Route>
            <Route path="/foro/:id" element={<ForoDetail />}></Route>
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
