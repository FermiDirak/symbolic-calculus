

// /**
//  * Determines if an equation can be simplified
//  */
// EquationTree.prototype.simplifiable = function() {
//   var isSimplifiable = true;
//   var hasSymbol = false;

//   var additionCounter = 0;
//   var multiplyCounter = 0;

//   if (!this.datum) {
//     return;
//   }

//   if (this.datum === EquationTree.operations.add
//   || this.datum === EquationTree.operations.subtract) {

//     additionCounter++;

//   } else if (this.datum === EquationTree.operations.multiply
//   || this.datum === EquationTree.operations.divide) {

//     multiplyCounter++;

//   }

//   if (this.left) {
//     this.left.simplifiable();
//   }

//   if (this.right) {
//     this.right.simplifiable();
//   }

//   return true;
// }

import createEquation from './createEquation';
import EquationTree from './EquationTree';



export = {
  createEquation,
  isVariable: EquationTree.isVariable,
  isOperator: EquationTree.isOperator,
 };
