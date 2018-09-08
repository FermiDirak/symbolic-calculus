const SymbolicCalculus = require('../src');

describe('derivate', () => {
  test('should derivate constants', () => {
    let equation = SymbolicCalculus.createEquation('5');
    equation.derivate();
    const result = SymbolicCalculus.createEquation('0');

    expect(equation.equals(result)).toBe(true);
  });

  test('should derivate variables', () => {
    let equation = SymbolicCalculus.createEquation('x');
    equation.derivate();
    const result = SymbolicCalculus.createEquation('1');

    expect(equation.equals(result)).toBe(true);
  });

  test('should derivate exponentials', () => {
    let equation = SymbolicCalculus.createEquation('^ x 3');
    equation.derivate();
    const result = SymbolicCalculus.createEquation('* 3 (^ x 2)');

    expect(equation.equals(result)).toBe(true);
  });

  test('should derivate composite equations (addition)', () => {
    let equation = SymbolicCalculus.createEquation('+ x 3');
    equation.derivate();
    const result = SymbolicCalculus.createEquation('1');

    expect(equation.equals(result)).toBe(true);
  });

  test('should derivate composite equations (multiplication) 1', () => {
    let equation = SymbolicCalculus.createEquation('* 3 x');
    equation.derivate();
    const result = SymbolicCalculus.createEquation('3');

    expect(equation.equals(result)).toBe(true);
  });

  test('should derivate composite equations (multiplication) 2', () => {
    let equation = SymbolicCalculus.createEquation('* x 3');
    equation.derivate();
    const result = SymbolicCalculus.createEquation('3');

    expect(equation.equals(result)).toBe(true);
  });

  test('should derivate composite equations (multiplication) 3', () => {
    let equation = SymbolicCalculus.createEquation(
      '+ (^ x 3) (- (* 2 (^ x 2)) (+ (* 4 x) 3))'
    );
    equation.derivate();
    const result = SymbolicCalculus.createEquation('3');

    expect(equation.equals(result)).toBe(true);
  });
})