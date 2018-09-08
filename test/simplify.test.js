const SymbolicCalculus = require('./../src')

describe('simplify', () => {
  test('should simplify multiplication', () => {
    let equation = SymbolicCalculus.createEquation('* 3 5');
    equation.simplify();
    const simple = SymbolicCalculus.createEquation('15');

    expect(equation.equals(simple)).toBe(true);
  });

  test('should simplify multiplication against 0', () => {
    let equation = SymbolicCalculus.createEquation('* 0 x');
    equation.simplify();
    const simple = SymbolicCalculus.createEquation('0');

    expect(equation.equals(simple)).toBe(true);
  });

  test('should simplify divison', () => {
    let equation = SymbolicCalculus.createEquation('/ 5 10');
    equation.simplify();
    const simple = SymbolicCalculus.createEquation('.5');

    expect(equation.equals(simple)).toBe(true);
  });

  test('should simplify addition', () => {
    let equation = SymbolicCalculus.createEquation('+ 3 5');
    equation.simplify();
    const simple = SymbolicCalculus.createEquation('8');

    expect(equation.equals(simple)).toBe(true);
  });

  test('should simplify subtraction', () => {
    let equation = SymbolicCalculus.createEquation('- 3 5');
    equation.simplify();
    const simple = SymbolicCalculus.createEquation('-2');

    expect(equation.equals(simple)).toBe(true);
  });

  test('should simplify exponentiation', () => {
    let equation = SymbolicCalculus.createEquation('^ 3 2');
    equation.simplify();
    const simple = SymbolicCalculus.createEquation('9');

    expect(equation.equals(simple)).toBe(true);
  });

  test('should simplify sin', () => {
    let equation = SymbolicCalculus.createEquation('sin 0');
    equation.simplify();
    const simple = SymbolicCalculus.createEquation('0');

    expect(equation.equals(simple)).toBe(true);
  });

  test('should simplify cos', () => {
    let equation = SymbolicCalculus.createEquation('cos 0');
    equation.simplify();
    const simple = SymbolicCalculus.createEquation('1');

    expect(equation.equals(simple)).toBe(true);
  });

  test('should simplify tan', () => {
    let equation = SymbolicCalculus.createEquation('tan 0');
    equation.simplify();
    const simple = SymbolicCalculus.createEquation('0');

    expect(equation.equals(simple)).toBe(true);
  });

  test('should simplify equation with a variable', () => {
    let equation = SymbolicCalculus.createEquation('* (+ 3 5) x');
    equation.simplify();
    const simple = SymbolicCalculus.createEquation('* 8 x');

    expect(equation.equals(simple)).toBe(true);
  });

  test('should deeply simplify complex equations', () => {
    let equation = SymbolicCalculus.createEquation('* (+ 3 5) 8');
    equation.simplify();
    const simple = SymbolicCalculus.createEquation('64');

    expect(equation.equals(simple)).toBe(true);
  });
});
