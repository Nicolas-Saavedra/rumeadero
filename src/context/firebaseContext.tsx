import { FirebaseApp, initializeApp } from "firebase/app";
import { Context, createContext, useContext } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyDULZBN1NaugiY_iNLJD4thCK43j-rZjmo",
  authDomain: "rumeadero.firebaseapp.com",
  projectId: "rumeadero",
  storageBucket: "rumeadero.appspot.com",
  messagingSenderId: "806101628275",
  appId: "1:806101628275:web:12cb80b4a80a66172a8106",
  measurementId: "G-066PPRZDN5"
};

let FirebaseContext : Context<FirebaseApp>;

type FirebaseProviderProps = {
  children: JSX.Element
}

export function useFirebaseApp() {
  return useContext(FirebaseContext)
}

export function FirebaseProvider({children} : FirebaseProviderProps) {
  const app = initializeApp(firebaseConfig);

  FirebaseContext = createContext<FirebaseApp>(app)

  return (
    <FirebaseContext.Provider value={app}>
      {children}
    </FirebaseContext.Provider>
  )
} 

