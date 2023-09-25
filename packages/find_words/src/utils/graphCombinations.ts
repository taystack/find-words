import { removeIndex } from "./removeIndex";

/**
 * @param letters `string[]` array of letters to graph against `current`
 * @param current `string` the current graphed combination of letters.
 * @param predicate `(word: string) => void` function invoked on all entries.
 * @returns void
 */
export const graphCombinations = (letters: string[], current: string, predicate: (word: string) => void) => {
  if (letters.length > 0) {
    letters.forEach((letter, i) => {
      predicate(current + letter);
      graphCombinations(
        removeIndex(letters, i),
        current + letter,
        predicate
      );
    });
  }
}
