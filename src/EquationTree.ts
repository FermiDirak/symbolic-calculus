/** A tree that represents a mathematical expression */
class EquationTree {
  datum: string | number;
  left: EquationTree | null;
  right: EquationTree | null;

  constructor(
    datum: string | number,
    left=null,
    right=null,
  ) {
    this.datum = datum;
    this.left = left;
    this.right = right;
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
    y: 'x',
  }


}

export default EquationTree;