import EquationTree from './EquationTree';

/** Parses an equation string and turns it into an equation tree
 * input must in standard form */
function createEquation(equationString: string): EquationTree {
  let equationArray = [''];

  // split equation string to an array of operators,
  // variables, and constants
  for (let i = 0; i < equationString.length; ++i) {
    let char = equationString[i];

    if (EquationTree.isVariable(char) || EquationTree.isOperator(char)) {
      equationArray.push(char);
      equationArray.push('');
    } else {
      equationArray[equationArray.length - 1] += char;
    }
  }

  // filter out blank characters and remove whitespace
  equationArray = equationArray.map(element => element.trim());
  equationArray = equationArray.filter(element => !!element);

  // add `*` when a variable follows a number or vice-versa
  for (let i = 0; i < equationArray.length - 1; ++i) {
    const curr = equationArray[i];
    const next = equationArray[i + 1];

    if ((!isNaN(curr) && EquationTree.isVariable(next))
     || (!isNaN(next) && EquationTree.isVariable(curr))
    ) {
      equationArray.splice(i + 1, 0, '*');
    }
  }

  console.log(equationArray);

  console.log('hi')

  return new EquationTree(5);

}


export default createEquation;