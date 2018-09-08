const SymbolicCalculus = require('./../src');

describe('equals', () => {
  test('two equivalent equations should be equal', () => {
    const equation1 = SymbolicCalculus.createEquation('* 5 x');
    const equation2 = SymbolicCalculus.createEquation('* 5 x');

    expect(equation1.equals(equation2)).toBe(true);
  });

  test('two different equations should not be equal', () => {
    const equation1 = SymbolicCalculus.createEquation('* 5 x');
    const equation2 = SymbolicCalculus.createEquation('* 6 x');

    expect(equation1.equals(equation2)).toBe(false);
  });

  test('two different equations should not be equal', () => {
    const equation1 = SymbolicCalculus.createEquation('* 5 (+ 6 x)');
    const equation2 = SymbolicCalculus.createEquation('* 6 x');

    expect(equation1.equals(equation2)).toBe(false);
  });

  test('two equivalent equations should be equal bidirectionally', () => {
    const equation1 = SymbolicCalculus.createEquation('* 5 (+ 6 x)');
    const equation2 = SymbolicCalculus.createEquation('* 6 x');

    expect(equation1.equals(equation2)).toBe(equation2.equals(equation1));
  });

  test('two different equations should be unequal bidirectionally', () => {
    const equation1 = SymbolicCalculus.createEquation('* 5 (+ 6 x)');
    const equation2 = SymbolicCalculus.createEquation('* 6 x');

    expect(equation1.equals(equation2)).toBe(equation2.equals(equation1));
  });

});