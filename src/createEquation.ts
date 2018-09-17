import EquationTree from './EquationTree';

/** Parses an equation string and turns it into an equation tree
 * input must in standard form */
function createEquation(equationString: string): EquationTree {
  //split string by operations and variables
  let equationArray = [''];


  for (let i = 0; i < equationString.length; ++i) {
    let char = equationString[i];

    if (EquationTree.isVariable(char) || EquationTree.isOperator(char)) {
      equationArray.push(char);
      equationArray.push('');
    } else {
      equationArray[equationArray.length - 1] += char;
    }
  }

  console.log(equationArray);

  console.log('hi')

  return new EquationTree(5);

}


export default createEquation;