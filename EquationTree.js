/**
 * An Equation Tree is a tree with a datum that's an operation
 * and child nodes that are either values or equation trees
 */
var EquationTree = function(datum, left, right) {
	this.datum = datum;
	this.left = left;
	this.right = right;
}

/**
 * An enumeration of possible EquationTree operations
 */
EquationTree.operations = {
	multiply: '*',
	divide: '/',
	add: '+',
	subtract: '-',
	exponential: '^',
	sin: 'sin',
	cos: 'cos',
	tan: 'tan',
}

/**
 * An enumeration of possible symbols
 */
EquationTree.symbols = {
	x: 'x',
	y: 'y',
}

/**
 * Parses an expression tree and turns it into an equation tree
 * @param equationString String to parse into an equationTree
 *        Must follow syntax: (SYMBOL EXP1 EXP2)
 * @return The Expression Tree reprensentation of the equation
 */
EquationTree.create = function(equationString) {
	var equationArray = equationString.replace(/\(|\)/g,'').split(' ');

	var createTree = function() {
		var equationTree = new EquationTree(equationArray[0]);
		equationArray.shift()

		if (EquationTree.isOperation(equationArray[0])) {
			equationTree.left = createTree();

		} else {
			if (!isNaN(equationArray[0])) { //checks to see if its a number
				equationArray[0] = parseFloat(equationArray[0]);
			}

			equationTree.left = new EquationTree(equationArray[0]);
			equationArray.shift();
		}

		if (EquationTree.isOperation(equationArray[0])) {
			equationTree.right = createTree();
		} else {
			if (!isNaN(equationArray[0])) {
				equationArray[0] = parseFloat(equationArray[0]);
			}

			equationTree.right = new EquationTree(equationArray[0]);
			equationArray.shift();
		}

		return equationTree;
	}

	return createTree(equationArray);
}

/**
 * Checks if a value is an operation or not
 * @param value The value to test
 * @result Whether the param is an operation or not
 */
EquationTree.isOperation = function(value) {
	for (var key in EquationTree.operations) {
		if (value === EquationTree.operations[key]) {
			return true;
		}
	}

	return false;
}

/**
 * Evaluates the EquationTree to a value
 * @param xVal Value to use for symbol X
 */
EquationTree.prototype.evaluate = function (xVal) {
	//@TODO: make evaluate work with symbols
	var result = 0;

	switch (this.datum) {
		case EquationTree.symbols.x:
			break;
		case EquationTree.operations.add:
			result = this.left.evaluate() + this.right.evaluate();
			break;
		case EquationTree.operations.subtract:
			result = this.left.evaluate() - this.right.evaluate();
			break;
		case EquationTree.operations.multiply:
			result = this.left.evaluate() * this.right.evaluate();
			break;
		case EquationTree.operations.divide:
			result = this.left.evaluate() / this.right.evaluate();
			break;
		case EquationTree.operations.exponential:
			result = Math.pow(this.left.evaluate(), this.right.evaluate());
			break;
		case EquationTree.operations.cos:
			result = Math.cos(this.left.evaluate());
			break;
		case EquationTree.operations.sin:
			result = Math.sin(this.left.evaluate());
			break;
		case EquationTree.operations.tan:
			result = Math.tan(this.left.evaluate());
			break;
		default: //number
			result = this.datum;
			break;
	}

	return result;
}

/**
 * Simplifies the EquationTree to a simpler equationTree
 */
EquationTree.prototype.simplify = function() {

}

/**
 * Determines if an equation can be simplified
 */
EquationTree.prototype.simplifiable = function() {
	var isSimplifiable = true;
	var hasSymbol = false;

	var additionCounter = 0;
	var multiplyCounter = 0;

	if (!this.datum) {
		return;
	}

	if (this.datum === EquationTree.operations.add
	|| this.datum === EquationTree.operations.subtract) {

		additionCounter++;

	} else if (this.datum === EquationTree.operations.multiply
	|| this.datum === EquationTree.operations.divide) {

		multiplyCounter++;

	}

	if (this.left) {
		this.left.simplifiable();
	}

	if (this.right) {
		this.right.simplifiable();
	}

	return true;
}

/**
 * Evaluates the derivative of the Equation tree
 */
EquationTree.prototype.derivate = function() {

}

/**
 * Evaluates the integral of the Equation tree
 */
EquationTree.prototype.integrate = function() {

}

/**
 * Applys a callback for all elements in the Equation Tree
 * @param callback Callback to apply to each element of the EquationTree
 * 		callback takes in datum as a parameter
 */
EquationTree.prototype.forEach = function(callback) {
	callback(this.datum);

	if (this.left) {
		this.left.forEach(callback);
	}

	if (this.right) {
		this.right.forEach(callback);
	}
}

/**
 * Determines if two equation trees are deeply equivalent
 * @param other EquationTree to compare to
 */
EquationTree.prototype.equals = function(other) {
	var equals = true;

	if (this.datum !== other.datum) {
		equals = false;
	}

	if (this.left && other.left && !this.left.equals(other.left)) {
		equals = false;
	}

	if (this.right && other.right && !this.right.equals(other.right)) {
		equals = false;
	}

	return equals;
}

/**
 * Turns the Equation to a string
 */
EquationTree.prototype.toString = function() {
	var string = '';
	var isOperation = EquationTree.isOperation(this.datum);

	if (isOperation) {
		string += '(';
	}

	string += this.datum;

	if (this.left) {
		string += ' ' + this.left.toString();
	}

	if (this.right) {
		string += ' ' + this.right.toString();
	}

	if (isOperation) {
		string += ')';
	}

	return string;
}

module.exports = EquationTree;