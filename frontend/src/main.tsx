import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./global.css";
import { DialogProvider } from "./context/dialogContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DialogProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DialogProvider>
  </React.StrictMode>,
);
