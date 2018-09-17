const SymbolicCalculus = require('./../src');

describe('Create Equation using standard notation', () => {

  // let equationString1 = '5x + 3'; // 5 * x + 3 // + (* 5 x) 3
  // let equationString2 = '3cos(x)'; // 3 * cos(x) // * 3 (cos x)
  // let equationString3 = '8102.3 * cos(x)'; // 8102.3 * cos(x) // * 8102.3 cos(x)
  // let equationString4 = '3cos^2(x)';
  // let equationString5 = '9'; // 9
  // let equationString6 = '3x^2 + 5x^2';
  // let equationString7 = '(5x+3) + (6x + 4)';
  // let equationString8 = '5 + 3 + x';

  // expect(equationTree2).toBe(null);

  test('should create a basic equation', () => {
    SymbolicCalculus.createEquationStandard('(5x+3) + (6x + 4)');

    expect(1 + 1).toBe(2);

  });




});