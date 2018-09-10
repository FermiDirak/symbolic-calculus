const SymbolicCalculus = require('../src');

describe('derivate', () => {
  test('should derivate constants', () => {
    const equation = SymbolicCalculus.createEquation('5');
    const derivative = equation.derivate();
    const expected = SymbolicCalculus.createEquation('0');

    expect(derivative.equals(expected)).toBe(true);
  });

  test('should derivate x to 1', () => {
    const equation = SymbolicCalculus.createEquation('x');
    const derivative = equation.derivate();
    const expected = SymbolicCalculus.createEquation('1');

    expect(derivative.equals(expected)).toBe(true);
  });

  test('should derivate y to 0', () => {
    const equation = SymbolicCalculus.createEquation('x');
    const derivative = equation.derivate();
    const expected = SymbolicCalculus.createEquation('1');

    expect(derivative.equals(expected)).toBe(true);
  });

  test('should derivate composite equations (addition)', () => {
    const equation = SymbolicCalculus.createEquation('+ x 3');
    const derivative = equation.derivate();
    const expected = SymbolicCalculus.createEquation('1');

    expect(derivative.equals(expected)).toBe(true);
  });

  test('should derivate composite equations (subtraction)', () => {
    const equation = SymbolicCalculus.createEquation('- x 3');
    const derivative = equation.derivate();
    const expected = SymbolicCalculus.createEquation('1');

    expect(derivative.equals(expected)).toBe(true);
  });

  test('should derivate exponentials', () => {
    const equation = SymbolicCalculus.createEquation('^ x 3');
    const derivative = equation.derivate();
    const expected = SymbolicCalculus.createEquation('* 3 (^ x 2)');

    expect(derivative.equals(expected)).toBe(true);
  });

  test('should derivate composite equations (multiplication) 1', () => {
    const equation = SymbolicCalculus.createEquation('* 3 x');
    const derivative = equation.derivate();

    const expected = SymbolicCalculus.createEquation('3');

    expect(derivative.equals(expected)).toBe(true);
  });

  test('should derivate composite equations (multiplication) 2', () => {
    const equation = SymbolicCalculus.createEquation('* x 3');
    const derivative = equation.derivate();
    const expected = SymbolicCalculus.createEquation('3');

    expect(derivative.equals(expected)).toBe(true);
  });

  test('should derivate composite equations (multiplication) 3', () => {
    const equation = SymbolicCalculus.createEquation('+ (^ x 3) (^ x 2)');
    const derivative = equation.derivate();
    const expected = SymbolicCalculus.createEquation(
      '+ (* 3 (^ x 2)) (* 2 (^ x 1))'
    );

    expect(derivative.equals(expected)).toBe(true);
  });

  test('should derivate composite equations (division)', () => {
    const equation = SymbolicCalculus.createEquation('/ x 2');
    const derivative = equation.derivate();
    const expected = SymbolicCalculus.createEquation('0.5');

    expect(derivative.equals(expected)).toBe(true);
  });

  test('should derivate equations with cos', () => {
    const equation = SymbolicCalculus.createEquation('cos x');
    const derivative = equation.derivate();
    const expected = SymbolicCalculus.createEquation(' * -1 (sin x)');

    expect(derivative.equals(expected)).toBe(true);
  });

  test('should derivate equations with sin', () => {
    const equation = SymbolicCalculus.createEquation('sin (^ x 2)');
    const derivative = equation.derivate();
    const expected = SymbolicCalculus.createEquation(
      '* (cos (^ x 2)) (* 2 (^ x 1))'
    );

    expect(derivative.equals(expected)).toBe(true);
  });

  test('should derivate equations with tan', () => {
    const equation = SymbolicCalculus.createEquation('tan x');
    const derivative = equation.derivate();
    const expected = SymbolicCalculus.createEquation(
      '+ 1 (^ (tan x) 2)'
    );

    expect(derivative.equals(expected)).toBe(true);
  });
});