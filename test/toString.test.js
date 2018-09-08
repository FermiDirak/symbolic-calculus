const SymbolicCalculus = require('./../src');

describe('toString', () => {
  test('should print an equation to string', () => {
    const equation = SymbolicCalculus.createEquation('+ x 3')

    expect(equation.toString()).toBe('+ x 3');
  });

  test('should print an equation to string', () => {
    const equation = SymbolicCalculus.createEquation('(+ 4 (/ 5 6))')

    expect(equation.toString()).toBe('+ 4 (/ 5 6)');
  });

  test('should print in simplified polish notation', () => {
    const equation = SymbolicCalculus.createEquation('+ 4 (/ (+ 3 x) 9)')

    expect(equation.toString()).toBe('+ 4 (/ (+ 3 x) 9)');
  });

  test('should print simple 1 parameter equations', () => {
    const equation = SymbolicCalculus.createEquation('sin x')

    expect(equation.toString()).toBe('sin x');
  });
});
