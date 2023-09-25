/**
 * @param items `T[]` array of any type of item.
 * @returns new array of `items` without index `i`
 */
export function removeIndex<T>(items: T[], i: number) {
  const next = [...items];
  next.splice(i, 1);
  return next;
}
