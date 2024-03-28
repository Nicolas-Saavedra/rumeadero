import { FirebaseApp, initializeApp } from "firebase/app";
import { createContext, useContext } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyDULZBN1NaugiY_iNLJD4thCK43j-rZjmo",
  authDomain: "rumeadero.firebaseapp.com",
  projectId: "rumeadero",
  storageBucket: "rumeadero.appspot.com",
  messagingSenderId: "806101628275",
  appId: "1:806101628275:web:12cb80b4a80a66172a8106",
  measurementId: "G-066PPRZDN5",
};

const FirebaseContext = createContext<FirebaseApp | null>(null);

interface FirebaseProviderProps {
  children: JSX.Element;
}

export function useFirebaseApp() {
  const app = useContext(FirebaseContext);
  if (!app) {
    console.error(
      "ERROR: No firebase app was supplied, web app may not read/write data properly to external server",
    );
  }
  return app!;
}

export function FirebaseProvider({ children }: FirebaseProviderProps) {
  const app = initializeApp(firebaseConfig);

  return (
    <FirebaseContext.Provider value={app}>{children}</FirebaseContext.Provider>
  );
}
