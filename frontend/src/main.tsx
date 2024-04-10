import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./global.css";
import { DialogProvider } from "./stores/dialogStore.tsx";
import { PocketbaseProvider } from "./stores/pocketbaseStore.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DialogProvider>
      <PocketbaseProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PocketbaseProvider>
    </DialogProvider>
  </React.StrictMode>,
);
