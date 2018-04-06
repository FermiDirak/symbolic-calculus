var assert = require('assert');

var EquationTree = require('./../src/EquationTree');

var eq1;
var eq2;
var eq3;

beforeEach(function() {
	eq1 = EquationTree.create('(+ 4 (/ (+ 3 (* 5 x)) 9))');
	eq2 = EquationTree.create('(+ 4 (/ (+ 3 (* 5 x)) 9))');
	eq3 = EquationTree.create('(+ 4 (/ (+ 3 (* 5 3)) 9))');
});


describe('EquationTree', function() {
	describe('.create', function() {
		it('should create a tree from an expression', function() {
			//creating a tree by hand
			var comparisonTree = new EquationTree(EquationTree.operations.add,
				new EquationTree(4),
				new EquationTree(EquationTree.operations.divide,
					new EquationTree(EquationTree.operations.add,
						new EquationTree(3),
						new EquationTree(EquationTree.operations.multiply,
							new EquationTree(5),
							new EquationTree(EquationTree.symbols.x),
						),
					),
					new EquationTree(9),
				),
			);

			assert.equal(comparisonTree.equals(eq1), true)
		});
	});


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

		it('should identify a long non-symbolic expression as simplifiable', function() {
			assert.equal(eq3.simplifiable(), true);
		});

		it('should identify a short non-symbolic expression as simplifiable', function() {
			assert.equal(eq3.simplifiable(), true);
		});
	});


	describe('.forEach', function() {
		it('should iterate over all elements in a EquationTree', function() {
			var actual = [];
			var expected = [ '+', 4, '/', '+', 3, '*', 5, 'x', 9 ];
			eq1.forEach(function(x) {
				actual.push(x);
			});
			assert.deepEqual(actual, expected);
		});
	});

});