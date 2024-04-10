import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";

export type EnabledDialog = "none" | "signup" | "login";

type EnabledDialogState = {
  value: EnabledDialog;
};

const initialState: EnabledDialogState = {
  value: "none",
};

const slice = createSlice({
  name: "dialogSlice",
  initialState,
  reducers: {
    switch: (state, action: PayloadAction<EnabledDialog>) => {
      state.value = action.payload;
    },
  },
});

const store = configureStore({
  reducer: slice.reducer,
});

type DialogProviderProps = {
  children: JSX.Element;
};

export function useDialogValue(): EnabledDialog {
  return useSelector((state: EnabledDialogState) => state.value);
}

export function useDialogSetter() {
  const dispatch = useDispatch();
  return (dialog: EnabledDialog) => {
    dispatch(slice.actions.switch(dialog));
  };
}

export function DialogProvider({ children }: DialogProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
