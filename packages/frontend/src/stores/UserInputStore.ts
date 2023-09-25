import { useSyncExternalStore } from "react";
import { ExternalStore } from "./ExternalStore";

class UserInputStore extends ExternalStore<string> {
  set(value: string) {
    this.state = { value };
    this.emitChange();
  }
}

export const userInputStore = new UserInputStore();
export const setUserInputStore = userInputStore.set.bind(userInputStore);
export const clearUserInputStore = userInputStore.set.bind(userInputStore);
export const useUserInputStore = () => useSyncExternalStore(
  userInputStore.subscribe.bind(userInputStore),
  userInputStore.getSnapshot.bind(userInputStore),
);
