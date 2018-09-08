const SymbolicCalculus = require('./../src');

describe('isVariable', () => {
  test('isVariable should identify \'x\' as a symbol', () => {
    expect(SymbolicCalculus.isVariable('x')).toBe(true);
  });

  test('isVariable should identify \'y\' as a symbol', () => {
    expect(SymbolicCalculus.isVariable('y')).toBe(true);
  });

  test('isVariable should not identify \'1\' as a symbol', () => {
    expect(SymbolicCalculus.isVariable('1')).toBe(false);
  });

  test('isVariable should not identify \'a\' as a symbol', () => {
    expect(SymbolicCalculus.isVariable('a')).toBe(false);
  });

  test('isVariable should not identify \'\' as a symbol', () => {
    expect(SymbolicCalculus.isVariable('')).toBe(false);
  });
});
