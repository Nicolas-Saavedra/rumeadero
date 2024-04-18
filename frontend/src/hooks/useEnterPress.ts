import { useEffect } from "react";

export function useEnterPress(onPress: () => void) {
  useEffect(() => {
    const keyPressListener = (event: KeyboardEvent) => {
      if (event.code === "Enter") {
        onPress();
      }
    };
    document.addEventListener("keydown", keyPressListener);
    return () => {
      document.removeEventListener("keydown", keyPressListener);
    };
  });
}
