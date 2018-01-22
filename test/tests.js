var assert = require('assert');

var EquationTree = require('./../EquationTree');

var eq1;
var eq2;
var eq3;

beforeEach(function() {
	eq1 = new EquationTree(EquationTree.operations.add,
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

	eq2 = new EquationTree(EquationTree.operations.add,
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

	eq3 = new EquationTree(EquationTree.operations.add,
		new EquationTree(4),
		new EquationTree(EquationTree.operations.divide,
			new EquationTree(EquationTree.operations.add,
				new EquationTree(3),
				new EquationTree(EquationTree.operations.multiply,
					new EquationTree(5),
					new EquationTree(3)
				)
			),
			new EquationTree(9)
		)
	);
});

describe('EquationTree', function() {
	describe('.equals', function() {
		it('should be true when two trees are deeply equal', function() {
			assert.equal(eq1.equals(eq2), true);
		});

		it('should be false when two trees are not deeply equal', function() {
			assert.equal(eq2.equals(eq3), false);
		});
	});

	describe('.evaluate', function() {
		it('should evaluate a non-symbolic expression', function() {
			assert.equal(eq3.evaluate(), 6);
		})
	});

	describe('.simplifiable', function() {
		it('should identify a simplifiable expression as simplifiable', function() {
			assert.equal(eq1.simplifiable(), true);
		});

		it('should simplify a symbolic expression', function() {
			assert.equal(eq1.simplifiable(), true);
		});
	});
});