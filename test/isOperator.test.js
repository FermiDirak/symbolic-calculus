const SymbolicCalculus = require('./../src');

describe('isOperator', () => {
  test('isOperator should identify \'*\' as an operator', () => {
    expect(SymbolicCalculus.isOperator('*')).toBe(true);
  });

  test('isOperator should not identify \'x\' as an operator', () => {
    expect(SymbolicCalculus.isOperator('x')).toBe(false);
  });

  test('isOperator should not identify \'y\' as an operator', () => {
    expect(SymbolicCalculus.isOperator('y')).toBe(false);
  });

  test('isOperator should not identify \'a\' as an operator', () => {
    expect(SymbolicCalculus.isOperator('a')).toBe(false);
  });

  test('isOperator should not identify \'\' as aan operator', () => {
    expect(SymbolicCalculus.isOperator('')).toBe(false);
  });
});
