import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";
import { dialogReducer } from "./dialogSlice";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  user: userReducer,
  dialog: dialogReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

interface RootProviderProps {
  children: JSX.Element;
}

export type RootType = ReturnType<typeof rootReducer>;

export function RootProvider({ children }: RootProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
