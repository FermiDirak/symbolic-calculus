const SymbolicCalculus = require('./../src');

describe('integrate', () => {
  test('integrating 0 results in 0', () => {
    const equation = SymbolicCalculus.createEquation('0');
    const integral = equation.integrate();
    const expected = SymbolicCalculus.createEquation('0');

    expect(integral.equals(expected)).toBe(true);
  });

  test('integrating a constant results in cx', () => {
    const equation = SymbolicCalculus.createEquation('5');
    const integral = equation.integrate();
    const expected = SymbolicCalculus.createEquation('* 5 x');

    expect(integral.equals(expected)).toBe(true);
  });

  test('integrating a variable results in x^2/2', () => {
    const equation = SymbolicCalculus.createEquation('x');
    const integral = equation.integrate();
    const expected = SymbolicCalculus.createEquation('/ (^ x 2) 2');

    expect(integral.equals(expected)).toBe(true);
  });

  test('integrating a variable results in x^2/2', () => {
    const equation = SymbolicCalculus.createEquation('x');
    const integral = equation.integrate();
    const expected = SymbolicCalculus.createEquation('/ (^ x 2) 2');

    expect(integral.equals(expected)).toBe(true);
  });

  test('integrating 4x results in 2x^2', () => {
    const equation = SymbolicCalculus.createEquation('* 4 x');
    const integral = equation.integrate();
    const expected = SymbolicCalculus.createEquation('* 4 (/ (^ x 2) 2)');

    console.log(integral.toString());

    expect(integral.equals(expected)).toBe(true);
  });
});