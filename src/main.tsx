import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./global.css";
import { FirebaseProvider } from "./context/firebaseContext.tsx";
import { DialogProvider } from "./context/dialogContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FirebaseProvider>
      <DialogProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DialogProvider>
    </FirebaseProvider>
  </React.StrictMode>,
);
