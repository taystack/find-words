import { removeIndex } from "./removeIndex";

describe('removeIndex', () => {
  test.each<{
    arr: unknown[];
    index: number;
    expected: unknown[];
  }>([{
    arr: [],
    index: 0,
    expected: [],
  }, {
    arr: [1, 2, 3],
    index: 0,
    expected: [2, 3],
  }, {
    arr: [1, 2, 3],
    index: 3,
    expected: [1, 2, 3],
  }])('should return $arr with index $index removed', ({ arr, index, expected }) => {
    expect(removeIndex(arr, index)).toEqual(expected);
  });
})