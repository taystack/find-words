import { useUserInputStore } from "../stores/UserInputStore";

export const useInputValue = () => useUserInputStore().value || '';
