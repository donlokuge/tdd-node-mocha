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