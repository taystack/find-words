import { useSyncExternalStore } from "react";
import { addPerformance } from "./PerformanceStore";
import { userInputStore } from "./UserInputStore";
import { ExternalStoreAsync } from "./ExternalStore";
import { FindMatchingWords } from '@local/find-words';

class WordSoupStore extends ExternalStoreAsync<FindMatchingWords> {
  state: {
    value: FindMatchingWords | undefined;
    loading: boolean;
  } = {
    value: undefined,
    loading: false,
  };

  setLoading(): void {
    globalThis.performance.mark('word_soup');
    this.state.loading = true;
    this.emitChange();
  }

  set(value: FindMatchingWords): void {
    addPerformance(
      userInputStore.state.value || '',
      globalThis.performance.measure('word_soup', 'word_soup')
    );
    this.state = { value, loading: false };
    this.emitChange();
  }
}

export const wordSoupStore = new WordSoupStore();
export const setWordSoupStore = wordSoupStore.set.bind(wordSoupStore);
export const setWordSoupStoreLoading = wordSoupStore.setLoading.bind(wordSoupStore);
export const clearWordSoupStore = wordSoupStore.clear.bind(wordSoupStore);
export const useWordSoupStore = () => useSyncExternalStore(
  wordSoupStore.subscribe.bind(wordSoupStore),
  wordSoupStore.getSnapshot.bind(wordSoupStore),
);
