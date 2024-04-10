import Pocketbase from "pocketbase";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

type PocketbaseState = {
  value: Pocketbase;
};

const initialState: PocketbaseState = {
  value: new Pocketbase(import.meta.env.VITE_POCKETBASE_URL),
};

const slice = createSlice({
  name: "pocketbaseSlice",
  initialState,
  reducers: {},
});

const store = configureStore({
  reducer: slice.reducer,
});

type PocketbaseProviderProps = {
  children: JSX.Element;
};

export function PocketbaseProvider({ children }: PocketbaseProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
