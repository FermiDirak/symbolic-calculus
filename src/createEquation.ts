import EquationTree from './EquationTree';

/** Parses an equation string and turns it into an equation tree
 * input must in polish notation form */
function createEquation(equationString: string): EquationTree {
  let equationArray = equationString.replace(/\(|\)/g, '').split(' ');

  return new EquationTree(5);
}

export default createEquation;