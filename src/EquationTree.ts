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

  /** Determines if the given equation is equivalent */
  equals(other: EquationTree): boolean {
    return this.toString() === other.toString();
  }

  /** evalutes the equation tree to a singular value */
  evaluate(xVal=10, yVal=10): number {
    if (this.isLeaf()) {
      if (this.datum === EquationTree.variables['x']) {
        return xVal;
      } else if (this.datum === EquationTree.variables['y']) {
        return yVal;
      }

      return Number(this.datum);
    }

    const left = this.left || new EquationTree(0);
    const right = this.right || new EquationTree(0);

    switch (this.datum) {
      case EquationTree.operations.multiply:
        return left.evaluate() * right.evaluate();
      case EquationTree.operations.divide:
        return left.evaluate() / right.evaluate();
      case EquationTree.operations.add:
        return left.evaluate() + right.evaluate();
      case EquationTree.operations.subtract:
        return left.evaluate() - right.evaluate();
      case EquationTree.operations.exponential:
        return Math.pow(left.evaluate(), right.evaluate());
      case EquationTree.operations.sin:
        return Math.sin(left.evaluate());
      case EquationTree.operations.cos:
        return Math.cos(left.evaluate());
      default: // EquationTree.operations.tan:
        return Math.tan(left.evaluate());
    }
  }
}

export default EquationTree;