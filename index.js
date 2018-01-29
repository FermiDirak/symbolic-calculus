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

var eq4 = EquationTree.create('(+ 4 (/ (+ 3 (* 5 (cos 3.14 0))) 9))');

console.log(JSON.stringify(eq4));
console.log(eq4.toString());

console.log(eq4.evaluate());