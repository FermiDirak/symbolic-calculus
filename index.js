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
					new EquationTree(EquationTree.symbols.x)
				)
			),
			new EquationTree(9)
		)
	);

var eq2 = new EquationTree(
	EquationTree.operations.add,
		new EquationTree(4),
		new EquationTree(EquationTree.operations.divide,
			new EquationTree(EquationTree.operations.add,
				new EquationTree(3),
				new EquationTree(EquationTree.operations.multiply,
					new EquationTree(5),
					new EquationTree(EquationTree.symbols.x)
				)
			),
			new EquationTree(9)
		)
	);

var eq3 = new EquationTree(
	EquationTree.operations.add,
		new EquationTree(4),
		new EquationTree(EquationTree.operations.divide,
			new EquationTree(EquationTree.operations.add,
				new EquationTree(3),
				new EquationTree(EquationTree.operations.multiply,
					new EquationTree(5),
					new EquationTree(EquationTree.symbols.x)
				)
			),
			new EquationTree(7)
		)
	);


console.log('should be true :', eq.equals(eq2));
console.log('should be false:', eq.equals(eq3));

// console.log('equation:', eq.toString());
// console.log('evalulate:', eq.evaluate());