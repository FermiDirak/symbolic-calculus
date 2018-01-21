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
	multiply: 'x',
	divide: '/',
	add: '+',
	subtract: '-',
	sin: 'sin',
	cos: 'cos',
	tan: 'tan',
}

/**
 * Parses an expression tree and turns it into an equation tree
 */
EquationTree.create = function(equationString) {
	//@TODO: implement equation parsing

	return new EquationTree(this.operations.multiply, 3, 4);
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
 * Evalulates the EquationTree to a value
 */
EquationTree.prototype.evaluate = function () {

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
 * Turns the Equation to a string
 */
EquationTree.prototype.toString = function() {
	var string = '';
	var isOperation = EquationTree.isOperation(this.datum);

	console.log(isOperation);

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