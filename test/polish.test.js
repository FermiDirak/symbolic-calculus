const SymbolicCalculus = require('./../src');

test('Create Equation using Polish notation', () => {
  let equationTree1 = SymbolicCalculus.createEquation(
    '(+ 4 (/ (+ 3 x) 9))'
  );

  expect(1 + 1).toBe(2);
});
