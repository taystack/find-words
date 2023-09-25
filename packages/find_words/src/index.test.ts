import { findMatchingWords, EMPTY_RESPONSE } from './index';

jest.mock('./words', () => ({
  WORDS: new Set(['foo', 'far', 'bar', 'bat', 'bad']),
}));

describe('findMatchingWords', () => {
  test.each([
    {
      word: '',
      expected: EMPTY_RESPONSE,
    },
    {
      word: 'food',
      expected: {
        total: 1,
        foundMatches: ['foo'],
      },
    },
    {
      word: 'bart',
      expected: {
        total: 2,
        foundMatches: ['bar', 'bat'],
      },
    },
  ])('should match $word with $expected.total', ({ word, expected }) => {
    expect(findMatchingWords(word)).toMatchObject(expected);
  });
});