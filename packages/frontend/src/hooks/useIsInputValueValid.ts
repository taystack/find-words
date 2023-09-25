import { useUserInputStore } from "../stores/UserInputStore";

export const useIsInputValueValid = () => [(useUserInputStore().value || '').length < 11, (useUserInputStore().value || '').length > 20];
