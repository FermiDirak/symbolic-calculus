import createEquation from './createEquation';
import EquationTree from './EquationTree';

export = {
  createEquation,
  isVariable: EquationTree.isVariable,
  isOperator: EquationTree.isOperator,
};
