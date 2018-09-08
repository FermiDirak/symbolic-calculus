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
      let parenCount = 0;

      do {
        char = equationString[i];

        if (char === '(') {
          parenCount += 1;
        } else if (char === ')') {
          parenCount -= 1;
        }

        equationArray[equationArray.length - 1] += char;

        i += 1;
      } while (i < equationString.length && parenCount > 0);

    } else {
      equationArray[equationArray.length - 1] += char;
    }

    i += 1;
  }

  if (equationArray.length === 1) {
    const element = equationArray[0];

    if (element)

    return EquationTree(parseFloat(element));
  }

  // for (let i = 0; i < equationString.length; ++i) {
  //   let char = equationString[i];

  //   if (char === '(') {
  //     parenCount += 1;
  //   } else if (char === ')') {
  //     parenCount -= 1;
  //   }

  //   equationArray[equationArray.length - 1] += char;

  // }

  console.log(equationArray);

  if (equationArray.length === 0) {
    return null;
  }

  if (equationArray.length === 1) {

  }

  return new EquationTree(5);
}

export default createEquation;