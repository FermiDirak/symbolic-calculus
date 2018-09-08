const SymbolicCalculus = require('./../src');

describe('evaluate', () => {
  test('evaluate on generic equation', () => {
    const equation = SymbolicCalculus.createEquation('* x 5');

    expect(equation.evaluate(10)).toBe(50);
  });

  test('evaluate on complex equation', () => {
    const equation = SymbolicCalculus.createEquation('/ x (+ x (- y 5))');

    expect(equation.evaluate(21, 3)).toBe(2 / 3);
  });

  test('evaluate on double precision generic equation', () => {
    const equation = SymbolicCalculus.createEquation('^ 2.7182 2');

    expect(equation.evaluate()).toBe(Math.pow(2.7182, 2));
  });

  test('evaluate on sin equation', () => {
    const equation = SymbolicCalculus.createEquation('sin 3.14');

    expect(equation.evaluate()).toBe(Math.sin(3.14));
  });

  test('evaluate on cos equation', () => {
    const equation = SymbolicCalculus.createEquation('cos 3.14');

    expect(equation.evaluate()).toBe(Math.cos(3.14));
  });

  test('evaluate on tan equation', () => {
    const equation = SymbolicCalculus.createEquation('tan 3.14');

    expect(equation.evaluate()).toBe(Math.tan(3.14));
  });
});