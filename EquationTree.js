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
EquationTree.prototype.operations = {
	multiply: 'x',
	divide: '/',
	add: '+',
	subtract: '-',
	sin: 'sin',
	cos: 'cos',
	tan: 'tan',
}

/**
 * Evalulates the expression
 */
EquationTree.prototype.evaluate =

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

module.exports = EquationTree;