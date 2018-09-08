const SymbolicCalculus = require('../src');

describe('clone', () => {
  test('should clone generic equation', () => {
    let equation = SymbolicCalculus.createEquation('* 3 (+ 8 x))');
    let clone = equation.clone();

    expect(equation.equals(clone)).toBe(true);
  });
});