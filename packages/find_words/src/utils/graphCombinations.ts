import { removeIndex } from "./removeIndex";

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
