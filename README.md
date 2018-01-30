## Test driven development

A methodology for writing the tests first for a given module and for the actual implementation afterward
1. writing failing tests
2. writing code that satisfies our tests
3. refactor.

Chai Assertion doc : (http://chaijs.com/guide/styles/#assert)

First, let's create a new module:

```
npm init -y
```

Install dependencies
```
npm install mocha chai --save-dev
```

Update the package json

```
"scripts": {
  "test": "mocha **/**.spec.js"
},
```

create user.js and user.spec.js

in user.spec.js

```
'use strict';

const USER = require('./user');

// BDD style (expect or should to create a assert statement)
// we use expect for now
const expect = require('chai').expect;


describe('USER Modue', () => {
    describe('up function', () => {

        const usersUpResult = USER.up();
        
        it('should be a function', () => {
            expect(USER.up).to.be.a('function');
        });

        it('should return a Promise', () => {            
            expect(usersUpResult.then).to.be.a('Function')
            expect(usersUpResult.catch).to.be.a('Function')
        });
        
    });
});
```


run Test 
```
npm run test
```

will thow a exception

now fix user.js. In user.js include following


```

function up() {
    console.log('up is running');

    return new Promise((res,rej)=>{
        res();
    })
}


function down() {
    console.log('down running');
}

// es6 syntax  { up, down } =  { up : up , down: down }
module.exports = { up, down }

```


