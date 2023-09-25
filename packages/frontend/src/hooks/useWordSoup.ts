import { useCallback } from "react";
import { FindMatchingWords } from '@local/find-words';

import { clearWordSoupStore, setWordSoupStore, useWordSoupStore, wordSoupStore } from "../stores/WordSoupStore";

const LOADING = Promise.resolve();

type UseWordSoup = { value?: FindMatchingWords } & { get: (word: string) => void };

export function useWordSoup(): UseWordSoup {
  const { value, loading } = useWordSoupStore();
  const get = useCallback((word: string) => {
    wordSoupStore.setLoading();
    if (!word) clearWordSoupStore();
    else {
      fetch(`http://localhost:3001/${word}`)
        .then((res) => res.json())
        .then(setWordSoupStore);
    }
  }, []);
  if (loading) throw LOADING;
  return { value, get };
}
