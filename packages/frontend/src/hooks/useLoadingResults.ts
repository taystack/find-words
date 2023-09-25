import { useWordSoupStore } from "../stores/WordSoupStore";

export const useLoadingResults = () => useWordSoupStore().loading;