var EquationTree = require('./EquationTree.js');

var i = 0;

var eq = new EquationTree(
	EquationTree.operations.add,
		new EquationTree(4),
		new EquationTree(EquationTree.operations.divide,
			new EquationTree(EquationTree.operations.add,
				new EquationTree(3),
				new EquationTree(EquationTree.operations.multiply,
					new EquationTree(5),
					new EquationTree(2)
				)
			),
			new EquationTree(9)
		)
	);

console.log(eq)
console.log(eq.toString());