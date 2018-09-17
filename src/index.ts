import createEquation from './createEquation';
import createEquationPolish from './createEquationPolish';
import EquationTree from './EquationTree';



export = {
  createEquationStandard: createEquation,
  createEquation: createEquationPolish,
  isVariable: EquationTree.isVariable,
  isOperator: EquationTree.isOperator,
};
