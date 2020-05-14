const { sub, add } = require('../simple-math');

describe('simple-math', () => {
  describe('add', () => {
    it.each`
      left  | right | result
      ${8}  | ${5}  | ${13}
      ${5}  | ${8}  | ${13}
      ${-8} | ${5}  | ${-3}
      ${5}  | ${-8} | ${-3}
      ${-5} | ${-8} | ${-13}
      ${-8} | ${-5} | ${-13}
    `(
      `adds two integer numbers: add($left, $right)`,
      ({ left, right, result }) => {
        expect(add(left, right)).toBe(result);
      }
    );
  });

  describe('sub', () => {
    it.each`
      left  | right | result
      ${8}  | ${5}  | ${3}
      ${5}  | ${8}  | ${-3}
      ${-8} | ${5}  | ${-13}
      ${5}  | ${-8} | ${13}
      ${-5} | ${-8} | ${3}
      ${-8} | ${-5} | ${-3}
    `(
      `subtracts two integer numbers: sub($left, $right)`,
      ({ left, right, result }) => {
        expect(sub(left, right)).toBe(result);
      }
    );
  });
});
