import createEquation from './createEquation';

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

  /** Clones the Equation Tree */
  clone(): EquationTree {
    const equationString = this.toString();

    return createEquation(equationString);
  }

  /** simplifies the equation tree */
  simplify() {
    if (this.left) {
      this.left.simplify();
    }

    if (this.right) {
      this.right.simplify();
    }

    if (this.datum === EquationTree.operations.multiply
      && this.left && typeof(this.left.datum) === 'number'
      && this.right && typeof(this.right.datum) === 'number'
    ) {
      this.datum = this.left.datum * this.right.datum;
      this.left = null;
      this.right = null;

    } else if (this.datum === EquationTree.operations.divide
      && this.left && typeof(this.left.datum) === 'number'
      && this.right && typeof(this.right.datum) === 'number'
    ) {
      this.datum = this.left.datum / this.right.datum;
      this.left = null;
      this.right = null;

    } else if ((this.datum === EquationTree.operations.multiply
      || this.datum === EquationTree.operations.divide)
      && this.left && this.right &&
      (this.left.datum === 0 || this.right.datum === 0)
    ) {
      this.datum = 0;
      this.left = null;
      this.right = null;

    } else if (this.datum === EquationTree.operations.multiply
      && this.left && this.right &&
      (this.left.datum === 1 || this.right.datum === 1)
    ) {

      if (this.left.datum === 1) {
        this.datum = this.right.datum;
        this.left = this.right.left;
        this.right = this.right.right;
      } else {
        this.datum = this.left.datum;
        this.right = this.left.right;
        this.left = this.left.left;
      }

    } else if (this.datum === EquationTree.operations.add
      && this.left && typeof(this.left.datum) === 'number'
      && this.right && typeof(this.right.datum) === 'number'
    ) {
      this.datum = this.left.datum + this.right.datum;
      this.left = null;
      this.right = null;

    } else if (this.datum === EquationTree.operations.subtract
      && this.left && typeof(this.left.datum) === 'number'
      && this.right && typeof(this.right.datum) === 'number'
    ) {
      this.datum = this.left.datum - this.right.datum;
      this.left = null;
      this.right = null;

    } else if (this.datum === EquationTree.operations.exponential
      && this.left && typeof(this.left.datum) === 'number'
      && this.right && typeof(this.right.datum) === 'number'
    ) {
      this.datum = Math.pow(this.left.datum, this.right.datum);
      this.left = null;
      this.right = null;

    } else if (this.datum === EquationTree.operations.sin
      && this.left && typeof(this.left.datum) === 'number'
    ) {
      this.datum = Math.sin(this.left.datum);
      this.left = null;
      this.right = null;

    } else if (this.datum === EquationTree.operations.cos
      && this.left && typeof(this.left.datum) === 'number'
    ) {
      this.datum = Math.cos(this.left.datum);
      this.left = null;
      this.right = null;

    } else if (this.datum === EquationTree.operations.tan
      && this.left && typeof(this.left.datum) === 'number'
    ) {
      this.datum = Math.tan(this.left.datum);
      this.left = null;
      this.right = null;

    }
  }

  /** finds the derivative with respect to x */
  derivate(): EquationTree {
    /** differentiation rules:
     * d/dx(c) => 0
     * d/dx(x) => 1
     * d/dx(y) => 0
     * d/dx(u +/- v) => d/dx(u) +/- d/dx(v)
     * d/dx(u * v) => u * d/dx(v) + v * d/dx(u)
     * d/dx(u / v) => (v * d/dx(u) - u * d/dx(v)) / v^2
     * d/dx(u^c) => c * u^(c-1) * d/dx(u)
     * d/dx(cos(u)) => -sin(u) * d/dx(u)
     * d/dx(sin(u)) => cos(u) * d/dx(u)
     * d/dx(tan(u)) => (1 + tan^2(u)) * d/dx(u)
     */

    let clone = this.clone();

    // d/dx(c) => 0
    if (clone.isLeaf() && typeof(clone.datum) === 'number') {
      clone.datum = 0;
      clone.left = null;
      clone.right = null;

    // d/dx(x) => 1
    } else if (clone.isLeaf()
      && clone.datum === EquationTree.variables['x']
    ) {
      clone.datum = 1;
      clone.left = null;
      clone.right = null;

    // d/dx(y) => 0
    } else if (clone.isLeaf()
      && clone.datum === EquationTree.variables['y']
    ) {
      clone.datum = 0;
      clone.left = null;
      clone.right = null;

    // d/dx(u + v) => d/dx(u) + d/dx(v)
    } else if (clone.datum === EquationTree.operations.add
      && clone.left && clone.right
    ) {
      clone.left = clone.left.derivate();
      clone.right = clone.right.derivate();

    // d/dx(u - v) => d/dx(u) - d/dx(v)
    } else if (clone.datum === EquationTree.operations.subtract
      && clone.left && clone.right
    ) {
      clone.left = clone.left.derivate();
      clone.right = clone.right.derivate();

    // d/dx(u * v) => u * d/dx(v) + v * d/dx(u)
    } else if (clone.datum === EquationTree.operations.multiply
      && clone.left && clone.right
    ) {
      const left = clone.left;
      const right = clone.right;

      const dLeft = clone.left.derivate();
      const dRight = clone.right.derivate();

      clone.datum = EquationTree.operations.add;
      clone.left = new EquationTree(
        EquationTree.operations.multiply,
        left,
        dRight,
      );
      clone.right = new EquationTree(
        EquationTree.operations.multiply,
        dLeft,
        right,
      );

    // d/dx(u / v) = (v * d/dx(u) - u * d/dx(v)) / v^2
    } else if (clone.datum === EquationTree.operations.divide
      && clone.left && clone.right
    ) {
      const left = clone.left;
      const right = clone.right;

      const dLeft = clone.left.derivate();
      const dRight = clone.right.derivate();

      clone.datum = EquationTree.operations.divide;

      clone.left = new EquationTree(
        EquationTree.operations.subtract,
        new EquationTree(
          EquationTree.operations.multiply,
          dLeft,
          right,
        ),
        new EquationTree(
          EquationTree.operations.multiply,
          left,
          dRight,
        ),
      );

      clone.right = new EquationTree(
        EquationTree.operations.exponential,
        right,
        new EquationTree(2),
      );

    // d/dx(u^c) = c * u^(c-1) * d/dx(u)
    } else if (clone.datum === EquationTree.operations.exponential
      && clone.left && clone.right && typeof(clone.right.datum) === 'number'
    ) {

      const left = clone.left;
      const right = clone.right;

      const dLeft = clone.left.derivate();
      const dRight = clone.right.clone();

      if (typeof(dRight.datum) === 'number') {
        dRight.datum = dRight.datum - 1;
      }

      clone.datum = EquationTree.operations.multiply;
      clone.left = right;
      clone.right = new EquationTree(
        EquationTree.operations.multiply,
        new EquationTree(
          EquationTree.operations.exponential,
          left,
          dRight,
        ),
        dLeft,
      );

    // d/dx(cos(u)) => -sin(u) * d/dx(u)
    } else if (clone.datum === EquationTree.operations.cos
      && clone.left
    ) {

      const left = clone.left.clone();
      const dLeft = clone.left.derivate();

      clone.datum = EquationTree.operations.multiply;
      clone.left = new EquationTree(
        EquationTree.operations.multiply,
        new EquationTree(-1),
        new EquationTree(
          EquationTree.operations.sin,
          left,
        ),
      );
      clone.right = dLeft;

    // d/dx(sin(u)) => cos(u) * d/dx(u)
    } else if (clone.datum === EquationTree.operations.sin
      && clone.left
    ) {

      const left = clone.left.clone();
      const dLeft = clone.left.derivate();

      clone.datum = EquationTree.operations.multiply;
      clone.left = new EquationTree(
        EquationTree.operations.cos,
        left,
      );
      clone.right = dLeft;

    // d/dx(tan(u)) => (1 + tan^2(u)) * d/dx(u)
    } else if (clone.datum === EquationTree.operations.tan
      && clone.left
    ) {
      const left = clone.left.clone();
      const dLeft = clone.left.derivate();

      clone.datum = EquationTree.operations.multiply;
      clone.left = new EquationTree(
        EquationTree.operations.add,
        new EquationTree(1),
        new EquationTree(
          EquationTree.operations.exponential,
          new EquationTree(
            EquationTree.operations.tan,
            left,
          ),
          new EquationTree(2),
        ),
      );
      clone.right = dLeft;
    }

    clone.simplify();

    return clone;
  }

  /** finds the integral of an equation wrt x */
  integrate(): EquationTree {
    /** integration rules:
     * int(c) => c * x
     * int(x) => x^2 / 2
     * int(c * u) => c * int(u)
     * int(u +/- v) => int(u) +/- int(v)
     * int(u^n) => u^n+1 / n + 1
     * int(n/u) => n * ln(u)
     * int(a^u) => (1/ln(a)) * a^u
     * int(sin(u)) => -cos(u)
     * int(cos(u)) => sin(u)
     * int(tan(u)) => -ln(cos(u))
     */

    let clone = this.clone();

    // int(c) => c * x
    if (clone.isLeaf() && typeof(clone.datum) === 'number') {
      const datum = clone.datum;

      clone.datum = EquationTree.operations.multiply;
      clone.left = new EquationTree(datum);
      clone.right = new EquationTree(EquationTree.variables.x);

    // int(x) => x^2 / 2
    } else if (clone.isLeaf() && EquationTree.isVariable(clone.datum)) {
      clone.datum = EquationTree.operations.divide;
      clone.left = new EquationTree(
        EquationTree.operations.exponential,
        new EquationTree(EquationTree.variables.x),
        new EquationTree(2),
      );
      clone.right = new EquationTree(2);

    // int(c * u) => c * int(u)
    } else if (clone.datum === EquationTree.operations.multiply
      && clone.left && clone.right
      && typeof(clone.left.datum) === 'number'
    ) {
      clone.right = clone.right.integrate();

    // int(c * u) => c * int(u)
    } else if (clone.datum === EquationTree.operations.multiply
      && clone.left && clone.right
      && typeof(clone.right.datum) === 'number'
    ) {
      const left = clone.left.clone();
      const right = clone.right.clone();
      clone.left = right;
      clone.right = left;

      clone.right = clone.right.integrate();


    }

    clone.simplify();

    return clone;
  }
}

export default EquationTree;