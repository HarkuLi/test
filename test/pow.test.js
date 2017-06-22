const pow = require('../pow.js').pow;
const assert = require('chai').assert;

describe('test of pow funcion', function(){
    it('int base and power', function(){
        assert(pow(2, 10) === 1024);
    });
    it('float base and int power', function(){
        assert(pow(5.5, 10) === 25329516.211914062, 'test: '+pow(5.5, 10));
    });
});