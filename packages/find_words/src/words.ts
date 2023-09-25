import { readFileSync } from "fs";
import { join } from "path";

/**
 * Memoized list of words upon start.
 */
export const WORDS = new Set(
  readFileSync(
    join(__dirname, '../static/words.txt'), 'utf8'
  ).toLowerCase().split('\n')
);
