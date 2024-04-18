import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { RootType } from "./store";

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

export const dialogReducer = slice.reducer;

export function useDialogValue(): EnabledDialog {
  return useSelector((state: RootType) => state.dialog.value);
}

export function useDialogMeta<T = Record<string, any>>(): T | null {
  return useSelector((state: RootType) => state.dialog.meta as T);
}

export function useDialogSetter() {
  const dispatch = useDispatch();
  return (dialog: EnabledDialog) => {
    dispatch(slice.actions.switch(dialog));
  };
}

export function useDialogSetterWithMeta() {
  const dispatch = useDispatch();
  return (value: EnabledDialog, meta: Record<string, any> | null) => {
    dispatch(slice.actions.switchWithMeta({ value, meta }));
  };
}
