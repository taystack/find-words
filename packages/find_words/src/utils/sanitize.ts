/**
 * @param word intended to sanitize.
 * @returns `string` [a-zA-Z]
 */
export const sanitize = (word: string) => word.replace(/[^a-zA-Z]+/g, '').toLocaleLowerCase();