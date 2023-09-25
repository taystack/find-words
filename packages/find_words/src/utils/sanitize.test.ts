import { sanitize } from "./sanitize";

describe('sanitize', () => {
  test.each([
    {
      provided: '',
      expected: '',
    },
    {
      provided: 'HELLO',
      expected: 'hello',
    },
    {
      provided: ';DROP TABLE STUDENTS',
      expected: 'droptablestudents',
    },
    {
      provided: '(())___HeLlO',
      expected: 'hello',
    },
  ])('should sanitize $provided into $expected', ({ provided, expected }) => {
    expect(sanitize(provided)).toEqual(expected);
  });
});