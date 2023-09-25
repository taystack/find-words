import { useCallback } from "react";
import { setUserInputStore } from "../stores/UserInputStore";

export const useInputHandleChange = () => useCallback(
  (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInputStore(event.currentTarget.value);
  },
  []
);
