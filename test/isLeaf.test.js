const SymbolicCalculus = require('./../src');

describe('isLeaf', () => {
  test('a tree without children is a leaf', () => {
    const equation = SymbolicCalculus.createEquation('5');

    expect(equation.isLeaf()).toBe(true);
  });

  test('a tree with one child isn\'t a leaf', () => {
    const equation =SymbolicCalculus.createEquation('(sin x)');

    expect(equation.isLeaf()).toBe(false);
  });

  test('a tree with two children isn\'t a leaf', () => {
    const equation =SymbolicCalculus.createEquation('(* 5 x)');

    expect(equation.isLeaf()).toBe(false);
  });
});