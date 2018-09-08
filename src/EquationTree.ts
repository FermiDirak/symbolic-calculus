/** A tree that represents a mathematical expression */
class EquationTree {
  datum: string | number;
  left: EquationTree | null;
  right: EquationTree | null;

  constructor(
    datum: string | number,
    left?: EquationTree | null,
    right?: EquationTree | null,
  ) {
    this.datum = datum;
    this.left = left || null;
    this.right = right || null;
  }

  /** An enumeration of possible operations */
  static operations = {
    multiply: '*',
    divide: '/',
    add: '+',
    subtract: '-',
    exponential: '^',
    sin: 'sin',
    cos: 'cos',
    tan: 'tan',
  }

  static variables = {
    x: 'x',
    y: 'y',
  }

  /** determines if input value is a variable or not */
  static isVariable(str: string): boolean {
    const variables = Object.values(EquationTree.variables);

    return !(variables.indexOf(str) === -1);
  }

  /** determines if input value is an operator or not */
  static isOperator(str: string): boolean {
    const operations = Object.values(EquationTree.operations);

    return !(operations.indexOf(str) === -1);
  }

  /** prints the equation tree out as a string */
  toString(): string {
    let equation = '';

    equation += this.datum;

    if (this.left) {
      equation += ' ';

      const isLeftLeaf = this.left.isLeaf();

      if (!isLeftLeaf) {
        equation += '(';
      }

      equation += this.left.toString();

      if (!isLeftLeaf) {
        equation += ')';
      }
    }

    if (this.right) {
      equation += ' ';

      const isRightLeaf = this.right.isLeaf();

      if (!isRightLeaf) {
        equation += '(';
      }

      equation += this.right.toString();

      if (!isRightLeaf) {
        equation += ')';
      }
    }

    return equation;
  }

  /** determines if equation tree node is a leaf */
  isLeaf(): boolean {
    return this.left === null && this.right === null;
  }



}

export default EquationTree;