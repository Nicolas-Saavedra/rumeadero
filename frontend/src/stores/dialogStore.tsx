import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";

export type EnabledDialog = "none" | "signup" | "login" | "email";

type EnabledDialogState = {
  value: EnabledDialog;
  meta: Record<string, any> | null;
};

const initialState: EnabledDialogState = {
  value: "none",
  meta: null,
};

const slice = createSlice({
  name: "dialogSlice",
  initialState,
  reducers: {
    switch: (state, action: PayloadAction<EnabledDialog>) => {
      state.value = action.payload;
      state.meta = null;
    },
    switchWithMeta: (state, action: PayloadAction<EnabledDialogState>) => {
      state.value = action.payload.value;
      state.meta = action.payload.meta;
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

export function useDialogMeta<T = Record<string, any>>(): T | null {
  return useSelector((state: EnabledDialogState) => state.meta as T);
}

export function useDialogSetter() {
  const dispatch = useDispatch();
  return (dialog: EnabledDialog) => {
    dispatch(slice.actions.switch(dialog));
  };
}

export function useDialogSetterWithMeta() {
  const dispatch = useDispatch();
  return (value: EnabledDialog, meta: Record<string, any>) => {
    dispatch(slice.actions.switchWithMeta({ value, meta }));
  };
}

export function DialogProvider({ children }: DialogProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
