import { performance } from 'perf_hooks';

import { graphCombinations } from "./utils/graphCombinations";
import { removeIndex } from "./utils/removeIndex";
import { sanitize } from "./utils/sanitize";
import { WORDS } from "./words";

export interface FindMatchingWords {
  combinations: number;
  total: number;
  foundMatches: string[];
  duration: number;
};

export const EMPTY_RESPONSE = { combinations: 0, total: 0, foundMatches: [], duration: 0 };

const start = (name: string) => {
  performance.mark(`${name}:start`);
  return () => performance.measure(`${name}:end`, `${name}:start`);;
};

export function findMatchingWords(provided: string): FindMatchingWords {
  const word = sanitize(provided);
  if (!word) return EMPTY_RESPONSE;

  // Start the performance closure.
  const measure = start('findMatchingWords');
  
  // Track the matches we found.
  const foundMatches = new Set<string>();
  
  // Track the number of letter combinations we have.
  let combinations = 0;

  // Closure predicate to pass down as a callback for each word combination.
  const predicate = (queryWord: string) => {
    combinations += 1;
    if (WORDS.has(queryWord)) foundMatches.add(queryWord);
  }

  // Save a check for the input word.
  predicate(word);
  word.split('').forEach((letter, idx, letters) => {
    // Maybe the first letter is a word.
    predicate(letter);
    graphCombinations(removeIndex(letters, idx), letter, predicate);
  });
  const { duration } = measure();

  return {
    combinations,
    duration,
    total: foundMatches.size,
    foundMatches: Array.from(foundMatches),
  };
}
