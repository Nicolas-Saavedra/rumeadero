import { createContext, useState, Context, useContext } from "react";

type EnabledDialog = "none" | "signup" | "login";

type EnabledDialogComponents = {
  dialog: EnabledDialog;
  setDialog: (arg1: EnabledDialog) => void;
};

let DialogContext: Context<EnabledDialogComponents>;

interface DialogProviderProps {
  children: JSX.Element;
}

export function useDialog(): [EnabledDialog, (newVal: EnabledDialog) => void] {
  const { dialog, setDialog } = useContext(DialogContext);
  return [dialog, setDialog];
}

export function DialogProvider({ children }: DialogProviderProps) {
  const [dialog, setDialog] = useState<EnabledDialog>("none");
  DialogContext = createContext<EnabledDialogComponents>({ dialog, setDialog });
  return (
    <DialogContext.Provider value={{ dialog, setDialog }}>
      {children}
    </DialogContext.Provider>
  );
}
