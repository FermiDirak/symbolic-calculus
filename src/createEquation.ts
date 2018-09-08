import EquationTree from './EquationTree';

/** Parses an equation string and turns it into an equation tree
 * input must in polish notation form */
function createEquation(equationString: string): EquationTree {
  equationString = equationString.trim();

  if (equationString[0] === '(') {
    equationString = equationString.substring(1, equationString.length - 1);
  }

  let equationArray = [''];
  let i = 0;

  while (i < equationString.length) {
    let char = equationString[i];

    if (char === ' ') {
      equationArray.push('');
    } else if (char === '(') {
      let parenCount = 1;
      equationArray[equationArray.length - 1] = '('

      while (i < equationString.length && parenCount > 0) {
        i += 1;
        char = equationString[i];

        if (char === '(') {
          parenCount += 1;
        } else if (char === ')') {
          parenCount -= 1;
        }

        equationArray[equationArray.length - 1] += char;
      }

    } else {
      equationArray[equationArray.length - 1] += char;
    }

    i += 1;
  }

  if (equationArray.length === 0) {
    return null;
  }

  if (equationArray.length === 1) {
    const value = equationArray[0];

    if (EquationTree.isVariable(value)) {
      return new EquationTree(value);
    }

    return new EquationTree(parseFloat(value));
  }

  if (equationArray.length === 2) {
    return new EquationTree(equationArray[0], createEquation(equationArray[1]));
  }

  if (equationArray.length === 3) {
    return new EquationTree(
      equationArray[0],
      createEquation(equationArray[1]),
      createEquation(equationArray[2]),
    );
  }
}

export default createEquation;