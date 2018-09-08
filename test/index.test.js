// var assert = require('assert');

// var EquationTree = require('./../');

// var eq1;
// var eq2;
// var eq3;

// beforeEach(function() {
//   eq1 = EquationTree.create('(+ 4 (/ (+ 3 (* 5 x)) 9))');
//   eq2 = EquationTree.create('(+ 4 (/ (+ 3 (* 5 x)) 9))');
//   eq3 = EquationTree.create('(+ 4 (/ (+ 3 (* 5 3)) 9))');
// });


// describe('EquationTree', function() {
//   describe('.create', function() {
//     it('should create a tree from an expression', function() {
//       //creating a tree by hand
//       var comparisonTree = new EquationTree(EquationTree.operations.add,
//         new EquationTree(4),
//         new EquationTree(EquationTree.operations.divide,
//           new EquationTree(EquationTree.operations.add,
//             new EquationTree(3),
//             new EquationTree(EquationTree.operations.multiply,
//               new EquationTree(5),
//               new EquationTree(EquationTree.symbols.x),
//             ),
//           ),
//           new EquationTree(9),
//         ),
//       );

//       assert.equal(comparisonTree.equals(eq1), true)
//     });
//   });


//   describe('.equals', function() {
//     it('should be true when two trees are deeply equal', function() {
//       assert.equal(eq1.equals(eq2), true);
//     });

//     it('should be false when two trees are not deeply equal', function() {
//       assert.equal(eq2.equals(eq3), false);
//     });
//   });


//   describe('.evaluate', function() {
//     it('should evaluate a non-symbolic expression', function() {
//       assert.equal(eq3.evaluate(), 6);
//     })
//   });


//   describe('.simplifiable', function() {
//     it('should identify a simplifiable expression as simplifiable', function() {
//       assert.equal(eq1.simplifiable(), true);
//     });

//     it('should identify a long non-symbolic expression as simplifiable', function() {
//       assert.equal(eq3.simplifiable(), true);
//     });

//     it('should identify a short non-symbolic expression as simplifiable', function() {
//       assert.equal(eq3.simplifiable(), true);
//     });
//   });


//   describe('.forEach', function() {
//     it('should iterate over all elements in a EquationTree', function() {
//       var actual = [];
//       var expected = [ '+', 4, '/', '+', 3, '*', 5, 'x', 9 ];
//       eq1.forEach(function(x) {
//         actual.push(x);
//       });
//       assert.deepEqual(actual, expected);
//     });
//   });
// });


const SymbolicCalculus = require('./../src');

test('Create Equation using Polish notation', () => {
  // let equationTree1 = SymbolicCalculus.createEquation('(+ 4 (/ (+ 3 (* 5 x)) 9))');
});

describe('isVariable', () => {
  test('isVariable should identify \'x\' as a symbol', () => {
    expect(SymbolicCalculus.isVariable('x')).toBe(true);
  });

  test('isVariable should identify \'y\' as a symbol', () => {
    expect(SymbolicCalculus.isVariable('y')).toBe(true);
  });

  test('isVariable should not identify \'1\' as a symbol', () => {
    expect(SymbolicCalculus.isVariable('1')).toBe(false);
  });

  test('isVariable should not identify \'a\' as a symbol', () => {
    expect(SymbolicCalculus.isVariable('a')).toBe(false);
  });

  test('isVariable should not identify \'\' as a symbol', () => {
    expect(SymbolicCalculus.isVariable('')).toBe(false);
  });
});

describe('isOperator', () => {
  test('isOperator should identify \'*\' as an operator', () => {
    expect(SymbolicCalculus.isOperator('*')).toBe(true);
  });

  test('isOperator should not identify \'x\' as an operator', () => {
    expect(SymbolicCalculus.isOperator('x')).toBe(false);
  });

  test('isOperator should not identify \'y\' as an operator', () => {
    expect(SymbolicCalculus.isOperator('y')).toBe(false);
  });

  test('isOperator should not identify \'a\' as an operator', () => {
    expect(SymbolicCalculus.isOperator('a')).toBe(false);
  });

  test('isOperator should not identify \'\' as aan operator', () => {
    expect(SymbolicCalculus.isOperator('')).toBe(false);
  });
});

test('Hello World', () => {
  expect(1 + 1).toBe(2);
});