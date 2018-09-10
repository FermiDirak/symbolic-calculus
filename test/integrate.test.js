const SymbolicCalculus = require('./../src');

describe('integrate', () => {
  test('integrating 0 results in 0', () => {
    const equation = SymbolicCalculus.createEquation('0');
    const integral = equation.integrate();
    const expected = SymbolicCalculus.createEquation('0');

    expect(derivative.equals(expected)).toBe(true);
  });

  test('integrating a constant results in cx', () => {
    const equation = SymbolicCalculus.createEquation('5');
    const integral = equation.integrate();
    const expected = SymbolicCalculus.createEquation('* 5 x');

    expect(derivative.equals(expected)).toBe(true);
  });
});