import Pocketbase from "pocketbase";
import { createContext, useContext } from "react";

const PocketbaseContext = createContext<Pocketbase | null>(null);

interface PocketbaseProviderProps {
  children: JSX.Element;
}

export function usePocketbase(): Pocketbase {
  return useContext(PocketbaseContext)!;
}

export function isUserAuthenticated(): boolean {
  const pb = usePocketbase();
  return pb.authStore.isValid;
}

export function PocketbaseProvider({ children }: PocketbaseProviderProps) {
  const pb = new Pocketbase(import.meta.env.VITE_POCKETBASE_URL);
  return (
    <PocketbaseContext.Provider value={pb}>
      {children}
    </PocketbaseContext.Provider>
  );
}
