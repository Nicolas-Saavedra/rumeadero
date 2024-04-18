import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./global.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { RootProvider } from "@/stores/store.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RootProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RootProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
