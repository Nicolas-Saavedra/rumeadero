import { createContext, useState, useContext } from "react";

export type EnabledDialog = "none" | "signup" | "login";

type EnabledDialogSetter = React.Dispatch<React.SetStateAction<EnabledDialog>>;

const DialogContext = createContext<
  [EnabledDialog, EnabledDialogSetter] | null
>(null);

interface DialogProviderProps {
  children: JSX.Element;
}

export function useDialog(): [EnabledDialog, EnabledDialogSetter] {
  return useContext(DialogContext)!;
}

export function useDialogGet() {
  const dialog = useContext(DialogContext)![0];
  return dialog;
}

export function useDialogSet() {
  const setDialog = useContext(DialogContext)![1];
  return setDialog;
}

export function DialogProvider({ children }: DialogProviderProps) {
  const [dialog, setDialog] = useState<EnabledDialog>("none");
  return (
    <DialogContext.Provider value={[dialog, setDialog]}>
      {children}
    </DialogContext.Provider>
  );
}
