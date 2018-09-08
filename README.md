### symbolic-calculus.js

symbolic-calculus.js is a Node.js module for symbolicly evaluating mathematical expressions using calculus.

### Using the module

install the module to use the library in your project

```
npm install symbolic-calculus
// or
yarn add symbolic-calculus
```

Require the symoblic-calculus module and use it evaluate derivatives and integrals of symbolic mathematical expressions.

```
const SymbolicCalculus = require('symbolic-calculus');

let expressionTree = SymbolicCalculus.createExpressionTree('5x + 3');
let derivative = expressionTree.derivate();

console.log(derivative.toString()); => '5'
```

### Dependencies

None :)

### Contributing

We are currently looking for contributors. If you want to help out, check out https://github.com/fermidirak/symbolic-calculus and look for any tags labeled `help wanted`. This is a great way to get started with open source.

#####To begin contributing:

Fork the project (https://github.com/fermidirak/symbolic-calculus/fork)
Create your feature branch (git checkout -b feature/fooBar)
Commit your changes (git commit -am 'Add some fooBar')
Push to the branch (git push origin feature/fooBar)
Create a new Pull Request

### Testing

symbolic-calculus.js uses mocha for testing. Tests can be found in `test/index.js`. To test, use `npm run test` or `yarn test`

### Credits

FermiDirak - Project owner and maintainer

If you want to become a contributor, please see https://github.com/fermidirak/symbolic-calculus/issues

### License

MIT License

Copyright (c) 2018 Bryan Manuele.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.